function findDocumentLinks () {
  const links = Array.from(document.querySelectorAll('a'))
  const docLinks = links
    .filter((link) => {
      const href = link.href
      return (
        href.endsWith('.pdf') ||
        href.endsWith('.docx') ||
        href.endsWith('.rtf') ||
        href.endsWith('.csv') ||
        href.endsWith('.txt')
      )
    })
    .map((link) => link.href)

  return docLinks
}

function downloadFile (url) {
  const link = document.createElement('a')
  link.href = url
  link.download = url.split('/').pop()
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function downloadFiles () {
  const docLinks = findDocumentLinks()

  if (docLinks && docLinks.length > 0) {
    for (const link of docLinks) {
      downloadFile(link)
    }
  }
}

downloadFiles()
