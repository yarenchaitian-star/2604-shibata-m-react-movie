interface SynopsisProps {
    text: string | undefined;
    className?:string;
    title?:boolean;
}
export const Synopsis = ({ text ,className,title=false}: SynopsisProps) => {
    return (
        <div className="flex flex-col items-center">
            {title && (
                <h2 className="mb-3 pb-2 text-center">
                    詳細
                </h2>
            )}
            <p className={`flex flex-col leading-relaxed ${className}`}>
                {text || "詳細情報は登録されていません。"}
            </p>
        </div>
    );
};