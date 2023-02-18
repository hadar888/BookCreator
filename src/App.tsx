import React, { useEffect, useState } from 'react';
import loader from './loader.json';
import './App.css';
import axios from 'axios';
import headers from './headers';
import BookImage from './BookImage';
import Lottie from 'lottie-react';
import ImageCoverContainer from './ImageCoverContainer';
import BookImagesContainer from './BookImagesContainer';

const mainCharacterAnimal = 'turtle';
const mainCharacterName = 'yosi';
const kidAge = 5;
const storyLocation = "space";
const moral = "frienship";
const extra_moral = 'be a good boy';

const sumurizeLabel = "Summary of the Story: \n";
const sumrizePointLabel = "* ";

const stroyReq = `write a story for ${kidAge} years old kids, 
where the main character is ${mainCharacterAnimal}
and his name is ${mainCharacterName}, 
the story is occurs in ${storyLocation},
and the moral of the story is ${moral} and ${extra_moral}.
the story must have twist.
At the end sumrize the each line of the story in list of points after label of "${sumurizeLabel},
each point in sparte line with ${sumrizePointLabel} at the start of the line,
each point should stand alone and be able to desribe in one image,
any line should not include names"`;

const GPT3params = {
  prompt: stroyReq,
  temperature: 0.5,
  max_tokens: 2028,
};


const imageReq = `${mainCharacterAnimal} in ${storyLocation} as drawing art for kids`

const imageParams = {
  prompt: imageReq,
  model: 'image-alpha-001'
};

const genrateImage = () => {
  axios.post('https://api.openai.com/v1/images/generations', imageParams, { headers: headers })
    .then(response => {
      console.log(response.data);
      return response.data.data[0].url;
    })
    .catch(error => {
      console.log(error);
    });
}

function App() {
  const [coverImage, setCoverImage] = useState();
  const [story, setStory] = useState("");
  const [storyPoints, setStoryPoints] = useState<string[]>([]);

  useEffect(() => {
    axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', GPT3params,
      { headers: headers })
      .then(response => {
        setStory(response.data.choices[0].text);
        console.log(response.data.choices[0].text);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (story !== "") {
      const storySumIndex = story.indexOf(sumurizeLabel);
      const summary = story.substring(storySumIndex + sumurizeLabel.length);
      const storyPoints = summary.split(sumrizePointLabel);
      setStoryPoints(storyPoints);
      console.log("storyPoints: ", storyPoints);
    }
  }, [story])

  return (
    <div className="App">
      <header className="App-header">
        <ImageCoverContainer mainCharacterAnimal={mainCharacterAnimal} storyLocation={storyLocation}/>
        <BookImagesContainer storyPoints={storyPoints}/>
      </header>
    </div>
  );
}

export default App;
