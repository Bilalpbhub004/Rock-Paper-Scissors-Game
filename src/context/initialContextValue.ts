import { IInitialState } from "./optionsContextType";

export const initialState: IInitialState={

    playerHand:0,
    computerHand:0,
    runTimer:false,
    score:{
        player:0,
        computer:0
    },
    result:{
        winner:"",
        computer:""

    }
}