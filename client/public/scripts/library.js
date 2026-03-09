const renderLibrary = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop())

  const response = await fetch('/libraries')
  const data = await response.json()

  const libraryContent = document.getElementById('library-content')

  let library

  if (data) {
    library = data.find(lib => lib.id === requestedID)
  }

  if (library) {
    document.getElementById('image').src = library.image
    document.getElementById('name').textContent = library.name
    document.getElementById('city').textContent = `📍 ${library.city}, MA`
    document.getElementById('type').textContent = `🏛️ ${library.type}`
    document.getElementById('hours').textContent = `🕐 Hours: ${library.hours}`
    document.getElementById('phone').textContent = `📞 Phone: ${library.phone}`
    document.getElementById('services').textContent = `🛠️ Services: ${library.services}`
    document.getElementById('description').textContent = library.description

    const websiteEl = document.getElementById('website')
    websiteEl.textContent = library.website
    websiteEl.href = library.website

    document.getElementById('memberSince').textContent = `Member of CW MARS since: ${library.memberSince}`

    document.title = `${library.name} | CW MARS Libraries`
  } else {
    const libraryContent = document.getElementById('library-content')
    const noData = document.createElement('h2')
    noData.className = 'no-data'
    noData.textContent = 'No Library Found 😞'
    libraryContent.appendChild(noData)
  }
}

renderLibrary()
