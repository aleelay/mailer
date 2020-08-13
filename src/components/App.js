import React from 'react';
import data from '../data/emails.json';
import MailList from './MailList';
import Email from './Email';
import MailBoxList from './MailBoxList';
import '../styles/styles.css';

class App extends React.Component {
  state = {
    tags: [], 
    mails: [], 
    selectedMail: null, 
    selectedTag: null,
    countMails: 0
  }

  async componentDidMount(){
    this.setState({
      tags: this.getTags(), 
      mails: data.messages, 
    });
  }

  componentDidUpdate(prevProps){
    if(this.props.mails !== this.prevProps.mails){
      this.fetchData(this.props.mails);
    }
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
  }

  filterData = (tag) => {
    let dataTest = data.messages;
    let filterData = dataTest.filter(dataTest => dataTest.tags.includes(tag));
    console.log(filterData);
    // this.setState({ mails: filterData });
  }

  render() {
    if(!this.state.selectedTag){
      console.log("no tag")
    }else{
      this.filterData(this.state.selectedTag)
    }
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