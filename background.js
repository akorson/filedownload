chrome.action.onClicked.addListener((tab) => {
  chrome.scripting
    .executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    })
    .catch((error) => {
      console.error(`Failed to execute script: ${error.message}`)
    })
})

chrome.downloads.onChanged.addListener(function (downloadDelta) {
  if (downloadDelta.error) {
    console.error(
      `Download ${downloadDelta.id} failed: ${downloadDelta.error.current}`
    )
  }
})
