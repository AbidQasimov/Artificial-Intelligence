function openNav() {
    document.getElementById("overlay-menu").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("overlay-menu").style.width = "0%";
  }


//SWIPPER JS KOD
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay:2500,
        disableOnnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },

  })

  
//   <div class="col-lg-2 col-md-4 col-sm-6">
//   <img src="" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
//       content.</p>
//   </div>
// </div>
const mukafatlar = document.getElementsByClassName("cart")[0]
console.log(mukafatlar)

window.addEventListener('DOMContentLoaded',melumatlariGetir )

async function melumatlariGetir (){
    
    const unvan ="mukafatlar.json"

    try {
        const servereAtilanIstek = await fetch(unvan)
        const gelenCavabJSON = await servereAtilanIstek.json()

            for (let i=0; i<gelenCavabJSON.length; i++) {
        mukafatlar.innerHTML +=`
           <div class="muk-cart col-lg-2 col-md-6  ">
        <img src="${gelenCavabJSON[i].mukafatin_sekli}" class="card-img-top mukimg" alt="">
        <div class="card-body">
          <h5 class="card-title">${gelenCavabJSON[i].mukafatin_adi}</h5>
          <p class="card-text">${gelenCavabJSON[i].mukafatin_metni}</p>
        </div>
      
        </div>
        `
        
    }
    }

    catch(error) {
        console.log(error.message)
    }

}






  























