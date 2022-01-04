import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Transaction.css";
import Store from "../../image/Store.png";

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
    return(
        <div>
            <div className='mobile-display' style={{background: "#ffffff"}}>
                <div className='mobile-upper-card'>
                    <div className='card-body' style={{display: 'flex', flexDirection: "row"}}>
                        <div className="dropdown">
                            <button style={{marginTop: "-1rem"}} className="btn card-titles dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Today
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">History</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className='container' style={{visibility: "hidden"}}>
                        <div className='col'>
                            <div className='col-sm-12'>
                                <div className='mobile-store-card' style={{marginLeft:"2rem"}}>
                                    <div className='card-body'>
                                        <div className='store-info' style={{marginTop:"0.6rem"}}>
                                            <img className='store-dp' src={Store}/>
                                            <div className='store-infos' style={{marginLeft:"1rem"}}>
                                                <span className='store-name'>Tony T store</span>
                                                <span className='store-balance'>$12435.65</span>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className='new-balance-side'>
                                            <span className='new-balance-text'>New Balance</span>
                                            <span className='new-balance-amt my-2'>$ 4900.00</span>
                                        </div>
                                        <div className='new-balance-side' style={{position: "absolute", left:"50%", top:"35%"}}>
                                            <span className='date'>Dec 12 2021</span>
                                            <span className='time my-2'>10:45 am</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 my-2'>
                                <div className='mobile-store-card' style={{marginLeft:"2rem"}}>
                                    <div className='card-body'>
                                        <div className='store-info' style={{marginTop:"0.6rem"}}>
                                            <img className='store-dp' src={Store}/>
                                            <div className='store-infos' style={{marginLeft:"1rem"}}>
                                                <span className='store-name'>Tony T store</span>
                                                <span className='store-balance'>$12435.65</span>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className='new-balance-side'>
                                            <span className='new-balance-text'>New Balance</span>
                                            <span className='new-balance-amt my-2'>$ 4900.00</span>
                                        </div>
                                        <div className='new-balance-side' style={{position: "absolute", left:"50%", top:"35%"}}>
                                            <span className='date'>Dec 12 2021</span>
                                            <span className='time my-2'>10:45 am</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 my-2'>
                                <div className='mobile-store-card' style={{marginLeft:"2rem"}}>
                                    <div className='card-body'>
                                        <div className='store-info' style={{marginTop:"0.6rem"}}>
                                            <img className='store-dp' src={Store}/>
                                            <div className='store-infos' style={{marginLeft:"1rem"}}>
                                                <span className='store-name'>Tony T store</span>
                                                <span className='store-balance'>$12435.65</span>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className='new-balance-side'>
                                            <span className='new-balance-text'>New Balance</span>
                                            <span className='new-balance-amt my-2'>$ 4900.00</span>
                                        </div>
                                        <div className='new-balance-side' style={{position: "absolute", left:"50%", top:"35%"}}>
                                            <span className='date'>Dec 12 2021</span>
                                            <span className='time my-2'>10:45 am</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 my-2'>
                                <div className='mobile-store-card' style={{marginLeft:"2rem"}}>
                                    <div className='card-body'>
                                        <div className='store-info' style={{marginTop:"0.6rem"}}>
                                            <img className='store-dp' src={Store}/>
                                            <div className='store-infos' style={{marginLeft:"1rem"}}>
                                                <span className='store-name'>Tony T store</span>
                                                <span className='store-balance'>$12435.65</span>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className='new-balance-side'>
                                            <span className='new-balance-text'>New Balance</span>
                                            <span className='new-balance-amt my-2'>$ 4900.00</span>
                                        </div>
                                        <div className='new-balance-side' style={{position: "absolute", left:"50%", top:"35%"}}>
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
                    <hr/>
                    <div style={{display:"flex", flexDirection: "row"}}>
                        <div className='col-sm-2 mx-2'>
                            <span className="column-heading">Amount</span>
                            <ul style={{marginLeft: "-1.5rem"}}>
                                <li className="column-text my-5">$690</li>
                                <li className="column-text my-5">$690</li>
                                <li className="column-text my-5">$690</li>
                                <li className="column-text my-5">$690</li>
                                <li className="column-text my-5">$690</li>
                            </ul>
                        </div>
                        <div className='col-sm-5 mx-4'>
                            <span className="column-heading">Date</span>
                            <ul style={{marginLeft: "-1.5rem"}}>
                                <li className="column-text my-5">1-10-2021</li>
                                <li className="column-text my-5">1-10-2021</li>
                                <li className="column-text my-5">1-10-2021</li>
                                <li className="column-text my-5">1-10-2021</li>
                                <li className="column-text my-5">1-10-2021</li>
                            </ul>
                        </div>
                        <div className='col-sm-5 mx-4'>
                            <span className="column-heading">Description</span>
                            <ul style={{marginLeft: "-1.5rem"}}>
                                <li className="column-text my-5">Metino shoes</li>
                                <li className="column-text my-5">Metino shoes</li>
                                <li className="column-text my-5">Metino shoes</li>
                                <li className="column-text my-5">Metino shoes</li>
                                <li className="column-text my-5">Metino shoes</li>
                            </ul>
                        </div>
                    </div>
                    <button className="btn make-payment mx-3">Make a Payment</button>
                </div>
            </div>
        </div>
    )
}

