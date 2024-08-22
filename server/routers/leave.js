const LeaveController = require("../controllers/leaveController");
const leaveRouter = require("express").Router();

leaveRouter.get('/', LeaveController.get)
leaveRouter.get('/:id', LeaveController.getById)
leaveRouter.post('/', LeaveController.create)
leaveRouter.patch('/', LeaveController.update)
leaveRouter.delete('/', LeaveController.delete)

module.exports = leaveRouter;