import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      search: ''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response=>Response.json())
    .then(users=>this.setState(()=>{
      return {
              monsters: users
             }
    }))
  }

  onSearchChange=(event) => {
    const search=event.target.value.toLowerCase();
    this.setState(()=>{
      return {search};
    })
  }

  render(){

    const {monsters,search}=this.state;
    const {onSearchChange}=this;

    const filtered=monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(search)
    })

    return (
    <div className="App">
      <input className='search-box' type="search" placeholder='Search Monsters' onChange={onSearchChange}/>
      {
        filtered.map((monster)=>{
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })
      }
    </div>
  )}
}

export default App;
