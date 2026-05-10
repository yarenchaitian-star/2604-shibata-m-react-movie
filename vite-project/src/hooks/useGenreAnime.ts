import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data.data);
export const useGenreAnime = (genreId: number) => {
    const { data, error, isLoading } = useSWR(
        `https://api.jikan.moe/v4/anime?genres=${genreId}`,
        fetcher,
        { revalidateOnFocus: false } // ジャンル一覧は頻繁に変わらないので
    );
    return { items: data, error, isLoading };
};