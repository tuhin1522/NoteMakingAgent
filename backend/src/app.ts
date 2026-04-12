import express from 'express';
import { prisma } from './lib/prisma.js';

export const app = express();

// test route
app.get("/health-check", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Server is healthy"
    });
});

app.get("/test-db", async (req, res) => {
    try {
        const notes = await prisma.note.findMany();
        return res.status(200).json({
            success: true,
            data: notes
        });
    } catch (error) {
        console.error("Error fetching notes:", error);
        return res.status(500).json({
            success: false,
            message: "Error fetching notes"
        });
    }
});