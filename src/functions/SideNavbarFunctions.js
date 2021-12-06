export const pressNavigateButton = (button) => {
    const selectedElement = document.getElementById("sideNavbarContainer").getElementsByClassName("active")
    const selectedElement2 = document.getElementById("sideNavbarContainer2").getElementsByClassName("active")
    const navlinkBackground = document.getElementById("activeNavlinkBackground");
    let rec;

    if (!button || !button.tagName) {
        if (selectedElement.length > 0) {
            rec = selectedElement[0].getBoundingClientRect();
        } else if (selectedElement2.length > 0) {
            rec = selectedElement2[0].getBoundingClientRect();
        }
    } else {
        if (button.tagName === "svg" || button.tagName === "SPAN") {
            rec = button.parentElement.getBoundingClientRect();
        } else if (button.tagName === "path" || button.tagName === "rect") {
            rec = button.parentElement.parentElement.getBoundingClientRect();
        } else {
            rec = button.getBoundingClientRect();
        }
    }
    if (navlinkBackground) {
        navlinkBackground.style.top = rec.top + window.scrollY + "px";
        navlinkBackground.style.left = "0px";
    } else {
        window.reload();
    }
}