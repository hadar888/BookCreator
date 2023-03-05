import axios from "axios";
import headers from "./headers";
import { StoryPart } from "./models/Story";

const sumurizeLabel = "Image: ";

export function createStory(kidAge: number, mainCharacterAnimal: string, mainCharacterName: string,
    storyLocation: string, moral: string, extraMoral: string): StoryPart[] {

    const stroyReq =
        `Write story for ${kidAge} years old kids, 
        The main character is ${mainCharacterAnimal},
        his name is ${mainCharacterName}, 
        the story is occurs in ${storyLocation},
        and the morals of the story are ${moral} and ${extraMoral}.
        The story must have twist.
        After each sentence start with the label "${sumurizeLabel}",
        sumerzite it with general description without names for image.
        Dont start new line before image description part.
        Only after the image description part start new line.`;

    const GPT3params = {
        prompt: stroyReq,
        temperature: 0.7,
        max_tokens: 28, //2028
    };

    const storyApi = 'https://api.openai.com/v1/engines/text-ada-001/completions'
    //'https://api.openai.com/v1/engines/text-davinci-003/completions';

    return getStoryParts(`
    Once upon a time, there was a small, white rabbit named Dan. He lived on a lonely island with his parents and siblings. Dan was very curious and always wanted to explore the world around him. One day, Dan decided to take a journey to explore the island. He asked his parents for permission but they refused, telling him it was too dangerous. Dan, however, was determined to go and did not listen to his parents. Image:  A white rabbit in a small boat, sailing towards the horizon.

    Dan packed some food and set off in a small boat. He sailed for what felt like days, until he finally reached the shore of the island. There, Dan found a mysterious looking cave. He decided to explore it and ventured inside. Image:  A small rabbit standing in front of a dark cave, holding a lantern.

    As Dan walked further into the cave, he heard a strange voice. It was a magical tree spirit who was asking for his help. She told Dan that the island was cursed and she needed his help to break the curse. Dan agreed to help and was given a magical necklace. Image:  A white rabbit standing in front of a glowing tree spirit, with a magical necklace in his hand.

    Dan set off on his journey to break the curse. He faced many obstacles along the way, including a hungry dragon, a fierce storm and a mysterious fog. Finally, after much effort, Dan was able to break the curse and the island was saved. Image:  A white rabbit standing in front of a golden castle, with a magical necklace around his neck.

    The islanders were very thankful and rewarded Dan with a new boat. Dan was so happy that he returned home to his parents and thanked them for their advice. Dan realized that it was important to listen to his heart, but also to respect his parents. Image:  A white rabbit standing in front of his parents, with a new boat in his hands.`);
    // axios.post(storyApi, GPT3params,
    //     { headers: headers })
    //     .then(response => {
    //         console.log(response.data.choices[0].text);
    //         return response.data.choices[0].text;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //         return error;
    //     });
    return [{
        text: '',
        image: ''
    }];
};

const fetchImage = (imageDescription: string) => {
    const imageParams = {
        prompt: `${imageDescription} as illustration of children's books`,
        model: 'image-alpha-001',
        size: '128x128',
        n: 1,
    };

    //const response = await axios.post('https://api.openai.com/v1/images/generations', imageParams, { headers: headers })
    const response = {data: [{url: 'https://www.eckersleys.com.au/media/wysiwyg/blog/Projects/Images/How_to_draw/How_to_draw_dog_colour_Preview.jpg'}]}
    return response.data[0].url;
}

function getStoryParts(story: string): StoryPart[] {
    const storyParts = story.split("\n").filter((str) => str !== '');
    const storyPartsWithImages = storyParts.map((storyPart: string) => {
        const imageIndex = storyPart.indexOf(sumurizeLabel);
        const text = storyPart.substring(0, imageIndex).replace(/\s+/g, " ");
        const imageDescription = storyPart.substring(imageIndex + sumurizeLabel.length, storyPart.length);
        const image = fetchImage(imageDescription)
        return {
            text,
            image
        };
    })
    console.log("storyPartsWithImages: ", storyPartsWithImages);
    return storyPartsWithImages;
}