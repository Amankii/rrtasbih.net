document.addEventListener('DOMContentLoaded', ()=> {

    if (!localStorage.getItem('i')) {
        localStorage.setItem('i', 0)
    }
    let click = new Audio('./images/click.mp3');
    let over = new Audio('./images/mouse-click-.mp3');
    let reset = new Audio('./images/reset.mp3');  

    document.querySelector('#buttonClick').onclick = ()=> {

        let i = localStorage.getItem('i');

        i++;

        document.querySelector('h1').innerHTML = i;
        localStorage.setItem('i', i)

        if( i % 33 === 0){
            document.querySelector('h3').style.display = 'block';
            document.querySelector('h3').innerHTML = `Waxaa mareysaa hada ${i}`;
            setTimeout(() => {
                document.querySelector('h3').innerHTML ='';
            }, 3700);
            over.play();
        };
        
    };

    document.querySelector('h1').innerHTML = localStorage.getItem('i');

    document.querySelector('#buttonReset').onclick = ()=> {

                let iz = localStorage.setItem('i', 0);
                iz = '0';        

        if(document.querySelector('h1').innerHTML = localStorage.getItem('i')){
            document.querySelector('h1').innerHTML = iz;
            reset.play();
        }

    };

    
 

});