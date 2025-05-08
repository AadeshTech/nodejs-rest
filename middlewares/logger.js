const winston = require('winston');
require('winston-daily-rotate-file');
const transport = new winston.transports.DailyRotateFile({
  filename: 'logs/app-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  maxSize: '20m',
  maxFiles: '14d',
});
const logger = winston.createLogger({
  level: 'info',
  transports: [transport],
});
logger.stream = {
    write: (message) => logger.info(message.trim())
  };
module.exports = logger;