function F_arrHeading (arrHeading, tag, serviceTitle, setSectionTitle) {
    arrHeading.forEach((element) => {
        element.arr.forEach((elementServiceTitle) => {
            if (elementServiceTitle == serviceTitle) {
                setSectionTitle(element.title)
                tag(element.titleForBD);
            }
        });
    });
}

export default F_arrHeading;