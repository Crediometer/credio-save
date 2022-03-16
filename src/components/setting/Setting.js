import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Setting.css";
import Store from "../../image/Store.png";
import Navbar from '../Navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);
    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <viewportContext.Provider value={{ width, height }}>
            {children}
        </viewportContext.Provider>
    );
};


const useViewport = () => {
    const { width, height } = React.useContext(viewportContext);
    return { width, height };
};

const MobileComponent = () => {
    return (
        <div>
            <Navbar index={3} title={"Settings"} widget={<div id="settings-cnt-mobile">
                <div className="settings-section-mobile">
                    <div className="settings-heading-mobile">
                        <span>Customers</span>
                    </div>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        <div className="settings-item-mobile">
                            <span>Account and setting</span>
                        </div>
                    </Link>
                    <Link to="/users" style={{ textDecoration: 'none' }}>
                        <div className="settings-item-mobile">
                            <span>Manage users</span>
                        </div>
                    </Link>
                    <Link to="#" style={{ textDecoration: 'none' }}>

                        <div className="settings-item-mobile">
                            <span>Custom form styles</span>
                        </div>
                    </Link>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        <div className="settings-item-mobile">
                            <span>Chart of accounts</span>
                        </div>
                    </Link>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        <div className="settings-item-mobile">
                            <span>Credio labs</span>
                        </div>
                    </Link>
                </div>
                <hr />
                <div className="settings-section-mobile">
                    <div className="settings-heading-mobile">
                        <span>Vendors</span>
                    </div>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        <div className="settings-item-mobile">
                            <span>All lists</span>
                        </div>
                    </Link>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        <div className="settings-item-mobile">
                            <span>Products and services</span>
                        </div>
                    </Link>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        <div className="settings-item-mobile">
                            <span>Recurring transactions</span>
                        </div>
                    </Link>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        <div className="settings-item-mobile">
                            <span>Attachments</span>
                        </div>
                    </Link>
                </div>
                <hr />
                <div className="settings-section-mobile">
                    <div className="settings-heading-mobile">
                        <span>Employess</span>
                    </div>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        <div className="settings-item-mobile">
                            <span>Oredr chechs</span>
                        </div>
                    </Link>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        <div className="settings-item-mobile">
                            <span>Import data</span>
                        </div>
                    </Link>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        <div className="settings-item-mobile">
                            <span>Import desktop data</span>
                        </div>
                    </Link>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        <div className="settings-item-mobile">
                            <span>Export data</span>
                        </div>
                    </Link>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        <div className="settings-item-mobile">
                            <span>Reconcile</span>
                        </div>
                    </Link>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        <div className="settings-item-mobile">
                            <span>Budgeting</span>
                        </div>
                    </Link>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        <div className="settings-item-mobile">
                            <span>Audit log</span>
                        </div>
                    </Link>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        <div className="settings-item-mobile">
                            <span>SmartLook</span>
                        </div>
                    </Link>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        <div className="settings-item-mobile">
                            <span>Case Center</span>
                        </div>
                    </Link>
                </div>
                <hr />
            </div>}></Navbar>
            {/* <Sidebar index={"settings"}></Sidebar> */}

        </div >
    )
}

const DesktopComponent = () => {
    return (
        <div>
            {/* <Navbar navIndex={"Credio services"}></Navbar> */}

            <Navbar index={3} title={"Settings"} widget={<div className='mobile-display' style={{ background: "White" }}>
                <ul className='setting-items my-3'>
                    <span className='setting-item-heading my-2'>Customers</span>
                    <li className='setting-items my-2'>
                        <span className='setting-item-text'>Account and settings</span>
                    </li>
                    <li className='setting-items my-2'>
                        <span className='setting-item-text'>Manage users</span>
                    </li>
                    <li className='setting-items my-2'>
                        <span className='setting-item-text'>custom form styles</span>
                    </li>
                    <li className='setting-items my-2'>
                        <span className='setting-item-text'>charts of accounts</span>
                    </li>
                    <li className='setting-items my-2'>
                        <span className='setting-item-text'>Credio labs</span>
                    </li>
                </ul>
                <hr />
                <ul className='setting-items my-3'>
                    <span className='setting-item-heading my-2'>Vendors</span>
                    <li className='setting-items my-2'>
                        <span className='setting-item-text'>All Lists</span>
                    </li>
                    <li className='setting-items my-2'>
                        <span className='setting-item-text'>Product and services</span>
                    </li>
                    <li className='setting-items my-2'>
                        <span className='setting-item-text'>Recurring Transaction</span>
                    </li>
                    <li className='setting-items my-2'>
                        <span className='setting-item-text'>Attachment</span>
                    </li>
                </ul>
                <hr />
                <ul className='setting-items my-3'>
                    <span className='setting-item-heading my-2'>Employee</span>
                    <li className='setting-items my-2'>
                        <span className='setting-item-text'>Order check</span>
                    </li>
                    <li className='setting-items my-2'>
                        <span className='setting-item-text'>Manage users</span>
                    </li>
                </ul>
            </div>}>
            </Navbar>
        </div>
    )
}


const MyComponent = () => {
    const { width } = useViewport();
    const breakpoint = 620;

    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function Setting() {
    return (
        <ViewportProvider>
            <MyComponent />
        </ViewportProvider>
    );
}