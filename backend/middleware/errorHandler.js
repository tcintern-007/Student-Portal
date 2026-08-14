export default (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;

  if (statusCode === 500) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }

  const message = err.message || "Error";
  res.status(statusCode).json({
    success: false,
    message,
  });
};
