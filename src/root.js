import Navbar from "./components/layout/navbar";
import Quizlist from "./components/quizList";
import { data } from "./data/quizData"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { HashLink } from 'react-router-hash-link';


export default function Root(props) {

    // useEffect(() => {
    //     const hash = props.history.location.hash;
    //     if(hash && document.getElementById(hash.substr(1))) {
    //         document.getElementById(hash.substr(1)).scrollIntoView({behavior: "smooth"});
    //     }
    // }, [props.history.location.hash]);


    return (<>
        <Navbar></Navbar>
        <div className="wrap-1">
            <div className="box-flow-1" style={{left: "10%", animationDelay: "-2s"}}>Margrét<p> is our coder </p></div>
            <div className="box-flow-1" style={{left: "20%", animationDelay: "-5s"}}>Ásta<p> is our CEO</p></div>
            <div className="box-flow-1" style={{left: "35%", animationDelay: "-1s"}}>Alfreð<p> is our CCO </p></div>
            <div className="box-flow-1" style={{left: "50%", animationDelay: "-3s"}}>Karl<p> is our Marketing Lead</p></div>
            <div className="box-flow-1" style={{left: "65%", animationDelay: "-2.5s"}}>Perla<p> is our Manager Cat</p></div>
            <div className="box-flow-1" style={{left: "84%", animationDelay: "-6s"}}>Sara<p>is our Programming Lead</p></div>
            <div className="box-flow-1" style={{left: "95%", animationDelay: "-10s"}}>Guðmundur<p> is our Web Designer</p></div>
            <div className="right-indicator">
                <div className="active"></div>
                <div></div>
                <div></div>
            </div>
            <div className="container">
                <div className="col-md-4 brand-container">
                    <h1 className="brand-heading">CodeQuiz</h1>
                    <p className="brand-sub-heading">Train your brain</p>
                    <HashLink to={{ pathname: "/", hash: "#take-a-quiz" }}>
                        <button className="btn btn-main">Take a quiz</button>
                    </HashLink>
                </div>
            </div>
        </div>
        <div className="container">
            <h2 id="take-a-quiz" className="text-center mt-5">Take a quiz</h2>
            <Quizlist></Quizlist>
        </div>
        <div className="footer">
            <h1 className="brand-heading">CodeQuiz</h1>
            <p className="brand-sub-heading">Train your brain</p>
        </div>

    </>);
}