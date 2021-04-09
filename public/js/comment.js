async function commentFormHandler(event) {
    event.preventDefault();

    const user_name = document.querySelector(".").value;
    const comment_text = document.querySelector(".card-content").value;

    //create new comment
    const response = await fetch(`/api/comments`, {
        method: "POST",
        body: JSON.stringify({
            user_name,
            comment_text
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    //redirects to comments
    if (response.ok) {
        document.location.replace("/comments");
    } else {
        alert(response.statusText);
    }
}

document.querySelector("title is-12").addEventListener("submit", commentFormHandler);