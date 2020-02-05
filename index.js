const winston = require('winston');

let fileName = 'logs/com-1.log'

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'Моё приложение' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: fileName })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize({
            colors:{ info: 'blue' },
            all: true,
        }),
        winston.format.simple()
      )
  }));
}

logger.info('Test msg')
logger.defaultMeta = { service: 'Главный модуль' }
logger.error('Не ошибка')
