function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('main1').style.opacity = '0.5';
}


function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';

   document.getElementById('main1').style.opacity = '100';
}   


function changeMode()
{
    mybody = document.body;
    nav1 = document.getElementById('navtarget');



   


    mybody.classList.toggle('mydark');
    nav1.classList.toggle('navbar-dark');
    



    const cards = document.querySelectorAll('.card');

    cards.forEach(card => card.classList.toggle('bg-dark'));


   

    
   
}



