// animation
gsap.from("header .logo",{
  opacity:0,
  delay:0.5,
  x:20
});

// let nv= gsap.timeline()
// nv.from("li",{
//   y:-30,
//   opacity:1,
//   duration:1.5,
//   stagger:1,
//   // delay:0.5,

// });
gsap.from("#hero h3",{
  opacity:-0.5,
  duration:1.3,
  y:-60,
  scrollTrigger:{
      trigger:"#hero h3"
  }
});

gsap.from("#hero h1",{
  opacity:-5,
  duration:1.5,
  y:-80,
});

gsap.from("#img-1",{
  opacity:-0.3,
  duration:1.3,
  x:-70,
  scrollTrigger:{
      trigger:"#img-1",
      scroll:"body",
      // markers:true,
      start:"top 40%",
      end:"top 40%",
  }
});
gsap.from("#img-2",{
  opacity:-0.5,
  duration:1.3,
  x:70,
  rotate:360,
  scrollTrigger:{
      trigger:"#img-1",
      scroll:"body",
      // markers:true,
      start:"top 37%",
      end:"top 37%",
  }
});

gsap.from("#details h3",{
  opacity:-0.5,
  duration:1.4,
  y:-70,
  scrollTrigger:{
      trigger:"#details h3",
      scroll:"body",
      // markers:true,
      start:"top 35%",
      end:"top 35%",
  }
});
gsap.from("#details h1",{
  opacity:-0.5,
  duration:1.5,
  y:-60,
  scrollTrigger:{
      trigger:"#details h1",
      scroll:"body",
      // markers:true,
      start:"top 33%",
      end:"top 33%",
  }
});
gsap.from("#details p",{
  opacity:-0.3,
  duration:1.6,
  y:70,
  scrollTrigger:{
      trigger:"#details h1",
      scroll:"body",
      // markers:true,
      start:"top 33%",
      end:"top 33%",
  }
});
gsap.from("#details .btn2",{
  opacity:-1,
  duration:1.7,
  x:70,
  scrollTrigger:{
      trigger:"#details h1",
      scroll:"body",
      // markers:true,
      start:"top 33%",
      end:"top 33%",
  }
});

gsap.from("#gallery",{
  opacity:-0.5,
  duration:1.3,
  y:-50,
  scrollTrigger:{
      trigger:"#gallery",
      scroll:"body",
      // markers:true,
      start:"top 65%",
      end:"top 70%",
  }
});
gsap.from("#gl-heading h2",{
  opacity:-0.5,
  duration:1.8,
  // delay:1,
  y:-70,
  scrollTrigger:{
      trigger:"#gl-heading h2",
      scroll:"body",
      // markers:true,
      start:"top 67%",
      end:"top 72%",
  }
});
gsap.from("#gl-heading h1",{
  opacity:-0.5,
  duration:1.5,
  y:70,
  scrollTrigger:{
      trigger:"#gl-heading h1",
      scroll:"body",
      // markers:true,
      start:"top 69%",
      end:"top 74%",
  }
});

gsap.fromTo(".gl-box",{
  opacity:0,
  scale:1,
},{
  opacity:1,
  scale:1,
  duration:1.5,
  // delay:1,
  stagger:{
      amount:1
  },
  scrollTrigger:{
      trigger:".gl-box",
      scroll:"body",
      // markers:true,
      start:"top 50%",
      end:"top 0%",
  }
});

gsap.from("#entertaiment",{
  opacity:-0.5,
  duration:1.3,
  y:-50,
  scrollTrigger:{
      trigger:"#entertaiment",
      scroll:"body",
      // markers:true,
      start:"top 40%",
      end:"top 20%",
  }
});
gsap.from("#en-heading h2",{
  opacity:-0.5,
  duration:1.5,
  // delay:1,
  x:-100,
  scrollTrigger:{
      trigger:"#en-heading h2",
      scroll:"body",
      // markers:true,
      start:"top 69%",
      end:"top 72%",
  }
});
gsap.from("#en-heading h1",{
  opacity:-0.5,
  duration:1.6,
  y:70,
  scrollTrigger:{
      trigger:"#en-heading h1",
      scroll:"body",
      // markers:true,
      start:"top 69%",
      end:"top 74%",
  }
});

gsap.from("#img2-1",{
  opacity:-0.3,
  duration:1.3,
  x:70,
  scrollTrigger:{
      trigger:"#img2-1",
      scroll:"body",
      // markers:true,
      start:"top 50%",
      end:"top 40%",
  }
});
gsap.from("#img2-2",{
  opacity:-0.5,
  duration:1.3,
  x:-70,
  rotate:360,
  scrollTrigger:{
      trigger:"#img2-1",
      scroll:"body",
      // markers:true,
      start:"top 50%",
      end:"top 40%",
  }
});

