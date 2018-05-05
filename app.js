const quote = document.querySelector('#quote');
const name = document.querySelector('#title');
const button = document.querySelector('#new');
button.addEventListener('click', function() {
    get()
    .then(function data(data) {
        quote.innerHTML = data[Postnum()].content;
        name.innerHTML = data[Postnum()].title;
    })
    .catch(err => console.log(err));
});


async function get(num) {
    const response = await fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30');

    const resData = await response.json();


    return resData;
}

function change() {
    get()
    .then(function data(data) {
        quote.innerHTML = data[0].content;
        name.innerHTML = data[0].title;
    })
    .catch(err => console.log(err));
    
}

change();

function Postnum() {
   const num = Math.floor(Math.random() * Math.floor(30))
   return num
}
