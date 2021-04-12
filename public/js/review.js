async function addReviewHandler(event) {
    event.preventDefault();

    const review_title = document.querySelector('#title').value;
    const review_text = document.querySelector('#review-text').value;
    const reviewRating = document.querySelector('#rating').value
    const url = window.location.href.split("/")
    const bathroom_id = url[url.length -1];

    if (review_title & review_text) {
        const response = await fetch('/api/user/review', {
            method: 'POST',
            body: JSON.stringify({
                title: review_title,
                review_text: review_text,
                bathroom_id: parseInt(bathroom_id)
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if(response.ok){
            window.location.reload();
        } else {
            alert(response.statusText);
        }

    }

}

async function addCommentHandler (event) {
    event.preventDefault();

    const
}

function toggleCommentForm (event) {
    event.preventDefault();

    const form = document.querySelector('#comment-form')
    form.style

}

document.querySelector("#submit-review").addEventListener('click', addReviewHandler)