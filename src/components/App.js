import React from 'react';
import data from '../data/emails.json';
import MailList from './MailList';
import Email from './Email';
import MailBoxList from './MailBoxList';
import '../styles/styles.css';

class App extends React.Component {
  state = {
    tags: [], 
    mails: data.messages, 
    selectedMail: null, 
    selectedTag: null,
    countMails: 0
  }

  async componentDidMount(){
    await this.setState({
      tags: this.getTags() 
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
  
  onMailSelect = (mail) => {
    this.setState({ selectedMail: mail })
  }

  onTagSelect = (tag) => {
    this.setState({ selectedTag: tag })
    console.log(tag)
    this.filterData(tag);
  }

  filterData = (tag) => {
    console.log("in filterdata");
    console.log("tag: ", tag);

    if(tag){
      
      let dataTest = data.messages;
      let filterData = dataTest.filter(dataTest => dataTest.tags.includes(tag));
      this.setState({ mails: filterData })
    } else{
      this.setState({ mails: data.messages })
    }
  }

  render() {
    return(
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <MailBoxList mailsCount={this.state.mails.length} tags={this.state.tags} onTagSelect={this.onTagSelect}/>
          </div>
          <div className="twelve wide column">
            <MailList 
              mails={this.state.mails} 
              onMailSelect={this.onMailSelect}
            />
            <Email mail={this.state.selectedMail}/>
          </div>
        </div>        
      </div>
    );
  }
}

export default App;