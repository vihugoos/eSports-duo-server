import express from "express";

const app = express();

// Route to return all games with ads amounts
app.get("/games", (request, response) => {
    return response.json([]);
})


// Route to create a new ad
app.post("/ads", (request, response) => {
    return response.status(201).json([]);
})


// Route to return ads by game
app.get("/games/:id/ads", (request, response) => {
    const gameId = request.params.id;

    return response.json([]);
})


// Route to return discord by ad id
app.get("/ads/:id/discord", (request, response) => {
    const adId = request.params.id;

    return response.json([]);
})


app.listen(3333);
