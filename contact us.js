window.addEventListener("scroll",function(){
  let header =this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

const nav= document.querySelector("nav"),
    searchToggle= document.querySelector(".searchToggle");


    searchToggle.addEventListener("click",() =>{
      searchToggle.classList.toggle("active");
});


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

gsap.from(".con-img2",{
  opacity:-0.5,
  duration:1.3,
  // delay:1,
  x:-40,
  scrollTrigger:{
      trigger:".con-img2",
  }
});
gsap.from(".contact",{
  opacity:-0.5,
  duration:1.3,
  x:40,
  scrollTrigger:{
      trigger:".contact",
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
gsap.from("header .logo",{
  opacity:0,
  delay:0.5,
  x:20
});





// contact form
function validateForm() {
    let errorMessages = [];
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    // Validate Name (not empty)
    if (name.trim() === '') {
        errorMessages.push("Name is required.");
    }

    // Validate Email (not empty and valid email format)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.trim() === '') {
        errorMessages.push("Email is required.");
    } else if (!emailPattern.test(email)) {
        errorMessages.push("Please enter a valid email address.");
    }

    // Validate Phone (optional but must match a pattern if provided)
    const phonePattern = /^[0-9]{10}$/; // Simple phone number pattern (10 digits)
    if (phone.trim() !== '' && !phonePattern.test(phone)) {
        errorMessages.push("Please enter a valid 10-digit phone number.");
    }

    // Validate Message (not empty)
    if (message.trim() === '') {
        errorMessages.push("Message is required.");
    }

    // Display Errors or Submit
    if (errorMessages.length > 0) {
        document.getElementById('errorMessages').innerHTML = errorMessages.join("<br>");
        return false; // Prevent form submission
    }

    // If no errors, you can submit the form
    alert("Form submitted successfully!");
    return true; // Allow form submission
};


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


  // navbar responsive
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