import React from 'react';
import MailItem from './MailItem';

const MailList = ({mails}) => {
  const renderedList = mails.map((mail) => {
    return <MailItem key={mail.id} mail={mail}/>
  });

  return(
    <div>
      {renderedList}
    </div>
  );
}

export default MailList;