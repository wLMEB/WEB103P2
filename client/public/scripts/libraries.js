const renderLibraries = async () => {
  const response = await fetch('/libraries')
  const data = await response.json()

  const mainContent = document.getElementById('main-content')

  if (data && data.length > 0) {
    data.map(library => {
      const card = document.createElement('div')
      card.className = 'card'

      const topContainer = document.createElement('div')
      topContainer.className = 'top-container'
      topContainer.style.backgroundImage = `url('${library.image}')`

      const typeBadge = document.createElement('span')
      typeBadge.className = 'type-badge'
      typeBadge.textContent = library.type
      topContainer.appendChild(typeBadge)

      const bottomContainer = document.createElement('div')
      bottomContainer.className = 'bottom-container'

      const name = document.createElement('h3')
      name.textContent = library.name

      const city = document.createElement('p')
      city.className = 'city'
      city.textContent = `📍 ${library.city}, MA`

      const hours = document.createElement('p')
      hours.className = 'hours'
      hours.textContent = `🕐 ${library.hours}`

      const link = document.createElement('a')
      link.textContent = 'Learn More >'
      link.href = `/libraries/${library.id}`
      link.role = 'button'

      bottomContainer.appendChild(name)
      bottomContainer.appendChild(city)
      bottomContainer.appendChild(hours)
      bottomContainer.appendChild(link)

      card.appendChild(topContainer)
      card.appendChild(bottomContainer)

      mainContent.appendChild(card)
    })
  } else {
    const noData = document.createElement('h2')
    noData.className = 'no-data'
    noData.textContent = 'No Libraries Available 😞'
    mainContent.appendChild(noData)
  }
}

const requestedUrl = window.location.pathname.split('/').filter(Boolean)[0]

if (requestedUrl) {
  window.location.href = '/404.html'
} else {
  renderLibraries()
}
