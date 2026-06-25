import { type PropsWithChildren, type ReactNode, use, useState } from "react";

import {
  DndContext,
  type DragEndEvent,
  type DragOverEvent,
  DragOverlay,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import type { DraggableData } from "@/Types/draggable-data";

import ListItem from "@/components/ListItem/ListItem";

import BoardContext from "@/context/Board-context";

type Props = PropsWithChildren;

export default function DndProvider({ children }: Props): ReactNode {
  const { dispatchList } = use(BoardContext);

  const sensors = useSensors(useSensor(PointerSensor));

  const [activeData, setActiveData] = useState<DraggableData | null>(null);

  const handleDragStart = (e: DragStartEvent): void => {
    setActiveData(e.active.data.current as DraggableData);
  };

  const handleDragOver = (e: DragOverEvent): void => {
    if (!e.over) {
      return;
    }

    dispatchList({
      type: "item_dragged_over",
      activeListIndex: e.active.data.current!.listIndex,
      activeItemIndex: e.active.data.current!.itemIndex,
      overItemIndex: e.over.data.current!.itemIndex,
      overListIndex: e.over.data.current!.listIndex,
    });
  };
  const handleDragEnd = (e: DragEndEvent): void => {
    setActiveData(null);

    if (!e.over) {
      return;
    }

    dispatchList({
      type: "item_dragged_end",
      activeListIndex: e.active.data.current!.listIndex,
      activeItemIndex: e.active.data.current!.itemIndex,
      overItemIndex: e.over.data.current!.itemIndex,
    });
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      {children}
      <DragOverlay>
        {activeData &&
          (activeData.isList ? null : (
            <ListItem
              presentational
              listIndex={activeData.listIndex}
              itemIndex={activeData.itemIndex}
              item={activeData.item}
            />
          ))}
      </DragOverlay>
    </DndContext>
  );
}
