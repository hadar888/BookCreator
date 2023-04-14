import axios from "axios";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import BookImage from "./BookImage";
import loader from './loader.json';
import headers from './headers';
import { Grid, IconButton } from "@mui/material";
import { NavigateNext } from '@mui/icons-material';

interface ImageCoverContainerProps {
    mainCharacterAnimal: string,
    storyLocation: string
}

const ImageCoverContainer = (props: ImageCoverContainerProps) => {
    const { mainCharacterAnimal, storyLocation } = props;
    const [coverImage, setCoverImage] = useState<string>();

    useEffect(() => {
        const imageParams = {
            prompt: `${mainCharacterAnimal} in ${storyLocation} as drawing art for kids`,
            model: 'image-alpha-001'
        };

        // axios.post('https://api.openai.com/v1/images/generations', imageParams, { headers: headers })
        //     .then(response => {
        //         console.log(response.data);
        //         setCoverImage(response.data.data[0].url);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

        const response = { data: [{ url: 'https://www.eckersleys.com.au/media/wysiwyg/blog/Projects/Images/How_to_draw/How_to_draw_dog_colour_Preview.jpg' }] }
        setCoverImage(response.data[0].url);

    }, [mainCharacterAnimal, storyLocation])

    return (
        <Grid container >
            <Grid item>
                {
                    coverImage ? <BookImage bookImageUrl={coverImage} imageText={"sdsds"} isCoverImage /> :
                        <Lottie animationData={loader} loop={true} />
                }
            </Grid>
            <Grid item>
                <IconButton aria-label="next">
                    <NavigateNext />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default ImageCoverContainer;