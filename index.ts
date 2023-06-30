import express from 'express';
import { uesrRouter } from './router/user.router';

export function bootstrap() {
    const app = express();
    app.use(express.json());

    app.use('/users', uesrRouter);
    
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Our server is listening on port ${port}`);
    })

}

bootstrap();

// import express from 'express';

// const app = express();
// app.use(express.json());

// const loggerMiddleware = (req, res, next) => {
//     const log =  req.body.log;

//     if(log) {
//         console.log(`[${new Date()}] ${req.method} ${req.url}`);
//         next();
//     } else {
//         next(new Error('Log is not specified'));
//     }

//     console.log('Iam still in loggerMiddleware');
// }

// // app.use(loggerMiddleware);

// const authMiddleware = (req, res, next) => {
//     const apiKey = req.get('api-key');

//     if(apiKey === '123') {
//         next();
//     } else {
//         res.status(401).send('Invalid Key');
//     }
// }

// // app.use(authMiddleware);

// app.get('/', (req, res) => {
//     res.send('Hello from express and typescript');
// });

// app.get('/protected', authMiddleware, (req, res) => {
//     res.send('Protected');
// });

// const errorHendler = (err, req, res, next) => {
//     console.log('Error from error middleware', err);

//     res.status(500).send({error: err.message});
// }


// app.use(errorHendler);
// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`Our server is listening on port ${port}`);
// })
