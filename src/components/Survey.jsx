import { useState, useEffect } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [answers, setAnswers] = useState([])

  const handleSubmit = (newForm) =>{
    
    setAnswers(prevAnswers =>[...prevAnswers, newForm])
  }

  useEffect(() => {
    console.log(answers);
  },[answers])

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
         {<AnswersList answersList={answers} />}
      </section>
      <section className="survey__form"><Form handleSubmit={handleSubmit}/></section>
    </main>
  );
}

export default Survey;
