import React from 'react';
import MailItem from './MailItem';

const MailList = ({mails, onMailSelect, onTagSelect}) => {
  const renderedList = mails.map((mail) => {
    return <MailItem key={mail.id} mail={mail} onMailSelect={onMailSelect} onTagSelect={onTagSelect}/>
  });

  return(
    <div className="ui grid mailList">
      <div className="ui row header">
        <div className="one wide column checkbox"><input type="checkbox" name="example" /></div>
        <div className="four wide column">From</div>
        <div className="nine wide column">Subject</div>
        <div className="two wide column">Date</div>
      </div>
      {renderedList}
    </div>
  );
}

export default MailList;