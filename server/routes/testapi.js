const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log();
    res.status(200).send("Test endpoint BLAH!");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/blam", async (req, res) => {
  try {
    console.log();
    res.status(200).send("slash blam");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/kapow", async (req, res) => {
  try {
    res.status(200).json({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Danny Torrence left the following review for your property:"
          }
        },
        {
          type: "section",
          block_id: "section567",
          text: {
            type: "mrkdwn",
            text:
              "<https://example.com|Overlook Hotel> \n :star: \n Doors had too many axe holes, guest in room 237 was far too rowdy, whole place felt stuck in the 1920s."
          },
          accessory: {
            type: "image",
            image_url:
              "https://is5-ssl.mzstatic.com/image/thumb/Purple3/v4/d3/72/5c/d3725c8f-c642-5d69-1904-aa36e4297885/source/256x256bb.jpg",
            alt_text: "Haunted hotel image"
          }
        },
        {
          type: "section",
          block_id: "section789",
          fields: [
            {
              type: "mrkdwn",
              text: "*Average Rating*\n1.0"
            }
          ]
        }
      ]
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
