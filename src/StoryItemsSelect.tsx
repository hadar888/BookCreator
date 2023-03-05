import { Grid, MenuItem, Select, TextField } from "@mui/material";

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
            <Grid container direction="column" alignItems="center">
                <Grid item container direction="column" alignItems="center">
                    <Grid item>
                        <TextField
                            value={kidAge}
                            onChange={changeKidAgeHandle}
                            label="Kid age"
                            type="number"
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
                            <MenuItem value={"Turtle"}>Turtle</MenuItem>
                            <MenuItem value={"Lion"}>Lion</MenuItem>
                            <MenuItem value={"Rabit"}>Rabit</MenuItem>
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

                <Grid item container direction="column" alignItems="center">
                    <Grid item>
                        <Select
                            onChange={changeStoryLocationHandle}
                            value={storyLocation}
                        >
                            <MenuItem value={"Space"}>Space</MenuItem>
                            <MenuItem value={"Forest"}>Forest</MenuItem>
                            <MenuItem value={"A lone island"}>A lone island</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item>
                        <Select
                            onChange={changeMoralHandle}
                            value={moral}
                        >
                            <MenuItem value={"Friendship"}>Friendship</MenuItem>
                            <MenuItem value={"Respect your perents"}>Respect your perents</MenuItem>
                            <MenuItem value={"Lisen to your heart"}>Lisen to your heart</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item>
                        <Select
                            onChange={changeExtraMoralHandle}
                            value={extraMoral}
                        >
                            <MenuItem value={"Friendship"}>Friendship</MenuItem>
                            <MenuItem value={"Respect your perents"}>Respect your perents</MenuItem>
                            <MenuItem value={"Lisen to your heart"}>Lisen to your heart</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default StoryItemsSelect;