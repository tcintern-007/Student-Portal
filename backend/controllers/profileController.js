export const getProfile = async (req, res) => {
    res.status(200).json({
        message: "This is a protected profile",
        user: req.user,
    });
};