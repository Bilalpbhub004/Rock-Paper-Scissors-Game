
import styles from "../styles/ChooseAndPlay.module.css";
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa';

interface ChooseAndPlayProps {
    // handleSelect: (playerHand: number, computerHand: number, timer: number) => void;
    computerHand: number;
    setComputerHand: (computerHand: number) => void;
    playerHand: number;
    setPlayerHand: (playerHand: number) => void;
    timer: number;
    setTimer: (timer: number) => void;
    runTimer: boolean
    setRunTimer: (runTimer: boolean) => void;
    setResults: () => void
    results: { winner: string, message: string };
    score: { player: number, computer: number }
    start: () => void
}

const ChooseAndPlay: React.FC<ChooseAndPlayProps> =
    ({ timer, setTimer, runTimer, setRunTimer, playerHand, setPlayerHand, computerHand, setComputerHand, start }) => {


        const selectOption = (handIndex: number) => {
            setPlayerHand(handIndex);
        };



        return (
            <>
                <div className={styles.choiceBtnCtn}>
                    <button className={`${styles.choiceBtn} ${styles.bounce} ${playerHand === 0 ? styles.activeChoice : ""}`} onClick={() => selectOption(0)}>
                        Paper
                        <FaRegHandPaper size={60} />
                    </button>
                    <button className={`${styles.choiceBtn} ${styles.bounce} ${playerHand === 1 ? styles.activeChoice : ""}`} onClick={() => selectOption(1)}>
                        Rock
                        <FaRegHandRock size={60} />
                    </button>
                    <button className={`${styles.choiceBtn} ${styles.bounce} ${playerHand === 2 ? styles.activeChoice : ""}`} onClick={() => selectOption(2)}>
                        Scissors
                        <FaRegHandScissors size={60} />
                    </button>
                </div>
                <button className={styles.playBtn} onClick={start}>Play</button>
            </>
        );
    };

export default ChooseAndPlay;
