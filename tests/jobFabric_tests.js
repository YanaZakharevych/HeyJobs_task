import HomePage from "../pageObject/homePage";
import JobDetailsPage from "../pageobject/jobDetailsPage";
import ErrorPage from "../pageobject/errorPage";

describe('Home page tests', function () {
    beforeEach(() => {
        browser.url('./');
        HomePage.jobList.waitForVisible();
    });

    afterEach(() => {
        browser.reload();
    });

    it('Verify job list with content is launched', () => {

        expect(HomePage.jobList.isVisible()).to.be.true;

        expect(HomePage.firstJobOffer.getAttribute('href')).to.equal('http://localhost:3333/job/superoid-senior-frontend-developer');
        expect(HomePage.firstJobOffer.getText()).to.equal('Senior Frontend Developer\nSuperoidBerlin, Germany');

        expect(HomePage.secondJobOffer.getAttribute('href')).to.equal('http://localhost:3333/job/bioyo-frontend-developer');
        expect(HomePage.secondJobOffer.getText()).to.equal('Frontend Developer\nBioyoMunich, Germany');

        expect(HomePage.thirdJobOffer.getAttribute('href')).to.equal('http://localhost:3333/job/octonu-frontend-engineer');
        expect(HomePage.thirdJobOffer.getText()).to.equal('Frontend Engineer\nOctonuHamburg, Germany');

        expect(HomePage.fourthJobOffer.getAttribute('href')).to.equal('http://localhost:3333/job/forill-junior-frontend-engineer');
        expect(HomePage.fourthJobOffer.getText()).to.equal('Junior Frontend Engineer\nForillCologne, Germany');

        expect(HomePage.fifthJobOffer.getAttribute('href')).to.equal('http://localhost:3333/job/avanoodle-javascript-engineer');
        expect(HomePage.fifthJobOffer.getText()).to.equal('Javascript Engineer\nAvanoodleBerlin, Germany');
    });

    it('Verify possibility to review job details', () => {
        HomePage.firstJobOffer.click();

        expect(JobDetailsPage.jobDetails.isVisible()).to.be.true;
        expect(JobDetailsPage.jobTitel.getText()).to.equal('Senior Frontend Developer');
    });

    it('Verify possibility to navigate back from a job details page to the job list', () => {
        HomePage.firstJobOffer.click();

        expect(JobDetailsPage.jobDetails.isVisible()).to.be.true;
        JobDetailsPage.backBtn.click();

        expect(HomePage.jobList.isVisible()).to.be.true;
    });

    it('Error page is displayed when user go to unknown URL', () => {
        browser.url('./foo');

        expect(ErrorPage.errorInfoContainer.isVisible()).to.be.true;
        expect(ErrorPage.errorCode.getText()).to.equal('404');
        expect(ErrorPage.errorMesssage.getText()).to.equal('Sorry, this url is not pointing anywhere');
    });
})