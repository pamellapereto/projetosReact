import { Container } from "./style";
import { MovieList } from "./style";
import { Movie } from "./style";
import { APIKey } from "../config/key";
import { useState, useEffect } from "react";

export default function Home() {


    const [movies, setMovies] = useState([])


    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => console.log(data.results))
    }, [])




    /*const movies = [
        {
            title: "Ilha do medo",
            image_url: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL59L2/image?locale=pt-br&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg"
        },

        {
            title: "Ilha do medo 2",
            image_url: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL59L2/image?locale=pt-br&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg"
        },

        {
            title: "Ilha do medo 3",
            image_url: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL59L2/image?locale=pt-br&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg"
        }
    ]*/




    return (

        <Container>
            <h2>Catálogo</h2>
            <MovieList>
                {
                    movies.map(movie => {
                        return (
                            <Movie>
                                <a href="https://www.google.com">
                                    <img src={movie.image_url} alt={movie.title} />
                                </a>
                                <span>{movie.title}</span>
                            </Movie>
                        )
                    })
                }
            </MovieList>
        </Container>
    )
}
