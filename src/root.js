import Navbar from "./components/layout/navbar";
import Quizlist from "./components/quizList";
import { data } from "./data/quizData"

export default function Root() {



    return(<>
        <Navbar></Navbar>
        <div className="container">
            <Quizlist></Quizlist>
        </div>
        
    </>);
}