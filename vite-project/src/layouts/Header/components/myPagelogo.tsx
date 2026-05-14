import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export const MyPageLogo = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const handleLogout = () => {
        setIsOpen(false);
        navigate('/signup');
    };
    return (
        <div className='flex items-center relative'>
            < img
                src="/public/myPagelogo.jpeg"
                alt="UserLogo"
                className="h-10  object-contain"
                onClick={() => setIsOpen(!isOpen)} />
            {isOpen && (
                <div className="absolute right-10 top-10 mt-2 w-40 bg-black rounded py-2 z-10 text-white">
                    <Link
                        to="/mypage"
                        className="block px-4 py-2"
                        onClick={() => setIsOpen(false)}
                    >
                        アカウント情報
                    </Link>
                    <button
                        className="w-full text-left px-4 py-2 text-white "
                        onClick={handleLogout}
                    >
                        ログアウト
                    </button>
                </div>
            )}
        </div>
    )
}