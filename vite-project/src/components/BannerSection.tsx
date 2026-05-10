import { useNavigate } from 'react-router-dom';
import { AnimeTitle } from './title';
import { useRandomAnime } from '../hooks/useRndomAnime';

const BannerSection = () => {
    const navigate = useNavigate();
    const { anime, error, isLoading } = useRandomAnime();
    if (isLoading || error || !anime) return <div className="h-75 bg-gray-900 animate-pulse" />;

    const synopsis = anime.synopsis || "";
    const displayContent = synopsis.length > 150 ? synopsis.slice(0, 150) + "..." : synopsis;
    const title = anime.title_japanese || anime.title || "Untitled Anime";
    const imageUrl = anime.images?.jpg?.large_image_url;

    return (
        <div
            className="relative w-full h-75 cursor-pointer group overflow-hidden"
            onClick={() => navigate(`/detail/${anime.mal_id}`)}
        >
            {imageUrl && (
                <img
                    src={imageUrl}
                    className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
                    alt={title}
                />)}
            <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent" />
            <div className="absolute bottom-16 left-10 max-w-3xl px-4">
                <AnimeTitle
                    title={title}
                    className={"text-4xl md:text-5xl font-bold mb-4 text-gray-200 hover:text-black"} />
                {synopsis && (<p className="text-gray-200 hover:text-black text-base md:text-lg leading-relaxed">
                    {displayContent}
                </p>)}
            </div>
        </div>
    );
};

export default BannerSection;