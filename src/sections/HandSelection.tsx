import React, { useState } from 'react'
import styles from "../styles/handSelection.module.css"
import { OptionActionKind } from '../reducers/scoreReducerTypes';
import { useOptions } from '../context/OptionContext';

interface Props {
    name: string;
    icon: JSX.Element;
    handChoiceIndex: number
}
const HandSelection: React.FC<Props> = ({ name, icon, handChoiceIndex }) => {
    const [handPressed, setHandPressed] = useState<boolean>(false)

    const optionsContext = useOptions()
    const { dispatch, state } = optionsContext

    const selectedHandIndex = state.playerHand

    const selectOption = (index: number) => {

        dispatch({ type: OptionActionKind.UPDATE_PLAYER_CHOICE, payload: index })
        setHandPressed(true)
    };

    return (
        <div>
            <button className={`${styles.choiceBtn} 
            ${handPressed && handChoiceIndex === selectedHandIndex ? styles.activeChoice : ""}`} onClick={() => selectOption(handChoiceIndex)}>{name} {icon}</button>
        </div>
    )
}

export default HandSelection
