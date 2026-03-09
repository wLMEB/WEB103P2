const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const logo = document.createElement('img')
logo.src = '/logo.svg'
logo.alt = 'CW MARS Libraries Logo'

const title = document.createElement('h1')
title.innerHTML = 'CW MARS <span>Libraries</span>'

headerLeft.appendChild(logo)
headerLeft.appendChild(title)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const homeButton = document.createElement('button')
homeButton.textContent = 'Home'
homeButton.addEventListener('click', function handleClick() {
  window.location = '/'
})

headerRight.appendChild(homeButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)
header.appendChild(headerContainer)
