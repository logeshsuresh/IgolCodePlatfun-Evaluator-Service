import { Job } from "bullmq";

import { IJob } from "../types/bullMqJobDefinition";

class SampleJob implements IJob {
    name: string;
    payload: Record<string, unknown>;
    constructor(payload: Record<string, unknown>, ) {
        this.name = this.constructor.name;
        this.payload = payload;
    }

    handle = (job?: Job) => {
        console.log("handler of the job called");
        if (job) {
            console.log(job.name, job.id, job.data);
        }
    };

    failed = (job?: Job) : void => {
        if (job) {
            console.log(job.id);
        }
    };
}

export default SampleJob;