import React, { useMemo, useState } from 'react';
import './App.css';
import StoryContainer from './StoryContainer';
import StoryItemsSelect from './StoryItemsSelect';
import { Button, Grid } from '@mui/material';

function App() {
  const [kidAge, setKidAge] = useState<number>(5);
  const [mainCharacterAnimal, setMainCharacterAnimal] = useState<string>('Dog');
  const [mainCharacterName, setMainCharacterName] = useState<string>('');
  const [storyLocation, setStoryLocation] = useState<string>('Forest');
  const [moral, setMoral] = useState<string>('Treat others how you want to be treated');
  const [extraMoral, setExtraMoral] = useState<string>('Honesty is the best policy');
  const [isCreateStoryClicked, setIsCreateStoryClicked] = useState<boolean>(false);

  const isStoryOptionsValid = useMemo(()=> {
    return moral !== extraMoral;
  },[moral, extraMoral]);

  const handleGenrateStoryClick = () => {
    setIsCreateStoryClicked(!isCreateStoryClicked);
  };

  return (
    <Grid container direction="column" spacing={2} className="App">
      {!isCreateStoryClicked &&
        <Grid item>
          <StoryItemsSelect
            kidAge={kidAge} setKidAge={setKidAge}
            mainCharacterAnimal={mainCharacterAnimal} setMainCharacterAnimal={setMainCharacterAnimal}
            mainCharacterName={mainCharacterName} setMainCharacterName={setMainCharacterName}
            storyLocation={storyLocation} setStoryLocation={setStoryLocation}
            moral={moral} setMoral={setMoral}
            extraMoral={extraMoral} setExtraMoral={setExtraMoral}
          />
        </Grid>
      }
      <Grid item>
        <Button variant="contained" color="primary" disabled={!isStoryOptionsValid} onClick={handleGenrateStoryClick}>
          {isCreateStoryClicked ? "Edit" : "Create"}
        </Button>
      </Grid>
      {isCreateStoryClicked &&
        <Grid item>
          <StoryContainer
            kidAge={kidAge}
            mainCharacterAnimal={mainCharacterAnimal}
            mainCharacterName={mainCharacterName}
            storyLocation={storyLocation}
            moral={moral}
            extraMoral={extraMoral}
          />
        </Grid>
      }
    </Grid>
  );
}

export default App;
