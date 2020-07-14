import _store from '../store.js';
import _jobsService from '../Services/JobsService.js';
import store from '../store.js';


function draw() {
    let template = ''
    let jobs = _store.State.jobs
    jobs.forEach(jobs => template += jobs.Template)
    document.getElementById("jobs").innerHTML = template
}

export default class JobsController {
    constructor() {
        store.subscribe("jobs", draw)
    }

    openForms(input) {
        if (input) {
            document.getElementById("job").removeAttribute("hidden")
            document.getElementById("jobs").removeAttribute("hidden")
            document.getElementById("cars").setAttribute("hidden", 'true')
            document.getElementById("houses").setAttribute("hidden", 'true')
            document.getElementById("house").setAttribute("hidden", 'true')
            document.getElementById("car").setAttribute("hidden", 'true')
        }
    }


    deleteCar(carId) {
        _jobsService.deleteJob(carId)

    }

    addJobs(event) {
        event.preventDefault()
        let formData = event.target
        let rawData = {
            jobTitle: formData.jobTitle.value,
            company: formData.company.value,
            rate: formData.rate.value,
            hours: formData.hours.value,
            jobDescription: formData.jobDescription.value,

        }
        _jobsService.addJobs(rawData)

    }
}