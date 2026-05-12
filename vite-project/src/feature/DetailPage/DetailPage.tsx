import { useParams } from 'react-router-dom';
import { DetailView } from './Component/DetailView';
import { useFetchAnime } from '../../hooks/useFetchAnime';

const DetailPage = () => {
    const { id } = useParams();
    const url=`https://api.jikan.moe/v4/anime/${id}`
    const { anime, error, isLoading} = useFetchAnime(url)
    if (isLoading) return <div>読み込み中...</div>;
    if (error) return <div>読み込みエラー</div>;

    return (
        <DetailView anime={anime} />
    );
};

export default DetailPage;