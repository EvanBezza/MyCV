document.addEventListener("DOMContentLoaded", function () {
    const yearText = document.getElementById("YearText");
    const currentYear = new Date().getFullYear();
    yearText.textContent = currentYear;
});