import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./invoice.css";
import Store from "../../image/Store.png";
import SideBar from "../sidebar/Sidebar";
import NavBar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

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
        <NavBar widget={<div><div className='pt-5'></div>
            <div className='mobile-display'>
                <div className='mobile-upper-card'>
                    <div className='card-body' style={{ display: 'flex', flexDirection: "row" }}>
                        <h4 className='card-titles'>Recent</h4>
                        <i class="fas fa-angle-down"></i>
                    </div>
                </div>
                <div className='card deposits-card my-2' style={{ marginLeft: "4rem" }}>
                    <div className='card-body'>
                        <h4 className='deposits-card-heading'>Transaction Details</h4>
                        <div className='line'></div>
                        <div className='stores-info'>
                            <img src={Store} alt="" className='store-img' />
                            <div className='stores-infos'>
                                <span className='store-nam'>Tony T Stores</span>
                                <span className='store-mob'>#0000000000</span>
                            </div>
                        </div>
                        <div className='line2'></div>
                        <div className='cash-detail'>
                            <span className='deposit-detail'>Deposit</span>
                            <span className='cash-amt'>$4854.00</span>
                            <span className='cash-transaction'>Cash Transaction</span>
                        </div>
                        <div className='line3'></div>
                        <div className='description-section'>
                            <span className='desc-section'>Description</span>
                        </div>
                        <div className='line4'></div>
                        <div className='share-details'>
                            <button className='btn share-btn'>Share</button>
                            <div className='shares-details'>
                                <span className='share-date'>Dec 07, 2021</span>
                                <span className="share-time">11:10AM</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card deposits-card my-2' style={{ marginLeft: "4rem" }}>
                    <div className='card-body'>
                        <h4 className='deposits-card-heading'>Transaction Details</h4>
                        <div className='line'></div>
                        <div className='stores-info'>
                            <img src={Store} alt="" className='store-img' />
                            <div className='stores-infos'>
                                <span className='store-nam'>Tony T Stores</span>
                                <span className='store-mob'>#0000000000</span>
                            </div>
                        </div>
                        <div className='line2'></div>
                        <div className='cash-detail'>
                            <span className='deposit-detail'>Deposit</span>
                            <span className='cash-amt'>$4854.00</span>
                            <span className='cash-transaction'>Cash Transaction</span>
                        </div>
                        <div className='line3'></div>
                        <div className='description-section'>
                            <span className='desc-section'>Description</span>
                        </div>
                        <div className='line4'></div>
                        <div className='share-details'>
                            <button className='btn share-btn'>Share</button>
                            <div className='shares-details'>
                                <span className='share-date'>Dec 07, 2021</span>
                                <span className="share-time">11:10AM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>}></NavBar>

    )
}

class DesktopComponent extends React.Component {

    handleClick(e) {
        e.preventDefault();
        this.props.history('/invoice');
    }
    paymentClick(e) {
        e.preventDefault();
        this.props.history('/payment');
    }
    constructor(props) {
        super(props);
        this.index = 0;
        this.state = {
            data: {},
            isLoaded: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.paymentClick = this.paymentClick.bind(this);
    }



    async componentDidMount() {
        console.log("Dashboard is mounted");
        console.log(`${sessionStorage.getItem("tokenManager")}`)
        let data = JSON.parse(sessionStorage.getItem("tokenManager"))
        console.log(`data ----- ${data}`)
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${data.token.token}`,

            },
            // mode: 'no-cors',
            // redirect: "follow",
        };


        await fetch(`https://credio-merchant.herokuapp.com/api/v1/credio_store/invoices`,
            requestOptions)
            .then(results => results.json()).then((transfer) => {
                // let over = overview.json();
                console.log(transfer);


                this.setState({
                    data: transfer,
                    isLoaded: true,
                });


            }).catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { isLoaded, data, } = this.state;

        return (
            <div>
                <NavBar></NavBar>
                <div className='display-page'>
                    {!isLoaded ? (
                        <div class="container h-100">
                            <div class="row h-100 justify-content-center align-items-center">

                                <FontAwesomeIcon
                                    className="spinner"
                                    size="5x"
                                    icon={faSpinner}
                                ></FontAwesomeIcon>

                            </div>
                        </div>
                    ) : (
                        <div>
                            < div className='dashboard-navbar'>
                                <a href="" className='dashboard-nav'>Invoice</a>
                            </div >
                            <div className='container pt-4'>

                                <h1 className='recent-heading'>Recent</h1>
                                <div className='row'>{
                                    data.data.recent.map((item) => {
                                        return <div className='col-md-4 col-lg-3 col-xl-3'>
                                            <div className='card '>
                                                <div className='card-body'>
                                                    <h4 className='deposits-card-heading'>Transaction Details</h4>
                                                    <div className='line'></div>
                                                    <div className='stores-info'>
                                                        <img src={Store} alt="" className='store-img' />
                                                        <div className='stores-infos'>
                                                            <span className='store-nam'>Tony T Stores</span>
                                                            <span className='store-mob'>#0000000000</span>
                                                        </div>
                                                    </div>
                                                    <div className='line2'></div>
                                                    <div className='cash-detail'>
                                                        <span className='deposit-detail'>Deposit</span>
                                                        <span className='cash-amt'>$4854.00</span>
                                                        <span className='cash-transaction'>Cash Transaction</span>
                                                    </div>
                                                    <div className='line3'></div>
                                                    <div className='description-section'>
                                                        <span className='desc-section'>Description</span>
                                                    </div>
                                                    <div className='line4'></div>
                                                    <div className='share-details d-flex justify-content-between'>
                                                        <button className='btn share-btn'>Share</button>
                                                        <div className='shares-details'>
                                                            <span className='share-date'>Dec 07, 2021</span>
                                                            <span className="share-time">11:10AM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    )
                                }
                                </div>

                            </div>
                            <div className='container'>
                                <h1 className='recent-heading'>History</h1>
                                <div className='row'>
                                    {
                                        data.data.history.map((item) => {
                                            return <div className='col-md-4 col-lg-3 col-xl-3'>
                                                <div className='card '>
                                                    <div className='card-body'>
                                                        <h4 className='deposits-card-heading'>Transaction Details</h4>
                                                        <div className='line'></div>
                                                        <div className='stores-info'>
                                                            <img src={Store} alt="" className='store-img' />
                                                            <div className='stores-infos'>
                                                                <span className='store-nam'>Tony T Stores</span>
                                                                <span className='store-mob'>#0000000000</span>
                                                            </div>
                                                        </div>
                                                        <div className='line2'></div>
                                                        <div className='cash-detail'>
                                                            <span className='deposit-detail'>Deposit</span>
                                                            <span className='cash-amt'>$4854.00</span>
                                                            <span className='cash-transaction'>Cash Transaction</span>
                                                        </div>
                                                        <div className='line3'></div>
                                                        <div className='description-section'>
                                                            <span className='desc-section'>Description</span>
                                                        </div>
                                                        <div className='line4'></div>
                                                        <div className='share-details d-flex justify-content-between'>
                                                            <button className='btn share-btn'>Share</button>
                                                            <div className='shares-details'>
                                                                <span className='share-date'>Dec 07, 2021</span>
                                                                <span className="share-time">11:10AM</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </div >
            </div >

        )
    }
}



const MyComponent = () => {
    const { width } = useViewport();
    const breakpoint = 620;

    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function Deposit() {
    return (
        <ViewportProvider>
            <MyComponent />
        </ViewportProvider>
    );
}