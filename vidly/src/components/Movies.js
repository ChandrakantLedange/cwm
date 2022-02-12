import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'
import Like from './common/Like';
import Pagination from './common/Pagination';

export default class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize:4
    }
    handleDelete = (movie) => {
        console.log(movie);
        const movies = this.state.movies.filter((m) => (m._id !== movie._id));
        this.setState({
            movies
        })
    };

    handleLike = (movie) =>{
        // console.log("like cliked",movie);
        const movies = [...this.state.movies];
        const index =  movies.indexOf(movie);
        movies[index] = {...movies[index]}; 
        movies[index].liked = !movies[index].liked;
        // console.log("handleLike : 22 ",movies[index].liked = !movies[index].liked);
        this.setState({
            movies
        })
    }

    handlePageChange =(page)=>{
        console.log(page);
    }
    render() {
        const { length: MovieCount } = this.state.movies;
        if (MovieCount === 0) {
            return <p>There are no movies in the database</p>;
        } else {
            console.log("my_movie", this.state.movies);

            return (<React.Fragment>
                <p>Showing {MovieCount} movies in the database</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like 
                                    liked={movie.liked} 
                                    onLikeToggle={()=>{this.handleLike(movie)}}
                                    />
                                </td>
                                <td>
                                    <button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
                <Pagination  
                itemsCount={MovieCount}
                pageSize={this.state.pageSize}
                onPageChange={this.handlePageChange}
                />
            </React.Fragment>)
        }
    }
}
