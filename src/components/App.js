import React from 'react';
import data from '../data/emails.json';
import MailList from './MailList';
import Email from './Email';
import MailBoxList from './MailBoxList';
import faker from 'faker';
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
    this.filterData(tag);
    this.onMailSelect(null);
  }

  filterData = (tag) => {
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
        <div className="ui grid stackable">
          <div className="row ui attached segment header">
            <div className="four wide column appName">
              <h1>Mailer</h1>
            </div>
            <div className="ten wide column appHeader">
              <div className="ui icon input">
                <i className="search icon"></i>
                <input type="text" placeholder="Search..." />
              </div>
            </div>
            <div className="two wide column appProfile">
              <i className="question circle outline icon"></i>
              <i className="cog icon"></i>
              <i className="th icon"></i>
              <img alt="avatar" className="ui avatar image" src={faker.image.avatar()} />
            </div>
            
          </div>
          <div className="row ui attached segment">

          </div>
          <div className="row ui attached segment">
            <div className="ui stackable two column grid stackable container">
                <div className="four wide column">
                  <MailBoxList 
                    mailsCount={this.state.mails.length} 
                    tags={this.state.tags} 
                    onTagSelect={this.onTagSelect}
                  />
                </div>
                
                <div className="twelve wide column">
                  {
                  this.state.selectedMail ? (
                    <Email 
                      mail={this.state.selectedMail}
                      onMailSelect={this.onMailSelect}
                    />
                  ) : (
                    <MailList 
                      mails={this.state.mails} 
                      onMailSelect={this.onMailSelect}
                      onTagSelect={this.onTagSelect}
                    />
                  )}
                </div>

            </div>
          </div>
         
        </div>        
      </div>
    );
  }
}

export default App;