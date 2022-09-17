const app = require('./app');
const Loader = require('./loaders');

Loader.start();


app.listen(3333, () => console.log('server started...'));

