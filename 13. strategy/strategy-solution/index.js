const logger = require('./Logger');

logger.log('Hello World');
logger.log('Hi World');
logger.log('yo World');

logger.changeStrategy('noDate');


logger.log('Hello World');
logger.log('Hi World');
logger.log('yo World');