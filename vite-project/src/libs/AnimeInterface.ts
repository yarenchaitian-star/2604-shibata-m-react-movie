export interface AnimeInterface {
    mal_id?: number;
    name?:string;
    images?: {
        jpg?: {
            large_image_url?: string;
        };
    };
    title?: string;
    genres?: {
        mal_id?: number;
        name?: string;
    }[];
}