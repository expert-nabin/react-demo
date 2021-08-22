import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import UserInfo from './UserInfo';
import users from './users';
import Search from './search';
import Counter from './counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users
      };
    this.filterUser = this.filterUser.bind(this);
  }


  filterUser(query) {
    if(query) {
      const filteredUsers = users.filter(user => {
        return user.login === query;
      });
      this.setState({users: filteredUsers});
    }
    else {
      this.setState({users})
    }
  }

  render() {
    
    let updatedUsers = this.state.users.map((item, index) => {
      return { ...item, uniqueKey: index }
    });

    return (
      <>
      <Counter />
      <h1>
        Welcome to React Class
      </h1>

      <Search filterUser={this.filterUser} />

      <Button variant="primary"> Primary Button</Button>
      
      {
        updatedUsers.map(item => <UserInfo theme={this.props.theme} showImage={false} key={item.uniqueKey} user={item} title="Github User"  />)
      }      
      </>
      /**
        Create a Button Componet in separate file and show that comonent within this comonent.
       */
    );
  }
}

export default App;