import React from 'react';
import Moment from 'moment';

const MailItem = ({mail, onMailSelect, onTagSelect}) => {
  const renderedTags = mail.tags.map((tag) => {
    return <div key={tag}  onClick={() => onTagSelect(tag)} className={`ui tiny label ${tag === "travel" ? "blue" : "red"} label`} >{tag}</div>
  });

  return(
    <div className="ui row mailItem" onClick={() => onMailSelect(mail)}>
      <div className="one wide column checkbox"><input type="checkbox" name="example" /></div>
      <div className="four wide column">{mail.sender}</div>
      <div className="nine wide column">
        <div className="row">
          <div className="wide column">{mail.subject}</div>
        </div>
        <div className="row">
          <div className="wide column">{renderedTags}</div>
        </div>
      </div>
      <div className="two wide column">{Moment(mail.date).format("MMM Do")}</div>
    </div>
  );
}

export default MailItem;