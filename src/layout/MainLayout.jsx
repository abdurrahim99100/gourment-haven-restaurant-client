import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../pages/shared/NavBar';
import Footer from '../pages/shared/Footer';

const MainLayout = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('sign-in') || location.pathname.includes('sign-up');
    return (
        <div>
            {noHeaderFooter || <NavBar />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default MainLayout;