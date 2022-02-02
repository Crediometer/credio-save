// import "./TransactionHistory.css";
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

const TransactionHistory = () => {
    return ( 
        <>
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
       </>
     );
}
 
export default TransactionHistory;