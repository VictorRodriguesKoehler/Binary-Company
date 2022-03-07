$(function(){
    $(window).on("scroll", function(){
        if ($(window).scrollTop() > 100){
            $(".navBar").addClass("navBarSecond");
        } else {
            $(".navBar").removeClass("navBarSecond")
        }
    })
})

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  }

  const titulo = document.querySelector('.text-2');
  typeWriter(titulo);

//   const cards = document.querySelectorAll('.card')
//   window.addEventListener('scroll', checkBoxes)

//   checkBoxes()

//   function checkBoxes(){
//       const triggerBtn = window.innerHeight /5 * 4

//       cards.forEach(box =>{
//           const cardTop = card.getBoundingClientRect().Top

//           if (boxTop < triggerBtn){
//               box.classList.add('show')
//           }else{
//               box.classList.remove('show')
//           }
//       })
//   }
