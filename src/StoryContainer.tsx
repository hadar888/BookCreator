import { Grid } from "@mui/material";
import BookImagesContainer from "./BookImagesContainer";
import ImageCoverContainer from "./ImageCoverContainer";
import { createStory } from "./StoryCreate";


interface StoryContainerPros {
    kidAge: number,
    mainCharacterAnimal: string,
    mainCharacterName: string,
    storyLocation: string,
    moral: string,
    extraMoral: string,
}

const StoryContainer = (props: StoryContainerPros) => {
    const { kidAge, mainCharacterAnimal, mainCharacterName, storyLocation, moral, extraMoral } = props;

    const storyParts = createStory(kidAge, mainCharacterAnimal, mainCharacterName, storyLocation, 
        moral, extraMoral);

    return (
        <>
            <Grid container direction="column" alignItems="center">
                <ImageCoverContainer
                    mainCharacterAnimal={mainCharacterAnimal}
                    storyLocation={storyLocation}
                />
                <BookImagesContainer storyParts={storyParts} />
            </Grid>
        </>
    )
};

export default StoryContainer;