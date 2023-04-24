import React from "react";

function QuestionItem({ question, onDelete, onChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  function handleDeleteClick(e) {
    // Call the onDelete function and pass the question id as an argument
    onDelete(id);
  }

  function handleChange(e) {
    // Call the onChange function and pass the question id and selected value as arguments
    onChange(id, e.target.value);
  
  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} id={id} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick} id={id}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
