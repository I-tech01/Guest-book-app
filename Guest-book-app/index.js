// 
const form = document.getElementById('guestForm');
const entriesList = document.getElementById('entries');

// Load existing entries from backend
async function loadEntries() {
  try {
    const response = await fetch('http://localhost:3000/entries');
    const entries = await response.json();

    entriesList.innerHTML = ''; // clear old list
    entries.forEach(entry => {
      const li = document.createElement('li');
      li.textContent = `${entry.name}: ${entry.message}`;
      entriesList.appendChild(li);
    });
  } catch (error) {
    console.error('Error loading entries:', error);
  }
}

// Handle form submission
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  try {
    await fetch('http://localhost:3000/entries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message })
    });

    // Reload entries after adding new one
    loadEntries();
    form.reset();
  } catch (error) {
    console.error('Error submitting entry:', error);
  }
});

// Load entries when page first opens
loadEntries();
