const mongoose = require("mongoose");
const { Schema } = mongoose;

const mongoConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/restDB");
    console.log("mongoDB connected.... on mongodb://localhost:27017/restDB");
  } catch (error) {
    console.log(error);
  }
};

const EmployeeSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "Web Developer",
  },
  organization: {
    type: String,
    default: "AlmaBetter",
  },
});

const employee = new mongoose.model("employee", EmployeeSchema);
module.exports = { mongoConnect, employee };
