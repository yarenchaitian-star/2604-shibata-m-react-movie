import { useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    // ヘッダーとフッターを表示しないパス
    const isAuthPage = ["/signup", "/"].includes(location.pathname);

    return (
        <div className="flex flex-col min-h-screen">
            {!isAuthPage && <Header />}

            {/* メインコンテンツエリア：min-h-screenによりフッターを下に押し下げる */}
            <main className="flex-grow">
                {children}
            </main>

            {!isAuthPage && <Footer />}
        </div>
    );
};

export default Layout;