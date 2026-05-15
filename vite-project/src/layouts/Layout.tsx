import { useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import type { LayoutProps } from '../types/AnimeInterface';

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    const isAuthPage = ["/signup", "/"].includes(location.pathname);

    return (
        <div className="flex flex-col min-h-screen">
            {!isAuthPage && <Header />}
            <main className="grow">
                {children}
            </main>

            {!isAuthPage && <Footer />}
        </div>
    );
};

export default Layout;