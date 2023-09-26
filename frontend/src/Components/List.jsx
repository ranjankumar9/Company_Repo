import React from 'react';

function QuestionnaireList({ submissions }) {
  return (
    <div>
      <h2>Previous Submissions</h2>
      <ul>
        {submissions.map((submission, index) => (
          <li key={index}>
            <p>Name: {submission.name}</p>
            <p>Email: {submission.email}</p>
            <p>Phone: {submission.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionnaireList;
