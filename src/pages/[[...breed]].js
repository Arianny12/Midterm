import "../app/globals.css";
import Header from "../app/components/Header"
import JokeCard from "@/app/components/JokeCard"
import styles from "@/app/components/JokeCard.module.css"


export async function getStaticProps({params}) {
    const breed = (params && params.breed) || 'husky';
    const JOKE_API = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;
    const DOG_API = `https://dog.ceo/api/breed/${breed}/images/random`;
    const responseJokeAPI = await fetch(JOKE_API);
    const jokeAPIData = await responseJokeAPI.json();
    const responseDogAPI = await fetch(DOG_API);
    const dogAPIData = await responseDogAPI.json(); 
    return {
        props: {
        jokeAPIData,
        dogAPIData,
        breed
        },
    };
};

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    }
}

export default function Home({jokeAPIData, dogAPIData, breed}){
    if (!dogAPIData || !jokeAPIData) return null;

 return(
     <>
         <main>
             <JokeCard
                breed={breed[0]}
                joke={jokeAPIData.joke}
                dogImg={dogAPIData.message}
             />
         </main>
     </>
 );
 }