const OvertimeController = require("../controllers/overtimeController");
const overtimeRouter = require("express").Router();

overtimeRouter.get('/', OvertimeController.get)
overtimeRouter.get('/:id', OvertimeController.getById)
overtimeRouter.post('/', OvertimeController.create)
overtimeRouter.patch('/', OvertimeController.update)
overtimeRouter.delete('/', OvertimeController.delete)

module.exports = overtimeRouter;