import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem"; 

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch the quiz questions data from local server
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:4000/questions");
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching quiz questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
