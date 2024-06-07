import styles from "./styles/App.module.css"
import ScoreAndResult from "./sections/ScoreAndResult"
import ChooseAndPlay from './sections/ChooseAndPlay'
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from "react-icons/fa"
import { useEffect, useState } from "react";
import { IOptions } from "./context/optionsContextType";
function App() {

  const [timer, setTimer] = useState(3);
  const [runTimer, setRunTimer] = useState(false);
  const [playerHand, setPlayerHand] = useState(0);
  const [computerHand, setComputerHand] = useState(0);
  const [results, setResults] = useState({
    winner: "",
    message: ""
  })
  const [score, setScore] = useState({
    player: 0,
    computer: 0
  })
  const options: IOptions[] = [
    { name: "paper", icon: <FaRegHandPaper size={60} /> },
    { name: "rock", icon: <FaRegHandRock size={60} /> },
    { name: "scissors", icon: <FaRegHandScissors size={60} /> },
  ]

  useEffect(() => {
    if (runTimer && timer > 0) {
      setTimeout(() => {
        setTimer((timeOut) => timeOut - 1);
      }, 1000);
    }
    else if (runTimer && timer < 1) {
      setRunTimer(false)
      setTimer(3)

      play()
    }
  }, [runTimer, timer]);
  const start = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    setComputerHand(randomNumber);

    setRunTimer(true);
    setTimer(timer)
    setResults({ winner: "", message: "" })

  };

  const play = () => {
    console.log("=====> Play")
    if (options[playerHand].name === "rock" && options[computerHand].name === "rock") {
      setResults({ winner: "No One", message: "Draw" })


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
      <div className={styles.container}>
        <div className={styles.titleCtn}>
          <h1>ROCK, PAPER, SCISSORS</h1>
          <p>Game</p>
        </div>

        <ScoreAndResult
          timer={timer} playerHand={playerHand} computerHand={computerHand}
          score={score} results={results} timer={timer} options={options}
          runTimer={runTimer} />

        <ChooseAndPlay timer={timer} playerHand={playerHand} setPlayerHand={setPlayerHand} computerHand={computerHand} setComputerHand={setComputerHand} setRunTimer={setRunTimer} runTimer={runTimer} setTimer={setTimer} setResults={setResults} start={start} />

      </div>
    </>
  )
}

export default App
