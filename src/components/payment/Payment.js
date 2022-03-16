import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./payment.css";
import Store from "../../image/Store.png";
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

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
            <Navbar index={0} title="Payment Detail" widget={<div className="payment-cnt-mobile">
                <div class="dropdown payment-item-mobile">
                    <button class="dropdown-toggle" type="button" id="payment-type-mobile" data-bs-toggle="dropdown" aria-expanded="false">
                        Payment-type
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="payment-type-mobile">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <div className='payment-item-mobile' id="amount-mobile ">
                    <span>Amount</span>
                    <input type="text" placeholder='0.00' />
                </div>
                <div className="payment-item-mobile">
                    <button id="deposit-mobile">
                        Make a Deposite
                    </button>
                </div>
            </div>

            }></Navbar >

        </div >)

}

const DesktopComponent = () => {
    return (

        <div>
            <Navbar widget={<div className='display-page'>
                <div className='dashboard-navbar'>
                    <a href="" className='dashboard-nav'>Make a Payment Detail</a>
                </div >
                <div className='card make-payment-card'>
                    <div class="dropdown">
                        <button style={{
                            position: "absolute", left: "3%", top: "13%", marginTop: "2rem"
                        }} class="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Payment Type
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div className='container' style={{ position: "relative", top: "20%" }}>
                        <div className='row'>
                            <div className='col-md-3'>
                                <button className='mx-4 btn btn-outline-secondary'>Amount</button>
                                <div className='v-line'></div>
                            </div>
                            <div className='col-md-8'>
                                <input type="text" placeholder='$0.00' className='amount-input' />
                                <button className='btn btn-danger' >Make a Payment</button>
                                <div class="button-grp my-1">
                                    <button className='btn btn-deposit'>Deposit</button>
                                    <button className='mx-2 btn btn-withdraw'>Withdraw</button>
                                    <button className='mx-2 btn btn-advance'>Advance</button>
                                </div>
                                <table class="table my-5">
                                    <thead>
                                        <tr>
                                            <th scope="col">er</th>
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
                                                <input type="checkbox" aria-label="Checkbox for following text input" />
                                            </td>
                                            <td>1-10-2021</td>
                                            <td>Metino Shoes</td>
                                            <td>$680</td>
                                            <td>Cash</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" aria-label="Checkbox for following text input" />
                                            </td>
                                            <td>1-10-2021</td>
                                            <td>Metino Shoes</td>
                                            <td>$750</td>
                                            <td>Transfer</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <input type="checkbox" aria-label="Checkbox for following text input" />
                                            </td>
                                            <td>1-10-2021</td>
                                            <td>Metino Shoes</td>
                                            <td>$450</td>
                                            <td>Cash</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <input type="checkbox" aria-label="Checkbox for following text input" />
                                            </td>
                                            <td>1-10-2021</td>
                                            <td>Metino Shoes</td>
                                            <td>$0</td>
                                            <td>Transfer</td>
                                            <td></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}></Navbar>


        </div >
    )
}


const MyComponent = () => {
    const { width } = useViewport();
    const breakpoint = 620;

    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function Payment() {
    return (
        <ViewportProvider>
            <MyComponent />
        </ViewportProvider>
    );
}