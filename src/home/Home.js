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
            console.log(data.results)
            setMovies(data.results)
        })
    }, [])


    return (

        <Container>
            <h2>Catálogo</h2>
            <MovieList>
                {
                    movies.map(movie => {
                        return (
                            <Movie key={movie.id}>
                               <Link to = {`/details/${movie.id}`}>
                                    <img src={`${img_path}${movie.poster_path}`} alt={movie.title} />
                                </Link>
                                
                                <span>{movie.title}</span>
                            </Movie>
                        )
                    })
                }
            </MovieList>
        </Container>
    )
}