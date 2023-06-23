import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";
import win from "../sounds/win.mp3";

export default function Quiz({ data, setStop, questionNumber, setQuestionNumber }) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);
    const [winner] = useSound(win);

    useEffect(() => {
        letsPlay();
    }, [letsPlay]);

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };

    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(2000, () => {
          setClassName(a.correct ? "answer correct" : "answer wrong");
        });

        delay(5000, () => {
            if (a.correct) {
                correctAnswer();
                delay(3000, () => {
                    setQuestionNumber((prev) => prev + 1);
                    setSelectedAnswer(null);
                    if(questionNumber===15){
                        setStop(true);
                        winner();
                    }
                });
                
            } else {
                wrongAnswer();
                delay(3000, () => {
                    setStop(true);
                });

            }
        })
    };
    return (
        <div className="quiz">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a) => (
                    <div className={selectedAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>{a.text} </div>
                ))}
            </div>
        </div>
    )
}