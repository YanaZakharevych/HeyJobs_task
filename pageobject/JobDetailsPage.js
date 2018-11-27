class JobDetailsPage {

    get backBtn() {
        return $('.sc-bxivhb > a:nth-child(1)')
    }

    get jobDetails() {
        return $('.sc-gzVnrw')
    }

    get jobTitel() {
        return $('.sc-EHOje')
    }

}

export default new JobDetailsPage();
