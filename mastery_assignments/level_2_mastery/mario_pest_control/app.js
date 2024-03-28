const form = document.pricing;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const totalGoombas = parseFloat(form.goombaInput.value);
  const goombaPrice = 5;
  const totalBobOmbs = parseFloat(form.bobOmbInput.value);
  const bobOmbPrice = 7;
  const totalCheepCheeps = parseFloat(form.cheepCheepInput.value);
  const cheepCheepPrice = 11;

  function totalPrice(a, b, c, d, e, f) {
    return a * b + c * d + e * f;
  }
  let result = totalPrice(
    totalGoombas,
    goombaPrice,
    totalBobOmbs,
    bobOmbPrice,
    totalCheepCheeps,
    cheepCheepPrice
  );
  const priceBox = document.getElementById("priceBox");
  priceBox.textContent = result;
});
