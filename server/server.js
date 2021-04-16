const app = require('./config/lib/express');

const server = app().listen(process.env.PORT || 3000, () => {
    console.log(`Express server has started on port ${process.env.PORT  || 3000}`);
});