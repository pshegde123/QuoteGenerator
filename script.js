let apiQuotes = [];
const loader = document.getElementById('loader');
const container = document.getElementById('container');

// Show new quote
function newQuote(){
    loadingBegins();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //console.log(quote);   
    const quoteText = document.getElementById('quote');
    const authorText = document.getElementById('author');    
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    }
    else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    authorText.textContent = quote.author;
    loadingEnds();
}

//Tweet Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/post?text=${quote.text}`;
    window.open(twitterUrl,'_blank');
}

// Get quotes from API
async function getQuotes() {
    loadingBegins();
    const apiUrl ='https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }catch(error){
        // Catch error here
    }
}

function loadingBegins(){
    loader.hidden = false;
    container.hidden = true;
}

function loadingEnds(){
    loader.hidden = true;
    container.hidden = false;
}
// On Load
getQuotes();
