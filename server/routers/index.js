const express = require('express');
const errorHandler = require('../middlewares/errorHandler');
const authentication = require('../middlewares/authentication');

const authRouter = require('./auth');
const overtimeRouter = require('./overtime');
const leaveRouter = require('./leave');
const permitRouter = require('./permit');
const attendanceTypeRouter = require('./attendanceType');
const locationRouter = require('./location');
const fulltimeAttendanceRouter = require('./fulltimeAttendance');
const parttimeAttendanceRouter = require('./partTimeAttendance');

const router = express.Router();

// Public Routes
router.use("/company", authRouter);

// Authenticated Routes
router.use(authentication);

router.use("/attendance", attendanceTypeRouter);
router.use("/location", locationRouter);
router.use("/fulltime-attendance", fulltimeAttendanceRouter);
router.use("/parttime-attendance", parttimeAttendanceRouter);
router.use("/overtime", overtimeRouter);
router.use("/leave", leaveRouter);
router.use("/permit", permitRouter);

// Error Handling Middleware
router.use(errorHandler);

module.exports = router;
