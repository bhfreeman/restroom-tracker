async function commentFormHandler(event) {
    event.preventDefault();

    const user_name = document.querySelector(".card-header").value;
    const comment_text = document.querySelector(".card-content").value;
    // const url = window.location.href.split("/")
    // const bathroom_id = url[url.length -1];
    // console.log(bathroom_id)
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
        
    } else {
        alert(response.statusText);
    }
}

document.querySelector("title is-12").addEventListener("submit", commentFormHandler);