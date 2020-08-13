import React from 'react';

const MailBoxListItem = ({tag, onTagSelect}) => {
  return(
    <div className="active item" onClick={() => onTagSelect(tag)}>
      {tag}
    </div>
  );
}

export default MailBoxListItem;