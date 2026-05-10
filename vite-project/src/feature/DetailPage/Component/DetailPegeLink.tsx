interface DetailPageLinkProps {
    url: string | undefined;
}
export const DetailPageLink = ({ url }: DetailPageLinkProps) => {
    if (!url) return null;
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-blue-500 "
        >
            ホームページ
        </a>
    )
}
