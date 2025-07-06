import Header from "../../components/organisms/Header/Header";
import Footer from "../../components/organisms/Footer/Footer";
import { Outlet } from "react-router-dom";

const AppTemplate = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default AppTemplate;