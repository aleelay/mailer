import React from 'react';

const Email = ({ mail, onMailSelect }) => {
  if(!mail) {
    return(
      <div className="" role="alert">
        <span>No mail selected.</span>
      </div>
    );
  }

  return(
    <div className="email ui container">
      <div className="ui stackable column grid">
        <div className="column one wide">
            <button className="backMailbox ui icon button"  onClick={() => onMailSelect(null)}>
            <i className="left chevron icon"></i>
          </button>
        </div>
        <div className="column sixteen wide">
          <h3>{mail.subject}</h3>
        </div>
        <div className="column sixteen wide">
          <div>{mail.sender}</div>
          <div>{mail.date}</div>
        </div>
        <div className="column sixteen wide">
          <div dangerouslySetInnerHTML={{ __html: mail.body }} />
        </div>
      </div>
    </div>
  );
} 

export default Email;