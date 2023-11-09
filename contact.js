document.addEventListener("DOMContentLoaded", function () {
    // Fetch and include the common content
    fetch("common.html")
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
        })
        .catch(error => console.error("Error fetching common content:", error));

    // Add your existing script functionality here
    // ...
});
