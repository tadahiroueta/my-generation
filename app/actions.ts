"use server";

import { getDb } from "@/lib/db";
import { revalidatePath } from "next/cache";

function shuffle<T>(arr: T[]) {
    let seed = 42;
    return arr
        .map(v => ({ v, r: (seed = (seed * 1664525 + 1013904223) % 4294967296) }))
        .sort((a, b) => a.r - b.r)
        .map(i => i.v);
}

export async function getPublicList() {
    const db = await getDb();
    const list = await db.all("SELECT * FROM list WHERE private = 0");
    return shuffle(list);
}

export async function getPrivateList() {
    const db = await getDb();
    const list = await db.all("SELECT * FROM list");
    return shuffle(list);
}

export async function toggleCompleteListItem(id: number) {
    const db = await getDb();
    await db.run("UPDATE list SET completed = NOT completed WHERE id = ?", [id]);
    revalidatePath("/");
}

export async function addListItem(text: string, isPrivate: boolean) {
    const db = await getDb();
    await db.run("INSERT INTO list (text, private) VALUES (?, ?)", [text, isPrivate ? 1 : 0]);
    revalidatePath("/");
}

export async function deleteListItem(id: number) {
    const db = await getDb();
    await db.run("DELETE FROM list WHERE id = ?", [id]);
    revalidatePath("/");
}