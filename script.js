// JavaScript code to handle page navigation

    function showPage(pageId) {

        // Select all pages
        const pages = document.querySelectorAll(".page");

        // Hide all pages
        pages.forEach(function(page) {
            page.classList.remove("active");
        });

        // Show the selected page
        document.getElementById(pageId).classList.add("active");
    }

