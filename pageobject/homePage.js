class HomePage {

    get jobList() {
        return $('.sc-bxivhb > section:nth-child(2)')
    }

    get firstJobOffer() {
        return $('.sc-bxivhb > section:nth-child(2) > div:nth-child(2) > a:nth-child(1)');
    }

    get secondJobOffer() {
        return $('.sc-bxivhb > section:nth-child(2) > div:nth-child(2) > a:nth-child(2)');
    }

    get thirdJobOffer() {
        return $('.sc-bxivhb > section:nth-child(2) > div:nth-child(2) > a:nth-child(3)');
    }

    get fourthJobOffer() {
        return $('.sc-bxivhb > section:nth-child(2) > div:nth-child(2) > a:nth-child(4)');
    }

    get fifthJobOffer() {
        return $('.sc-bxivhb > section:nth-child(2) > div:nth-child(2) > a:nth-child(5)');
    }
}

export default new HomePage();
