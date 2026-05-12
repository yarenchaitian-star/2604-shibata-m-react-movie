interface DetailGenresProps {
    anime: {
        genres?: {
            mal_id: number;
            name: string;
        }[];
    };
}
export const DetailGenres = ({ anime }: DetailGenresProps) => {
    return (
        <div className="flex flex-col items-center ">
            <span>ジャンル</span>
            <div className="flex flex-row flex-wrap gap-2 my-5">
                {anime.genres?.map((genre: any) => (
                    <span key={genre.mal_id} className="px-3">
                        {genre.name}
                    </span>
                ))}
            </div>
        </div>
    )
}
