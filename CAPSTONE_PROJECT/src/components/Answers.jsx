import React, { useMemo } from "react";

const Answers = ({ questions, currentQuestions, handleAnswerOptionClick }) => {
  const currentQuestion = questions[currentQuestions];

  if (!currentQuestion) return null;

  // Combine and shuffle answers
  const answers = useMemo(() => {
    const allAnswers = [
      currentQuestion.correct_answer,
      ...currentQuestion.incorrect_answers,
    ];

    return allAnswers.sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

  return (
    <div className="flex flex-col gap-3">
      {answers.map((answer, index) => (
        <button
          key={index}
          onClick={() =>
            handleAnswerOptionClick(
              answer === currentQuestion.correct_answer,
              answer
            )
          }
          className="bg-white rounded-xl px-4 py-2 font-semibold hover:bg-gray-200"
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;
