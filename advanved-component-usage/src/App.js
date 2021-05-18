import React, { Component } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Users from './components/Users';
import FirstNumber from './components/FirstNumber';
import SecondNumber from './components/SecondNumber';

class App extends Component {
  state = {
  
    firstNumber: Math.random(),
    secondNumber : Math.random(),
    posts: [],
    users: []
  };
  componentDidMount() {
    setInterval(()=> {
      this.setState({
        firstNumber :Math.random(),
      });
    },1000)
  }
  

	componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(posts => posts.data)
      .then(posts => {
        setTimeout(() => {
					this.setState({
						posts,
					});
        }, 2000)
      });

		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(users => users.data)
			.then(users => {
				setTimeout(() => {
					this.setState({
						users,
					});
				}, 500)
			})
	}

	render() {
    return (
      <div className="App">
        <FirstNumber firstNumber={this.state.firstNumber} />
        <hr>
        </hr>
        <SecondNumber secondNumber={this.state.secondNumber}/>
                <hr></hr>
				<Users {...this.state} />
				<hr/>
				<Posts {...this.state} />
      </div>
    );
  }
}

export default App;