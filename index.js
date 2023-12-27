import express from "express";

const app = express();

// to make app understand json
app.use(express.json());

// student data
let students = [
  {
    id: 1,
    name: "Dinesh",
  },
  {
    id: 2,
    name: "Alish",
  },
  {
    id: 3,
    name: "Salon",
  },
];

// get students
app.get("/student/list", (req, res) => {
  return res.status(200).send(students);
});

// add student
app.post("/student/add", (req, res) => {
  const newStudent = req.body;

  students.push(newStudent);

  return res.status(201).send({ message: "Student is added successfully." });
});

// delete student by id
app.delete("/student/delete", (req, res) => {
  const studentIdToBeDeleted = Number(req.body.id);

  const newStudentList = students.filter((item) => {
    return item.id !== studentIdToBeDeleted;
  });

  students = [...newStudentList];

  return res.status(200).send({ message: "Student is deleted successfully." });
});

// update student
app.put("/student/edit", (req, res) => {
  console.log(req.body);

  const studentIdToBeEdited = req.body.id;

  const newStudentName = req.body.name;

  const newStudentList = students.map((item, index, self) => {
    if (item.id === studentIdToBeEdited) {
      return { ...item, name: newStudentName };
    }

    return item;
  });

  students = [...newStudentList];

  return res.status(200).send({ message: "Student is updated successfully." });
});

app.listen(8000, () => {
  console.log("App is listening in port 8000");
});
