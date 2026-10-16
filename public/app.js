// Part B: Send customer data to Express without navigating/reloading the page.
document.getElementById('customerForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const result = document.getElementById('result');
  result.textContent = 'Sending...';
  try {
    const response = await fetch('/api/customer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
      })
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    result.textContent = `${data.message}\n${data.email}`;
  } catch (error) {
    result.textContent = `Error: ${error.message}`;
  }
});

document.getElementById('testBackend').addEventListener('click', async () => {
  const response = await fetch('/api/message');
  const data = await response.json();
  document.getElementById('getResult').textContent = data.message;
});
