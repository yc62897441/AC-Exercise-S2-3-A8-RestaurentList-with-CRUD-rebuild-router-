const express = require("express")
const router = express.Router()

const Restaurant = require("../../models/restaurant")

router.get("/", (req, res) => {
  const sorted = req.query.sorted

  if (typeof sorted === "undefined") {
    Restaurant.find()
      .lean()
      .sort({ _id: "asc" })  // "desc"
      .then(restaurants => {
        res.render("index", { restaurants: restaurants })
      })
      .catch(error => console.log(error))
  } else {
    switch (sorted) {
      case "AtoZ":
        Restaurant.find()
          .lean()
          .sort({ name: "asc" })  // "desc"
          .then(restaurants => {
            res.render("index", { restaurants: restaurants })
          })
          .catch(error => console.log(error))
        return
      case "ZtoA":
        Restaurant.find()
          .lean()
          .sort({ name: "desc" })  // "desc"
          .then(restaurants => {
            res.render("index", { restaurants: restaurants })
          })
          .catch(error => console.log(error))
        return
      case "category":
        Restaurant.find()
          .lean()
          .sort({ category: "asc" })  // "desc"
          .then(restaurants => {
            res.render("index", { restaurants: restaurants })
          })
          .catch(error => console.log(error))
        return
      case "ratingHtoL":
        Restaurant.find()
          .lean()
          .sort({ rating: "desc" })  // "desc"
          .then(restaurants => {
            res.render("index", { restaurants: restaurants })
          })
          .catch(error => console.log(error))
        return
      case "ratingLtoH":
        Restaurant.find()
          .lean()
          .sort({ rating: "asc" })  // "desc"
          .then(restaurants => {
            res.render("index", { restaurants: restaurants })
          })
          .catch(error => console.log(error))
        return
    }
  }
})

module.exports = router