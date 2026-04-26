import express, { type Request, type Response } from 'express';

const app = express();


app.get('/', (req: Request, res:Response) => {
    return res.send("Hello express");
});

app.get('/health', (req:Request, res: Response) => {
    res.status(200).json({
        message: "Don't worry, I am healthy",
        success: true 
    });
});

export default app;