import React, { useState } from 'react';
import './App.css';
import StoryContainer from './StoryContainer';
import StoryItemsSelect from './StoryItemsSelect';
import { Button } from '@mui/material';

function App() {
  const [kidAge, setKidAge] = useState<number>(5);
  const [mainCharacterAnimal, setMainCharacterAnimal] = useState<string>('Turtle');
  const [mainCharacterName, setMainCharacterName] = useState<string>('Dan');
  const [storyLocation, setStoryLocation] = useState<string>('Space');
  const [moral, setMoral] = useState<string>('Friendship');
  const [extraMoral, setExtraMoral] = useState<string>('Respect your perents');
  const [isCreateStoryClicked, setIsCreateStoryClicked] = useState<boolean>(false);

  const handleGenrateStoryClick = () => {
    setIsCreateStoryClicked(!isCreateStoryClicked);
  };

  return (
    <div className="App">
      {!isCreateStoryClicked &&
        <StoryItemsSelect
          kidAge={kidAge} setKidAge={setKidAge}
          mainCharacterAnimal={mainCharacterAnimal} setMainCharacterAnimal={setMainCharacterAnimal}
          mainCharacterName={mainCharacterName} setMainCharacterName={setMainCharacterName}
          storyLocation={storyLocation} setStoryLocation={setStoryLocation}
          moral={moral} setMoral={setMoral}
          extraMoral={extraMoral} setExtraMoral={setExtraMoral}
        />
      }
      <Button variant="contained" color="primary" onClick={handleGenrateStoryClick}>
        {isCreateStoryClicked ? "Change story" : "Create the story"}
      </Button>
      {isCreateStoryClicked &&
        <StoryContainer
          kidAge={kidAge}
          mainCharacterAnimal={mainCharacterAnimal}
          mainCharacterName={mainCharacterName}
          storyLocation={storyLocation}
          moral={moral}
          extraMoral={extraMoral}
        />
      }
    </div>
  );
}

export default App;
