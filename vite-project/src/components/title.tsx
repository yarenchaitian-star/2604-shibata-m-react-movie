interface AnimeTitleProps {
    title: string;
    className?: string;
}
export const AnimeTitle = ({ title, className }: AnimeTitleProps) => {
    return (
        <h1 className={`text-3xl md:text-5xl  my-4 ${className}`}>
            {title}
        </h1>
    )
}
