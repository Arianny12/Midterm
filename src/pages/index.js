import "../app/globals.css";

const TOP_RATED_API = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200';
const NOW_PLAYING_API = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}';

export async function getStaticProps() {
    const bearerToken = `Bearer ${process.env.API_KEY}`;
    const responseTopRatedAPI = await fetch(TOP_RATED_API,{
        headers: {
            'Authorization': bearerToken,
            'accept': 'application/json'
        }
    });
    const topRtedAPIData = await responseTopRatedAPI.json(); 
    const responseNowPlayingAPI = await fetch(NOW_PLAYING_API,{
        headers: {
            'Authorization': bearerToken,
            'accept': 'application/json'
        }
    });

    const nowPlayingAPIData = await responseNowPlayingAPI.json();
    
    return {
        props: {
            topRtedAPIData,
            nowPlayingAPIData,
        },
    };
}

export default function Home(){
    return (
        <main>
            <h1> Midterm</h1>
        </main>
    );
    }
