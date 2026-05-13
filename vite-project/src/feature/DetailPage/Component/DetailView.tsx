import { Synopsis } from "../../../components/Synopsis";
import { AnimeTitle } from "../../../components/title";
import { DetailGenres } from "./DetailGenres";
import { DetailPageLink } from "./DetailPegeLink";
import { DetailPicture } from "./DetailPicture";
import { ReleaseDate } from "./ReleaseDate";

interface DetailViewProps {
    anime: any; // 必要に応じて詳細な型を定義
}
export const DetailView = ({ anime }: DetailViewProps) => {
    return (
        <div className="flex flex-col justify-center items-center pb-15">
            <DetailPicture
                imageUrl={anime.images?.jpg?.large_image_url}
                title={anime.title} />
            <AnimeTitle
                title={anime.title_japanese || anime.title} />
            <ReleaseDate
                date={(anime.aired?.from)} />
            <Synopsis
                text={anime.synopsis} 
                title={true}
                className="mb-5"/>
            <DetailGenres
                anime={anime} />
            <DetailPageLink
                url={anime.url} />
        </div>
    )
}