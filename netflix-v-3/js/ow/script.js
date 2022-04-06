function iniciaPop(elementID){
  const popUp = document.getElementById(elementID);
  popUp.classList.add('mostar');
  popUp.addEventListener('click', (e) => {
    if(e.target.id == 'fechar') {
      popUp.classList.remove('mostar')
    } 
  })
}
const botao = document.querySelector('.botInfor')
botao.addEventListener('click', () => {
   iniciaPop('pop-up');
});



const botaoplay = document.querySelector('.play')
botaoplay.addEventListener('click', function(){
  const som = document.querySelector('audio')
  som.play()
})