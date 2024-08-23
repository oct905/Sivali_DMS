const FullTimeAttendanceController = require("../controllers/fulltimeAttendanceController");

const fullTimeAttendancesRouter = require("express").Router();

fullTimeAttendancesRouter.get('/', FullTimeAttendanceController.get)
fullTimeAttendancesRouter.get('/:id', FullTimeAttendanceController.getById)
fullTimeAttendancesRouter.post('/', FullTimeAttendanceController.create)
fullTimeAttendancesRouter.patch('/', FullTimeAttendanceController.update)
fullTimeAttendancesRouter.delete('/', FullTimeAttendanceController.delete)

module.exports = fullTimeAttendancesRouter;