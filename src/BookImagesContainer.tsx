import BookImage from "./BookImage";
import { StoryPart } from "./models/Story";

interface BookImagesContainerProps {
    storyParts: StoryPart[];
}

const BookImagesContainer = (props: BookImagesContainerProps) => {
    const { storyParts } = props;

    return (
        <>
            {
                storyParts.map((storyPart) => {
                    return (
                        <BookImage
                            bookImageUrl={storyPart.image}
                            imageText={storyPart.text}
                        />
                    )
                })
            }
        </>
    );
}

export default BookImagesContainer;