gsap.from("#details-2 h3",{
  opacity:-0.5,
  duration:1.4,
  y:-70,
  scrollTrigger:{
      trigger:"#details-2 h3",
      scroll:"body",
      // markers:true,
      start:"top 35%",
      end:"top 35%",
  }
});
gsap.from("#details-2 h1",{
  opacity:-0.5,
  duration:1.5,
  y:-60,
  scrollTrigger:{
      trigger:"#details-2 h1",
      scroll:"body",
      // markers:true,
      start:"top 33%",
      end:"top 33%",
  }
});
gsap.from("#details-2 p",{
  opacity:-0.3,
  duration:1.6,
  y:70,
  scrollTrigger:{
      trigger:"#details-2 h1",
      scroll:"body",
      // markers:true,
      start:"top 33%",
      end:"top 33%",
  }
});
gsap.from("#details-2 .btn2",{
  opacity:-1,
  duration:1.7,
  x:70,
  scrollTrigger:{
      trigger:"#details-2 h1",
      scroll:"body",
      // markers:true,
      start:"top 33%",
      end:"top 33%",
  }
});

gsap.from("#ticket h2",{
  opacity:-0.5,
  duration:1.8,
  // delay:1,
  y:-70,
  scrollTrigger:{
      trigger:"#ticket h2",
      scroll:"body",
      // markers:true,
      start:"top 67%",
      end:"top 72%",
  }
});
gsap.from("#ticket h1",{
  opacity:-0.5,
  duration:1.5,
  y:70,
  scrollTrigger:{
      trigger:"#ticket h1",
      scroll:"body",
      // markers:true,
      start:"top 69%",
      end:"top 74%",
  }
});

gsap.from(".tk-box1",{
  opacity:-0.3,
  duration:1.3,
  y:70,
  scrollTrigger:{
      trigger:".tk-box1",
      scroll:"body",
      // markers:true,
      start:"top 50%",
      end:"top 40%",
  }
});
gsap.from(".tk-box2",{
  opacity:-0.3,
  duration:1.3,
  y:-70,
  // rotate:360,
  scrollTrigger:{
      trigger:".tk-box2",
      scroll:"body",
      // markers:true,
      start:"top 50%",
      end:"top 40%",
  }
});

//  about us
gsap.from("#about-us",{
  opacity:-0.5,
  duration:1.3,
  y:-50,
  scrollTrigger:{
      trigger:"#about-us",
      scroll:"body",
      // markers:true,
      start:"top 65%",
      end:"top 70%",
  }
});
gsap.from("#ab-heading h2",{
  opacity:-0.5,
  duration:1,
  // delay:1,
  x:-40,
  scrollTrigger:{
      trigger:"#ab-heading h2",
  }
});
gsap.from("#ab-heading h1",{
  opacity:-0.5,
  duration:1,
  x:40,
  scrollTrigger:{
      trigger:"#ab-heading h1",
  }
});



// newsletter start
gsap.from("#newsletter .newstext h4",{
  opacity:-0.5,
  duration:1.3,
  x:150,
  scrollTrigger:{
      trigger:"#newsletter .newstext h4",
      scroll:"body",
      // markers:true,
      start:"top 80%",
      end:"top 30%",
  }
})
gsap.from("#newsletter .newstext p",{
  opacity:-0.5,
  duration:1.5,
  y:-40,
  scrollTrigger:{
      trigger:"#newsletter .newstext p",
      scroll:"body",
      // markers:true,
      start:"top 80%",
      end:"top 30%",
  }
})
gsap.from("#newsletter .form2",{
  opacity:0,
  duration:1.5,
  x:0,
  stagger:{
      amount:1
  },
  scrollTrigger:{
      trigger:"#newsletter .form2",
      scroll:"body",
      // markers:true,
      start:"top 80%",
      end:"top 30%",
  }
})
// newsletter end

gsap.from("footer .colu .logo",{
  opacity:0,
  delay:0.5,
  x:20,
  scrollTrigger:{
      trigger:"footer .colu .logo",
      scroll:"body",
      // markers:true,
      start:"top 80%",
      end:"top 30%",
  }
})
gsap.from("footer .colu h4",{
  opacity:-0.5,
  duration:1.3,
  x:-100,
  scrollTrigger:{
      trigger:"footer .colu h4",
      scroll:"body",
      // markers:true,
      start:"top 80%",
      end:"top 30%",
  }
})
gsap.from("footer .colu p",{
  opacity:-0.5,
  duration:1.3,
  x:-100,
  scrollTrigger:{
      trigger:"footer .colu p",
      scroll:"body",
      // markers:true,
      start:"top 80%",
      end:"top 30%",
  }
})
gsap.from("footer .colu .follow .ichons",{
  opacity:-0.8,
  duration:1.3,
  y:-50,
  scrollTrigger:{
      trigger:"footer .colu .follow .ichons",
      scroll:"body",
      // markers:true,
      start:"top 80%",
      end:"top 30%",
  }
})

