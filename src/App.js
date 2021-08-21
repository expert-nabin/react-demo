import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import UserInfo from './UserInfo';
import users from './users';

class App extends Component {

  render() {
   
    let updatedUsers = users.map((item, index) => {
      return { ...item, uniqueKey: index }
    });

    return (
      <>
      <h1>
        Welcome to React Class
      </h1>
      <Button variant="primary"> Primary Button</Button>
      
      {
        updatedUsers.map(item => <UserInfo showImage={false} key={item.uniqueKey} user={item} title="Github User"  />)
      }

      
      </>
      /**
        Create a Button Componet in separate file and show that comonent within this comonent.
       */
    );
  }
}

export default App;