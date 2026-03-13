// REQUEST 1: Hamburger //
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=> { //opens menu when clicked
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
// Closes menu when a link is clciked
const navLinks = document.querySelectorAll(".nav-item a").forEach(n=> n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    }))


// REQUEST 2:  Form Validation with Error Messages //
const form = document.getElementById("contact-form");

// Only run if form exists
if (form) {
    const nameInput = document.getElementById("full-name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const reasonInput = document.getElementById("reason");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phone-error");
    const reasonError = document.getElementById("reason-error");
    const successMessage = document.getElementById("success-message");
    const phonePattern = /^[\d\s\-]{10,15}$/; // AI-Assisted: how to check for proper phone format with regex (10 digits)

    form.addEventListener("submit", function(event){

    event.preventDefault();
    // Clear previous messages    
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    reasonError.textContent = "";
    successMessage.textContent = "";
    let valid = true;

    if(nameInput.value.trim() === ""){ 
    nameError.textContent = "Please enter your full name";
    valid = false;
    }

    if(!emailInput.value.includes("@")){
    emailError.textContent = "Please enter a valid email";
    valid = false;
    }

    if(!phonePattern.test(phoneInput.value)){
    phoneError.textContent = "Please enter a valid phone number";
    valid = false;
    }

    if(reasonInput.value === ""){
    reasonError.textContent = "Please select a reason for contact";
    valid = false;
    }

    if(valid){
    successMessage.textContent = "Thanks for contacting us! You will get a response within 48 hours.";
    form.reset();
    }
    });

    // Error message disappears if fixed
    nameInput.addEventListener("input", () => {
        if(nameInput.value.trim() !== ""){
            nameError.textContent = "";
        }
    });
    emailInput.addEventListener("input", () => {
        if(emailInput.value.includes("@")){
            emailError.textContent = "";
        }
    });
    phoneInput.addEventListener("input", () => {
        if(phonePattern.test(phoneInput.value)){
            phoneError.textContent = "";
        }
    });
    reasonInput.addEventListener("change", () => {
        if(reasonInput.value !== ""){
            reasonError.textContent = "";
        }
    });
}



// REQUEST 3: Back to Top Button //
const backToTop = document.querySelector("#back-to-top");

if (backToTop) {

    // Show  button when user scrolls down
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.add("active");
        } else {
            backToTop.classList.remove("active");
        }
    });
    // Smoothly scroll back when clicked
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}



// REQUEST 4: Dynamic Content Rendering from Data //
const cats = [
  {
    name: "Patches",
    price: "$145",
    age: "2 years - Junior",
    img: "Patches.jpg",
    desc: "🛈 Playful and affectionate, loves belly rubs and sunny naps"
  },
  {
    name: "Luna",
    price: "$170",
    age: "6 months - Kitten",
    img: "Luna.jpg",
    desc: "🛈 Curious and playful kitten who loves to explore and chase his toys"
  },
  {
    name: "Oreo",
    price: "$130",
    age: "3 years - Adult",
    img: "Oreo.jpg",
    desc: "🛈 Gentle and calm, perfect for quiet homes and cuddle sessions"
  },
  {
    name: "Whiskers",
    price: "$160",
    age: "8 months - Kitten",
    img: "Whiskers.jpg",
    desc: "🛈 Energetic and friendly, gets along great with other pets"
  },
  {
    name: "Mittens",
    price: "$115",
    age: "4 years - Adult",
    img: "Mittens.jpg",
    desc: "🛈 Sweet and affectionate, loves to chat and follow you around"
  },
  {
    name: "Milo",
    price: "$150",
    age: "1 year - Junior",
    img: "milo.jpg",
    desc: "🛈 Observant and gentle who enjoys quiet moments and is friendly to strangers"
  }
];
function renderCats(catArray) {    // AI-Assisted: Used AI to help connect my code from Request 6 with the renderCats() function with Request 4.
    const gallery = document.querySelector(".cat-gallery"); 

    if (gallery) {
        gallery.innerHTML = ""; // clear old cards
    
        for (let i = 0; i < catArray.length; i++) {  // AI-Assisted: How to properly set up inside parameters
            const card = document.createElement("div"); // create new card element
            card.classList.add("card", "cat-card");

            card.innerHTML = `
                <img src="${catArray[i].img}" alt="${catArray[i].name}">
                <div class="cat-header">
                    <h3>${catArray[i].name}</h3>
                    <span class="price">${catArray[i].price}</span>
                </div>
                <p class="age">${catArray[i].age}</p>
                <p class="desc">${catArray[i].desc}</p>
                <a href="#" class="button">Learn More</a>
            `;
            gallery.appendChild(card);   // Add new card to gallery
        }}
    }
renderCats(cats); // AI-Assisted: Rendered the cats also before request 6 so they will display automatically without having to select ALL



// REQUEST 5: Accordion FAQ  //
const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");

if (accordionHeaders.length > 0) {  // Ai-Assisted: If statement so it only runs if accordion element exists
    for (let i = 0; i < accordionHeaders.length; i++) {
        accordionHeaders[i].addEventListener("click", function() {

            // Close other content 
            for (let j = 0; j < accordionContents.length; j++) {  // AI-assisted: nested loops
                if (j !== i) {
                    accordionContents[j].classList.remove("active");
                    accordionContents[j].style.maxHeight = "0";
                }
            }

            // Toggle clicked content
            const content = accordionContents[i];
            content.classList.toggle("active");
            if (content.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px"; // Expand content smoothly
            } else {
                content.style.maxHeight = "0"; // Collapse content smoothly
            }
        });
    }
}



// REQUEST 6: Live Filtering or Search //
const filterButtons = document.querySelectorAll(".filter-btn");
const gallery = document.querySelector(".cat-gallery");
const searchBar = document.querySelector("search-bar");

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function() {

        // remove active 
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active");
        }
        // add active 
        filterButtons[i].classList.add("active");
        const category = filterButtons[i].getAttribute("keyword");

        let filteredCats;
        if (category === "all") { // If "all", show all cats
            filteredCats = cats;
        } else { 
            filteredCats = cats.filter(cat => // Create new array of only matching cats
                cat.desc.toLowerCase().includes(category) ||
                cat.age.toLowerCase().includes(category)
            );
        }
        renderCats(filteredCats); // Re-render gallery
    });
}
