import './loadEnv'; // Must be the first import
import {logger} from './shared';
import mongoose from 'mongoose';
import app from './server';

logger.info('Starting up...');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/warcraft', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
).then(() => {
    logger.info('Connected to MongoDB');
    const port = Number(process.env.PORT || 3000);
    app.listen(port, () => {
        logger.info('Express server started on port: ' + port);
    });
}).catch(() => {
    logger.error('MongoDB connection failed.');
});

if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
}
