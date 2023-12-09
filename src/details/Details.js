import { useEffect, useState } from "react";
import { APIKey } from "../config/key";
import { useParams } from "react-router-dom";
import { Container } from "./style";
import { Link } from "react-router-dom";


function Details() {

    const img_path = "https://image.tmdb.org/t/p/w500/"
    const video_path = "https://www.youtube.com/embed/"

    const { id } = useParams();

    console.log(id);

    const [movie, setMovie] = useState([]);
    const [videoMovie, setVideoMovie] = useState([]);


    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data)

                const movie = {
                    id,
                    title: data.title,
                    overview: data.overview,
                    releaseDate: data.release_date,
                    vote_average: data.vote_average,
                    vote_count: data.vote_count,
                    filme: `${img_path}${data.poster_path}`
                }
                setMovie(movie)
            })
    }, [id])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKey}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(videoData => {
                console.log(videoData.results)

                if(videoData.results.length > 0){

                const videoMovie = {
                    name: videoData.results[0].name,
                    video: `${video_path}${videoData.results[0].key}`,
                    site: videoData.results[0].site,
                }
                setVideoMovie(videoMovie)
            }
            })
    }, [id])



    return (
        <Container>

            <div className="details">
                <img src={movie.filme} alt={movie.title} />

                <div className="info">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.overview}</span>
                    <span className="release">Data de lançamento: {movie.releaseDate}</span>
                    <span>Avaliação: {movie.vote_average}</span>
                    <span>Likes: {movie.vote_count}</span>

                    <Link to="/"><button>Retornar ao catálogo</button></Link>
                </div>
            </div>

            <div className="video">
                <iframe width="560" height="315" src={videoMovie.video} title={videoMovie.name} class="embed hide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
        </Container>
    )
}

export default Details;