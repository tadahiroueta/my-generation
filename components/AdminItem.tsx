"use client";
import { useRef } from "react";

import { deleteListItem, toggleCompleteListItem } from "@/app/actions";
import Stroke from "@/components/Stroke";

export default function AdminItem({ item: { id, text, completed } }: {
  item: { id: number; text: string; completed: boolean }
}) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startHold = () => {
    timerRef.current = setTimeout(() => {
      deleteListItem(id);
    }, 2000);
  };

  const stopHold = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };
  
  return (
    <li>
      <button
        onClick={async () => await toggleCompleteListItem(id)}
        onTouchStart={startHold}
        onMouseDown={startHold}
        onTouchEnd={stopHold}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
      >
        { completed ? (
          <Stroke><p className="text-left">{text}</p></Stroke>
        ) : (
          <p className="text-left">{text}</p>
        )}
      </button>
    </li>
  );
}   