const LocationController = require("../controllers/locationController");

const locationRouter = require("express").Router();

locationRouter.get('/', LocationController.get)
locationRouter.get('/:id', LocationController.getById)
locationRouter.post('/', LocationController.create)
locationRouter.patch('/', LocationController.update)
locationRouter.delete('/', LocationController.delete)

module.exports = locationRouter;