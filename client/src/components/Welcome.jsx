import React, { useContext } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";
import Loader from "./Loader";
import { TransactionContext } from "../context/TransactionContext";
import { Input } from "../fragments/InputField";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
  const { wallet, addr, formData, handleChange, sendTransaction } =
    useContext(TransactionContext);
  let button = null;
  if (!addr.length) {
    button = (
      <button
        type="button"
        onClick={wallet}
        className="flex flex-row justify-center   items-center my-5 bg-[#2952e3] p-3 rounded-md cursor-pointer hover:bg-[#2546bd]"
      >
        <p className="text-white text-base font-semibold">Connect Wallet</p>
      </button>
    );
  } else {
    button = (
      <p className="text-center mt-5 text-gradient font-semibold md:w-9/12 w-11/12 text-ellipsis">
        You are connected to the Ethereum network.
      </p>
    );
  }
  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br />
            Across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Krypt.
          </p>
          {button}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 mb-8">
            <div className={`rounded-tl-md ${commonStyles}`}>Reliablity</div>
            <div className={`${commonStyles}`}>Security</div>
            <div className={`rounded-tr-md ${commonStyles}`}>Ether</div>
            <div className={`rounded-bl-md ${commonStyles}`}>Web 3.0</div>
            <div className={`${commonStyles}`}>Low fees</div>
            <div className={`rounded-br-md ${commonStyles}`}>Blockchain</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full ">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-md border-2 border-[#3a3b3c] flex justify-center items-center">
                  <SiEthereum fontSize={21} color={"#18191a"} />
                </div>
                <BsInfoCircle fontSize={17} color={"3a3b3c"} />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {addr.slice(0, 10)}...{addr.slice(-10)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum Wallet
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {false ? (
              <Loader />
            ) : (
              <button
                className="text-white w-full border-[1px] border-[#3d4f7c] flex flex-row justify-center items-center my-2 p-2 rounded-md cursor-pointer"
                onClick={handleSubmit}
              >
                Pay Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
