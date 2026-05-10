import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data.data);

export const useAnimeGenres = () => {
    const { data, error, isLoading } = useSWR(
        'https://api.jikan.moe/v4/genres/anime',
        fetcher,
        {
            revalidateOnFocus: false,
            shouldRetryOnError: false
        }
    );

    return {
        genres: data,
        error,
        loading: isLoading
    };
}