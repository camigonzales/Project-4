const welcomecontainer = document.querySelector('.welcomecontainer');
const cgdesignslogo = document.getElementById('cgdesignslogo');
const paintedbycamilogo = document.getElementById('paintedbycamilogo');
const paintedbycamiswipe = document.getElementById('paintedbycamiswipe');
const cgdesignsswipe = document.getElementById('cgdesignsswipe');


cgdesignslogo.addEventListener('click', () => {
    welcomecontainer.style.transform = 'translateX(0)';
    });
    
paintedbycamilogo.addEventListener('click', () => {
    welcomecontainer.style.transform = 'translateX(-200vw)';
    }); 

paintedbycamiswipe.addEventListener('click', () => {
    welcomecontainer.style.transform = 'translateX(-200vw)';
    }); 

cgdesignsswipe.addEventListener('click', () => {
    welcomecontainer.style.transform = 'translateX(0)';
    });