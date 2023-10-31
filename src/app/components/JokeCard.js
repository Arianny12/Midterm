"use-client"; 
import BreedType from "./BreedType"
import styles from "./JokeCard.module.css"
import Header from "./Header";

const JokeCard = ({
    joke, 
    dogImg,
    breed,
    header,
}) => (
    <div className={styles.jokeCardWrapper}>
         <Header header={header}/>
        <div className={styles.contentWrapper}>
            <div className={styles.leftSide}>
                <div className={styles.title}>            
                    <BreedType breed={breed}/>
                </div>
                <div classname={styles.dogImg}>
                    <img src={dogImg}/>
                </div>
            </div>
            
            <div classname={styles.rightSide}>
                <div className={styles.thinkingCloud}>
                    <div className={styles.jokeBox}>
                        <marquee behavior="scroll" direction="up" scrollamount="2" height="105">{joke}</marquee>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
  

export default JokeCard;