// Lab 8.2: Invoke an Express REST backend from client-side JavaScript using fetch().
const getResult = document.getElementById('getResult');
const postResult = document.getElementById('postResult');

document.getElementById('testBackend').addEventListener('click', async () => {
  getResult.textContent = 'Loading...';
  try {
    const response = await fetch('/api/message');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    getResult.textContent = data.message;
  } catch (error) {
    getResult.textContent = `Request failed: ${error.message}`;
  }
});

document.getElementById('greetingForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  postResult.textContent = 'Sending...';
  const name = document.getElementById('name').value;
  try {
    const response = await fetch('/api/greet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
    postResult.textContent = data.message;
  } catch (error) {
    postResult.textContent = `Request failed: ${error.message}`;
  }
});
