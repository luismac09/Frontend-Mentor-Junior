const button = document.getElementById("button");

button.addEventListener("click", async () => {
  const quoteApi = await fetch("https://api.adviceslip.com/advice");
  const { slip } = await quoteApi.json();
  document.getElementById("number-quote").textContent = slip.id;
  document.getElementById("quote").textContent = slip.advice;
});
