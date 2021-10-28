document.addEventListener("DOMContentLoaded",function()
{
    window.addEventListener('scroll',function()
    {
        if(window.scrollY > 50)
        {
            document.getElementById('navbar').classList.add('fixed-top');

            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        }
        else
        {
            document.getElementById('navbar').classList.remove('fixed-top');
            document.body.style.paddingTop = '0';
        }
    });
});

// DOMContentLoaded events fires before images, stylesheet and script files are loaded