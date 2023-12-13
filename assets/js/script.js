import socialData from './data.js';

// social
const contacts = document.querySelector('.contacts')

socialData.forEach(social => {
    contacts.innerHTML += `<a class="social" href="${social.url}"><i class="${social.iconUrl}"></i><span>${social.text}</span></a>`
});

// contacts
const buttonGetContact = document.querySelector('.get-contact')
const popup = document.querySelector('.popup')
const popupContent = document.querySelector('.popup__content')
buttonGetContact.addEventListener('click', (event) => {
    event.preventDefault()
    popup.classList.add('active');
    setTimeout(() => {
        popupContent.classList.add('active')
    }, 100);
});

popup.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(popupContent);
    console.log(withinBoundaries);
    if (!withinBoundaries) {
        popup.classList.remove('active') 
        popupContent.classList.remove('active')
    }
})
