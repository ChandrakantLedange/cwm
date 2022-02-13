import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'
import Like from './common/Like';
import Pagination from './common/Pagination';
import { paginate } from '../utils/Paginate';
import ListGroup from './common/ListGroup';
import { getGenres } from '../services/fakeGenreService';

export default class Movies extends Component {
    state = {
        movies: [],
        genres:[],
        currentPage:1,
        pageSize:4
    }
    componentDidMount() {
        const genres = [{name:'All Genres'},...getGenres()];
        this.setState({
            movies : getMovies(),
            genres : genres
        })
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
        this.setState({
            currentPage : page
        })
        // console.log(page);
    }

    handleGenreSelect = (genre) =>{
        this.setState({
            selectedGenre : genre,
            currentPage : 1
        })
        console.log("all genre",genre);
    }
    render() {
        const { length: MovieCount } = this.state.movies;
        const {pageSize,currentPage,movies:allMovies,selectedGenre} = this.state;
        if (MovieCount === 0) {
            return <p>There are no movies in the database</p>;
        } else {
            console.log("my_movie", this.state.movies);

        const filtered = selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
        : allMovies;
        const movies = paginate(filtered,currentPage,pageSize);

            return (
                <div className='row'>
                    <div className='col-2'>
                        <ListGroup
                        items={this.state.genres}
                        onItemSelect={this.handleGenreSelect}
                        selectedItem={this.state.selectedGenre}
                        />
                    </div>
                    <div className='col'>
                    <p style={{textAlign:'left'}}>Showing <b>{filtered.length}</b> movies in the database</p>
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
                            {movies.map(movie => (
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                        <Like
                                            liked={movie.liked}
                                            onLikeToggle={() => { this.handleLike(movie) }}
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
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                    </div>
                    
                </div>
            )
        }
    }
}