gsap.from("footer .colu a",{
  opacity:-0.8,
  duration:1.3,
  y:-50,
  scrollTrigger:{
      trigger:"footer .colu a",
      scroll:"body",
      // markers:true,
      start:"top 80%",
      end:"top 30%",
  }
})

gsap.from("footer .colu-inst h4",{
  opacity:-0.5,
  duration:1.3,
  x:100,
  scrollTrigger:{
      trigger:"footer .colu-inst h4",
      scroll:"body",
      // markers:true,
      start:"top 80%",
      end:"top 30%",
  }
})
gsap.from("footer .colu-inst p",{
  opacity:-0.5,
  duration:1.3,
  y:-50,
  scrollTrigger:{
      trigger:"footer .colu-inst p",
      scroll:"body",
      // markers:true,
      start:"top 80%",
      end:"top 30%",
  }
})
gsap.from("footer .colu-inst .logo2",{
  opacity:-0.5,
  duration:1.3,
  y:-60,
  scrollTrigger:{
      trigger:"footer .colu-inst .logo2",
      scroll:"body",
      // markers:true,
      start:"top 80%",
      end:"top 30%",
  }
})
gsap.from("footer .colu-inst .logo",{
  opacity:-0.5,
  duration:1.3,
  y:-60,
  scrollTrigger:{
      trigger:"footer .colu-inst .logo",
      scroll:"body",
      // markers:true,
      start:"top 80%",
      end:"top 30%",
  }
})
gsap.from("footer .copyright p",{
  opacity:-0.5,
  duration:1.3,
  y:60,
  scrollTrigger:{
      trigger:"footer .copyright p",
      scroll:"body",
  }
});

gsap.from("#people",{
  opacity:-0.5,
  duration:1.3,
  y:-50,
  scrollTrigger:{
      trigger:"#people",
      scroll:"body",
      // markers:true,
      start:"top 65%",
      end:"top 70%",
  }
});
gsap.from("#pp-heading h2",{
  opacity:-0.5,
  duration:1.8,
  // delay:1,
  y:-70,
  scrollTrigger:{
      trigger:"#pp-heading h2",
      scroll:"body",
      // markers:true,
      start:"top 67%",
      end:"top 72%",
  }
});
gsap.from("#pp-heading h1",{
  opacity:-0.5,
  duration:1.5,
  y:70,
  scrollTrigger:{
      trigger:"#pp-heading h1",
      scroll:"body",
      // markers:true,
      start:"top 69%",
      end:"top 74%",
  }
});

gsap.from(".pp-1",{
  opacity:-0.5,
  duration:1.3,
  y:70,
  scrollTrigger:{
      trigger:".pp-1",
      scroll:"body",
      // markers:true,
      start:"top 50%",
      end:"top 40%",
  }
});
gsap.from(".pp-2",{
  opacity:-0.5,
  duration:1.3,
  y:-70,
  // rotate:360,
  scrollTrigger:{
      trigger:".pp-2",
      scroll:"body",
      // markers:true,
      start:"top 50%",
      end:"top 40%",
  }
});

gsap.from(".pp-3",{
  opacity:-0.5,
  duration:1.3,
  y:70,
  scrollTrigger:{
      trigger:".pp-3",
      scroll:"body",
      // markers:true,
      start:"top 50%",
      end:"top 40%",
  }
});
gsap.from(".pp-4",{
  opacity:-0.5,
  duration:1.3,
  y:-70,
  // rotate:360,
  scrollTrigger:{
      trigger:".pp-4",
      scroll:"body",
      // markers:true,
      start:"top 50%",
      end:"top 40%",
  }
});

gsap.from("#feedback",{
  opacity:-0.5,
  duration:1.3,
  y:-30,
  scrollTrigger:{
      trigger:"#feedback",
      scroll:"body",
      // markers:true,
      start:"top 65%",
      end:"top 70%",
  }
});
gsap.from(".fd-1",{
  opacity:-0.3,
  duration:1.3,
  x:-70,
  scrollTrigger:{
      trigger:".fd-1",
      scroll:"body",
      // markers:true,
      start:"top 50%",
      end:"top 40%",
  }
});
gsap.from(".fd-2",{
  opacity:-0.3,
  duration:1.3,
  x:70,
  // rotate:360,
  scrollTrigger:{
      trigger:".fd-2",
      scroll:"body",
      // markers:true,
      start:"top 50%",
      end:"top 40%",
  }
});

// entertaiment

