import { useParams } from 'react-router-dom';
import { useAnimeDetail } from '../../hooks/useAnimeDetail';
import { DetailView } from './Component/DetailView';

const DetailPage = () => {
    const { id } = useParams();
    const { anime, error, loading } = useAnimeDetail(id);
    if (error) return <div className="text-white p-10 text-center">取得失敗</div>;
    if (loading || !anime) return <div className="h-screen bg-black animate-pulse" />;


    return (
        <DetailView anime={anime} />
    );
};

export default DetailPage;