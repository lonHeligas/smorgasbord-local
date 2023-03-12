const router = require("express").Router();
const { Users, Locales, Reviews } = require("../../models");

//post, put, delete restaurant

router.post("/", async (req, res) => {
  try {
    console.log(req.session.user_id);
    const data = await Locales.create({
      name: req.body.locale_name,
      address: req.body.locale_address,
      type_id: req.body.locale_type,
      price: req.body.locale_price,
      description: req.body.locale_description,
      user_id: req.session.user_id,
    });
    console.log(data);
    console.log(req.session.user_id);
    console.log(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
    console.log(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Locales.update(
      {
        name: req.body.locale_name,
        address: req.body.locale_address,
        type_id: req.body.locale_type,
        price: req.body.locale_price,
        description: req.body.locale_description,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removed = await Locales.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(req);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
