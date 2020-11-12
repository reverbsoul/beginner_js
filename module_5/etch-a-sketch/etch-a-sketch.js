console.log(`running... etch-a-sketch.js`);

const formResponse = document.querySelector('form[name="form"]');

function formAccept(e) {
  e.preventDefault();
  console.log('You hit submit');
  if (!e.currentTarget.agree.checked) {
    console.log('please agree');
  } else {
    console.log(e.currentTarget.name.value);
    console.log(e.currentTarget.email.value);
    console.log('thanks');
  }
}

formResponse.addEventListener('submit', formAccept);
