import React, { useState } from 'react';
import AddBlog from './AddBlog';
const Time = () => {
  const [submissionTime, setSubmissionTime] = useState('');

  const handleSubmit = () => {
    const currentTime = new Date().toLocaleTimeString(); // Get current time
    setSubmissionTime(currentTime);
    // Perform other actions with the submission
  };

  return (
    <div>
      
      {submissionTime && <p>Submission Time: {submissionTime}</p>}
    </div>
  );
};

export default Time;