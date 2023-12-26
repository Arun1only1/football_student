import express from "express";

const app = express();

// to make app understand json
app.use(express.json());

// student data
const students = [
  {
    id: 1,
    name: "Dinesh",
  },
  {
    id: 2,
    name: "Alish",
  },
];

// get students

app.get("/students", (req, res) => {
  return res.status(200).send("Hello world");
});

app.listen(8000, () => {
  console.log("App is listening in port 8000");
});
