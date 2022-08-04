import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      search: []
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response=>Response.json())
    .then(users=>this.setState(()=>{
      return {
              monsters: users,
              search: users
             }
    }))
  }

  render(){
    return (
    <div className="App">
      <input className='search-box' type="search" placeholder='Search Monsters' onChange={(event) => {
        let temp="";
        if(event.target.value===""){
          temp=this.state.monsters;
        }
        else{
          temp=this.state.monsters.filter((monster)=>monster.name.toLowerCase().includes(event.target.value.toLowerCase()));
        }
        console.log(this.state.search)
        this.setState(()=>{return {search: temp}});
      }}/>
      {this.state.search.map((monster)=>{
        return <h1 key={monster.id}>{monster.name}</h1>
      })}
    </div>
  )}
}

export default App;
