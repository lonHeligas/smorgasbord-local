const router = require("express").Router();
const { Users, Locales, Reviews } = require("../models");
const withAuth = require("../utils/withAuth");

router.get("/", async (req, res) => {
  try {
    const localeData = await Locales.findAll({
      include: [{ model: Users }],
    });

    const values = localeData.map((locale) => locale.get({ plain: true }));

    res.render("homepage", {
      values,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const localeData = await Locales.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: Users }],
    });

    const values = localeData.map((locale) => locale.get({ plain: true }));
    res.render("profile", {
      values,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err.message);
  }
});

router.get("/login", async (req, res) => {
  res.render("login", { logged_in: req.session.logged_in });
});

router.get("/logout", async (req, res) => {
  req.session.logged_in = false;
  res.render("logout", { logged_in: req.session.logged_in });
  console.log(req.session.logged_in);
});

module.exports = router;
