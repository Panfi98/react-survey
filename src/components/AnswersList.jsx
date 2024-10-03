import AnswersItem from "./AnswersItem";
import { useState, useEffect } from "react";

export default function AnswersList({answersList}) {

  return (
    <ul>  
      {answersList.map((answerItem, index) =>(
        <AnswersItem 
            answerItem={answerItem}
            key={index}/>
      ))}   
    </ul>
    // {<ul>
    //   {answersList.map((answerItem, i) => (
    //     <AnswersItem answerItem={answerItem} key={i} />
    //   ))}
    // </ul>}
  );
}
