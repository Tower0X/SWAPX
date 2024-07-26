import Footer from "../footer";
import "../App.css";
import LightBG from "../assets/foreground-image-light.webp";
import DarkBG from "../assets/foreground-image-dark.webp";
import SpinCard from "./spinCard";
import OverView from "./Marketoverview";
import portfolio from "../assets/portflio.png";
import identify from "../assets/identify.png";
import wallet from "../assets/wallet.png";
import bitcointrade from "../assets/bitcointrade.png";
import USDT from "../assets/asset/USDT.png";
import pot from "../assets/pot.png";
import shiba from "../assets/shiba.png";
import ada from "../assets/ada.png";
import eth from "../assets/asset/eth.png";
import btc from "../assets/asset/bitcoin.png";
import bnb from "../assets/asset/bnb.png";
import busd from "../assets/busd.png";
import smart from "../assets/nft.webp";
import card from "../assets/binance-pay.webp";
import transaction from "../assets/binance-earn.webp";
import privacy from "../assets/privacy.png";
import security from "../assets/security.png";
import encrypt from "../assets/encrypt.png";
import verification from "../assets/trusted-section.webp";
import customerService from "../assets/customerService.png";
import faq from "../assets/faq.png";
import blog from "../assets/blog.png";
import AAlert from "./alert";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function Home() {
    const Navi = useNavigate();
    return <div className="home">
    <AAlert/>
    <div className="homeMain">
        <div className="leftHome">
            <h1>Swap, Pay, and Transfert funds on SWAPX</h1>
            <button onClick={()=>Navi("/account/register")}><i className="fa-solid fa-user"></i><span>Sign up with Email or Phone</span></button>
            <div className="orBlock">
                <span className="A1"></span>
                <div className="pp">or continue with</div>
                <span className="B1"></span>
            </div>
            <div className="redirbtn">
                <button id="gbtn"><i className="fa-brands fa-google"></i>Google</button>
                <button id="abtn"><i className="fa-brands fa-apple"></i>Apple</button>
            </div>
        </div>
        <div className="rightAni">
            <img src={((localStorage.getItem("theme"))==="dark")?DarkBG:LightBG}></img>
        </div>
     </div>
        <div className="cards">
            <div className="box">
                <h3>25+ Payements</h3>
                <p>24h/7 trafert Funds on SwapX </p>
            </div>
            <div className="box">
                <h3>50+ </h3>
                <p>Cryptocurrencies accept</p>
            </div>
            <div className="box">
                <h3>5+ millions</h3>
                <p>Registered users</p>
            </div>
            <div className="box">
                <h3> &lt;0.5%</h3>
                <p>Lowest transaction fees</p>
            </div>
        </div>
    <SpinCard intervalTime={5000}/>
    <div className="Bar">

    </div>
    <OverView/>
    <div className="Bar">

    </div>
    <div className="Title">
            <h1>Your Next Game with SwapX  </h1>
            <h5>start your first Transfert with these easy steps</h5>
    </div>
    <div className="portfolioAds">
        <div className="left">
            <div className="stepsBox">
                <div class="box">
                    <img src={identify}></img>
                    <div>
                        <h2>Create your account</h2>
                        <p>Complete the identity verification process to secure your account and transactions.</p>
                    </div>
                </div>
                <div class="box">
                    <img src={wallet}></img>
                    <div>
                        <h2>Transfert Funds</h2>
                        <p>Transfert funds to any account. You can Transfert funds with a variety of payment methods.</p>
                    </div>
                </div>
                <div class="box">
                    <img src={bitcointrade}></img>
                    <div>
                        <h2>Start Swapping</h2>
                        <p>You're good to go! Buy/sell crypto, set up recurring buys for your investments, and discover what Binance has to offer.</p>
                    </div>
                </div>
                <button onClick={()=> Navi("/account")} className="Button">Get Started</button>
            </div>
        </div>
        <div className="right">
            <img src={portfolio}></img>
        </div>
    </div>
    <div className="earnAds">
        <div>
            <h1>Our crypto Payement accept</h1>
            <h4>Simple & Secure. Search popular coins and start Swapping.</h4>
        </div>
        <div className="boxContainer">
            <div className="box">
                <p>
                    USDT
                </p>
                <div>
                    <img src={USDT}>
                    </img>
                    <span>
                        USDT
                    </span>
                </div>
                <a className="popUp" href="/defi">Learn More</a>
            </div>
            <div className="box">
                <p>
                    BTC
                </p>
                <div>
                    <img src={btc}>
                    </img>
                    <span>
                        BTC
                    </span>
                </div>
                <a className="popUp" href="/defi">Learn More</a>
            </div>
            <div className="box">
                <p>
                    BNB
                </p>            
                <div>
                    <img src={bnb}>
                    </img>
                    <span>
                        BNB
                    </span>
                </div>
                <a className="popUp" href="/defi">Learn More</a>
            </div>
            <div className="box">
                <p>
                    FUSD
                </p>
                <div>
                    <img src={busd}>
                    </img>
                    <span>
                        FUSD
                    </span>
                </div>
                <a className="popUp" href="/defi">Learn More</a>
            </div>
            <div className="box">
                <p>
                    ETH
                </p>
                <div>
                    <img src={eth}>
                    </img>
                    <span>
                        ETH
                    </span>
                </div>
                <a className="popUp" href="/defi">Learn More</a>
            </div>
            <div className="box">
                <p>
                    USDC
                </p>           
                <div>
                    <img src={pot}>
                    </img>
                    <span>
                        USDC
                    </span>
                </div>
                <a className="popUp" href="/defi">Learn More</a>
            </div>
            <div className="box">
                <p>
                    ADA
                </p>               
                <div>
                    <img src={ada}>
                    </img>
                    <span>
                        ADA
                    </span>
                </div>
                <a className="popUp" href="/defi">Learn More</a>
            </div>
            <div className="box">
                <p>
                    Shiba
                </p>             
                <div>
                    <img src={shiba}>
                    </img>
                    <span>
                        Shiba
                    </span>
                </div>
                <a className="popUp" href="/defi">Learn More</a>
            </div>

        </div>
        <button onClick={()=> Navi("/account")} className="Button">Start Swapping</button>

    </div>
    <div className="Explore">
        <h1>Explore endless possibilities with SwapX</h1>
        <div className="boxContainer">
            <div className="box">
                <img src={smart}></img>
                <h2>
                    highest liablity in smart contract
                </h2>
                <p>
                    Strategic profitable trading with smart contract, here Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse nesciunt amet.
                </p>
            </div>
            <div className="box">
                
                <h2>
                    Grow your business with BinanceX banking wire-transference
                </h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, provident possimus, iste commodi dolores ipsum distinctio ducimus assumenda modi laudantium veniam repellat dolor minima quibusdam itaque maxime libero unde fugit?
                </p>
                <img src={card}></img>
            </div>
            <div className="box">
                <img src={transaction}></img>
                <h2>
                    Derivatives ultimately Short-term
                </h2>
                <p>
                    Earn fast, grow fast. Take a risk for more profits
                </p>
            </div>
        </div>
        <button onClick={()=> Navi("/account")} className="Button">Explore Now</button>
    </div>
    <div className="security">
        <h1>Your trusted crypto exchange</h1>
        <h3>Here at Binance, we are committed to user protection with strict protocols and industry-leading technical measures.</h3>
        <div className="Container">
            <div className="boxContainer">
                <div className="box">
                    <section>
                        <img src={security}></img>
                    </section>
                    <div>
                        <h4>
Secure Asset Fund for Users (SAFU)
                        </h4>
                        <p>
                        Binance stores 10% of all trading fees in a secure asset fund to protect a share of user funds.
                        </p>
                    </div>
                </div>
                <div className="box">
                    <section>
                        <img src={privacy}></img>
                    </section>

                    <div>
                        <h4>
                        Personalised Access Control
                        </h4>
                        <p>
                        Personalized access control allows you to restrict devices and addresses that can access your account, for greater ease of mind.
                        </p>
                    </div>
                </div>
                <div className="box">
                    <section>
                         <img src={encrypt}></img>
                    </section>
                    <div>
                        <h4>
                        Advanced Data Encryption
                        </h4>
                        <p>
                        Your transaction data is secured via end-to-end encryption, ensuring that only you have access to your personal information.
                        </p>
                    </div>
                </div>
            </div>
            <section>
             <img src={verification}></img>
            </section>
            

        </div>
        <button onClick={()=> Navi("/account")} className="Button">Get Started</button>

    </div>
    <div className="help">
        <h1>
            Need help?
        </h1>
        <div className="boxContainer">
            <div className="box">
                <img src={customerService}></img>
                <div>
                    <h3>
                    24/7 Chat Support
                    </h3>
                    <p>
                    Get 24/7 chat support with our friendly customer service agents at your service.

                    </p>
                    <a href="#">
                    Chat now
                    </a>
                </div>
            </div>
            <div className="box">
                <img src={faq}></img>
                <div>
                    <h3>
                        FAQs
                    </h3>
                    <p>
                    View FAQs for detailed instructions on specific features.
                    </p>
                    <a>
                        learn more
                    </a>
                </div>
            </div>
            <div className="box">
                <img src={blog}></img>
                <div>
                    <h3>
                        Blog
                    </h3>
                    <p>
                    Stay up to date with the latest stories and commentary.
                    </p>
                    <a>
                    learn more
                    </a>
                </div>
            </div>

        </div>
    </div>
    <div className="footerWrap">
        <h1>Start earning Today</h1>
        <button onClick={()=> Navi("/account")}className="Button">Sign up Now</button>
    </div>
    <Footer/>
</div>
}

export default Home;