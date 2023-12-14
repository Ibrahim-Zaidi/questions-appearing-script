//using selectors inside the element
// traversing the dom


const qstBtn = document.querySelectorAll('.question-btn');
const article = document.querySelector('.question');


for( let i = 0 ; i < qstBtn.length ; i++) {

    qstBtn[i].addEventListener('click', function(e) {
        
       const question = e.currentTarget.parentElement.parentElement;

       question.classList.toggle('show-text');

        console.log(e.currentTarget.parentElement.parentElement.classList);
    })

}

 

