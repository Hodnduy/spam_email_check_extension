// Nhận request từ server và gửi response về server
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'classifyEmail') {
    const emailContent = request.emailContent;
    const url = 'http://localhost:8000/classify';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailContent }),
    })
      .then(response => response.json())
      .then(data => {
        sendResponse({ result: data.result });
      });
    return true;
  }
});