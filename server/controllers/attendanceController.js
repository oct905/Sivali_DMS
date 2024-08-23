class AttendanceController {
    async create(req, res) {
        try {
            const { studentId, classId, status } = req.body;
            const attendance = await Attendance.create({
                studentId,
                classId,
                status,
            });
            return res.status(201).json(attendance);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = AttendanceController;