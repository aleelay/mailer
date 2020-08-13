import React from 'react';
import Moment from 'moment';
const MailItem = ({mail}) => {

  return(
    <div className="ui grid">
      <div className="one wide column checkbox"><input type="checkbox" name="example" /></div>
      <div className="four wide column">{mail.sender}</div>
      <div className="black nine wide column">{mail.subject}</div>
      <div className="two wide column">{Moment(mail.date).format("MMM Do")}</div>
    </div>
  );
}

export default MailItem;