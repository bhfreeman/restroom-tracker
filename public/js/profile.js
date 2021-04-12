const profileFormHandler = async (event) => {
    event.preventDefault();
    console.log('clicked')
  
    // Collect values from the profile form
    const email = document.querySelector('#email-update').value.trim();
  
    
      // Send a POST request to the API endpoint
      const response = await fetch('/profile', {
        method: 'PUT',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    };
  
  
  document
    .querySelector('#submit-email')
    .addEventListener('click', profileFormHandler);
  