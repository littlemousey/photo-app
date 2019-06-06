function sightengineProcess() {
  const sightengine = require("sightengine")(
    "137533377",
    "cbFrKexHjBoWnNN9TBe7"
  );
  sightengine
    .check(["offensive"])
    .set_url("https://sightengine.com/assets/img/examples/example7.jpg")
    .then(function(result) {
      return `this image is: ${result}`;
    })
    .catch(function(err) {
      console.error("Oops, an error has occurred: ", error);
    });
}

export default sightengineProcess;
