import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data.data);

export const useRandomAnime = () => {
    const { data, error, isLoading } = useSWR(`https://api.jikan.moe/v4/random/anime`, fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return {
        anime: data,
        error,
        isLoading
    };
};