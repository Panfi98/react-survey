// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  return (
    <ul>
         {list.map((item, index) => (
        <li key={index}>{item}</li> // Render each item in the list
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({answerItem}) {

  const boolObjectToList = (timeSpent) =>{
    const keys = Object.keys(timeSpent);
    const timeSpentArray = []
    for (let key of keys){
      if (timeSpent[key]){
        timeSpentArray.push(key)
      }
    }
    return timeSpentArray
  }

  return (
    <li>
      <article className="answer">
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">something</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
        </p>
        <ItemsList list={boolObjectToList(answerItem)}/>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">something</span>
        </p>
      </article>
    </li>
  );
}
