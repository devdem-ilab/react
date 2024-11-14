const requestArray = [];

const REQUEST_LIMIT = 5;
const TIME_FRAME = 60 * 60 * 1000;

const rateLimitingMiddleware = (req, res, next) => {
  const ip = req.ip;
  const currentTime = Date.now();

  for (let i = 0; i < requestArray.length; i++) {
    if (currentTime - requestArray[i].timestamp > TIME_FRAME) {
      requestArray.splice(i, 1);
      i--;
    }
  }

  const clientRequests = requestArray.filter((entry) => entry.ip === ip);

  if (clientRequests.length >= REQUEST_LIMIT) {
    return res.status(429).json({
      message: 'Too many requests. Please try again later.',
    });
  }

  requestArray.push({
    ip: ip,
    timestamp: currentTime,
  });

  next();
};

export default rateLimitingMiddleware;