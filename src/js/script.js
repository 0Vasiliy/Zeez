document.addEventListener('DOMContentLoaded',function(){
    
    //Modal
    let over = document.querySelector('.overlay');
    let mdClose = document.querySelector('.modal_close');
    let btn = document.getElementById('btn_title')   
     
    btn.addEventListener('click',(e) => {
      e.preventDefault();
      over.classList.add('active');
    })
    
    mdClose.addEventListener('click',(e) => {
      mdClose.classList.remove('active');
      over.classList.remove('active'); 
    })
  
    document.addEventListener('click',(e) => {
      if(e.target ===over){
        over.classList.remove('active');
      }
    })

    // Hamburger
    const hamb = document.querySelector('.hamburger');
          menuList = document.querySelector('.menu_list');
          menuItem = document.querySelectorAll('.menu_item');

    hamb.addEventListener('click', () => {
      hamb.classList.toggle('hamburger_active');
      menuList.classList.toggle('menu_list_active');
  });

    menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamb.classList.toggle('hamburger_active');
          menuList.classList.toggle('menu_list_active');
      })
  })

})