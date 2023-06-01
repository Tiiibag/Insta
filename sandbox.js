const menuItems = document.querySelectorAll('.menu-item');
const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const searchMsg = document.querySelector('#search-message');
const theme = document.querySelector('#theme');
const themeMode = document.querySelector('.customize-theme');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');
var root = document.querySelector(':root');
const sideToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('#sidebar');
const home = document.querySelector('#Home');


const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () =>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notify-count').
            style.display = 'none';
        }
    })
})

messageNotification.addEventListener('click', () => {
    messages.style.boxShadow ='0 0 .5rem var(--color-primary)'
    messageNotification.querySelector('.notify-count').
    style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 1000)
})

const search = () => {
    const val = searchMsg.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}

searchMsg.addEventListener('keyup', search);

const openTheme = () => {
    themeMode.style.display = 'grid';

}
const closeTheme = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeMode.style.display = 'none';
    }
}

theme.addEventListener('click', openTheme);
themeMode.addEventListener('click', closeTheme);

let whiteColor;
let darkColor;
let lightcolor;

const changeBg = () => {
    root.style.setProperty('--white-color-lightness', whiteColor);
    root.style.setProperty('--dark-color-lightness', darkColor);
    root.style.setProperty('--light-color-lightness', lightcolor);
}
Bg1.addEventListener('click', () => {
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
})

Bg2.addEventListener('click', () => {
    lightcolor = '10%';
    whiteColor = '20%';
    darkColor = '95%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
})


Bg3.addEventListener('click', () => {
    lightcolor = '0%';
    whiteColor = '10%';
    darkColor = '95%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBg();
})


sideToggle.addEventListener('click', () => {
    sidebar.style.display = 'block';
    sideToggle.style.display = 'none';
})

