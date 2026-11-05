import { useState } from 'react';
import styles from './Card.module.css'

type Props = {
    title: string,
    text: string,
    image: string
}

export default function Countdown({ title, text, image
}: Props) {

    const [counter, setCounter] = useState(10);
    const [random, setRandom] = useState(Math.random())
    return (
        <div className={styles.card} onClick={() => {
            let newValue = counter - 1;
            setCounter(newValue);
            console.log(counter);

        }}>
            <h2>{title}</h2>
            <img src={image + "?" + random} alt="Hero" />
            <p> {text}</p>
            <p>Amount of clicks {counter}</p>
            <button onClick={() => {
                setRandom(Math.random())
            }}>Change image</button>
        </div>
    )
}