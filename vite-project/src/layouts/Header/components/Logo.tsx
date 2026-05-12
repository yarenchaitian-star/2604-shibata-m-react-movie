import { Link } from 'react-router-dom';
export const Logo = () => {
    return (
        <Link to="/list">
            <img
                src='/public/logo.png'
                alt="Logo"
                className="h-10 w-auto object-contain" />
        </Link>
    )
}