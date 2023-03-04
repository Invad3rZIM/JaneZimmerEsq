import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AttorneyProfiles from "./attorneyprofiles";
import FirmOverview from "./firmoverview";
import Header from "./header";
import HomePage from "./home";
import NavBar from "./navbar";
import PageNotFound from "./pagenotfound";


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from "./contactform";
import Footer from "./footer";
import { ContactPage } from "./contagepage";
import { PracticeAreas, PracticeArea_Field, specialtiesInclude } from "./practiceAreas/practiceAreas";


function HeaderNavbarWrapper(jsx: JSX.Element, includeContactInfo: boolean = true) {
    return <>
        <Header />
        <NavBar />
        <Row>
            <Col sm={3}><ContactForm includeContactInfo={false} /></Col>
            <Col sm={9}><div style={{ paddingTop: 20 }}>{jsx}</div></Col>
        </Row>
        <Footer />
    </>
}

const router = createBrowserRouter([
    {
        path: "/",
        element: HeaderNavbarWrapper(<HomePage />),
        errorElement: <PageNotFound />,
    },
    {
        path: "/Attorney-Profiles",
        element: HeaderNavbarWrapper(<AttorneyProfiles />),
        errorElement: <PageNotFound />,
    },
    {
        path: "/Firm-Overview",
        element: HeaderNavbarWrapper(<FirmOverview />),
        errorElement: <PageNotFound />,
    },
    {
        path: "/Practice-Areas",
        element: HeaderNavbarWrapper(<PracticeAreas />),
        errorElement: <PageNotFound />,
    },
    {
        path: "/Resources",
        element: HeaderNavbarWrapper(<HomePage />),
        errorElement: <PageNotFound />,
    },
    {
        path: "/Contact",
        element: HeaderNavbarWrapper(<ContactPage />, false),
        errorElement: <PageNotFound />,
    },
    {
        path: "/Blog",
        element: HeaderNavbarWrapper(<HomePage />),
        errorElement: <PageNotFound />,
    },
    ...Object.keys(specialtiesInclude).map(key => {
        return {
            path: "/Practice-Areas/" + key.replace(/ /g, "-"),
            element: HeaderNavbarWrapper(<PracticeArea_Field title={key} body={specialtiesInclude[key].body} />),
            errorElement: <PageNotFound />,
        }})
]);
export default function Router() {
    return <RouterProvider router={router} />
}