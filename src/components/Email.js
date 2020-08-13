import React from 'react';

const Email = ({ mail }) => {
  if(!mail) {
    return(
      <div className="" role="alert">
        <span>No mail selected.</span>
      </div>
    );
  }

  return(
    <div className="email ui container">
      <div>
        Email
        <div>From: </div>
        <div>Subject: {mail.subject}</div>
      </div>
    </div>
  );
} 

export default Email;