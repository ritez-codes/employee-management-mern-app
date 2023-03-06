const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const { mongoConnect, employee } = require("./mongodb");
const port = process.env.PORT;

// middlewares;
app.use(cors());
app.use(express.json());

// connection to mongodb;
mongoConnect();

app.listen(4040, () => {
  console.log(`nodejs server running on 127.0.0.1:${port}`);
});

// create data, post
app.post("/employee", async (req, res) => {
  const { firstname, lastname, role, organization } = req.body;
  try {
    const data = new employee({ firstname, lastname, role, organization });
    await data.save();
    res.status(201).send("data added succesfully!");
  } catch (error) {
    res.status(422).send(error);
  }
});

// read data , get
app.get("/employee", async (req, res) => {
  try {
    const data = await employee.find({});
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

// read single data
app.get("/employee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await employee.findById(_id);
    res.status(200).send(data);
  } catch (error) {
    res.send(error);
  }
});

// update data , patch
app.patch("/employee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    await employee.findByIdAndUpdate(_id, { ...req.body });
    res.status(200).send("Updated data succesfully !");
  } catch (error) {
    res.status(404).send(error);
  }
});

// delete data , delete
app.delete("/employee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    await employee.findByIdAndDelete(_id);
    res.status(200).send("deleted succesfully");
  } catch (error) {
    res.send(error);
  }
});
