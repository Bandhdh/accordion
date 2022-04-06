
const accordionItem = document.querySelectorAll('.accordion__item');
accordionItem.forEach(el => {

  const accordionHead = el.querySelector('.accordion__head');
  const accordionWrapper = el.querySelector('.accordion__wrapper');
  const accordionWrapperStyle = getComputedStyle(accordionWrapper);
  const accordionWrapperHeight = parseInt(accordionWrapperStyle.height);
  accordionWrapper.style.maxHeight = accordionWrapperHeight + 'px'

  accordionHead.addEventListener('click', function(){


    accordionWrapper.classList.toggle('hidden');
  })
})










// const item = document.querySelectorAll('.FAQ__item');
// item.forEach(el => {

  // const teatArea = el.querySelector('.FAQ__text');
  // const textAreaStyle = getComputedStyle(teatArea);
  // const textAreaHeight = parseInt(textAreaStyle.height);

//   const title = el.querySelector('.FAQ__item-title');
//   const titleStyle = getComputedStyle(title);
//   const titleHeight = parseInt(titleStyle.height);

//   const sumHeight = titleHeight + textAreaHeight

//   el.addEventListener('click', function(){
//     el.style.maxHeight = 75 + sumHeight + 'px'
//     el.classList.toggle('hidden');
//   })
// })