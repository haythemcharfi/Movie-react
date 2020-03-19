import React, { Component } from 'react'

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
    }
}
    render() { 
        return ( <div >
            {this.props.MovieList.filter(el=>(el.name.toLowerCase().includes(this.props.searchInput.toLowerCase().trim())&&(el.rating <this.props.searchStar)))
            .map(el=><div className="Card">
            <h2>{el.name}</h2>
            <span>{"".padStart(el.rating,"⭐")}</span>
            <img className="img" src={el.img}/>
            </div>)}

        </div> );
    }
}
 
export default MovieList;