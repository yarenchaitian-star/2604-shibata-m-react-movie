interface SynopsisProps {
    text: string | undefined;
}
export const Synopsis = ({ text }: SynopsisProps) => {
    return (
        <div className="mb-8 flex flex-col items-center">
            <h2 className="mb-3 pb-2 text-center">
                詳細
            </h2>
            <p className="flex flex-col leading-relaxed">
                {text || "詳細情報は登録されていません。"}
            </p>
        </div>
    );
};