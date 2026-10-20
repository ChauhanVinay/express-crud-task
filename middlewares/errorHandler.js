// Express identifies error middleware by the 4 arguments: (err, req, res, next)
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`[Error] ${statusCode} - ${message}`);

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message
  });
};

module.exports = errorHandler;