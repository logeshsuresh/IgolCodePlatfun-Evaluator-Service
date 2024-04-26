import { Job } from "bullmq";

import { IJob } from "../types/bullMqJobDefinition";

class SampleJob implements IJob {
    name: string;
    payload: Record<string, unknown>;
    constructor(payload: Record<string, unknown>, ) {
        this.name = this.constructor.name;
        this.payload = payload;
    }

    handler = () => {
        console.log("handler of the job called");
    };

    failed = (job?: Job) : void => {
        if (job) {
            console.log(job.id);
        }
    };
}

export default SampleJob;