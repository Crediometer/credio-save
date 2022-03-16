import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";
import Store from "../../image/Store.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../../components/sidebar/Sidebar";
import NavBar from "../Navbar/Navbar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement, PointElement as Point, LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { Link } from 'react-router-dom';

ChartJS.register(
  CategoryScale, Point, LineElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: !true,
      text: 'Crediometer',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const dataSet = {
  labels,
  datasets: [
    {
      label: 'Cash flow',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.5, fill: 1,

    },

  ],
};

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

class MobileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoaded: false,
    };
    this.mobileQuarter = 1

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


    await fetch(`https://credio-merchant.herokuapp.com/api/v1/credio_store/overview`,
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
  // const[mobileQuarter, setMobileQuarter] = useState(1);
  render() {
    const { isLoaded, data, } = this.state;
    return (
      <div>
        <NavBar index={0} navIndex="Credio services" widget={!isLoaded ? (
          <div class="container h-100">
            <div class="h-100 justify-content-center">

              <FontAwesomeIcon
                className="spinner mt-6 mb-4  align-items-center"
                size="6x"
                icon={faSpinner}
              ></FontAwesomeIcon>

            </div>
          </div>

        ) : (
          < div className='dashboard-mobile-cnt'>
            <div className='dashboard-heading-text'>
              <span >Cash Flow</span>
            </div>
            <div className="dashboard-mobile-chart">
              <Line id="mobile-graph" options={options} data={dataSet} />

            </div>
            <div className="dashboard-mobile-btn-cnt">
              <Link to="#">
                <button className={this.mobileQuarter === 1 ? "quarter-btn dashboard-mobile-active" : "quarter-btn"} >
                  <p>1<sup>st </sup>Quarter</p>
                </button>
              </Link>
              <Link to="#">
                <button className={this.mobileQuarter === 2 ? "quarter-btn dashboard-mobile-active" : "quarter-btn"} >
                  <p>2<sup>nd </sup>Quarter</p>
                </button>
              </Link>
              <Link to="#">
                <button className={this.mobileQuarter === 3 ? "quarter-btn dashboard-mobile-active" : "quarter-btn"} >
                  <p>3<sup>rd </sup>Quarter</p>
                </button>
              </Link>
              <Link to="#">
                <button className={this.mobileQuarter === 4 ? "quarter-btn active" : "quarter-btn"} >
                  <p>4<sup>th </sup>Quarter</p>
                </button>
              </Link>
            </div>
            <div className='container '>
              <div className='current-cash-card my-3 me-3'>
                <div className='card-body' style={{ display: "flex", flexDirection: "column" }}>
                  <span className='current-cash-amount'>$35000</span>
                  <span className='current-cash-text my-3'>Current Cash Balance</span>
                </div>
              </div>
            </div>
            <div className='row p-3' >

              <div className='col-md-12  col-sm-12'>
                <div className='card transaction-card'>
                  <div className='card-body'>
                    <h5 className='card-title'>Transactions</h5>
                    <ul>
                      {
                        data.data.transaction.map((deposit, index) => {

                          return < li className={index == 0 ? '' : 'my-3'
                          } >
                            <div className='card stores-card'>
                              <div className='card-body'>
                                <div className='store-info'>
                                  <img className='store-dp' src={Store} />
                                  <div className='store-infos'>
                                    <span className='store-name'>Tony T store</span>
                                    <span className='store-balance'>$12435.65</span>
                                  </div>
                                </div>
                                <hr />
                                <div className='row' style={{ marginTop: "-0.5rem" }}>
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

                        })
                      }
                      <a href="#" className='more'>More...</a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='row p-3'>
              <div className='col-md-3 col-sm-12'>
                <div className='card deposit-card'>
                  <div className='card-body'>
                    <h5 className='card-title'>Deposit</h5>
                    <ul>
                      {
                        data.data.deposit.map((deposit, index) => {

                          return < li className={index == 0 ? '' : 'my-3'
                          } >
                            <div className='card stores-card'>
                              <div className='card-body'>
                                <div className='store-info'>
                                  <img className='store-dp' src={Store} />
                                  <div className='store-infos'>
                                    <span className='store-name'>Tony T store</span>
                                    <span className='store-balance'>$12435.65</span>
                                  </div>
                                </div>
                                <hr />
                                <div className='row' style={{ marginTop: "-0.5rem" }}>
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

                        })
                      }

                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-sm-12'>
                <div className='card withdraw-card'>
                  <div className='card-body'>
                    <h5 className='card-title'>Withdraw</h5>
                    <ul>
                      {
                        data.data.withdrawal.map((deposit, index) => {

                          return < li className={index == 0 ? '' : 'my-3'
                          } >
                            <div className='card stores-card'>
                              <div className='card-body'>
                                <div className='store-info'>
                                  <img className='store-dp' src={Store} />
                                  <div className='store-infos'>
                                    <span className='store-name'>Tony T store</span>
                                    <span className='store-balance'>$12435.65</span>
                                  </div>
                                </div>
                                <hr />
                                <div className='row' style={{ marginTop: "-0.5rem" }}>
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

                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-sm-12'>
                <div className='card advance-card'>
                  <div className='card-body'>
                    <h5 className='card-title'>Advance</h5>
                    <ul>
                      {
                        data.data.advance.map((deposit, index) => {

                          return < li className={index == 0 ? '' : 'my-3'
                          } >
                            <div className='card stores-card'>
                              <div className='card-body'>
                                <div className='store-info'>
                                  <img className='store-dp' src={Store} />
                                  <div className='store-infos'>
                                    <span className='store-name'>Tony T store</span>
                                    <span className='store-balance'>$12435.65</span>
                                  </div>
                                </div>
                                <hr />
                                <div className='row' style={{ marginTop: "-0.5rem" }}>
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

                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-sm-12'>
                <div className='card user-card'>
                  <div className='card-body'>
                    <h5 className='card-title'>User</h5>
                    <ul>
                      {
                        data.data.user.map((deposit, index) => {

                          return < li className={index == 0 ? '' : 'my-3'
                          } >
                            <div className='card stores-card'>
                              <div className='card-body'>
                                <div className='store-info'>
                                  <img className='store-dp' src={Store} />
                                  <div className='store-infos'>
                                    <span className='store-name'>Tony T store</span>
                                    <span className='store-balance'>$12435.65</span>
                                  </div>
                                </div>
                                <hr />
                                <div className='row' style={{ marginTop: "-0.5rem" }}>
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

                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='row py-5 my-5'></div>
            <div className='py-5 my-5'></div>
            <div className='py-5 my-5'></div>
          </div>
        )} title="Dashboard"></NavBar>


      </div >
    );
  }
}

class DesktopComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoaded: false,
    };
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


    await fetch(`https://credio-merchant.herokuapp.com/api/v1/credio_store/overview`,
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
        <NavBar index={0} widget={<div className='display-page'>

          {!isLoaded ? (
            <div class="container h-100">
              <div class="d-flex ">

                <FontAwesomeIcon
                  className="spinner justify-content-center align-items-center m-5"
                  size="3x"
                  icon={faSpinner}
                ></FontAwesomeIcon>

              </div>
            </div>

          ) : (
            <div >
              <div className='dashboard-navbar'>
                <i class="fas fa-circle dash-icon"></i>
                <a href="" className='dashboard-nav'>Your service</a>
                <Link to="/payment"> <button className='btn btn-danger'>Make Payment</button></Link>
              </div >

              <div className='row p-3 pb-0' >
                <div className='col-md-8 col-sm-12'>
                  <div className='card transaction-card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Cash Flow</h5>
                      <Line options={options} data={dataSet} />
                    </div>
                  </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                  <div className='card transaction-card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Transactions</h5>
                      <ul>
                        {
                          data.data.transaction.map((deposit, index) => {

                            return < li className={index == 0 ? '' : 'my-3'
                            } >
                              <div className='card stores-card'>
                                <div className='card-body'>
                                  <div className='store-info'>
                                    <img className='store-dp' src={Store} />
                                    <div className='store-infos'>
                                      <span className='store-name'>Tony T store</span>
                                      <span className='store-balance'>$12435.65</span>
                                    </div>
                                  </div>
                                  <hr />
                                  <div className='row' style={{ marginTop: "-0.5rem" }}>
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

                          })
                        }
                        <a href="#" className='more'>More...</a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row p-3 pt-0'>
                <div className='col-md-3 col-sm-12'>
                  <div className='card deposit-card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Deposit</h5>
                      <ul>
                        {
                          data.data.deposit.map((deposit, index) => {

                            return < li className={index == 0 ? '' : 'my-3'
                            } >
                              <div className='card stores-card'>
                                <div className='card-body'>
                                  <div className='store-info'>
                                    <img className='store-dp' src={Store} />
                                    <div className='store-infos'>
                                      <span className='store-name'>Tony T store</span>
                                      <span className='store-balance'>$12435.65</span>
                                    </div>
                                  </div>
                                  <hr />
                                  <div className='row' style={{ marginTop: "-0.5rem" }}>
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

                          })
                        }

                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='card withdraw-card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Withdraw</h5>
                      <ul>
                        {
                          data.data.withdrawal.map((deposit, index) => {

                            return < li className={index == 0 ? '' : 'my-3'
                            } >
                              <div className='card stores-card'>
                                <div className='card-body'>
                                  <div className='store-info'>
                                    <img className='store-dp' src={Store} />
                                    <div className='store-infos'>
                                      <span className='store-name'>Tony T store</span>
                                      <span className='store-balance'>$12435.65</span>
                                    </div>
                                  </div>
                                  <hr />
                                  <div className='row' style={{ marginTop: "-0.5rem" }}>
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

                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='card advance-card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Advance</h5>
                      <ul>
                        {
                          data.data.advance.map((deposit, index) => {

                            return < li className={index == 0 ? '' : 'my-3'
                            } >
                              <div className='card stores-card'>
                                <div className='card-body'>
                                  <div className='store-info'>
                                    <img className='store-dp' src={Store} />
                                    <div className='store-infos'>
                                      <span className='store-name'>Tony T store</span>
                                      <span className='store-balance'>$12435.65</span>
                                    </div>
                                  </div>
                                  <hr />
                                  <div className='row' style={{ marginTop: "-0.5rem" }}>
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

                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <div className='card user-card'>
                    <div className='card-body'>
                      <h5 className='card-title'>User</h5>
                      <ul>
                        {
                          data.data.user.map((deposit, index) => {

                            return < li className={index == 0 ? '' : 'my-3'
                            } >
                              <div className='card stores-card'>
                                <div className='card-body'>
                                  <div className='store-info'>
                                    <img className='store-dp' src={Store} />
                                    <div className='store-infos'>
                                      <span className='store-name'>Tony T store</span>
                                      <span className='store-balance'>$12435.65</span>
                                    </div>
                                  </div>
                                  <hr />
                                  <div className='row' style={{ marginTop: "-0.5rem" }}>
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

                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>



            </div>

          )}
        </div>} title="Dashboard" ></NavBar>


      </div >
    )
  }
}


const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 620;

  console.log("secret ---", width);

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function Dashboard() {
  return (
    <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
  );
}

