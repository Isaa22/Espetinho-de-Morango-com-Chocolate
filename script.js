let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicadores = document.querySelectorAll('.indicador');


mostrarSlide(slideIndex);


function mostrarSlide(n) {
  // Verifica os limites
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  
  
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  
  
  slides[slideIndex].style.display = 'block';
  
  indicadores.forEach((indicador, index) => {
    indicador.classList.toggle('ativo', index === slideIndex);
  });
}


document.querySelector('.prev').addEventListener('click', () => {
  mostrarSlide(--slideIndex);
});

document.querySelector('.next').addEventListener('click', () => {
  mostrarSlide(++slideIndex);
});


setInterval(() => {
  mostrarSlide(++slideIndex);
}, 5000);


const form = document.getElementById('formComentario');
const comentarioInput = document.getElementById('comentario');
const listaComentarios = document.getElementById('listaComentarios');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const texto = comentarioInput.value.trim();
  
  // Validação
  if(texto === '') {
    alert('Por favor, escreva um comentário antes de enviar.');
    return;
  }

  
  const novoComentario = document.createElement('li');
  novoComentario.textContent = texto;
  
  
  novoComentario.classList.add('comentario-item');
  
  
  listaComentarios.prepend(novoComentario);

 
  comentarioInput.value = '';
  
 
  novoComentario.style.opacity = 0;
  setTimeout(() => {
    novoComentario.style.transition = 'opacity 0.3s ease';
    novoComentario.style.opacity = 1;
  }, 10);
});
