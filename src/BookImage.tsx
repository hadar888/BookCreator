import './App.css';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

interface BookImagesCreatorProps {
    isCoverImage?: boolean;
    bookImageUrl: string,
    imageText: string;
    //changeImgeCallBack: (imageDescription: string) => void;
}

const BookImage = (props: BookImagesCreatorProps) => {
    const { isCoverImage, bookImageUrl, imageText } = props;

    const onChangeImageClick = () => {
        // changeImgeCallBack(imageText);
    }

    return (
        <>
            <Typography>{imageText}</Typography>
            <img
                src={bookImageUrl}
                className={isCoverImage ? 'Book-cover' : "Book-Image"}
                alt='book pic'
            />
            <Button variant="contained" onClick={onChangeImageClick}>Change image</Button>
        </>
    );
}

export default BookImage;