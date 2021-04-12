async function addReviewHandler(event) {
    event.preventDefault();

    const review_title = document.querySelector('#title').value;
    const review_text = document.querySelector('#review-text').value;
    const reviewRating = document.querySelector('#rating').value
    const url = window.location.href.split("/")
    const bathroom_id = url[url.length -1];

    // if (review_title & review_text) {
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
            location.href= `/api/search/${bathroom_id}`;
        } else {
            alert(response.statusText);
        }

    // } else {
    //     alert("Title & Text fields cannot be empty!")
    // }

}

async function addCommentHandler (event) {
    event.preventDefault();

    const comment_text = document.querySelector('#comment-text').value;
    const review_id = document.querySelector('#comment-form').parentElement.firstElementChild.getAttribute('data-id')

    console.log(review_id);

}

const comment_form = document.querySelector('#comment-form');
const newCommentBtn = document.querySelectorAll('.new-comment');
const submitCommentBtn = document.querySelectorAll('.submit-comment')
// newCommentBtn.onclick = function() {
//     comment_form.style.display = "block";
// }
newCommentBtn.forEach( (btn) => {
    btn.onclick = function(){
        let element = btn.parentElement.children;
        let fieldElement = element[element.length-1]
        fieldElement.style.display = "block";
    }
})

submitCommentBtn.forEach((btn) => {
    btn.onclick = async function() {
        let element = btn.parentElement.parentElement.children
        let comment_field = element[0].lastElementChild.firstElementChild
        const comment_text = comment_field.value
        const review_id = btn.parentElement.parentElement.parentElement.firstElementChild.getAttribute('data-id')
        const url = window.location.href.split("/")
        const bathroom_id = url[url.length -1];
        
        if(comment_text){

            const response = await fetch('/api/user/comments', {
                method: 'POST',
                body: JSON.stringify({
                    comment_text,
                    review_id
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(response.ok){
                window.location.replace(`/http://localhost:8080/api/search/${bathroom_id}`);
                return false;
            } else {
                alert(response.statusText);
            }
        } else{
            alert("Must have text in the comment field to save comment!")
        }



    }
})

document.querySelector('#submit-review').addEventListener('click', addReviewHandler)

// document.querySelector('.submit-comment').addEventListener('click', addCommentHandler)

