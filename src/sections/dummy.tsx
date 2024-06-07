import { useEffect, useState } from "react";
import { IOptions } from "../context/optionsContextType"
import styles from "../styles/ScoreAndResult.module.css"
import styles1 from "../styles/ChooseAndPlay.module.css";
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from "react-icons/fa"

interface ScoreAndResultProps {

    computerHand: string  ;
    playerHand: string ;
    timer: number;
    runTimer: boolean
    results: { winner: string, message: string };
    score: { player: number, computer: number }
}


const ScoreAndResult: React.FC<ScoreAndResultProps> = () => {
    const [computerHand, setComputerHand] = useState(0);
    const [playerHand, setPlayerHand] = useState(0);
    const [timer, setTimer] = useState(3);
    const [runTimer, setRunTimer] = useState(false);
    const [results, setResults] = useState({
        winner: "",
        message: ""
    })
    const [score, setScore] = useState({
        player: 0,
        computer: 0
    })

    useEffect(() => {
        if (runTimer && timer > 0) {
            setTimeout(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }
        else if (runTimer && timer < 1) {
            setRunTimer(false)
            setTimer(3)
            play()

        }
    }, [runTimer, timer]);

    const options: IOptions[] = [
        { name: "paper", icon: <FaRegHandPaper size={60} /> },
        { name: "rock", icon: <FaRegHandRock size={60} /> },
        { name: "scissors", icon: <FaRegHandScissors size={60} /> },
    ]
    const start = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        setComputerHand(randomNumber);
        setResults({ winner: "", message: "" })
        setRunTimer(true);

    };
    const selectOption = (handIndex: number) => {
        setPlayerHand(handIndex);
    };



    const play = () => {
        console.log("=====> Play")
        if (options[playerHand].name === "rock" && options[computerHand].name === "rock") {
            setResults({ winner: "No One", message: "Draw" })
            console.log("=====> Row 1")

        }
        else if (options[playerHand].name === "paper" && options[computerHand].name === "paper") {

            setResults({ winner: "No One", message: "Draw" })

        }
        else if (options[playerHand].name === "scissors" && options[computerHand].name === "scissors") {

            setResults({ winner: "No One", message: "Draw" })

        }
        else if (options[playerHand].name === "rock" && options[computerHand].name === "paper") {

            setResults({ winner: "Computer", message: "paper beats rock" })
            setScore({ ...score, computer: score.computer + 1 })
        }
        else if (options[playerHand].name === "paper" && options[computerHand].name === "rock") {

            setResults({ winner: "Player", message: "paper beats rock" })
            setScore({ ...score, player: score.player + 1 })
        }
        else if (options[playerHand].name === "paper" && options[computerHand].name === "scissors") {

            setResults({ winner: "Computer", message: "scissors beats paper" })
            setScore({ ...score, computer: score.computer + 1 })
        }
        else if (options[playerHand].name === "scissors" && options[computerHand].name === "paper") {

            setResults({ winner: "Player", message: "scissors beats paper" })
            setScore({ ...score, player: score.player + 1 })
        }
        else if (options[playerHand].name === "scissors" && options[computerHand].name === "rock") {

            setResults({ winner: "Computer", message: "rock beats scissors" })
            setScore({ ...score, computer: score.computer + 1 })
        }
        else if (options[playerHand].name === "rock" && options[computerHand].name === "scissors") {

            setResults({ winner: "Player", message: "rock beats scissors" })
            setScore({ ...score, player: score.player + 1 })
        }
    }

    return (
        <>
            <div className={styles.scoreCtn}>

                <div className={styles.score}>
                    <h3>Score</h3>
                    <p>Player: {score.player}</p>
                </div>
                <div className={styles.score}>
                    <h3>Score</h3>
                    <p>Computer: {score.computer}</p>
                </div>

            </div>

            <div className={styles.results}>
                <div className={styles.playerHand}>
                    {runTimer && <div className={styles.playerShake}>
                        {options[1].icon}
                    </div>}
                    {results?.winner && (
                        <>
                            {options[playerHand].icon}
                            {runTimer && <p>{options[playerHand].name}</p>}
                        </>
                    )}

                </div>
                <div className={styles.midCol}>
                    {runTimer && <p className={styles.timer}>{timer}</p>}

                    {
                        results?.winner && (
                            <>
                                <p className={styles.resultsWinner}>Winner: {results.winner}</p>
                                <p className={styles.resultsMessage}>Result: {results.message}</p>
                            </>
                        )
                    }
                </div>
                <div className={styles.computerHand}>
                    {runTimer && <div className={styles.computerShake}> {options[1].icon}


                    </div>}
                    {results?.winner && (
                        <>
                            {options[computerHand].icon}
                            {<p>{options[computerHand].name}</p>}
                        </>
                    )}

                </div>

            </div>

            {/* Choose&Play Section */}
            {/* <div className={styles1.choiceBtnCtn}>
                <button className={`${styles1.choiceBtn} ${styles1.bounce} ${playerHand === 0 ? styles1.activeChoice : ""}`} onClick={() => selectOption(0)}>
                    Paper
                    <FaRegHandPaper size={60} />
                </button>
                <button className={`${styles1.choiceBtn} ${styles1.bounce} ${playerHand === 1 ? styles1.activeChoice : ""}`} onClick={() => selectOption(1)}>
                    Rock
                    <FaRegHandRock size={60} />
                </button>
                <button className={`${styles1.choiceBtn} ${styles1.bounce} ${playerHand === 2 ? styles1.activeChoice : ""}`} onClick={() => selectOption(2)}>
                    Scissors
                    <FaRegHandScissors size={60} />
                </button>
            </div>
            <button className={styles1.playBtn} onClick={start}>Play</button> */}

        </>
    )
}

export default ScoreAndResult
