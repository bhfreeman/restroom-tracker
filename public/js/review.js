async function reviewFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector("#card-header").value.trim;
    const review_text = document.querySelector("#card-content").value.trim;

    //create new review
    const response = await fetch(`/api/post`, {
        method: "POST",
        body: JSON.stringify({
            title,
            review_text
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (response.ok) {
        document.location.replace("/reviews");
    } else {
        alert(response.statusText);
    }
}

document.querySelector("").addEventListener("submit", reviewFormHandler);