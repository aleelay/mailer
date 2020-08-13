import React from 'react';
import data from '../data/emails.json';
import MailList from './MailList';

class App extends React.Component {
  state = {
    tags: [], 
    mails: []
  }

  async componentDidMount(){
    this.setState({
      tags: this.getTags(), 
      mails: data.messages
    });
  }

  getTags = () => {
    let tags = [];
    data.messages.forEach((elem, index) => {
      tags.push(elem.tags);
    });
    tags = [...new Set([].concat.apply([], tags))];
    return tags;
  }
  

  render() {

    return(
      <div className="ui container">
        App
        {console.log(this.state.mails)}
        {console.log(this.state.tags)}
        <MailList 
          mails={this.state.mails} 
          //tags={this.state.tags} 
        />
      </div>
    );
  }
}

export default App;