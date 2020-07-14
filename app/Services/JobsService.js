import _store from '../store.js';
import Jobs from '../Models/jobs.js';
import store from '../store.js';

// @ts-ignore
const _api = axios.create({
    baseURL: "//bcw-sandbox.herokuapp.com/api",
    timeout: 3000
})

class JobsService {
    constructor() {
        this.getJobs()
    }

    getJobs() {
        _api.get("jobs").then(res => {
            let jobs = res.data.data.map(rawData => new Jobs(rawData))
            store.commit("jobs", jobs)
        }).catch(err => console.error(err))
    }


    deleteJob(jobId) {
        _api.delete("jobs/" + jobId).then(res => {
            this.getJobs()
        }).catch(err => console.error(err))

    }
    addJobs(rawData) {
        _api.post("jobs", rawData).then(res => {
            this.getJobs()
        }).catch(err => console.error(err))

    }
}

const SERVICE = new JobsService()
export default SERVICE