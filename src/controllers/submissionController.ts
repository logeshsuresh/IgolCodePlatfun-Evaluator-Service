import { Request, Response } from "express";

import { CreateSubmissionDto } from "../dtos/CreateSubmissionDto";

export function addSubmussion(req: Request, res: Response) {
    const submissionDto = req.body as CreateSubmissionDto;
    console.log(submissionDto);
    // TODO : ADD VALIDATION USING ZOD

    return res.status(201).json({
        success: true,
        error: {},
        message: "Successfully collected the submission"
    });
}