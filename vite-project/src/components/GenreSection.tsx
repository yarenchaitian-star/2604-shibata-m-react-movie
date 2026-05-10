import { useNavigate } from 'react-router-dom';
import { useGenreAnime } from '../hooks/useGenreAnime';

interface GenreSectionProps {
    genreId: number;
    genreName: string;
    isLarge?: boolean;
}

const GenreSection = ({ genreId, genreName, isLarge = false }: GenreSectionProps) => {
    const navigate = useNavigate();
    const { items, error, isLoading } = useGenreAnime(genreId);

    if (error) return <div className=" py-10 px-8">取得失敗: {genreName}</div>;
    if (isLoading || error || !items) return <div className="h-48 bg-gray-900 animate-pulse" />;

    return (
        <section>
            <h2 className="flex text-lg py-6 justify-center">
                {genreName}
            </h2>
            <div className="flex overflow-x-auto gap-4 pb-6 ">
                {items.map((anime: any) => (
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