const DesktopComponent = () => {
    return(
        <div>
            <div className='display-page'>
                <div className='dashboard-navbar'>
                    <a style={{marginLeft: "-2.5rem", fontWeight: "700"}} className='dashboard-nav'>Transactions Details</a>
                    <button className='btn btn-outline-danger'>Invoices</button>
                    <button className='btn btn-danger'>Make Payment</button>
                </div>   
                <div className="row row1">
                    <div className='col-md-4'>
                        <div className='today-button'>
                            <button className='btn btn-today'>Today
                                <span className='arrow'>
                                    <i class="fas fa-chevron-down"></i>
                                </span>
                            </button>
                        </div>
                        <ul className='stores'>
                            <li className='one-stores'>
                                <div className='card left-card'>
                                    <div className='card-body'>
                                        <div className='store-info'>
                                            <img className='store-dp' src={Store}/>
                                            <div className='store-infos'>
                                            <span className='store-name'>Tony T store</span>
                                            <span className='store-balance'>$12435.65</span>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className='row' style={{marginTop: "0.5rem"}}>
                                            <div className='col-md-6 column-store'>
                                                <span className='deposit-text'>Deposit</span>
                                                <span className='deposit-text'>New Balance</span>
                                            </div>
                                            <div className='col-md-6 column-store'>
                                                <span className='balance'>-$5000.65</span>
                                                <span className='balance'>$900.65</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='my-3 one-stores'>
                                <div className='card left-card'>
                                    <div className='card-body'>
                                        <div className='store-info'>
                                            <img className='store-dp' src={Store}/>
                                            <div className='store-infos'>
                                            <span className='store-name'>Tony T store</span>
                                            <span className='store-balance'>$12435.65</span>
                                            </div>=
                                        </div>
                                        <hr/>
                                        <div className='row' style={{marginTop: "0.5rem"}}>
                                            <div className='col-md-6 column-store'>
                                                <span className='deposit-text'>Deposit</span>
                                                <span className='deposit-text'>New Balance</span>
                                            </div>
                                            <div className='col-md-6 column-store'>
                                                <span className='balance'>-$5000.65</span>
                                                <span className='balance'>$900.65</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='my-3 one-stores'>
                                <div className='card left-card'>
                                    <div className='card-body'>
                                        <div className='store-info'>
                                            <img className='store-dp' src={Store}/>
                                            <div className='store-infos'>
                                            <span className='store-name'>Tony T store</span>
                                            <span className='store-balance'>$12435.65</span>
                                            </div>=
                                        </div>
                                        <hr/>
                                        <div className='row' style={{marginTop: "0.5rem"}}>
                                            <div className='col-md-6 column-store'>
                                                <span className='deposit-text'>Deposit</span>
                                                <span className='deposit-text'>New Balance</span>
                                            </div>
                                            <div className='col-md-6 column-store'>
                                                <span className='balance'>-$5000.65</span>
                                                <span className='balance'>$900.65</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-8'>
                        <div class="button-grp">
                            <button className='btn btn-deposit'>Deposit</button>
                            <button className='mx-2 btn btn-withdraw'>Withdraw</button>
                            <button className='mx-2 btn btn-advance'>Advance</button>
                            <button className='mx-5 btn btn-print'>Print</button>
                        </div>
                        <div className='card detail-card'>
                            <div className='row'>
                                <div className='col-md-1' style={{marginTop: "2.2rem", marginLeft: "0rem"}}>
                                    <li className='my-4 mx-2'>
                                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                                    </li>
                                    <li className='my-4 mx-2'>
                                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                                    </li>
                                    <li className='my-4 mx-2'>
                                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                                    </li>
                                    <li className='my4 mx-2'>
                                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                                    </li>
                                    <li className='my-4 mx-2'>
                                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                                    </li>
                                    <li className='my-4 mx-2'>
                                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                                    </li>
                                    <li className='my-4 mx-2'>
                                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                                    </li>
                                </div>
                                <div className='col-md-3'>
                                    <li className='my-2'>
                                        <span className='col-heading'>User</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='user-names'>Oil and gas Co.</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='user-names'>Oil and gas Co.</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='user-names'>Oil and gas Co.</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='user-names'>Oil and gas Co.</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='user-names'>Oil and gas Co.</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='user-names'>Oil and gas Co.</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='user-names'>Oil and gas Co.</span>
                                    </li>
                                </div>
                                <div className='col-md-2'>
                                    <li className='my-2'>
                                        <span className='col-heading'>Date</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-date'>21-10-2021</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-date'>21-10-2021</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-date'>21-10-2021</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-date'>21-10-2021</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-date'>21-10-2021</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-date'>21-10-2021</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-date'>21-10-2021</span>
                                    </li>
                                </div>
                                <div className='col-md-2'>
                                    <li className='my-2'>
                                        <span className='col-heading'>Description</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-desc'>Metino Shoes</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-desc'>Metino Shoes</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-desc'>Metino Shoes</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-desc'>Metino Shoes</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-desc'>Metino Shoes</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-desc'>Metino Shoes</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-desc'>Metino Shoes</span>
                                    </li>
                                </div>
                                <div className='col-md-2'>
                                    <li className='my-2'>
                                        <span className='col-heading'>Amount</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-amount'>$680</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-amount'>$680</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-amount'>$680</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-amount'>$680</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-amount'>$680</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-amount'>$680</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-amount'>$680</span>
                                    </li>
                                </div>
                                <div className='col-md-2'>
                                    <li className='my-2'>
                                        <span className='col-heading'>Action</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-action'>Cash</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-action'>Cash</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-action'>Cash</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-action'>Cash</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-action'>Cash</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-action'>Cash</span>
                                    </li>
                                    <li className='my-4'>
                                        <span className='col-action'>Cash</span>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    
    )
}


const MyComponent = () => {
    const { width } = useViewport();
    const breakpoint = 620;
  
    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function Transaction(){
    return (
        <ViewportProvider>
          <MyComponent />
        </ViewportProvider>
    );
}