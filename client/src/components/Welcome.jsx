import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";
import Loader from "./Loader";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handlechange }) => (
  <input
    placeholder={placeholder}
    name={name}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handlechange}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const handleSubmit = () => {}; 
  const connectWallet = () => {};
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
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center   items-center my-5 bg-[#2952e3] p-3 rounded-md cursor-pointer hover:bg-[#2546bd]"
          >
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
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
                <p className="text-white font-light text-sm ">
                  address
                  {}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum Wallet
                  {}
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Enter your Ethereum address"
              name="address"
              type="text"
              handlechange={() => {}}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handlechange={() => {}}
            />
            <Input
              placeholder="Keyword (GIF)"
              name="keyword"
              type="text"
              handlechange={() => {}}
            />
            <Input
              placeholder="Enter message"
              name="message"
              type="text"
              handlechange={() => {}}
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
