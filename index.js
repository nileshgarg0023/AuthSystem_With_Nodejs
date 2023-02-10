const app = require('./app')
const { PORT } = process.env;
console.log("Hello world");

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
})