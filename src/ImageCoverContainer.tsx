import axios from "axios";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import BookImage from "./BookImage";
import loader from './loader.json';
import headers from './headers';

interface ImageCoverContainerProps {
    mainCharacterAnimal: string,
    storyLocation: string
}

const ImageCoverContainer = (props: ImageCoverContainerProps) => {
    const {mainCharacterAnimal, storyLocation} = props;
    const [coverImage, setCoverImage] = useState();

    const imageParams = {
        prompt: `${mainCharacterAnimal} in ${storyLocation} as drawing art for kids`,
        model: 'image-alpha-001'
    };

    useEffect(() => {
        axios.post('https://api.openai.com/v1/images/generations', imageParams, { headers: headers })
            .then(response => {
                console.log(response.data);
                setCoverImage(response.data.data[0].url);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    return (
        <>
            {
                coverImage ? <BookImage bookImageUrl={coverImage} imageText={"sdsds"} isCoverImage /> :
                    <Lottie animationData={loader} loop={true} />
            }
        </>
    )
}

export default ImageCoverContainer;