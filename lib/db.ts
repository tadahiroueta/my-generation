import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db: Database | null = null;

export async function getDb(): Promise<Database> {
    if (db) return db;

    db = await open({
        filename: './db.sqlite',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS list (
            id INTEGER PRIMARY KEY,
            text TEXT,
            private INTEGER DEFAULT 0,
            completed INTEGER DEFAULT 0
        );`
    );

    return db;
}