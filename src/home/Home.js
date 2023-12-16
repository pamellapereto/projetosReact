import { Container } from "./style";
import { MovieList } from "./style";
import { Movie } from "./style";
import { APIKey } from "../config/key";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {

    const img_path = "https://image.tmdb.org/t/p/w500/"


    const [movies, setMovies] = useState([])


    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results[0])
                console.log(data.results[1])
                console.log(data.results[2])
                setMovies(data.results)
            })
    }, [])


    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={`${img_path}${movie.poster_path}`} className="d-block w-100" height="650" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={`${img_path}${movie.poster_path}`} className="d-block w-100" height="650" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={`${img_path}${movie.poster_path}`} className="d-block w-100" height="650" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <Container>
                <h2>Catálogo</h2>
                <MovieList>
                    {
                        movies.map(movie => {
                            return (
                                <Movie key={movie.id}>
                                    <Link to={`/details/${movie.id}`}>
                                        <img src={`${img_path}${movie.poster_path}`} alt={movie.title} />
                                    </Link>

                                    <span>{movie.title}</span>
                                </Movie>
                            )
                        })
                    }
                </MovieList>
            </Container>
        </div>

    )
}