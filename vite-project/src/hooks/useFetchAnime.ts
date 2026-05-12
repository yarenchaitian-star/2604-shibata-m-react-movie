import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then(res => res.data.data);

export const useFetchAnime=(url:string)=>{
    const {data,error,isLoading}=useSWR(
        url?url:null,
        fetcher,
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            revalidateIfStale: false
        }
    );
    return {
        anime:data,
        error,
        isLoading
    };
};