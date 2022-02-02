import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
// import Menu from "../../image/Menu.png";
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

const MobileComponent = (props) => {
    const navIndex = props.navIndex;
    return (
        <div className='navbar-cnt-mobile' >
            <div className='mobile-navbar'>
                <button className="btn " type="button"
                    data-bs-toggle="collapse" data-bs-target="#sidebar" aria-expanded="false" aria-controls="sidebar"
                >
                    <i class="fa fa-bars"></i>
                </button>
                <div id="navbar-index">
                    <span>{navIndex}</span>
                </div>
                <div id="mobile-notification-icon">
                    <i className='far fa-bell'>
                    </i>
                </div>
            </div>
            <div className="collapse collapse-horizontal" id="sidebar" style={{ maxWidth: '200px' }} >
                <div className="" id="side-menu-cnt">
                    <div>
                        <Link to='#' style={{ textDecoration: 'none' }}>Your Account</Link>
                        <Link to='#' style={{ textDecoration: 'none' }}>Feedback</Link>
                        <Link to='#' style={{ textDecoration: 'none' }}>Refer a friend</Link>
                        <Link to='#' style={{ textDecoration: 'none' }}>Privacy</Link>
                        <Link to='#' style={{ textDecoration: 'none' }}>Help</Link>
                    </div>
                    <Link id="mobile-signout" to="#" style={{ textDecoration: 'none' }}>sign out</Link>
                </div>
            </div>
        </div>
    );
};

const DesktopComponent = () => {
    return (
        <div>
            <div className='top-navbar'>
                {/* <img src={Menu} alt="" className='navbar-menu' /> */}
                <a className="navbar-brand">Your service </a>
                <i style={{
                    position: "absolute",
                    top: "40%",
                    left: "14%",
                    fontSize: "15px",
                    color: "#424242"
                }} class="fas fa-chevron-down"></i>
                <div class="input-group ">
                    <input className='search-here' type="text" placeholder='Search' />
                    {/* <i class="fas fa-search search-icon fa-sm" ></i> */}
                </div>
                <div className='notification-icon'>
                    <i class="far fa-bell"></i>
                    <div className='notification-dot'></div>
                </div>
                <i class="fas fa-circle"></i>
                <span className='user-name'>Adewumi</span>
            </div>
        </div>
    )
}


const MyComponent = ({ navIndex }) => {
    const { width } = useViewport();
    const breakpoint = 620;

    return width < breakpoint ? <MobileComponent navIndex={navIndex} /> : <DesktopComponent />;
};

export default function Navbar({ navIndex }) {
    return (
        <ViewportProvider>
            <MyComponent navIndex={navIndex} />
        </ViewportProvider>
    );
}