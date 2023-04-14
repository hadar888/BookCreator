import { Grid, MenuItem, Select, TextField } from "@mui/material";

const animalesOptions = ["Dog", "Cat", "Bear", "Elephant", "Monkey", "Lion", "Rabbit", "Mouse", "Duck",
    "Frog", "Bird", "Fish", "Pig", "Horse", "Snake", "Turtle", "Wolf", "Fox", "Giraffe", "Kangaroo"];

const placesOptions = ["Forest", "Jungle", "Ocean", "Castle", "Farm", "Zoo", "Beach", "Park", "Desert",
    "Mountains", "City", "Space", "Underwater", "Island", "School", "Circus", "Fairyland", "Enchanted forest",
    "Woods", "Garden"];

const moralsOptions = ["Treat others how you want to be treated", "Honesty is the best policy",
    "Kindness goes a long way", "Never give up on your dreams", "Actions speak louder than words",
    "Good things come to those who wait", "You reap what you sow", "Be true to yourself",
    "Sharing is caring", "Beauty is only skin deep", "Forgive and forget", "Listen to your elders",
    "Hard work pays off", "Friends come in all shapes and sizes", "Practice makes perfect",
    "The journey is often more important than the destination", "You can't please everyone",
    "Believe in yourself", "Never stop learning", "Don't judge a book by its cover"];

interface StoryItemsSelectProps {
    kidAge: number,
    setKidAge: (value: number) => void,
    mainCharacterAnimal: string,
    setMainCharacterAnimal: (value: string) => void,
    mainCharacterName: string,
    setMainCharacterName: (value: string) => void,
    storyLocation: string,
    setStoryLocation: (value: string) => void,
    moral: string,
    setMoral: (value: string) => void,
    extraMoral: string,
    setExtraMoral: (value: string) => void,

}

const StoryItemsSelect = (props: StoryItemsSelectProps) => {
    const { kidAge, setKidAge, mainCharacterAnimal, setMainCharacterAnimal,
        mainCharacterName, setMainCharacterName, storyLocation, setStoryLocation, moral, setMoral,
        extraMoral, setExtraMoral } = props;

    const changeKidAgeHandle = (event: any) => {
        setKidAge(event.target.value);
    };

    const changeMainCharacterAnimalHandle = (event: any) => {
        setMainCharacterAnimal(event.target.value);
    };

    const changeMainCharacterNameHandle = (event: any) => {
        setMainCharacterName(event.target.value);
    };

    const changeStoryLocationHandle = (event: any) => {
        setStoryLocation(event.target.value);
    };

    const changeMoralHandle = (event: any) => {
        setMoral(event.target.value);
    };

    const changeExtraMoralHandle = (event: any) => {
        setExtraMoral(event.target.value);
    };

    return (
        <>
            <Grid container direction="column" alignItems="baseline" spacing={3}>
                <Grid item>
                    <Grid container direction="row" alignItems="center" spacing={3}>
                        <Grid item>
                            <TextField
                                value={kidAge}
                                onChange={changeKidAgeHandle}
                                label="Kid age"
                                type="number"
                                inputProps={{ min: 3, max: 8 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Select
                                onChange={changeMainCharacterAnimalHandle}
                                value={mainCharacterAnimal}
                            >
                                {
                                    animalesOptions.map((animal) =>
                                        <MenuItem value={animal}>{animal}</MenuItem>
                                    )
                                }
                            </Select>
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                label="Main character name"
                                value={mainCharacterName}
                                onChange={changeMainCharacterNameHandle}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="row" alignItems="center" spacing={3}>
                        <Grid item>
                            <Select
                                onChange={changeStoryLocationHandle}
                                value={storyLocation}
                            >
                                {
                                    placesOptions.map((place) =>
                                        <MenuItem value={place}>{place}</MenuItem>
                                    )
                                }
                            </Select>
                        </Grid>
                        <Grid item>
                            <Select
                                onChange={changeMoralHandle}
                                value={moral}
                            >
                                {
                                    moralsOptions.filter((moral) => extraMoral !== moral)
                                    .map((moral) =>
                                        <MenuItem value={moral}>{moral}</MenuItem>
                                    )
                                }
                            </Select>
                        </Grid>
                        <Grid item>
                            <Select
                                onChange={changeExtraMoralHandle}
                                value={extraMoral}
                            >
                                {
                                    moralsOptions.filter((extraMoral) => extraMoral !== moral)
                                    .map((extraMoral) =>
                                        <MenuItem value={extraMoral}>{extraMoral}</MenuItem>
                                    )
                                }
                            </Select>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default StoryItemsSelect;