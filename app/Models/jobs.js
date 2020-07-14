export default class Jobs {
    constructor(data) {
        this.id = data._id || data.id
        this.jobTitle = data.jobTitle
        this.company = data.company
        this.rate = data.rate
        this.hours = data.hours
        this.jobDescription = data.jobDescription

    }

    get Template() {
        return `
      <div class="col-3 border rounded shadow p-2 text-center bg-light m-3">
      <h1>${this.jobTitle}</h1>
                <h1>${this.company}</h1>
                <h1>${this.rate}</h1>
                <h1>${this.hours}</h1>
                <h1>${this.jobDescription}</h1>
<button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">DELETE</button>
            
            </div>

`
    }
}