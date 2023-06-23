import { useEffect, useMemo, useState } from "react";
import "./app.css"
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
 const [questionNumber, setQuestionNumber] = useState(1);
 const [stop, setStop] = useState(false);
 const [earned, setEarned] = useState("₹ 0");

 const data = [
  {
    id: 1,
    question: "Rolex is a company that specializes in what type of product?",
    answers: [
      {
        text: "Phone",
        correct: false,
      },
      {
        text: "Watches",
        correct: true,
      },
      {
        text: "Food",
        correct: false,
      },
      {
        text: "Cosmetic",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "When did the website `Facebook` launch?",
    answers: [
      {
        text: "2004",
        correct: true,
      },
      {
        text: "2005",
        correct: false,
      },
      {
        text: "2006",
        correct: false,
      },
      {
        text: "2007",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Who played the character of harry potter in movie?",
    answers: [
      {
        text: "Johnny Deep",
        correct: false,
      },
      {
        text: "Leonardo Di Caprio",
        correct: false,
      },
      {
        text: "Denzel Washington",
        correct: false,
      },
      {
        text: "Daniel Red Cliff",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question: "Which type of JavaScript language is ?",
    answers: [
      {
        text: "Object-Oriented",
        correct: false,
      },
      {
        text: "Object-Based",
        correct: true,
      },
      {
        text: "Assembly-language",
        correct: false,
      },
      {
        text: "high-level",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "The function and var are known as ?",
    answers: [
      {
        text: "Keywords",
        correct: false,
      },
      {
        text: "Data types",
        correct: false,
      },
      {
        text: "Declaration statements",
        correct: true,
      },
      {
        text: "Prototypes",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "bhai tu hai kya ?",
    answers: [
      {
        text: "Gandu",
        correct: false,
      },
      {
        text: "Chutiya",
        correct: false,
      },
      {
        text: "Bhosdike",
        correct: false,
      },
      {
        text: "All of the above",
        correct: true,
      },
    ],
  },
  {
    id: 7,
    question: "what did the boy with no hands get for his birthday ?",
    answers: [
      {
        text: "voice controller device",
        correct: false,
      },
      {
        text: "plastic hand ",
        correct: false,
      },
      {
        text: "I dont know, he hasn't opened it yet",
        correct: true,
      },
      {
        text: "none",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: "why do java programmers wear glasses?",
    answers: [
      {
        text: "they all are Nerd",
        correct: false,
      },
      {
        text: "they don't C#",
        correct: true,
      },
      {
        text: "they all are gandu",
        correct: false,
      },
      {
        text: "None ",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "what oop stand for  ?",
    answers: [
      {
        text: "oye oye papu",
        correct: false,
      },
      {
        text: "oh oh pyar",
        correct: false,
      },
      {
        text: "object oriented programming",
        correct: true,
      },
      {
        text: " oye omkar pyari",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "which of the following is not a valid SQl type ?",
    answers: [
      {
        text: "Decimal",
        correct: true,
      },
      {
        text: "Float",
        correct: false,
      },
      {
        text: "Numeric",
        correct: false,
      },
      {
        text: "character",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "which statement is used to delete all rows ina table without havingthe action logged ?",
    answers: [
      {
        text: "Delete",
        correct: false,
      },
      {
        text: "Truncate",
        correct: true,
      },
      {
        text: "Remove",
        correct: false,
      },
      {
        text: "Drop",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: "SQL Views are also known as ?",
    answers: [
      {
        text: "Simple tables",
        correct: false,
      },
      {
        text: "Complex tables",
        correct: false,
      },
      {
        text: "Virtual tables",
        correct: true,
      },
      {
        text: "Actual tables",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: " How many Primary keys can have in a table?",
    answers: [
      {
        text: "Depends on no of Columns",
        correct: false,
      },
      {
        text: "Depends on DBA",
        correct: false,
      },
      {
        text: "Only 2",
        correct: false,
      },
      {
        text: "Only 1",
        correct: true,
      },
    ],
  },
  {
    id: 14,
    question: "Which datatype can store unstructured data in a column?",
    answers: [
      {
        text: "Char",
        correct: false,
      },
      {
        text: "Raw",
        correct: true,
      },
      {
        text: "Numeric",
        correct: false,
      },
      {
        text: "Varchar",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question: "Which operator is used to compare a value to a specified list of values ?",
    answers: [
      {
        text: "In",
        correct: true,
      },
      {
        text: "Any",
        correct: false,
      },
      {
        text: "Between",
        correct: false,
      },
      {
        text: "All",
        correct: false,
      },
    ],
  },
];

  const moneyPyramid = useMemo(()=>
    [
      {id:1, amount:"₹ 1000"},
      {id:2, amount:"₹ 2000"},
      {id:3, amount:"₹ 3000"},
      {id:4, amount:"₹ 5000"},
      {id:5, amount:"₹ 10,000"},
      {id:6, amount:"₹ 20,000"},
      {id:7, amount:"₹ 40,000"},
      {id:8, amount:"₹ 80,000"},
      {id:9, amount:"₹ 1,60,000"},
      {id:10, amount:"₹ 3,20,000"},
      {id:11, amount:"₹ 6,40,000"},
      {id:12, amount:"₹ 12,50,000"},
      {id:13, amount:"₹ 25,00,000"},
      {id:14, amount:"₹ 50,00,000"},
      {id:15, amount:"₹ 7 Crore"}
    ].reverse(),
  []) 

  useEffect(()=>{
    questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber-1).amount);
    
  },[moneyPyramid,questionNumber]);

   return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setStop={setStop}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setStop={setStop}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
