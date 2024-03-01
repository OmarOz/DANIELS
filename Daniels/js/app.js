//make navbar visible in light background when scrool to about section

document.addEventListener('scroll' ,()=>{
    const nav=document.querySelector('nav');
    if(window.scrollY>750){
        nav.classList.add('scrolled');
        nav.classList.add('fixed');
    }
    else{
        nav.classList.remove('scrolled');
        nav.classList.remove('fixed');
    }
});

//add and remove action on navbar
var sec=document.querySelectorAll('section');
var navlink=document.querySelectorAll('nav a');

window.onscroll=()=>{
    sec.forEach(section=>{
        var top=window.scrollY;
        var offset=section.offsetTop - 100;
        var height=section.offsetHeight;
        var id=section.getAttribute('id');

        if(top>=offset && top<=offset+height){
            navlink.forEach(link=>{
                link.classList.remove('active');
                document.querySelector('nav a[href*=' + id +']').classList.add('active');
            })
        }
    })
}

//adjusting scroll position

const navLinks=document.querySelectorAll('nav a');
navLinks.forEach(link=>{
    link.addEventListener('click',event=>{
        event.preventDefault();
        const target=document.getElementById(link.getAttribute('href').slice(1));
        const targetOffset=target.offsetTop;
        window.scroll({
            top:targetOffset - 100,
            behavior:'smooth'
        })
    })
})