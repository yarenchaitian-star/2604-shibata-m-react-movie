import { useNavigate } from 'react-router-dom';
import { useFetchAnime } from '../hooks/useFetchAnime';

interface GenreSectionProps {
    genreId: number;
    genreName: string;
    isLarge?: boolean;
    className?:string;
}

const GenreSection = ({ genreId, genreName, isLarge = false ,className }: GenreSectionProps) => {
    const navigate = useNavigate();
    const url=`https://api.jikan.moe/v4/anime?genres=${genreId}`
    const {anime, error, isLoading } = useFetchAnime(url);

    if (isLoading) return <div>読み込み中...</div>;
    if (error) return <div>読み込みエラー</div>;

    return (
        <section className={`${className}`}>
            <h2 className="flex text-lg pt-0 pb-6 justify-center">
                {genreName}
            </h2>
            <div className="flex overflow-x-auto gap-4 pb-6 ">
                {anime.map((anime: any) => (
                    <div
                        key={anime.mal_id}
                        className={`flex-none ${isLarge
                            ? 'w-40 '
                            : 'w-20'} `}
                        onClick={() => navigate(`/detail/${anime.mal_id}`)}
                    >
                        <div className="transition-all duration-500 ease-in-out hover:scale-110 hover:z-10  aspect-3/4 bg-gray-900">
                            <img
                                src={anime.images?.jpg?.large_image_url}
                                className="flex-none w-full h-full object-cover  duration-300 "
                                alt={anime.title}
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default GenreSection;