gsap.from("#details-1 h3",{
  opacity:-0.5,
  duration:1.4,
  y:-70,
  scrollTrigger:{
      trigger:"#details-1 h3",
      scroll:"body",
      // markers:true,
      start:"top 35%",
      end:"top 35%",
  }
});
gsap.from("#details-1 h1",{
  opacity:-0.5,
  duration:1.5,
  y:-60,
  scrollTrigger:{
      trigger:"#details-1 h1",
      scroll:"body",
      // markers:true,
      start:"top 33%",
      end:"top 33%",
  }
});
gsap.from("#details-1 p",{
  opacity:-0.3,
  duration:1.6,
  y:70,
  scrollTrigger:{
      trigger:"#details-1 h1",
      scroll:"body",
      // markers:true,
      start:"top 33%",
      end:"top 33%",
  }
});
gsap.from("#details-1 .btn2",{
  opacity:-1,
  duration:1.7,
  x:70,
  scrollTrigger:{
      trigger:"#details-1 h1",
      scroll:"body",
      // markers:true,
      start:"top 33%",
      end:"top 33%",
  }
});

gsap.from("#event h1",{
  opacity:-0.3,
  duration:1.5,
  y:70,
  scrollTrigger:{
      trigger:"#event h1",
      scroll:"body",
      // markers:true,
      start:"top 69%",
      end:"top 74%",
  }
});

gsap.from(".cd-1",{
  opacity:-0.3,
  duration:1.3,
  y:70,
  scrollTrigger:{
      trigger:".cd-1",
      scroll:"body",
      // markers:true,
      start:"top 50%",
      end:"top 40%",
  }
});
gsap.from(".cd-2",{
  opacity:-0.3,
  duration:1.3,
  y:-70,
  // rotate:360,
  scrollTrigger:{
      trigger:".cd-2",
      scroll:"body",
      // markers:true,
      start:"top 50%",
      end:"top 40%",
  }
});
gsap.from(".container-fuild h1",{
  opacity:-0.5,
  duration:1.5,
  y:70,
  scrollTrigger:{
      trigger:".container-fuild h1",
      scroll:"body",
      // markers:true,
      start:"top 69%",
      end:"top 74%",
  }
});

gsap.fromTo(".col-3",{
  opacity:0,
  scale:1,
},{
  opacity:1,
  scale:1,
  duration:1.5,
  // delay:1,
  stagger:{
      amount:1
  },
  scrollTrigger:{
      trigger:".col-3",
      scroll:"body",
      // markers:true,
      start:"top 50%",
      end:"top 0%",
  }
});

// navbar
window.addEventListener("scroll",function(){
    let header =this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

const nav= document.querySelector("nav"),
      searchToggle= document.querySelector(".searchToggle");


      searchToggle.addEventListener("click",() =>{
        searchToggle.classList.toggle("active");
});

// booking ticket
   
      $(document).ready(function () {
        // Dropdown change event
        $("#category").change(function () {
          const category = $(this).val();
          if (category === "adult") {
            $("#numAdults").prop("disabled", false);
            $("#numChildren").prop("disabled", true);
          } else if (category === "child") {
            $("#numChildren").prop("disabled", false);
            $("#numAdults").prop("disabled", true);
          }
        });
  
        // Confirm button functionality
        $("#confirmButton").click(function () {
          const numPersons = parseInt($("#numPersons").val()) || 0;
          const numAdults = parseInt($("#numAdults").val()) || 0;
          const numChildren = parseInt($("#numChildren").val()) || 0;
  
          // Calculate total price
          const adultPrice = 200;
          const childPrice = 100;
  
          const totalAdultAmount = numAdults * adultPrice;
          const totalChildAmount = numChildren * childPrice;
          const totalAmount = totalAdultAmount + totalChildAmount;
  
          // Validate entries
          if (!numPersons || (!numAdults && !numChildren)) {
            $("#output").text("Please fill all required fields correctly.");
            return;
          }
  
          // Display output
          $("#output").html(
            `Details:<br>` +
            `Total Persons: ${numPersons}<br>` +
            `Number of Adults: ${numAdults}<br>` +
            `Number of Children: ${numChildren}<br>` +
            `Total Adult Amount: ${totalAdultAmount}<br>` +
            `Total Child Amount: ${totalChildAmount}<br>` +
            `Grand Total: ${totalAmount}`
          );
  
          // Save data in an object (optional)
          const data = {
            numPersons,
            numAdults,
            numChildren,
            totalAdultAmount,
            totalChildAmount,
            totalAmount,
          };
  
          console.log("Saved Data:", data);
        });
      });




// navbar responsiv wala
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click',() =>{
        navbar.classList.add('active')
    })
}

if (close){
    close.addEventListener('click',() =>{
        navbar.classList.remove('active')
    })
};