import React, { Component } from 'react'
import MovieList from './MovieList';
import './App.css'
import AddMovie from './AddMovie';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      input : "" , 
      rating :"", 
      img:"" , 
      name:"" , 
      searchStar : 5 ,
      MovieList:[{name: "FILM1" , img : "https://fr.web.img6.acsta.net/pictures/16/12/21/16/47/286492.jpg" ,rating :3}] , 
      dispaly : false
         

     }
  }

  addMovie=(newMovie)=> {
    this.setState({
      MovieList:[...this.state.MovieList , newMovie]
    })
  }


  render() { 
 
    return ( <div>
        <div>
          <input type="text" placeholder="Search" onChange={(e)=>this.setState({input:e.target.value})}/>
           <span onClick={()=>this.setState({searchStar:1})}>⭐</span>
           <span onClick={()=>this.setState({searchStar:2})}>⭐</span>
           <span onClick={()=>this.setState({searchStar:3})}>⭐</span>
           <span onClick={()=>this.setState({searchStar:4})}>⭐</span>
           <span onClick={()=>this.setState({searchStar:5})}>⭐</span>
           {console.log(this.state.searchStar)}
        </div>
        <h3 onClick={()=>this.setState({display:!this.state.display})}>+</h3>
        <MovieList searchInput={this.state.input} searchStar={this.state.searchStar} MovieList={this.state.MovieList} />
        {/* <div className ={this.state.display  ? "dispaly":"hide"}>
          <input type="text"  placeholder='name'onChange={(e)=> this.setState({name:e.target.value})} />
          <input type="text" placeholder='img' onChange={(e)=> this.setState({img:e.target.value})} />
          <input type="text" placeholder='rating' onChange={(e)=> this.setState({rating:e.target.value})} />
        </div>
        <button onClick={this.addMovie}>ADD</button> */}
        <AddMovie newMovie={this.addMovie} display ={this.state.display}  />

       
    </div> );
  }
}
 
export default App;