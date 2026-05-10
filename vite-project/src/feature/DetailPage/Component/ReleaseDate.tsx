interface ReleasedateProps {
    date: string;
}
export const ReleaseDate = ({ date }: ReleasedateProps) => {
    const formatDate = (dateString: string) => {
        if (!dateString) return "不明";
        const date = new Date(dateString);
        return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    };
    return (
        <p className="mb-4">
            公開日: {formatDate(`${date}`)}
        </p>
    )
}