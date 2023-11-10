document.addEventListener("DOMContentLoaded", function () {
    // Fetch and include the header content
    fetch("header.html")
        .then(response => response.text())
        .then(headerData => {
            // Fetch and include the footer content after fetching the header
            fetch("footer.html")
                .then(response => response.text())
                .then(footerData => {
                    // Manipulate the DOM to include header and footer content
                    document.body.innerHTML = headerData + document.body.innerHTML + footerData;
                })
                .catch(error => console.error("Error fetching footer content:", error));
        })
        .catch(error => console.error("Error fetching header content:", error));

    // Add your existing script functionality here
    // ...
});


document.getElementById("contactLink").addEventListener("click", function() {
        window.location.href = "contact.html";
});

