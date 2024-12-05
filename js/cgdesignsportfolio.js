function myFunction() {
    var x = document.getElementById("mainnav");
    if (x.className === "mainnav") {
      x.className += " responsive";
    } else {
      x.className = "mainnav";
    }
}

document.addEventListener("DOMContentLoaded", function() {
  
    const gridItems = document.querySelectorAll('.grid-item img');
  
    const modal = document.getElementById('carousel-modal');
    const modalImage = document.getElementById('carousel-image');
    const modalText = document.getElementById('carousel-text');
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');
    const closeButton = document.getElementById('close-modal');

    const imageSets = {
        '100 Years of Tiger Stadium Poster. Adobe Photoshop and Illustrator. student project, 2024.':[
            './img/100 year poster .jpg',
        ],
        'Anti-Fur PSA Poster. Adobe Photoshop student project, 2024.':[
            './img/Anti Fur poster.jpg',
        ],
        'Armin Hofmann Graphic Design Manual Redesign. Adobe InDesign student project, 2023.':[
            './img/Graphic Design Manual Cover.jpg',
            './img/Armin Hofmann Book Interior Pages Template 8 x 10_Page_02.jpg',
            './img/Armin Hofmann Book Interior Pages Template 8 x 10_Page_03.jpg',
            './img/Armin Hofmann Book Interior Pages Template 8 x 10_Page_04.jpg',
            './img/Armin Hofmann Book Interior Pages Template 8 x 10_Page_05.jpg',
            './img/Armin Hofmann Book Interior Pages Template 8 x 10_Page_06.jpg',
            './img/Armin Hofmann Book Interior Pages Template 8 x 10_Page_07.jpg',
            './img/Armin Hofmann Book Interior Pages Template 8 x 10_Page_08.jpg',
            './img/Armin Hofmann Book Interior Pages Template 8 x 10_Page_09.jpg',
            './img/Armin Hofmann Book Interior Pages Template 8 x 10_Page_10.jpg',
            './img/Armin Hofmann Book Interior Pages Template 8 x 10_Page_11.jpg',
            './img/Armin Hofmann Book Interior Pages Template 8 x 10_Page_13.jpg',
            './img/Armin Hofmann Book Interior Pages Template 8 x 10_Page_17.jpg',
            './img/Armin Hofmann Book Interior Pages Template 8 x 10_Page_18.jpg',
            './img/Armin Hofmann Book Interior Pages Template 8 x 10_Page_19.jpg',
            './img/Armin Hofmann Book Interior Pages Template 8 x 10_Page_22.jpg',
            './img/Armin Hofmann Book Interior Pages Template 8 x 10_Page_24.jpg',
        ],
        
        'Women in the Workplace Collage. Adobe Photoshop student project, 2023.':[
            'img/Collageproject.jpg'
        ],
        'MoMA Exhibition Poster. Adobe Photoshop student project, 2024.':[
            'img/MoMA Exhibition Poster.jpg'
        ],
        'Crescent City Cadence CD Case Design. Adobe Photoshop student project, 2024.':[
            'img/d6cb2da9-b63a-411b-9748-577530abbf3c_rw_1200.jpg',
            'img/072b3365-0313-4713-9f27-f6b1b8f8c9c1_rw_1200.jpg',
            'img/98c7b8dd-5b7c-4a9b-a68f-06dab099ca65_rw_1200.jpg',
            'img/4fbf40e4-c8f4-471d-92a6-e95bd387f9b6_rw_1200.jpg',
            'img/6738da0f-0caf-4d3b-97aa-822e92658c0f_rw_1200.jpg',
        ],
        'Joe Burrow Poster. Adobe Photoshop personal project, 2024.':[
            'img/01a13916-c9d5-4edd-9ce2-62c228c76af0_rw_1200.jpg'
        ],
        'Riverfront Seafood Brand Identity. Adobe Illustrator, 2023.':[
            'img/riverfrontseafoodlogo.jpg',
            'img/f1defc86-ebaf-410a-b0a0-3f8601127c57_rw_1200.jpg',
        ],
        'Balloon Magic Instagram Post. Adobe Illustrator student project, 2024.':[
            'img/cccca17e-e9a7-41fe-a405-47d68ee6df99_rw_1200.jpg'
        ],
        'Sisterhood. Acrylic paint and oil pastel on canvas. Student project 2024.':[
            'img/Sisterhood.jpg',
        ],
        'Stir the Pot. Mixed Media on canvas. Personal project 2023.':[
            'img/Kitchen Art.jpg'
        ],
        'Romi. Acrylic paint on canvas. Personal project 2023.':[
            'img/Romi Profile.jpg'
        ],
        'Breakfast at Tiffanys. Oil paint on canvas. Student project 2024.':[
            'img/Breakfast at Tiffanys.jpg'
        ],
        'Self-Portrait. Acrylic paint and oil pastel on wood panel. Student project 2024.':[
            'img/Self-Portrait.jpg'
        ],
        'LSU. Acrylic paint on canvas. Personal project 2023.':[
            'img/LSU Dots.jpg'
        ],
        'Women in the Media. Mixed media on wood panel. Student project 2024.':[
            'img/Women in the Media.jpg'
        ],
        'A Fond Memory. Oil paint on canvas. student project 2024.':[
            'img/A Fond Memory.jpg'
        ],
      };

      let currentImageIndex = 0; 

  gridItems.forEach(item => {
    item.addEventListener('click', function() {
      const captionText = this.closest('.grid-item').getAttribute('data-text');
      
      const imageArray = imageSets[captionText];
      
      modalImage.src = imageArray[0];
      modalText.innerText = captionText;
  
      modal.style.display = 'block';
    });
  });
  
nextButton.addEventListener('click', function() {
    const captionText = modalText.innerText;
    const imageArray = imageSets[captionText];
    
    currentImageIndex = (currentImageIndex + 1) % imageArray.length;
    
    modalImage.src = imageArray[currentImageIndex];
  });
  
  prevButton.addEventListener('click', function() {
    const captionText = modalText.innerText;
    const imageArray = imageSets[captionText];
    
    currentImageIndex = (currentImageIndex - 1 + imageArray.length) % imageArray.length;
    
    modalImage.src = imageArray[currentImageIndex];
  });
  

  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});