import React, { useState, useMemo } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./create.css";
import Store from "../../image/Store.png";
import countryList from "../countries.json";
import { useNavigate } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import SideBar from "../../components/sidebar/Sidebar";
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


const DesktopComponent = () => {

    let newDate = new Date();
    let year = newDate.getFullYear();
    const [country, setCountry] = useState({
        "label": "Nigeria",
        "value": "+234",
        "code": "NG"
    });
    const [accountName, setaccountName] = useState(null);
    const [accountNumber, setaccountNumber] = useState(null);
    const [comfAccountNumber, setcomfAccountNumber] = useState(null);
    const [bankName, setBankName] = useState(null);
    const [errorState, setError] = useState([false, ""]);
    const [loading, setLoading] = useState(false);
    const [businessAddress, setBusinessAddress] = useState(null);
    const [businessName, setBusinessName] = useState(null);
    const [businessType, setBusinessType] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const history = useNavigate();


    const handleAccountName = (e) => {
        const value = e.target.value;
        console.log(value);
        setaccountName(value);
    };
    const handleAccountNumber = (e) => {
        const value = e.target.value;
        console.log(value);
        setaccountNumber(value);
    };
    const handleComfAccountNumber = (e) => {
        const value = e.target.value;
        console.log(value);
        setcomfAccountNumber(value);
    };
    const handleBank = (e) => {
        const value = e.target.value;
        console.log(value);
        setBankName(value);
    };
    const handleBusinessAddress = (e) => {
        const value = e.target.value;
        console.log(value);
        setBusinessAddress(value);
    };
    const handleBusinessName = (e) => {
        const value = e.target.value;
        console.log(value);
        setBusinessName(value);
    };
    const handleBusinessType = (e) => {
        const value = e.target.value;
        console.log(value);
        setBusinessType(value);
    };
    const handlephoneNumber = (e) => {
        const value = e.target.value;
        console.log(value);
        setPhoneNumber(value);
    };
    const handleSubmit = async () => {
        //post the login creds
        console.log("here????");
        // e.preventDefault();
        let data = JSON.parse(sessionStorage.getItem("tokenManager"))

        try {

            if (businessType &&
                businessAddress &&
                businessName &&
                phoneNumber &&
                accountName &&
                accountNumber &&
                (comfAccountNumber == accountNumber) &&
                bankName) {
                console.log("here at all?");

                setLoading(true);
                setError([false, ""]);
                const raw = {

                    businessType,
                    businessAddress,
                    businessName,
                    phoneNumber,
                    accountName,
                    accountNumber,
                    branch: bankName,

                };
                // console.log(`${raw}`);
                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": `Bearer ${data.token.token}`,
                    },
                    body: JSON.stringify(raw),
                    redirect: "follow",
                };

                let response = await fetch(
                    `https://credio-merchant.herokuapp.com/api/v1/credio_store/createUser`,
                    requestOptions
                );

                console.log("response -- ", response.status)

                if (response.status === 200) {
                    let message = await response.json();
                    console.log(message);
                    history(`/dashboard`);
                } else {
                    setLoading(false);
                    let message = await response.json();
                    console.log("An error occured", message);
                    setError([true, message['message'] || "Something went wrong"]);

                }
            } else {
                console.log("error ooo", businessType,
                    businessAddress,
                    businessName,
                    phoneNumber,
                    accountName,
                    accountNumber,
                    bankName);
            }

        } catch (e) {
            setLoading(false);

            setError([true, e.message || "Something went wrong"]);
        }

        // setData([country, number, password]);
        // console.log(data);
        // history.push(`/dashboard`);
    };
    const { width } = useViewport();
    const breakpoint = 620;
    if(width<breakpoint){
        return (
            <div>
                <NavBar navIndex="new user"></NavBar>
            <SideBar index='create'></SideBar>

            <div className='mobile-cnt-newuser'>
                    <ul className='business-detail-mobile'>
                        <h3 className=''>Business details</h3>
                        <li className=' business-details-mobile'>
                            <span className='business-text-mobile'>Business Name</span>
                            <input type="text" name="businessName" onBlur={handleBusinessName} required className='business-input-mobile' />
                        </li>
                        <li className='business-details-mobile'>
                            <span className='business-text-mobile'>Phone Number</span>
                            <input type="text" onBlur={handlephoneNumber} required name="phoneNumber" className='business-input-mobile' />
                        </li>
                        <li className=' business-details-mobile'>
                            <span className='business-text'>Address</span>
                            <input type="text" onBlur={handleBusinessAddress} required name="address" className='business-input-mobile' />
                        </li>
                        <li className='business-details-mobile'>
                            <span className='business-text'>Business Type</span>
                            <input type="text" onBlur={handleBusinessType} required name="businessType" className='business-input-mobile' />
                        </li>
                        <li className='business-details-mobile'>
                            <span className='business-text'>Add Business Logo</span>
                            <input type="file" className='file-upload-mobile' placeholder='AddLogo' />
                        </li>
                
                        
                    </ul>
                    <ul className='business-detail-mobile'>
                        <h3>Bank details</h3>
                        <li className='business-details-mobile'>
                            <span className='business-text-mobile'>Account Holder Name</span>
                            <input type="text" onBlur={handleAccountName} required name="acctName" className='business-input-mobile' />
                        </li>
                        <li className='business-details-mobile'>
                            <span className='business-text-mobile'>Account Number</span>
                            <input type="text" onBlur={handleAccountNumber} required name="acctNumber" className='business-input-mobile' />
                        </li>
                        <li className='business-details-mobile'>
                            <span className='business-text-mobile'>Confirm Account Number</span>
                            <input type="text" onBlur={handleComfAccountNumber} required name="comfAcctNumber" className='business-input-mobile' />
                        </li>
                        <li className='business-details-mobile'>
                            <span className='business-text'>Branch</span>
                            <input type="text" onBlur={handleBank} required name="branch" className='business-input-mobile' />
                        </li>
                        <span className='verification-mobile'>To verify your Account we'll send you two tiny deposit within 1-2 days</span>
                    </ul>
                    

            </div>
            </div>
        )
    }
    else return (
        <div>
            <NavBar></NavBar>
            <SideBar index='create'></SideBar>

            <div className='display-page'>

                <div className='dashboard-navbar'>
                    <a style={{ marginLeft: "-2.5rem", fontWeight: "700" }} className='dashboard-nav'>Create New Users</a>
                    <button className='btn btn-danger' onClick={handleSubmit} disabled={loading}
                    >
                        {loading ? (
                            <FontAwesomeIcon
                                className="spinner"
                                icon={faSpinner}
                            ></FontAwesomeIcon>
                        ) : (
                            <span>Submit</span>
                        )}</button>
                </div>

                <div className='card create-user-card'>
                    <ul className='business-detail'>
                        <h3 className='my-2'>Business details</h3>
                        <li className='mx-3 business-details'>
                            <span className='business-text'>Business Name</span>
                            <span className='colon'>:</span>
                            <input type="text" name="businessName" onBlur={handleBusinessName} required className='mx-3 business-input' />
                        </li>
                        <li className='mx-3 my-3 business-details'>
                            <span className='business-text'>Phone Number</span>
                            <span className='colon'>:</span>
                            <input type="text" onBlur={handlephoneNumber} required name="phoneNumber" className='mx-3 business-input' />
                        </li>
                        <li className='mx-3 my-3 business-details'>
                            <span className='business-text'>Address</span>
                            <span className='colon'>:</span>
                            <input type="text" onBlur={handleBusinessAddress} required name="address" className='mx-3 business-input' />
                        </li>
                        <li className='mx-3 my-5 business-details'>
                            <span className='business-text'>Business Type</span>
                            <span className='colon'>:</span>
                            <input type="text" onBlur={handleBusinessType} required name="businessType" className='mx-3 business-input' />
                        </li>
                    </ul>
                    <ul className='bank-detail'>
                        <h3>Bank details</h3>
                        <li className='mx-3 business-details'>
                            <span className='business-text'>Account Holder Name</span>
                            <span className='colon'>:</span>
                            <input type="text" onBlur={handleAccountName} required name="acctName" className='mx-3 business-input' />
                        </li>
                        <li className='mx-3 my-3 business-details'>
                            <span className='business-text'>Account Number</span>
                            <span className='colon'>:</span>
                            <input type="text" onBlur={handleAccountNumber} required name="acctNumber" className='mx-3 business-input' />
                        </li>
                        <li className='mx-3 my-3 business-details'>
                            <span className='business-text'>Confirm Account Number</span>
                            <span className='colon'>:</span>
                            <input type="text" onBlur={handleComfAccountNumber} required name="comfAcctNumber" className='mx-3 business-input' />
                        </li>
                        <li className='mx-3 my-3 business-details'>
                            <span className='business-text'>Branch</span>
                            <span className='colon'>:</span>
                            <input type="text" onBlur={handleBank} required name="branch" className='mx-3 business-input' />
                        </li>
                        <span className='my-4 verification'>To verify your Account we'll send you two tiny deposit within 1-2 days</span>
                    </ul>
                    <input type="file" className='file-upload' placeholder='Add a Business Logo' />
                </div>

            </div>
        </div >
    )
}


export default function Create() {
    return (
        <ViewportProvider>
            <DesktopComponent />
        </ViewportProvider>
    );
}