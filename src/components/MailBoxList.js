import React from 'react';
import MailBoxListItem from './MailBoxListItem';
const MailBoxList = ({mailsCount, tags, onTagSelect}) => {
  const renderedList = tags.map((tag) => {
    return <MailBoxListItem key={tag} tag={tag} onTagSelect={onTagSelect}/>
  });

  return(
    <div className="mailBoxList ui vertical menu">
      MailBox
      <div className="active item"  onClick={() => onTagSelect("")}>
        Inbox
        <div className="ui left pointing label">
          {mailsCount}
        </div>
      </div>
      {renderedList}
    </div>
  );
}

export default MailBoxList;