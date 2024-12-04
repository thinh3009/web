function updateClock() {
    const now = new Date();
    const hr = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");
    const timeString = `${hr}:${m}:${s}`;

    document.querySelector("#clock").innerHTML = timeString;
}

setInterval(updateClock,1000);