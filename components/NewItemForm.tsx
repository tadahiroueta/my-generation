"use client";

import { useRef } from "react";
import { addListItem } from "@/app/actions";

export default function NewItemForm() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(data: FormData) {
    const text = data.get("text") as string;
    const isPrivate = data.get("private") === "on";
    
    await addListItem(text, isPrivate);
    if (formRef.current) formRef.current.reset();
  }

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="flex justify-between w-9/10 h-5 items-center"
    >
      <input
        type="text"
        name="text"
        placeholder="+ new idea"
        required
        className="outline-none placeholder-shown:text-gray-100 text-red-600 w-3/4"
      />
      <label className="">
        <input type="checkbox" name="private" className="peer sr-only" />
        <span className="text-3xl text-gray-500 duration-200 peer-checked:text-red-600">x</span>
      </label>
      <button type="submit" className="text-3xl text-gray-500 ">o</button>
    </form>
  );
}