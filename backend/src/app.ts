import express from 'express';

export const app = express();

// test route
app.get("/health-check", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Server is healthy"
    });
});