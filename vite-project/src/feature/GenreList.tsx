import { useFetchAnime } from '../hooks/useFetchAnime';
import type { GenreListType } from '../types/AnimeInterface';

const GenreListPage = () => {
    const { anime, error, isLoading } = useFetchAnime("https://api.jikan.moe/v4/genres/anime");

    if (isLoading) return <div>読み込み中...</div>;
    if (error) return <div>読み込みエラー</div>;

    return (
        <div className="flex flex-col items-center">
            <p>ジャンル一覧</p>
            {anime?.map((genre:GenreListType) => (
                <div key={genre.mal_id}>
                    {genre.name}
                </div>
            ))}
        </div>
    );
};
export default GenreListPage;