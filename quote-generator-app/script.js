
blockQuoteTag = document.getElementById('quote');
authorTag = document.getElementById('author');

async function displayNewQuote() {
  const response = await fetch('https://api.quotable.io/random')
  const quote = await response.json()
  
  // Output the quote and author name
  blockQuoteTag.innerHTML = quote.content;
  authorTag.innerHTML = quote.author;
}

displayNewQuote();
