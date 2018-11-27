class ErrorPage {

    get errorInfoContainer() {
        return $('.sc-bwzfXH')
    }

    get errorCode() {
        return $('.sc-EHOje')
    }

    get errorMesssage() {
        return $('.sc-ifAKCX > p:nth-child(2)')
    }


}

export default new ErrorPage();
