const url = 'https://api.adviceslip.com/advice'

fetch(url)
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)
  document.querySelector('#advice-number').innerText = '#' + data.slip.id
  document.querySelector('#advice-input').innerText = `${data.slip.advice}`
})
.catch(err => {
    console.log(`error ${err}`)
});

