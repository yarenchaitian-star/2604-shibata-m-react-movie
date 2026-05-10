import { useAnimeGenres } from '../hooks/useAnimeGenres';

const GenreListPage = () => {
    const { genres, error, loading } = useAnimeGenres();

    if (loading) return <div>読み込み中...</div>;
    if (error) return <div>読み込みエラー</div>;

    return (
        <div className="flex flex-col items-center">
            <p>ジャンル一覧</p>
            {genres?.map((genre: any) => (
                <div key={genre.mal_id}>
                    {genre.name}
                </div>
            ))}
        </div>
    );
};
export default GenreListPage;