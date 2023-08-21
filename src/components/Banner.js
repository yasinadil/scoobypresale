import React, { useEffect, useState } from "react";
import "../scss/banner.scss";
import heading from "../assests/scoob/pngegg.png";
import { BigNumber, ethers } from "ethers";
import ETH from "../assests/scoob/eth.svg";
import USET from "../assests/scoob/usdt.svg";
import logo from "../assests/logo.png";
import { Web3Button } from "@thirdweb-dev/react";
import { useAddress, useBalance, useChainId } from "@thirdweb-dev/react";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";
import { Network, Alchemy } from "alchemy-sdk";
import { useSwitchChain } from "@thirdweb-dev/react";
import { Ethereum } from "@thirdweb-dev/chains";
import {
  presale_address,
  usdt_address,
  chainlink_address,
} from "../config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PRESALE_ABI = require("../config/ABI.json");
const USDT_ABI = require("../config/USDT.json");
const CHAINLINK_ABI = require("../config/Chainlink_ABI.json");
require("dotenv").config();

// const settings = {
//   apiKey: "LK5riXBIuRJgosOlAvRdtxW0pZXhfTdi", // Replace with your Alchemy API Key.
//   network: Network.ETH_MAINNET, // Replace with your network.
// };
// const alchemy = new Alchemy(settings);

