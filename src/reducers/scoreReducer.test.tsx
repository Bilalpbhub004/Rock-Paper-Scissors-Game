import { render, screen } from "@testing-library/react";
import { useEffect, useReducer } from "react";
import { describe, expect, it, vi } from "vitest";
import scoreReducer from "./scoreReducer";
import { initialState } from "../context/initialContextValue";
import { ActionTypes, OptionActionKind } from "./scoreReducerTypes";
/* eslint-env jest */

vi.mock("../context/initialContextValue", () => {
    return {
        initialState: {
            playerHand: 2,
            computerHand: 0,
            runTimer: false,
            score: {
                player: 0,
                computer: 0
            },
            result: {
                winner: "",
                computer: ""

            },
        },
    };
});

interface Iprops {
    myAction: ActionTypes;
}

const TestingComponent = (props: Iprops) => {
    const [state, dispatch] = useReducer(scoreReducer, initialState)

    useEffect(() => {
        dispatch(props.myAction)
    }, [])

    return (
        <>
            <p>playerhand: {state.playerHand}</p>
        </>
    )
}

describe('scoreReducer', () => {
    it("should update the scoreReducer with the playerhand", () => {
        render(<TestingComponent myAction={{ type: OptionActionKind.UPDATE_PLAYER_CHOICE, payload: 0 }} />);
        expect(screen.getByText(/playerhand: 0/)).toBeInTheDocument();
    });
})