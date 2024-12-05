const welcomecontainer = document.querySelector('.welcomecontainer');
const cgdesignslogo = document.getElementById('cgdesignslogo');
const paintedbycamilogo = document.getElementById('paintedbycamilogo');
const paintedbycamiswipe = document.getElementById('paintedbycamiswipe');
const cgdesignsswipe = document.getElementById('cgdesignsswipe');
const cgdesignssmallerlogo = document.getElementById('cgdesignssmallerlogo')
const paintedbycamismallerlogo = document.getElementById('paintedbycamismallerlogo')


cgdesignslogo.addEventListener('click', () => {
    welcomecontainer.style.transform = 'translateX(0)';
    });
    
paintedbycamilogo.addEventListener('click', () => {
    welcomecontainer.style.transform = 'translateX(-200vw)';
    }); 

cgdesignssmallerlogo.addEventListener('click', () => {
  welcomecontainer.style.transform = 'translateX(-100vw)';
  });

paintedbycamismallerlogo.addEventListener('click', () => {
  welcomecontainer.style.transform = 'translateX(-100vw)';
  });

paintedbycamiswipe.addEventListener('click', () => {
    welcomecontainer.style.transform = 'translateX(-200vw)';
    }); 

cgdesignsswipe.addEventListener('click', () => {
    welcomecontainer.style.transform = 'translateX(0)';
    });

function myFunction() {
    var x = document.getElementById("mainnav");
    if (x.className === "mainnav") {
      x.className += " responsive";
    } else {
      x.className = "mainnav";
    }
}
