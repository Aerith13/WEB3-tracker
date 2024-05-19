// app.js

// Initialize the TradingView widget
new TradingView.widget(
    {
        "width": "100%",
        "height": 400,
        "symbol": "AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "chartContainer"
    }
);

// Fetch watchlist data using an API (replace with your own API endpoint)
fetch('https://api.example.com/watchlist')
    .then(response => response.json())
    .then(data => {
        const watchlistContainer = document.getElementById('watchlist');
        data.forEach(symbol => {
            const symbolElement = document.createElement('li');
            symbolElement.classList.add('list-group-item');
            symbolElement.textContent = symbol;
            watchlistContainer.appendChild(symbolElement);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });