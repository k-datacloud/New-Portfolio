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

const profiles = document.querySelectorAll('.AboutShowUp');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    profiles.forEach(profile => {
        const top = profile.getBoundingClientRect().top;
        const profileTitle = profile.querySelector('.AboutShowUp-Title');
        console.log(scrollY);
        console.log(top);

        if ( scrollY > ( top + 80 ) ) {
            profileTitle.classList.add('active');
            
        } else {
            profileTitle.classList.remove('active');
        }
    });
});

