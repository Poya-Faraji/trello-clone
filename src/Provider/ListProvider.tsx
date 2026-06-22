import ActiveItemContext from "@/context/active-item-context";
import { useEffect, useState, type PropsWithChildren, type ReactNode } from "react";


type Props = PropsWithChildren

export default function ActiveItemProvider({ children }: Props): ReactNode {
    const [activeItemId, setActiveItemId] = useState<string | null>(null)
    const [activeListId, setActiveListId] = useState<string | null>(null)

    const activate = (listId: string, itemId: string): void => {
        setActiveListId(listId)
        setActiveItemId(itemId)
    };

    const deactivate = (): void => {
        setActiveListId(null)
        setActiveItemId(null)
    };

    useEffect(() => {
        const deselectList = (e: KeyboardEvent): void => {
            if (e.code !== "Escape") {
                return;
            }
            // setActiveItemId(null);
            // setActiveListId(null);
            // instead:
            deactivate()
        };
        document.addEventListener("keydown", deselectList);
        return (): void => {
            document.removeEventListener("keydown", deselectList);
        };
    }, []);

    return (
        <ActiveItemContext value={{ activeItemId, activeListId, activate, deactivate }} >
            {children}
        </ActiveItemContext>
    )
}