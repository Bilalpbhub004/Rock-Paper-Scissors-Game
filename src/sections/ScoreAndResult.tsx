
import styles from "../styles/ScoreAndResult.module.css"


interface ScoreAndResultProps {

    computerHand: number;
    playerHand: number;
    timer: number;
    runTimer: boolean
    results: { winner: string, message: string };
    score: { player: number, computer: number };
    options: any;
    setScore: () => void;
    setResults: () => void

}


const ScoreAndResult: React.FC<ScoreAndResultProps> = ({ timer, score, setScore, options, playerHand, computerHand, results, setResults, runTimer }) => {


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
                            {<p>{options[playerHand].name}</p>}
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
                    {runTimer && 
                    <div className={styles.computerShake}>
                        
                        {options[1].icon}

                    </div>}
                    {results?.winner && (
                        <>
                            {options[computerHand].icon}
                            {<p>{options[computerHand].name}</p>}
                        </>
                    )}

                </div>

            </div>



        </>
    )
}

export default ScoreAndResult
