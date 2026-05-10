import { useNavigate } from "react-router-dom";

const MyPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("ログアウトしました");
        navigate('/signup');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 md:p-10 text-gray-800">
            {/* ヘッダー：タイトルと登録日 */}
            <div className="my-page-base">
                <h1 className="text-4xl font-light">アカウント</h1>
                <p className="text-gray-500 text-sm">メンバー登録年月日：2023年11月29日</p>
            </div>

            <div className="my-page-base">
                <div className="w-full md:w-1/3 mb-2">
                    <h2 className="text-gray-500 font-bold text-sm uppercase">メンバーシップとお支払い</h2>
                </div>
                <div className="flex-1 space-y-1">
                    <p>名前：user</p>
                    <p className="text-gray-600 text-sm">メールアドレス: aaaaaaaaaa@.com</p>
                    <p className="text-gray-600 text-sm">電話番号: 000-0000-0000</p>
                </div>
            </div>

            <div className="my-page-base">
                <div className="w-full md:w-1/3 mb-2">
                    <h2 className="text-gray-500 font-bold text-sm uppercase">プランの詳細情報</h2>
                </div>
                <div className="flex-1 flex justify-between items-center">
                    <p>スタンダード</p>
                </div>
            </div>

            <div className="my-page-base">
                <div className="w-full md:w-1/3 mb-2">
                    <h2 className="text-gray-500 font-bold text-sm uppercase">セキュリティとプライバシー</h2>
                </div>
                <div className="flex-1 text-gray-600 text-sm leading-relaxed">
                    このアカウントに最近アクセスしたデバイスの管理や、パスワードの更新等を行います。
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <button
                    className=" text-blue-500 hover:bg-red-50 transition-colors text-sm font-bold"
                    onClick={handleLogout}
                >
                    ログアウト
                </button>
            </div>
        </div>
    );
};

export default MyPage;