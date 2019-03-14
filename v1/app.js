const express = require("express");
const app = express();
const bodyParser = require("body-parser");

let rooms = [
  {
    name: "Amman",
    image:
      "https://www.thoughtco.com/thmb/hcaYTYR5_rdHyd3id2zqiDFIQOY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/200164743-004-56a18eb55f9b58b7d0c0a5d1.jpg"
  },
  {
    name: "Irbed",
    image:
      "https://www.thoughtco.com/thmb/izTzjufWQzSYBSsgbgMpOEkLiDE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-488004795-5c70260546e0fb0001b681d6.jpg"
  },
  {
    name: "Aqaba",
    image:
      "https://thestandardgainesville.landmark-properties.com/content/uploads/posts/66/why-its-better-to-have-a-roommate.jpg"
  },
  {
    name: "Amman",
    image:
      "https://www.thoughtco.com/thmb/hcaYTYR5_rdHyd3id2zqiDFIQOY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/200164743-004-56a18eb55f9b58b7d0c0a5d1.jpg"
  },
  {
    name: "Irbed",
    image:
      "https://www.thoughtco.com/thmb/izTzjufWQzSYBSsgbgMpOEkLiDE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-488004795-5c70260546e0fb0001b681d6.jpg"
  },
  {
    name: "Aqaba",
    image:
      "https://thestandardgainesville.landmark-properties.com/content/uploads/posts/66/why-its-better-to-have-a-roommate.jpg"
  }
];
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/rooms", (req, res) => {
  res.render("rooms", { rooms: rooms });
});
app.post("/rooms", (req, res) => {
  // res.send("You ht the post route");
  let name = req.body.name;
  let image = req.body.image;
  let newRoom = { name: name, image: image };
  rooms.push(newRoom);
  res.redirect("/rooms");
});
app.get("/rooms/new", (req, res) => {
  res.render("new.ejs");
});

app.listen(3000, () => {
  console.log("The Roommate Server Has  Started!!");
});
