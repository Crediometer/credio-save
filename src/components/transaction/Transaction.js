import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Transaction.css";
import Store from "../../image/Store.png";
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
// import TransactionHistory from './TranscationHistory';

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

const NotInUse = () => {
    return (
        <div>
            <Navbar navIndex={"Transactions Overview"}></Navbar>
            <Sidebar index='transactions' ></Sidebar>
            <div className='mobile-display' style={{ background: "#ffffff" }}>
                <div className='mobile-upper-card'>
                    <div className='card-body' style={{ display: 'flex', flexDirection: "row" }}>
                        <div className="dropdown">
                            <button style={{ marginTop: "-1rem" }} className="btn card-titles dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Today
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-el" href="#">History</a>
                            </div>
                        </div>
                    </div>

                    <div className='container' style={{ visibility: "hidden" }}>
                        <div className='col'>
                            <div className='col-sm-12'>
                                <div className='mobile-store-card' style={{ marginLeft: "2rem" }}>
                                    <div className='card-body'>
                                        <div className='store-info' style={{ marginTop: "0.6rem" }}>
                                            <img className='store-dp' src={Store} />
                                            <div className='store-infos' style={{ marginLeft: "1rem" }}>
                                                <span className='store-name'>Tony T store</span>
                                                <span className='store-balance'>$12435.65</span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='new-balance-side'>
                                            <span className='new-balance-text'>New Balance</span>
                                            <span className='new-balance-amt my-2'>$ 4900.00</span>
                                        </div>
                                        <div className='new-balance-side' style={{ position: "absolute", left: "50%", top: "35%" }}>
                                            <span className='date'>Dec 12 2021</span>
                                            <span className='time my-2'>10:45 am</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 my-2'>
                                <div className='mobile-store-card' style={{ marginLeft: "2rem" }}>
                                    <div className='card-body'>
                                        <div className='store-info' style={{ marginTop: "0.6rem" }}>
                                            <img className='store-dp' src={Store} />
                                            <div className='store-infos' style={{ marginLeft: "1rem" }}>
                                                <span className='store-name'>Tony T store</span>
                                                <span className='store-balance'>$12435.65</span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='new-balance-side'>
                                            <span className='new-balance-text'>New Balance</span>
                                            <span className='new-balance-amt my-2'>$ 4900.00</span>
                                        </div>
                                        <div className='new-balance-side' style={{ position: "absolute", left: "50%", top: "35%" }}>
                                            <span className='date'>Dec 12 2021</span>
                                            <span className='time my-2'>10:45 am</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 my-2'>
                                <div className='mobile-store-card' style={{ marginLeft: "2rem" }}>
                                    <div className='card-body'>
                                        <div className='store-info' style={{ marginTop: "0.6rem" }}>
                                            <img className='store-dp' src={Store} />
                                            <div className='store-infos' style={{ marginLeft: "1rem" }}>
                                                <span className='store-name'>Tony T store</span>
                                                <span className='store-balance'>$12435.65</span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='new-balance-side'>
                                            <span className='new-balance-text'>New Balance</span>
                                            <span className='new-balance-amt my-2'>$ 4900.00</span>
                                        </div>
                                        <div className='new-balance-side' style={{ position: "absolute", left: "50%", top: "35%" }}>
                                            <span className='date'>Dec 12 2021</span>
                                            <span className='time my-2'>10:45 am</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 my-2'>
                                <div className='mobile-store-card' style={{ marginLeft: "2rem" }}>
                                    <div className='card-body'>
                                        <div className='store-info' style={{ marginTop: "0.6rem" }}>
                                            <img className='store-dp' src={Store} />
                                            <div className='store-infos' style={{ marginLeft: "1rem" }}>
                                                <span className='store-name'>Tony T store</span>
                                                <span className='store-balance'>$12435.65</span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='new-balance-side'>
                                            <span className='new-balance-text'>New Balance</span>
                                            <span className='new-balance-amt my-2'>$ 4900.00</span>
                                        </div>
                                        <div className='new-balance-side' style={{ position: "absolute", left: "50%", top: "35%" }}>
                                            <span className='date'>Dec 12 2021</span>
                                            <span className='time my-2'>10:45 am</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='transaction-history'>
                    <div className='button-group my-3 mx-3'>
                        <button style={{
                            background: "#BC0018", color: "White",
                            boxShadow: "0px 2.84886px 2.84886px rgba(188, 0, 24, 0.25)",
                            borderRadius: "21.3665px"
                        }} className='btn btn-depo'>Deposit</button>
                        <button className='btn btn-depo'>Withdraw</button>
                        <button className='btn btn-depo'>Advance</button>
                    </div>
                    <hr />
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div className='col-sm-2 mx-2'>
                            <span className="column-heading">Amount</span>
                            <ul style={{ marginLeft: "-1.5rem" }}>
                                <li className="column-text my-5">$690</li>
                                <li className="column-text my-5">$690</li>
                                <li className="column-text my-5">$690</li>
                                <li className="column-text my-5">$690</li>
                                <li className="column-text my-5">$690</li>
                            </ul>
                        </div>
                        <div className='col-sm-5 mx-4' style={{ marginLeft: "0rem" }}>
                            <span className="column-heading">Date</span>
                            <ul style={{ marginLeft: "-1.5rem" }}>
                                <li className="column-text my-5">1-10-2021</li>
                                <li className="column-text my-5">1-10-2021</li>
                                <li className="column-text my-5">1-10-2021</li>
                                <li className="column-text my-5">1-10-2021</li>
                                <li className="column-text my-5">1-10-2021</li>
                            </ul>
                        </div>
                        <div className='col-sm-5 mx-4'>
                            <span className="column-heading">Description</span>
                            <ul style={{ marginLeft: "-1.5rem" }}>
                                <li className="column-text my-5">Metino shoes</li>
                                <li className="column-text my-5">Metino shoes</li>
                                <li className="column-text my-5">Metino shoes</li>
                                <li className="column-text my-5">Metino shoes</li>
                                <li className="column-text my-5">Metino shoes</li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/payment">
                        <button className="btn make-payment mx-3">Make a Payment</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
const MobileComponent = () => {
    const [data, setData] = useState(null);
    const [isloaded, setIsloaded] = useState(false);
    const [overview, setOverview] = useState(true);
    let usertoken = JSON.parse(sessionStorage.getItem("tokenManager"))
    // console.log(`data ----- ${data}`)
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${usertoken.token.token}`,

        },
    };
    useEffect(() => {
        fetch(`https://credio-merchant.herokuapp.com/api/v1/credio_store/get/transactions`,
            requestOptions)
            .then(results => results.json())
            .then((transfer) => {
                // let over = overview.json();
                console.log(transfer);
                setData(transfer);
                setIsloaded(true);
            }).catch((err) => {
                console.log(err);
            });
    }, []);
    
    return (
        // <></>
        <>
            <Navbar navIndex={"Transactions Overview"}></Navbar>
            <Sidebar index='transactions' ></Sidebar>
            {
                !isloaded && <div className="loading-mobile">
                    <FontAwesomeIcon
                                    className="spinner mt-6 mb-4"
                                    size="4x"
                                    icon={faSpinner}
                                ></FontAwesomeIcon>
                </div>
            }
            {
                data && 
            <div className="transaction-cnt-mobile">
                <select className="transaction-top-bar-mobile" name="" id="">
                    <option value="today">Today</option>
                    <option value="last-week">Last week</option>
                    <option value="last-month">Last Month</option>
                    <option value="All">All</option>
                </select>
                
                <div className="transactions-overview-mobile">
                    {
                        data.data.map(el => {
                            return (
                                <Link to="/transactions/history" style={{textDecoration:'none'}}>

                                <div className="transaction-card-mobile">
                                    <div id="transaction-card-top-mobile">
                                        
                                            <img className='' src={Store} />
                                            <div id='trans-right-mobile'>
                                                <span className=''>{el.user.businessName}</span>
                                                <span className=''>${el.user.balance}</span>
                                            </div>
                                        
                                    </div>
                                        <hr />
                                        <div id='transaction-card-bottom-mobile' >
                                            <div id='trans-bottom-left-mobile'>
                                                <span className=''>New Balance</span>
                                                <span className=''>${el.user.balance}</span>
                                            </div>
                                            <div id='trans-bottom-right-mobile'>
                                                <span className=''>{el.user.updatedAt.substring(0, 10)}</span>
                                                <span className=''>{el.user.updatedAt.substring(11, 16)}</span>
                                            </div>
                                        </div>
                                </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
                    }
        </>
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


        await fetch(`https://credio-merchant.herokuapp.com/api/v1/credio_store/get/transactions`,
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
        // var history = useNavigate();
        const { isLoaded, data, } = this.state;



        return (
            <div>
                <Navbar ></Navbar>
                <Sidebar index='transactions' ></Sidebar>


                <div className='display-page'>
                    {!isLoaded ? (
                        <div class="container h-100">
                            <div class="row h-100 justify-content-center align-els-center">

                                <FontAwesomeIcon
                                    className="spinner mt-6 mb-4"
                                    size="6x"
                                    icon={faSpinner}
                                ></FontAwesomeIcon>

                            </div>
                        </div>


                    ) : (<div>
                        <div className='dashboard-navbar'>
                            <a style={{ marginLeft: "-2.5rem", fontWeight: "700" }} className='dashboard-nav'>Transactions Details</a>
                            <button className='btn btn-outline-danger' onClick={this.handleClick} >Invoices</button>
                            <button className='btn btn-danger' onClick={this.paymentClick}>Make Payment</button>
                        </div>
                        <div className="row ">
                            <div className='col-md-3'>
                                <div className='today-button mx-4 mt-4'>
                                    <button className='btn btn-today'>Today
                                        <span className='arrow'>
                                            <i class="fas fa-chevron-down"></i>
                                        </span>
                                    </button>
                                </div>
                                <ul className='stores'>
                                    {
                                        data.data.map((el) => {
                                            return <li className='' >
                                                <div className='card left-card'>
                                                    <div className='card-body'>
                                                        <div className='store-info'>
                                                            <img className='store-dp' src={Store} />
                                                            <div className='store-infos'>
                                                                <span className='store-name'>{el.user.businessName}</span>
                                                                <span className='store-balance'>${el.user.balance}</span>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className='row' style={{ marginTop: "0.5rem" }}>
                                                            <div className='col-md-6 column-store'>
                                                                <span className='deposit-text'>New Balance</span>
                                                                <span className='deposit-text'>${el.user.balance}</span>
                                                            </div>
                                                            <div className='col-md-6 column-store'>
                                                                <span className='balance'>{el.user.updatedAt.substring(0, 10)}</span>
                                                                <span className='balance'>{el.user.updatedAt.substring(11, 16)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        }
                                        )
                                    }
                                </ul>
                            </div>

                            <div className='col-md-9'>
                                <div class="button-grp">
                                    <button className='btn btn-deposit'>Deposit</button>
                                    <button className='mx-2 btn btn-withdraw'>Withdraw</button>
                                    <button className='mx-2 btn btn-advance'>Advance</button>
                                    <button className='mx-5 btn btn-print'>Print</button>
                                </div>
                                <div className='card detail-card'>
                                    <table class="table ">
                                        <thead>
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col">User</th>
                                                <th scope="col">date</th>
                                                <th scope="col">Descriptin</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Action</th>
                                                <th scope="col">:</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>

                                                    <input type="text" class="" id="customCheck1" checked />
                                                </td>
                                                <td>Oil and Gas</td>
                                                <td>29-09-78</td>
                                                <td>Bootstrap 4 CDN and Starter Template</td>
                                                <td>2.846</td>
                                                <td>Transfer</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>

                                                    <input type="checkbox" checked />
                                                </td>
                                                <td>Oil and Gas</td>
                                                <td>29-09-78</td>
                                                <td>Bootstrap 4 CDN and Starter Template</td>
                                                <td>2.846</td>
                                                <td>Transfer</td>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <input type="checkbox" class="" id="customCheck1" checked />
                                                </td>
                                                <td>Oil and Gas</td>
                                                <td>29-09-78</td>
                                                <td>Bootstrap 4 CDN and Starter Template</td>
                                                <td>2.846</td>
                                                <td>Transfer</td>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <td>

                                                    <input type="checkbox" class="custom-control-input" id="customCheck1" checked />
                                                </td>
                                                <td>Oil and Gas</td>
                                                <td>29-09-78</td>
                                                <td>Bootstrap 4 CDN and Starter Template</td>
                                                <td>2.846</td>
                                                <td>Transfer</td>
                                                <td></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div >
                    </div >
                    )
                    }
                </div>
            </div >


        )
    }
}


const MyComponent = () => {
    const history = useNavigate();
    const { width } = useViewport();
    const breakpoint = 620;

    return width < breakpoint ? <MobileComponent /> : <DesktopComponent history={history} />;
};

export default function Transaction() {
    return (
        <ViewportProvider>
            <MyComponent />
        </ViewportProvider>
    );
}