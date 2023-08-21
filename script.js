// list of quotes

const quotes = [
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "The secret of getting ahead is getting started.",
  "The only way to do great work is to love what you do.",
  "The way to get started is to quit talking and begin doing.",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  "Life is what happens to us while we are making other plans.",
  "Your time is limited, so don't waste it living someone else's life.",
  "Don't watch the clock; do what it does. Keep going.",
  "Start where you are. Use what you have. Do what you can.",
  "The only person you are destined to become is the person you decide to be.",
  "Be the change that you wish to see in the world.",
  "Every strike brings me closer to the next home run.",
  "Words and ideas can change the world",
];

//function to display random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  const getAuthor = document.getElementById("author");
  quoteElement.innerHTML = quotes[randomIndex];
  getAuthor.innerText = "Author- Rakesh C G";
}

getRandomQuote();
setInterval(getRandomQuote, 2000);

