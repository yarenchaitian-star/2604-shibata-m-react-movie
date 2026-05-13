interface TitleProps {
    title: string;
    className?: string;
}
export const Title = ({ title, className }:TitleProps) => {
    return (
        <h1 className={`text-3xl md:text-5xl  my-4 ${className}`}>
            {title}
        </h1>
    )
}
