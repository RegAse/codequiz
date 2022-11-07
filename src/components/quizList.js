import { data } from "./../data/quizData"
import "./../styles/quizlist.css"
import { Link } from "react-router-dom";

function Quizlist() {

    // Get the quiz data....
    let quizzes = data["quizzes"];

    return (
        <div className="row quizlist">
            {
                quizzes.map(quiz => (
                    <Link className="col-md-6" to={"/quiz/" + quiz.id}>
                        <div className="quizlist-item">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="quizlist-fakephoto">
                                        <p>{quiz.name}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h2>{quiz.name}</h2>
                                    <p>{quiz.description}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
};
export default Quizlist;