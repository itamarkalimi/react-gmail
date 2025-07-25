export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    getRandomColor,
    padNum,
    getDayName,
    getMonthName,
    loadFromStorage,
    saveToStorage
}

const mail = [{ 
  id: 'e101', 
  createdAt : 2, 
  subject: 'Hi you 1!', 
  body: 'Would love to catch up sometimes 1', 
  isRead: false, 
  sentAt : 20, 
  removedAt : null, 
  from: 'momo@momo.com', to: 'user@appsus.com' 
},
{ 
  id: 'e102', 
  createdAt : 1, 
  subject: 'Miss you 2!', 
  body: 'Would love to catch up sometimes 2', 
  isRead: false, 
  sentAt : 10, 
  removedAt : null, 
  from: 'momo@momo.com', to: 'user@appsus.com' 
}
,
{ 
  id: 'e103', 
  createdAt : 3, 
  subject: 'oh you 3!', 
  body: 'Would love to catch up sometimes 3', 
  isRead: true, 
  sentAt : 30, 
  removedAt : null, 
  from: 'momo@momo.com', to: 'user@appsus.com' 
}]

 
const key = `mails`

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

saveToStorage(key, mail)

function loadFromStorage(key) {
    const val = localStorage.getItem(key)
    return JSON.parse(val)
}

function makeId(length = 6) {
    var txt = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeLorem(size = 100) {
    const words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

function padNum(num) {
    return (num > 9) ? num + '' : '0' + num
}

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    var color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function getDayName(date, locale) {
    date = new Date(date)
    return date.toLocaleDateString(locale, { weekday: 'long' })
}


function getMonthName(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    return monthNames[date.getMonth()]
}
