import { createContext, useContext, useReducer } from "react";
import { HandOption, IOptions, IoptionsContext, Props } from "./optionsContextType";
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from "react-icons/fa";
import { initialState } from "./initialContextValue";
import scoreReducer from "../reducers/scoreReducer";

const options: IOptions[] = [
    { name: HandOption.rock, icon: <FaRegHandRock size={60} /> },
    { name: HandOption.paper, icon: <FaRegHandPaper size={60} /> },
    { name: HandOption.scissors, icon: <FaRegHandScissors size={60} /> },
]

const OptionContext = createContext<IoptionsContext>({
    options: [],
    state: initialState,
    dispatch: () => { }
})

export function OptionsProvider(props: Props) {

    const [state, dispatch] = useReducer(scoreReducer, initialState)

    const contextValue = {
        options,
        state,
        dispatch,
    };
    return <OptionContext.Provider value={contextValue}>
        {props.children}
    </OptionContext.Provider>
}

export function useOptions() {

    const context = useContext(OptionContext)
    return context;
}

