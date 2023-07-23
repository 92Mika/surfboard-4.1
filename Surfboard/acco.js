function accordionTeam() {
    const workers = document.querySelectorAll(".team__item");
    const teamAccord = document.querySelector(".team");
  
    teamAccord.addEventListener("click", function (event) {
      event.preventDefault(); // скидываем стандартное состояние (что бы не кидало страницу вверх / или не перенаправляло на другую)
      const target = event.target; // то на что мы клацнули
     
      if (target.classList.contains("team__title")) {
        const worker = target.parentNode; // родитель нашей ссылки (li.accordeon__item)
        const content = target.nextElementSibling; //  элемент который находится рядом с рашей ссылкой на уровне (accordeon__content)
        const contentHeight = content.firstElementChild.clientHeight; // высота wrapper который лежит в accordeon__content
  
        for (const iterator of workers) {
          if (iterator !== worker) {
            iterator.classList.remove("team__item-active");
            iterator.lastElementChild.style.height = 0;
          }
        }
  
        if (worker.classList.contains("team__item-active")) {
          worker.classList.remove("team__item-active");
          content.style.height = 0;
        } else {
          worker.classList.add("team__item-active");
          content.style.height = contentHeight + "px";
        }
      }
    });
  }
  
  accordionTeam();