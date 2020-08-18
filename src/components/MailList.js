import React from 'react';
import MailItem from './MailItem';

const MailList = ({mails, onMailSelect, onTagSelect}) => {
  const renderedList = mails.map((mail) => {
    return <MailItem key={mail.id} mail={mail} onMailSelect={onMailSelect} onTagSelect={onTagSelect}/>
  });

  return(
    <div className="ui grid mailList">
      {renderedList}
    </div>
  );
}

export default MailList;