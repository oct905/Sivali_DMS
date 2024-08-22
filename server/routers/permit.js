const PermitController = require("../controllers/permitController");
const permitRouter = require("express").Router();

permitRouter.get('/', PermitController.get)
permitRouter.get('/:id', PermitController.getById)
permitRouter.post('/', PermitController.create)
permitRouter.patch('/', PermitController.update)
permitRouter.delete('/', PermitController.delete)

module.exports = permitRouter;