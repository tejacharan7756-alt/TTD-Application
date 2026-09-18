const pages = {
    home: `
        <div class="hero">
            <h1>Govinda Govinda 🙏</h1>
            <p>Plan your Tirumala visit with ease.</p>
        </div>
        <div class="grid">
            <div class="card">🎟️ Special Entry Darshan</div>
            <div class="card">🙏 Free Darshan Info</div>
            <div class="card">📖 Bhagavad Gita</div>
            <div class="card">🛒 Devotional Store</div>
        </div>
    `,
    darshan: `<h2>🎟️ Darshan Information</h2><div class="card">Demo Darshan Data...</div>`,
    sevas: `<h2>🛕 Seva Darshan</h2><div class="card">Demo Seva Data...</div>`,
    books: `<h2>📖 Gita & Books</h2><div class="card">Demo Book Data...</div>`,
    store: `<h2>🛒 Devotional Store</h2><div class="card">Demo Product Data...</div>`
};

function showPage(page) {
    document.getElementById('app').innerHTML = pages[page] || pages['home'];
}

// Initial load
showPage('home');
