const searchFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const city = document.querySelector('#city-text').value.trim();
    const state = document.querySelector('#state-code').value.trim();
    const regex = new RegExp('^[A-Z]{2}$');

    if (city && state) {
        if(regex.test(state)){
          const url = `/bathroom/${city}/${state}`;
            const response = await fetch(url, {
              method: 'GET',
            //   body: JSON.stringify({ city, state }),
              headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
              window.location.replace(`/bathroom/${city}/${state}`)
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