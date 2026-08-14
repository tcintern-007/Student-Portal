const MAX_TITLE_LENGTH = 200;
const MAX_DESCRIPTION_LENGTH = 5000;

const sanitizeString = (value) => {
    if (typeof value !== "string") return null;
    const trimmed = value.trim();
    return trimmed.length === 0 ? null : trimmed;
};

export default (req, res, next) => {
    const forbiddenFields = ["owner_id", "id", "created_at"];
    const bodyFields = Object.keys(req.body);

    for (const field of forbiddenFields) {
        if (bodyFields.includes(field)) {
            return res.status(400).json({
                success: false,
                message: `${field} cannot be provided in the request body.`,
            });
        }
    }

    const title = sanitizeString(req.body.title);
    const description = sanitizeString(req.body.description);
    const rawInstructorId = req.body.instructor_id;

    if (!title) {
        return res.status(400).json({
            success: false,
            message: "Title is required.",
        });
    }

    if (title.length > MAX_TITLE_LENGTH) {
        return res.status(400).json({
            success: false,
            message: `Title must be at most ${MAX_TITLE_LENGTH} characters.`,
        });
    }

    if (rawInstructorId === undefined || rawInstructorId === null || rawInstructorId === "") {
        return res.status(400).json({
            success: false,
            message: "Instructor ID is required.",
        });
    }

    const instructorId = Number(rawInstructorId);

    if (!Number.isInteger(instructorId) || instructorId < 1) {
        return res.status(400).json({
            success: false,
            message: "Instructor ID must be a positive integer.",
        });
    }

    if (!description) {
        return res.status(400).json({
            success: false,
            message: "Description is required.",
        });
    }

    if (description.length > MAX_DESCRIPTION_LENGTH) {
        return res.status(400).json({
            success: false,
            message: `Description must be at most ${MAX_DESCRIPTION_LENGTH} characters.`,
        });
    }

    req.body.title = title;
    req.body.description = description;
    req.body.instructor_id = instructorId;

    next();
};
