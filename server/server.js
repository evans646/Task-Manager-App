import express from 'express';
import path from 'path';
import cors from 'cors';
import { routes } from './routes';


const PORT = process.env.PORT || 8080;


const app = express();

app.use(express.json());
// This allows us to access the body of POST/PUT
// requests in our route handlers (as req.body)
app.use(cors());

app.use(express.static(path.join(__dirname, '/build')));

// Add all the routes to our Express server
// exported from routes/index.js
routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});
//Start the server.
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
