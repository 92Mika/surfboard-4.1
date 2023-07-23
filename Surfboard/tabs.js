const reviewsBar = document.querySelector('.reviews-switcher');
const reviewsItems = document.querySelectorAll('reviews-switcher__item');
const reviewWrapp = document.querySelectorAll('.reviews__item');

reviewsBar.addEventListener('click' , e=>{
   e.preventDefault();
  
  // console.log(Array.from(reviewsBar.children))
  
  if(e.target.classList.contains('reviews-switcher__link')){
    const currentPeopleLink = e.target;
    const currentPeopleItem = currentPeopleLink.closest('.reviews-switcher__item')
    const currentPeopleId = currentPeopleItem.id;
    
    for (const iterator of reviewsItems) {
      if(iterator !== currentPeopleItem){
        iterator.classList.remove("reviews-switcher__item--active");
      }
    }
    
    if(!currentPeopleItem.classList.contains('reviews-switcher__item--active')){
      currentPeopleItem.classList.add("reviews-switcher__item--active");
    }
    
    reviewWrapp.forEach(function(wrapp){
      if(currentPeopleId == wrapp.id){
        wrapp.classList.add('reviews__item--active');
      }else{
        wrapp.classList.remove('reviews__item--active');
      }
    })
  }
})

     
                                          