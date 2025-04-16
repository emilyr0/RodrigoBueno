const images = [
    {
        src: 'img/20250414_ Bulris_BRBHearst-2.jpg',
        caption: 'Oviedo speaks with her granddaughter, Amber, in the urbanized portion of Rodrigo Bueno.'
      },
    {
      src: 'img/20250414_ Bulris_BRBHearst-1.jpg',
      caption: 'Ángela Oviedo has worked at La Vivera for the past 8 years. Oviedo was one of the first 40 families to settle in Rodrigo Bueno in 1999.'
    },
    {
      src: 'img/20250414_ Bulris_BRBHearst-3.jpg',
      caption: 'The historic section of Barrio Rodrigo Bueno lays near the Eastern edge of Buenos Aires.'
    },
    {
    src: 'img/20250414_ Bulris_BRBHearst-4.jpg',
    caption: 'Elena Vera leans out the window of her residence in the historic section of Rodrigo Bueno.'
    },
    {
    src: 'img/20250414_ Bulris_BRBHearst-5.jpg',
    caption: 'Vera’s home recently lost its roof, leaving her kitchen and living areas filled with construction material.'
    },
    {
    src: 'img/20250414_ Bulris_BRBHearst-6.jpg',
    caption: 'Rosa de la Cruz cooks beef in her kitchen in the historic section of Rodrigo Bueno. De la Cruz cookeds portions of meals served at Comedor del Centro de Adulto Mayor in her home before finishing preparation at the soup kitchen.'
    },
    {
    src: 'img/20250414_ Bulris_BRBHearst-7.jpg',
    caption: 'Patrons from the Comedor del Centro de Adulto Mayor enjoy a meal in the heart of Rodrigo Buenos historic section. The soup kitchen was formed to assist elderly residents of the neighborhood during the COVID-19 pandemic.'
    },
    {
    src: 'img/20250414_ Bulris_BRBHearst-8.jpg',
    caption: 'Ángela Oviedo works behind the desk at La Vivera.'
    },
    {
    src: 'img/20250414_ Bulris_BRBHearst-9.jpg',
    caption: 'One of the buildings constructed as part of the urbanization of Rodrigo Bueno.'
    },
    
  ];
  
  let currentIndex = 0;
  
  function updateSlide() {
    document.getElementById('slider-img').src = images[currentIndex].src;
    document.getElementById('slider-caption').innerText = images[currentIndex].caption;
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide();
  }

  updateSlide();
  