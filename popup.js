document.getElementById('classify-btn').addEventListener('click', () => {
  const emailContent = document.getElementById('email-content').value;

  chrome.runtime.sendMessage({ action: 'classifyEmail', emailContent }, response => {
    document.getElementById('result').textContent = response.result;
  });
});
