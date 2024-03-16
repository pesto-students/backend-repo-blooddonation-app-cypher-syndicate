const express = require("express");

const router = express.Router();

router.get("/bloodDonationDetails", (req, res) => {
  res.json({ message: "Blood Donors List" });
});

router.post("/bloodDonationDetails", (req, res) => {});

router.get("/bloodDonationDetails/:id", (req, res) => {});

router.put("/bloodDonationDetails/:id", (req, res) => {});

router.delete("/bloodDonationDetails/:id", (req, res) => {});

module.exports = router;
