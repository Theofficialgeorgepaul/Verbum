const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const quoteBtn = document.getElementById("new-quote-btn");

async function fetchQuote() {
  try {
    quoteText.innerText = "Loading quote...";
    authorText.innerText = "";

    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();

    quoteText.innerText = `"${data.quote}"`;
    authorText.innerText = `- ${data.author}`;
  } catch (error) {
    quoteText.innerText = "Oops! Something went wrong.";
    authorText.innerText = "";
  }
}

quoteBtn.addEventListener("click", fetchQuote);
fetchQuote();