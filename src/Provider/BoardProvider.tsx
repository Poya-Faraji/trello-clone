import {
    type PropsWithChildren,
    type ReactNode,
    useEffect,
    useReducer,

} from "react";

import type { ListType } from "@/Types/list";

import { listsData } from "@/data/list-data";

import { listReducer } from "@/reducer/list-reducer";
import BoardContext from "@/context/Board-context";


type Props = PropsWithChildren;

function save(lists: ListType[]): void {
    localStorage.setItem("lists", JSON.stringify(lists));
}

function load(): ListType[] {
    const isEmpty = localStorage.getItem("lists");
    return isEmpty === null ? listsData : JSON.parse(isEmpty);
}

export default function BoardProvider({ children }: Props): ReactNode {
    const [lists, dispatch] = useReducer(listReducer, load())

    useEffect(() => {
        save(lists);
    }, [lists]);

    const create = (): void => {
        dispatch({ type: "created" })
    }
    const move = (fromListId: string, itemId: string, toListId: string): void => {
        dispatch({ type: "moved", fromListId, itemId, toListId })
    };
    const remove = (listId: string, itemId: string): void => {
        dispatch({ type: "removed", listId, itemId })
    };

    return (
        <BoardContext
            value={{
                lists,
                create,
                move,
                remove,
            }}
        >
            {children}
        </BoardContext>
    );
}
