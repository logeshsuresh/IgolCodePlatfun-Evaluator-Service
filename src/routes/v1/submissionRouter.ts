import express from "express";

import { addSubmussion } from "../../controllers/submissionController";
import { createSubmissionZodSchema } from "../../dtos/CreateSubmissionDto";
import { validate } from "../../validators/zodValidator";

const submissionRouter = express.Router();

submissionRouter.post("/", 
            validate(createSubmissionZodSchema),
            addSubmussion);

export default submissionRouter;