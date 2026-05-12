import useSWR from 'swr';
import axios from 'axios';
const fetcher = (url: string) => axios.get(url).then(res => res.data.data);
export const useAnimeDetail = (id: string | undefined) => {
    const { data, error, isLoading } = useSWR(
        id ? `https://api.jikan.moe/v4/anime/${id}` : null,
        fetcher, {
        revalidateOnFocus: false,
        shouldRetryOnError: false
    }
    );
    return {
        anime: data,
        error,
        loading: isLoading
    };
}