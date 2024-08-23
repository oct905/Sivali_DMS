const AttendanceTypeController = require("../controllers/attendanceTypeController");

const attendanceTypeRouter = require("express").Router();

attendanceTypeRouter.get('/', AttendanceTypeController.get)
attendanceTypeRouter.get('/:id', AttendanceTypeController.getById)
attendanceTypeRouter.post('/', AttendanceTypeController.create)
attendanceTypeRouter.patch('/', AttendanceTypeController.update)
attendanceTypeRouter.delete('/', AttendanceTypeController.delete)

module.exports = attendanceTypeRouter;