
function update(e) {
    const fast = document.querySelector("#fast").checked;
    const cheap = document.querySelector("#cheap").checked;
    const good = document.querySelector("#good").checked;
    const src = e.srcElement.id;
    if (src == "fast") {
        if (fast && cheap) {
            return document.querySelector("#good").checked = false;
        }
        if (fast && good) {
            return document.querySelector("#cheap").checked = false;
        }
    }
    if (src == "cheap") {
        if (cheap && good) {
            return document.querySelector("#fast").checked = false;
        }
        if (cheap && fast) {
            return document.querySelector("#good").checked = false;
        }
    }
    if (src == "good") {
        if (good && fast) {
            return document.querySelector("#cheap").checked = false;
        }
        if (good && cheap) {
            return document.querySelector("#fast").checked = false;
        }
    }
}

document.querySelector("#fast").addEventListener("change", update);
document.querySelector("#cheap").addEventListener("change", update);
document.querySelector("#good").addEventListener("change", update);
