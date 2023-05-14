document.getElementById('downloadBtn').addEventListener('click', async () => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
  if (tabs[0]) {
    try {
      const result = await chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['content.js']
      })
      console.log('Script executed successfully')
    } catch (error) {
      console.error('Error executing script: ', error)
    }
  } else {
    console.error('No active tab found')
  }
})
