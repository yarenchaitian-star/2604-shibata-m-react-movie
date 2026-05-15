import type { DetailPictureProps } from "../../../types/AnimeInterface"
export const DetailPicture = ({ imageUrl, title }: DetailPictureProps) => {
    return (<div className="pt-10">
        <img
            src={imageUrl}
            className="w-75 h-112 object-cover"
            alt={title}
        />
    </div>
    )
}