import { useNavigate } from 'react-router-dom';
import { Title } from '../../../components/title';
import { useFetchAnime } from '../../../hooks/useFetchAnime';
import { Synopsis } from '../../../components/Synopsis';

const BannerSection = () => {
    const navigate = useNavigate();
    const {anime,error,isLoading}=useFetchAnime("https://api.jikan.moe/v4/random/anime")
    if (isLoading) return <div>読み込み中...</div>;
    if (error) return <div>読み込みエラー</div>;

    const synopsis = anime.synopsis || "";
    const displayContent = synopsis.length > 150 ? synopsis.slice(0, 150) + "..." : synopsis;

    return (
        <div
            className="relative w-full h-75 cursor-pointer group overflow-hidden"
            onClick={() => navigate(`/detail/${anime.mal_id}`)}
        >
            {anime.images?.jpg?.large_image_url && (
                <img
                    src={anime.images?.jpg?.large_image_url}
                    className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
                    alt={anime.title_japanese || anime.title}
                />)}
            <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent" />
            <div className="absolute bottom-16 left-10 max-w-3xl px-4">
                <Title
                    title={anime.title_japanese || anime.title}
                    className={"text-4xl md:text-5xl font-bold mb-4 text-gray-200 group-hover:text-black"} />
                <Synopsis
                text={displayContent}
                className="text-gray-200 group-hover:text-black text-base md:text-lg leading-relaxed"/>
            </div>
        </div>
    );
};
export default BannerSection;