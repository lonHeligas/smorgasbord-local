const dashboardDiv = document.querySelector(".dashboard");

dashboardDiv.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.className.includes("content")) {
        const id = event.target.dataset.id
        document.location.replace(`/api/details/${id}`);
    }
})