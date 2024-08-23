const PartTimeAttendanceController = require("../controllers/parttimeAttendanceController");

const partTimeAttendanceRouter = require("express").Router();

partTimeAttendanceRouter.get('/', PartTimeAttendanceController.get)
partTimeAttendanceRouter.get('/:id', PartTimeAttendanceController.getById)
partTimeAttendanceRouter.post('/', PartTimeAttendanceController.create)
partTimeAttendanceRouter.patch('/', PartTimeAttendanceController.update)
partTimeAttendanceRouter.delete('/', PartTimeAttendanceController.delete)

module.exports = partTimeAttendanceRouter;