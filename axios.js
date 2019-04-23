axios
  .get("https://api.github.com/users/rhawan")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
