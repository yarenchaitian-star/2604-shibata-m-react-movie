interface DetailPictureProps {
    imageUrl: string;
    title: string;
}
export const DetailPicture = ({ imageUrl, title }: DetailPictureProps) => {
    return (<div className="pt-20">
        <img
            src={imageUrl}
            className="w-75 h-112 object-cover"
            alt={title}
        />
    </div>
    )
}