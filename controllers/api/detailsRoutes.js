const router = require("express").Router();
const { Users, Locales, Reviews } = require("../../models");
const withAuth = require("../../utils/withAuth");

router.get("/:id", withAuth, async (req, res) => {
  try {
    const localeData = await Locales.findByPk(req.params.id);
    if (!localeData) {
      res.status(404).json("Sorry, there is no restaurant by that id");
      return;
    }

    const values = localeData.get({ plain: true });

    const reviewData = await Reviews.findAll({
      where: { locale_id: localeData.id },
    });

    const reviewMap = reviewData.map((review) => review.get({ plain: true }));

    const locales = await Promise.all(
      reviewMap.map(async (review) => {
        const user = await Users.findByPk(review.user_id);
        const plainUser = user.get({ plain: true });
        const newreview = {
          ...review,
          name: plainUser.name,
          authoredByUser: review.name === req.session.name,
        };
        return newreview;
      })
    );
    console.log(locales);
    res.render("detail", {
      values,
      locales,
      logged_in: req.session.logged_in,
      username: req.session.name,
      userId: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err.message);
  }
});

router.post("/:id", async (req, res) => {
  try {
    console.log(req.body.locale_id);
    console.log(req.body.user_id);
    const data = await Reviews.create({
      reviewtext: req.body.reviewtext,
      locale_id: req.body.locale_id,
      user_id: req.body.user_id,
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
    console.log(err.message);
  }
});

// router.put("/:id", async (req, res) => {
//   try {
//     const data = await Reviews.update(
//       { reviewtext: req.body.content },
//       {
//         where: {
//           id: req.body.review_id,
//         },
//       }
//     );
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const data = await Reviews.destroy({ where: { id: req.body.review_id } });
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(400).json(err);
//     console.log(err.message);
//   }
// });
//Add post, put, delete comments

module.exports = router;
