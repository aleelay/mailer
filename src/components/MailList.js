import React from 'react';
import MailItem from './MailItem';

const MailList = ({mails, onMailSelect}) => {
  const renderedList = mails.map((mail) => {
    return <MailItem key={mail.id} mail={mail} onMailSelect={onMailSelect}/>
  });

  return(
    <div className="ui grid">
      <div className="ui row header">
        <div className="one wide column checkbox"><input type="checkbox" name="example" /></div>
        <div className="four wide column">From</div>
        <div className="black nine wide column">Subject</div>
        <div className="two wide column">Date</div>
      </div>
      {renderedList}
    </div>
  );
}

export default MailList;