async function bathroomFormHandler(event) {
    event.preventDefault();

    const business_name = document.querySelector("#business_name").value;
    const street_address = document.querySelector("#street_address").value;
    const city = document.querySelector("#city").value;
    const state = document.querySelector("#state").value;
    const zipcode = document.querySelector("#zipcode").value;
    const location_type = document.querySelector("#location_type").value;
    const number_stalls = document.querySelector("#number_stalls").value;
    const ada_compliant = document.querySelector("#ada_compliant").value;

    //create new bathroom
  if(business_name & street_address & state & zipcode & location_type & number_stalls & ada_compliant){ 
    const response = fetch('/api/search', {
        method: "POST",
        body: JSON.stringify({
            business_name,
            street_address,
            city,
            state,
            zipcode,
            location_type,
            number_stalls,
            ada_compliant,
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (response.ok) {
        // res.send(response)
        // location.reload();
        window.location.reload();
        return false;
    } else {
        alert(response.statusText)
    }
  }
}

document.querySelector("#submit-new").addEventListener("click", bathroomFormHandler);
