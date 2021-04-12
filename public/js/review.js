async function reviewFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector(".card-header").value;
    const review_text = document.querySelector(".card-content").value;

    //create new review
    const response = await fetch(`/api/reviews`, {
        method: "POST",
        body: JSON.stringify({
            title,
            review_text,
            location_type,
            number_stalls,
            ada_compliant,
            overall_rating
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

document.querySelector(".title is-12").addEventListener("submit", reviewFormHandler);