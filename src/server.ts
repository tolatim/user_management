import app from './app.js';

const HOST: string = "localhost";
const PORT: number = 3000;

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});