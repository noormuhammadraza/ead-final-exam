import express from "express";
// import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route to create a new time slot
router.post("/", async (request, response) => {
  try {
    const newAppointment = {
      startTime: request.body.startTime,
      endTime: request.body.endTime,
    };

    const appointments = await Appointment.create(newAppointment);

    response.status(201).send(appointment);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to Get All Time slots from database
router.get("/", async (request, response) => {
  try {
    const appointments = await Appointment.find({});

    response.status(200).json({
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to create a new Appointment
router.post("/", async (request, response) => {
  try {
    const newAppointment = {
      startTime: request.body.startTime,
      endTime: request.body.endTime,
    };

    const appointments = await Appointment.create(newAppointment);

    response.status(201).send(appointment);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to Get All Appointments from database
router.get("/", async (request, response) => {
  try {
    const appointments = await Appointment.find({});

    response.status(200).json({
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
