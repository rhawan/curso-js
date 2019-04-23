function checkAge(idade) {
  setTimeout(null, 5000);
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (idade > 18) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
}

checkAge(20)
  .then(function() {
    console.log("Maior que 18");
  })
  .catch(function() {
    console.log("Menor que 18");
  });
