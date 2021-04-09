const searchFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const city = document.querySelector('#city-text').value.trim();
    const state = document.querySelector('#state-code').value.trim();
    const regex = new RegExp('^[A-Z]{2}$');
    console.log(state)

    if (city && state) {
        if(regex.test(state.toUpperCase())){
          const url = `/bathroom/${city}/${state.toUpperCase()}`;
            const response = await fetch(url, {
              method: 'GET',
            //   body: JSON.stringify({ city, state }),
              headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
              window.location.replace(url)
            } else {
              alert(response.statusText);
            }
        }else{
            alert("Must enter a two character state code!");
        }
    }
  };
  
  
  document
    .querySelector('.search-form')
    .addEventListener('submit', searchFormHandler);