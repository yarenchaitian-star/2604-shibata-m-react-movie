import type { TitleProps } from "../types/AnimeInterface"
export const Title = ({ title, className }:TitleProps) => {
    return (
        <h1 className={`text-3xl md:text-5xl  my-4 ${className}`}>
            {title}
        </h1>
    )
}
