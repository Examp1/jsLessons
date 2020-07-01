'use strict';

// ajax

const button = document.querySelector('button');

function postData(){
    
}


button.addEventListener('click', (e) => {
    e.preventDefault();
    const ajax =  new XMLHttpRequest();
    ajax.open('POST', './server.php');
    
    // ajax.setRequestHeader('Content-type', 'application/json');
    const data = 123;
    
    ajax.send(data);

    ajax.addEventListener('load', () => {
        if (ajax.status === 200) {
            console.log(ajax.response);
        } else {
            console.log('Ooops error');
        }
    });
});