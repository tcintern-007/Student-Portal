export default (req, res, next) => {
  const { title, instructor, description, duration } = req.body;

  if (!title || !instructor || !description || !duration) {
    return res.status(400).json({
      success: false,
      message: "All course fields are required.",
    });
  }

  next();
};
