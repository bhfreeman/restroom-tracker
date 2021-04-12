async function bathroomFormHandler(event) {
    event.preventDefault();
    function titleCase(string){
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
      }

    const business_name = document.querySelector("#business_name").value;
    const street_address = document.querySelector("#street_address").value;
    const city = document.querySelector("#city").value;
    const state = document.querySelector("#state").value;
    const zipcode = document.querySelector("#zipcode").value;
    const location_type = document.querySelector("#location_type").value;
    const number_stalls = document.querySelector("#number_stalls").value;
    let ada_compliant;
    if (document.querySelector("#ada_compliant").value === 'on'){
        ada_compliant = true;
    } else{
        ada_compliant = false;
    }

    console.log(`Business name: ${business_name}. Street: ${street_address}. city: ${city}. state: ${state}. zipcode: ${zipcode}. location: ${location_type}. stalls: ${number_stalls}. ada: ${ada_compliant}`)
    //create new bathroom
  if(business_name & street_address & state & zipcode & location_type & number_stalls & ada_compliant){ 
    const response = await fetch('/api/search/create', {
        method: "POST",
        body: JSON.stringify({
            business_name: business_name,
            street_address: street_address,
            city: titleCase(city),
            state: state.toUpperCase(),
            zipcode: parseInt(zipcode),
            location_type: location_type,
            number_stalls: number_stalls,
            ada_compliant: ada_compliant,
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

document.querySelector("#submit_new").addEventListener("click", bathroomFormHandler);