const Banner = () => {
  const [ethInput, setEthInput] = useState("");
  const [usdtInput, setUsdtInput] = useState("");
  const [totalInvestment, setTotalInvestment] = useState("0");
  const [tokenAmount, setTokenAmount] = useState("0");
  const [selectedToken, setSelectedToken] = useState("native");
  const [progress, setProgress] = useState(0);
  const [approved, setApproved] = useState(false);

  const address = useAddress();
  const { data } = useBalance(NATIVE_TOKEN_ADDRESS);
  const { data: usdtBalance } = useBalance(usdt_address);
  const chainId = useChainId();
  const switchChain = useSwitchChain();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (num) => {
    // console.log(num)
    return num.toString().padStart(2, "0");
  };

  useEffect(() => {
    async function load() {
      const provider = new ethers.providers.AlchemyProvider(
        "homestead",
        process.env.REACT_APP_ALCHEMY_API
      );
      const Presale = new ethers.Contract(
        presale_address,
        PRESALE_ABI,
        provider
      );

      const totalInvestment = await Presale.totalInvestment();

      setTotalInvestment(
        Number(ethers.utils.formatEther(totalInvestment.toString()))
          .toFixed(0)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
      const proggy =
        (Number(ethers.utils.formatEther(totalInvestment.toString())).toFixed(
          0
        ) /
          540000) *
        100;
      setProgress(proggy);
    }
    load();
  }, []);

  useEffect(() => {
    if (address && chainId !== 1) {
      switchChain(Ethereum.chainId).catch((error) =>
        toast.error(error.message.split(".")[0], {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      );
    }
  }, [address, chainId]);

  const calculateTimeLeft = () => {
    // const difference = new Date('July 10, 2023 00:00:00') - new Date()
    let difference = new Date("August 31, 2023 12:00:00") - new Date();

    // console.log(difference)
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    // console.log(timeLeft)
    return timeLeft;
  };

  const [time, setTime] = useState(calculateTimeLeft());

  const handleSuccessUSDTApproval = () => {
    setApproved(true);
  };

  const handleUSDTBuySuccess = () => {
    setApproved(false);
    setUsdtInput("0");
    setTokenAmount("0");
    toast.success("Transaction Successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleNativeError = (error) => {
    toast.error(error.reason, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const getETH2Token = async (etherInput) => {
    if (etherInput === "0" || etherInput === "0." || etherInput === "") return;
    const provider = new ethers.providers.AlchemyProvider(
      "homestead",
      process.env.REACT_APP_ALCHEMY_API
    );
    const Presale = new ethers.Contract(presale_address, PRESALE_ABI, provider);
    const price = "1111000000000000000000";
    const divider = "1000000000000000000";
    const answer = await Presale.calculateUsd(
      ethers.utils.parseEther(etherInput)
    );

    const value = BigNumber.from(answer)
      .mul(BigNumber.from(price))
      .div(BigNumber.from(divider));

    const stringValue = ethers.utils.formatEther(value.toString());

    setTokenAmount(Number(stringValue).toFixed(0).toString());
  };

  const getUSDT2Token = (tetherAmount) => {
    setTimeout(() => {
      if (tetherAmount.includes(".")) {
        setTokenAmount("0");
        setUsdtInput("0");
        return;
      }

      if (tetherAmount === "0" || tetherAmount === "0.") {
        setTokenAmount("0");
        return;
      }
      if (
        tetherAmount === "" ||
        tetherAmount === "0" ||
        tetherAmount === "0.0"
      ) {
        setTokenAmount("0");
        return;
      }

      const price = "1111";

      const value = BigNumber.from(tetherAmount).mul(BigNumber.from(price));

      const stringValue = value.toString();
      console.log(Number(stringValue).toFixed(0).toString());

      setTokenAmount(Number(stringValue).toFixed(0).toString());
    }, 1000);
  };

  const max = async () => {
    if (!address) {
      toast.warn("Connect your wallet", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (selectedToken === "native" && data) {
      setEthInput(data.displayValue);
      await getETH2Token(data.displayValue);
    } else if (selectedToken === "usdt" && usdtBalance) {
      const bigN = usdtBalance.displayValue;
      // const stringVal = Number(bigN).toFixed(0).toString();
      // const formatted = ethers.utils.formatUnits(stringVal, 6);
      setUsdtInput(bigN.split(".")[0]);
      getUSDT2Token(bigN.split(".")[0]);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <section id="banner">
        <div className="container_wrapper">
          <div className="container">
            <div className="content">
              <div className="heading">
                <img src={heading} alt="" />
                {/* <div className="contract_btns">
                  <div className="buy_content">
                    <a
                      className="btn"
                      target="_blank"
                      href="https://t.me/ScoobyDooGlobal"
                    >
                      TELEGRAM
                    </a>
                    <a
                      className="btn"
                      target="_blank"
                      href="https://pancakeswap.finance/swap?outputCurrency=0x055393ad05ec7e8101695fc7018d10d1fd2645d0"
                    >
                      BUY $SCOOBYDOO
                    </a>
                  </div>
                  <div className="contract_address">
                    <p>0x055393AD05ec7e8101695fC7018D10d1fD2645d0</p>
                    <div className="copy_icon">
                      <FaCopy />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="wallet_box_wrapper" id="presale">
              <div className="wallet_box">
                <div className="wallet_box_content">
                  <h1 className="heading">Presale is Live Now!</h1>
                  <div className="topper">
                    {time.days > 0 ||
                    time.hours > 0 ||
                    time.minutes > 0 ||
                    time.seconds > 0 ? (
                      <div className="timer">
                        <div>{formatTime(time.days)}d</div>
                        <div>{formatTime(time.hours)}h</div>
                        <div>{formatTime(time.minutes)}m</div>
                        <div>{formatTime(time.seconds)}s</div>
                      </div>
                    ) : null}
                  </div>
                  <div className="sub_heading">
                    <h3>USDT Raised: ${totalInvestment} / $540,000</h3>
                  </div>
                  {/* <div className="line">
                    <div></div>
                    <p>UNTIL SOLD OUT</p>
                  </div> */}
                  <div className="line">
                    <div
                      className="color"
                      style={{ width: `${progress}%` }}
                    ></div>
                    <p>UNTIL SOLD OUT</p>
                  </div>
                  <h2>
                    <b></b> 1 $Scooby = $0.0009 <b></b>
                  </h2>
                  <div className="wallet_btns">
                    <div className="btns">
                      <button
                        onClick={() => {
                          setSelectedToken("native");
                          setEthInput("");
                          setUsdtInput("");
                          setTokenAmount("0");
                        }}
                      >
                        <img src={ETH} alt="" srcSet="" />
                        <span> ETH</span>
                      </button>
                      <button
                        onClick={() => {
                          setSelectedToken("usdt");
                          setEthInput("");
                          setUsdtInput("");
                          setTokenAmount("0");
                        }}
                      >
                        <img src={USET} alt="" srcSet="" />{" "}
                        <span>ETH USDT</span>
                      </button>
                    </div>
                    <div className="inputs">
                      {selectedToken === "native" && (
                        <div className="input_wrapper">
                          <span>
                            Pay with ETH <b onClick={max}>Max</b>
                          </span>
                          <div className="input">
                            <input
                              onChange={async (event) => {
                                setEthInput(event.target.value);
                                await getETH2Token(event.target.value);
                              }}
                              value={ethInput}
                              type="text"
                              placeholder="0"
                            />
                            <img src={ETH} alt="" srcSet="" />{" "}
                          </div>
                        </div>
                      )}

                      {selectedToken === "usdt" && (
                        <div className="input_wrapper">
                          <span>
                            Pay with USDT <b onClick={max}>Max</b>
                          </span>
                          <div className="input">
                            <input
                              disabled={approved}
                              onChange={async (event) => {
                                setUsdtInput(event.target.value);
                                getUSDT2Token(event.target.value);
                              }}
                              value={usdtInput}
                              type="text"
                              placeholder="0"
                            />
                            <img src={USET} alt="" srcSet="" />{" "}
                          </div>
                        </div>
                      )}

                      <div className="input_wrapper">
                        <span>Receive $SCOOBY</span>
                        <div className="input">
                          <input
                            disabled={true}
                            type="text"
                            value={tokenAmount}
                            onChange={(event) =>
                              setTokenAmount(event.target.value)
                            }
                            placeholder="0"
                          />
                          <img src={logo} alt="" srcSet="" />{" "}
                        </div>
                      </div>
                    </div>{" "}
                    {/* <div className="bottom_btn">
                      <button>CONNECT WALLET</button>
                    </div> */}
                    <div className="bottom_btn_new">
                      {selectedToken === "native" ? (
                        <Web3Button
                          contractAddress={presale_address}
                          contractAbi={PRESALE_ABI}
                          theme="dark"
                          // Call the name of your smart contract function
                          action={(contract) =>
                            contract.call("purchaseTokensWithETH", [], {
                              value: ethers.utils.parseEther(ethInput),
                            })
                          }
                          onSuccess={() =>
                            toast.success("Transaction Successful!", {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "colored",
                            })
                          }
                          onError={(error) => handleNativeError(error)}
                        >
                          <span>BUY NOW</span>
                        </Web3Button>
                      ) : approved ? (
                        <Web3Button
                          contractAddress={presale_address}
                          contractAbi={PRESALE_ABI}
                          theme="dark"
                          // Call the name of your smart contract function
                          action={(contract) =>
                            contract.call("purchaseTokensWithStableCoin", [
                              ethers.utils.parseEther(usdtInput),
                            ])
                          }
                          onSuccess={() => handleUSDTBuySuccess()}
                          onError={(error) =>
                            toast.error(error.reason, {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "colored",
                            })
                          }
                        >
                          <span>BUY NOW</span>
                        </Web3Button>
                      ) : (
                        <Web3Button
                          isDisabled={
                            usdtInput === "" ||
                            usdtInput === "0" ||
                            usdtInput === "0."
                          }
                          contractAddress={usdt_address}
                          contractAbi={USDT_ABI}
                          theme="dark"
                          // Call the name of your smart contract function
                          action={(contract) =>
                            contract.call("approve", [
                              presale_address,
                              ethers.utils.parseUnits(usdtInput, 6),
                            ])
                          }
                          onSuccess={() => handleSuccessUSDTApproval()}
                          onError={(error) =>
                            toast.error(error.reason, {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "colored",
                            })
                          }
                        >
                          <span>APPROVE</span>
                        </Web3Button>
                      )}
                      {address && (
                        <Web3Button
                          style={{ marginTop: "1rem" }}
                          contractAddress={presale_address}
                          contractAbi={PRESALE_ABI}
                          theme="dark"
                          // Call the name of your smart contract function
                          action={(contract) =>
                            contract.call("claimTokens", [])
                          }
                          onSuccess={() =>
                            toast.success(
                              "You've successfully claimed your $Scooby's",
                              {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "colored",
                              }
                            )
                          }
                          onError={(error) =>
                            toast.error(error.reason, {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "colored",
                            })
                          }
                        >
                          <span>CLAIM</span>
                        </Web3Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="wallet_box_btn">
                <button>
                  <a href="#">Whitepaper </a>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section id="disclainmer">
        <div
          className="container"
          style={{
            maxWidth: "800PX",
            margin: "90px auto 90px",
            padding: "30px 40px",
            background: "white",
            borderRadius: "20px",
            border: "4px solid black",
          }}
        >
          <div
            className="heading
"
          >
            <div className="para">
              <p>
                Welcome to Scooby Doo Dooby Doo, when Elon tweets, the crypto
                world listens. And this time, he's set the stage for the next
                big thing with a simple 'Scooby Doo Dooby Doo!' Don't miss out
                on the race to a multibillion-dollar market cap!
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
