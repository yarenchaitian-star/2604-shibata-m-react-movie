import { Link } from 'react-router-dom';
import { Logo } from './components/Logo';
import { MyPageLogo } from './components/myPagelogo';
const Header = () => {
    return (
        <>
            <div className="sticky top-0 z-50 flex items-center justify-between px-2 bg-gray-500">
                <div className='flex items-center gap-5'>
                    <Logo />
                    <span>こんにちはuserさん</span>
                    <Link to="/genres">
                        ジャンル一覧
                    </Link>
                </div>
                <MyPageLogo />
            </div>
        </>
    )
}
export default Header;