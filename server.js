const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimiter = require('./middlewares/rateLimiter');
const morgan = require('morgan');
const winston = require('./middlewares/logger');
const swaggerUi = require('swagger-ui-express');
const swaggerUserSpec = require('./swagger/user.swagger');
const swaggerAdminSpec = require('./swagger/admin.swagger');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const adminRoutes = require('./routes/admin.routes');
const chatSocket = require('./sockets/chat');

const app = express();
app.set('trust proxy', 1);
const server = http.createServer(app);
const io = require('socket.io')(server, { cors: { origin: '*' } });

require('./config/db')();
chatSocket(io);

app.use(cors());
app.use(express.json());
app.use(rateLimiter);
app.use(morgan('combined', { stream: winston.stream }));

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

app.use('/api/docs/user', swaggerUi.serveFiles(swaggerUserSpec), swaggerUi.setup(swaggerUserSpec));
app.use('/api/docs/admin', swaggerUi.serveFiles(swaggerAdminSpec), swaggerUi.setup(swaggerAdminSpec));

server.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
