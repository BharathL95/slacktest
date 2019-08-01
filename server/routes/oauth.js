const express = require("express");
const router = express.Router();
const request = require("request");
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

router.get("/", async (req, res) => {
  if (!req.query.code) {
    res.status(500).json({ error: "Not getting code" });
    console.log("not getting code");
  } else {
    request(
      {
        url: "https://slack.com/api/oauth.access",
        qs: {
          code: req.query.code,
          client_id: clientId,
          client_secret: clientSecret
        },
        method: "GET"
      },
      (error, resp, body) => {
        if (error) {
          console.log(error);
        } else {
          res.json(body);
        }
      }
    );
  }
});

module.exports = router;
