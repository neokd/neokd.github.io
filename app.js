
const scriptURL = 'https://script.google.com/macros/s/AKfycbygFEReVPcQZkNhFJ_DkpBRlI-a3fNc0FmGKr8hCfNcoQ25cRfn_YhmLjIhbTZu7H0c/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    alert("Form Submitted Successfully")
})

window.devicePixelRatio