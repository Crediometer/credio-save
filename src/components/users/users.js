import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./users.css";
import Store from "../../image/Store.png";
import Loc from "../../image/location.png";
import Bank from "../../image/Icon.png";
import NavBar from "../Navbar/Navbar";
import SideBar from "../sidebar/Sidebar";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className='mobile-display'>
        <div className='mobile-view-heading'>
          <span className='dashboard-heading-text'>Cash Flow</span>
        </div>
        <div className='container my-5 py-2'>
          <div className='mobile-cash-flow-card'>

          </div>
          <div className='current-cash-card my-3'>
            <div className='card-body' style={{ display: "flex", flexDirection: "column" }}>
              <span className='current-cash-amount'>$35000</span>
              <span className='current-cash-text my-3'>Current Cash Balance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
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
    console.log("Users is mounted");
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


    await fetch(`https://credio-merchant.herokuapp.com/api/v1/credio_store/currentUser`,
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

    console.log(data.data);
    return (
      <div>
        <NavBar></NavBar>
        <SideBar ></SideBar>
        <div className='display-page'>

          {!isLoaded ? (
            <div class="container h-100">
              <div class="row h-100 justify-content-center align-items-center">

                <FontAwesomeIcon
                  className="spinner mt-6 mb-4"
                  size="6x"
                  icon={faSpinner}
                ></FontAwesomeIcon>

              </div>
            </div>

          ) : (
            <div >
              <div className='dashboard-navbar'>
                <a href="" className='dashboard-nav'>Current Users</a>

              </div >


              <div className='row p-3'>
                {
                  data.data.map((link) =>
                    <div className='col-md-3'>

                      <ul>
                        < li className='my-3'
                        >
                          <div className='card stores-card'>
                            <div className='card-body'>
                              <div className='store-info py-4'>
                                <img className='store-dp' src={Store} />
                                <div className='store-infos'>
                                  <span className='store-name'>{link.businessName}</span>
                                  <span className='store-balance'>$ {link.balance}</span>
                                </div>
                              </div>
                              <hr />
                              <div className='row' style={{ marginTop: "-0.5rem" }}>
                                <div className='col-md-12 my-2 column-store'>
                                  <span className='deposit-text'>Business Details</span>
                                  <span className='deposit-text'><img src={Loc} className=' pe-2' />{link.businessAddress}</span>
                                </div>
                                <div className='col-md-12 my-2 column-store'>
                                  <span className='deposit-text'>Bank Details</span>
                                  <span className='deposit-text'><img src={Bank} className=' pe-2' />{link.bankDetails.accountNumber} -- {link.bankDetails.ifsc}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>



                      </ul>



                    </div>

                  )
                }

              </div>


            </div>
          )}
        </div>
      </div >
    )
  }

}


const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 620;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function Users() {
  return (
    <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
  );
}

