const courseModel = require("../models/courseModel");

const handleGreeting = (req, res) => {
    res.send("Hello, Lao-Top API");
};

const handleGetCourses = (req, res) => {
    const coursesData = courseModel.getAllCourses();
    res.json(coursesData);
};

const courseController = {
    handleGreeting,
    handleGetCourses,
};

module.exports = courseController;