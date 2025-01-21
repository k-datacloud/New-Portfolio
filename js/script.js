const hum = document.querySelector('.humburger')
const nav = document.querySelector('.sp-nav')
const grnav = document.querySelector('.sp-grnav')
const list = document.querySelectorAll('.header-list__item')
const close = document.querySelector('.close')
hum.addEventListener('click', () => {
    nav.classList.toggle('sp-nav-act');
    grnav.classList.toggle('menu-act');
    close.classList.toggle('close-act');

    setTimeout(() => {
        list.forEach((item, index) => {
            setTimeout(() => {
                item.classList.toggle('item-act')
            }, 150 * index)
        })
    }, 700)

    hum.classList.toggle('hm-act')
});


close.addEventListener('click', () => {
    nav.classList.remove('sp-nav-act');
    grnav.classList.remove('menu-act');
    list.forEach((item, index) => {
        item.classList.remove('item-act')
    })
    hum.classList.remove('hm-act')
    close.classList.toggle('close-act')
})


document.addEventListener('DOMContentLoaded', function () {
    const Items = document.querySelectorAll('.works-item');
    const linkTexts = document.querySelectorAll('.works-item__link')
    const masks = document.querySelectorAll('.mask')

    Items.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            masks[index].style.visibility = 'visible'; 
            masks[index].style.width = '100%';
            masks[index].style.height = '100%';
            linkTexts[index].style.visibility = 'visible';
        });
    });
    

    Items.forEach((item, index) => {
        item.addEventListener('mouseleave', () => {
            masks[index].style.visibility = 'hidden'; 
            masks[index].style.width = '0';
            masks[index].style.height = '0';
            linkTexts[index].style.visibility = 'hidden';
        });
    });
})

const profiles = document.querySelectorAll('.profile');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    profiles.forEach(profile => {
        const top = profile.getBoundingClientRect().top;
        const profileTitle = profile.querySelector('.profile__title');
        console.log(scrollY);
        console.log(top);

        if ( scrollY > ( top + 100 ) ) {
            profileTitle.classList.add('active');
        } else {
            profileTitle.classList.remove('active');
        }
    });
});

const emailBtn = document.querySelector('.copyemail');

emailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('k25ts09@outlook.jp');
    emailBtn.textContent = 'Copied!';
    setTimeout(() => {
        emailBtn.textContent = 'Copy Email';
    }, 2000);
})

const slideDownBtn = document.querySelector('.slideDownBtn');
const space = document.querySelector('.space');

slideDownBtn.addEventListener('click', (event) => {
    event.preventDefault();
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1800);

    space.classList.add('loader');
    setTimeout(() => {
        space.classList.remove('loader');
    }, 2000)
})