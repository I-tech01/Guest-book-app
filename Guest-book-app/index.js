// fetch and display entries when page loads
async function loadEntries() {
  const response = await fetch("http://127.0.0.1:3000/entries")


;
  const entries = await response.json();

  const list = document.getElementById("entries");
  list.innerHTML = ""; // clear old entries

  entries.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry.name}: ${entry.message}`;
    list.appendChild(li);
  });
}

// handle form submission
document.getElementById("guestForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  await fetch("http://127.0.0.1:3000/entries"
, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, message }),
  });

  await loadEntries(); // refresh list

  document.getElementById("guestForm").reset();

  console.log({ name, message });
});

// initial load
loadEntries();
