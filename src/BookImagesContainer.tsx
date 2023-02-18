import axios from "axios";
import { useEffect, useState } from "react";
import BookImage from "./BookImage";
import headers from "./headers";
import { BookImageInfo } from "./models/Imges";

interface BookImagesContainerProps {
    storyPoints: string[];
}

const BookImagesContainer = (props: BookImagesContainerProps) => {
    const { storyPoints } = props;
    const [storyImages, setStoryImages] = useState<BookImageInfo[]>([]);

    useEffect(() => {
        const storyImagesInitial = [];
        storyPoints.map((storyPoint: string) => {
            const imageParams = {
                prompt: `${storyPoint} as drawing art for kids`,
                model: 'image-alpha-001'
            };

            axios.post('https://api.openai.com/v1/images/generations', imageParams, { headers: headers })
                .then(response => {
                    console.log(response.data);
                    storyImagesInitial.push(response.data.data[0].url);
                })
                .catch(error => {
                    console.log(error);
            });
        });
    }, []);

    return (
        <>
            {
                storyImages.map((storyImage) => {
                    return (
                        <BookImage
                            bookImageUrl={storyImage.imageUrl}
                            imageText={storyImage.description}
                        />
                    )
                })
            }
        </>
    );
}

export default BookImagesContainer;