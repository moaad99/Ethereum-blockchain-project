import { JsonRpcBatchProvider } from "@ethersproject/providers";
import React, { useContext, useEffect } from "react";
import eth from "../assets/ether.png";

import { TransactionContext } from "../context/TransactionContext";
const Home = () => {
  const {
    connectwallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  const companyCommonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
  return (
    <div className="Home">
      <div className="text">
        <h1 style={{ fontSize: "38px" }} className="text-gradient">
          Send Crypto <br /> across the world
        </h1>
        <br />
        <h4
          style={{ color: "white", fontFamily: "serif" }}
          className="text-white"
        >
          Explore the crypto world Buy and <br /> sell cryptocurrencies easily
          on Krypto.
        </h4>{" "}
        <br />
        {!currentAccount && (
          <button
            onClick={() => connectwallet()}
            type="button"
            className="button-29 btn btn-primary btn-lg 
        "
          >
            Connect Wallet
          </button>
        )}
        {currentAccount && (
          <button
            
            type="button"
            className="button-29 btn btn-primary btn-lg 
        "
          >
            Connected
          </button>
        )}
        <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
          <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
            Reliability
          </div>
          <div className={companyCommonStyles}>Security</div>
          <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
            Ethereum
          </div>
          <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
            Web 3.0
          </div>
          <div className={companyCommonStyles}>Low Fees</div>
          <div className={`rounded-br-2xl ${companyCommonStyles}`}>
            Blockchain
          </div>
        </div>
        <br />
      </div>
      <div className="eth">
        <img
          src={eth}
          alt=""
          style={{ borderRadius: "20px", height: "250px" }}
        />
      </div>
      <div className="pic">
        <div className="bord">
          <div className="form">
            <div className="form-group">
              <label></label>
              <input
                type="text"
                className="form-control"
                placeholder="Wallet Adress"
                aria-describedby="helpId"
                onChange={handleChange}
                id="addressTo"
              />
            </div>
            <div className="form-group">
              <label></label>
              <input
                id="amount"
                type="text"
                className="form-control"
                placeholder="Amount ETH"
                aria-describedby="helpId"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label></label>
              <input
                id="keyword"
                type="text"
                className="form-control"
                placeholder="Keyword"
                aria-describedby="helpId"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label></label>
              <input
                onChange={handleChange}
                id="message"
                type="text"
                className="form-control"
                placeholder="Message"
                aria-describedby="helpId"
              />
            </div>
            <br />
            <button
              type="button"
              style={{ color: "white", width: "100%" }}
              className="btn btn-secondary "
              onClick={handleSubmit}
            >
              Send Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
