
async function bathroomFormHandler(event) {
    event.preventDefault();

    const business_name = document.querySelector("").value;
    const street_address = document.querySelector("").value;

    //create new bathroom
    const response = await fetch(`/api/bathroom`, {
        method: "POST",
        body: JSON.stringify({
            user_name,
            comment_text
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        document.location.replace("/bathroom");
    } else {
        alert(response.statusText);

}
}



document.querySelector("").addEventListener("click", bathroomFormHandler)
