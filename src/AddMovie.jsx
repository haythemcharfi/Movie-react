import React, { Component } from 'react'
class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: "",
            img: "",
            name: "",
        }
    }
    render() {
        let movie = {
            name: this.state.name,
            rating: this.state.rating,
            img: this.state.img
        }
        return (
            <div>
              
                <div className={this.props.display ?"display":"hide"}>
                    <input type="text" placeholder='name' onChange={(e) => this.setState({ name: e.target.value })} />
                    <input type="text" placeholder='img' onChange={(e) => this.setState({ img: e.target.value })} />
                    <input type="text" placeholder='rating' onChange={(e) => this.setState({ rating: e.target.value })} />
                    <button onClick={()=>this.props.newMovie(movie)}>ADD</button>
                </div>
               
            </div>
    )}
}

export default AddMovie;