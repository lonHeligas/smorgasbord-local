const router = require("express").Router();

const loginRoutes = require("./accountRoutes");
const detailsRoutes = require("./detailsRoutes");
const profileRoutes = require("./profileRoutes");

router.use("/account", loginRoutes);
router.use("/details", detailsRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
