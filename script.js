// // nav bar 

// const nav = document.querySelector(".navbar");
// document.documentElement.style.setProperty(
//   "--nav-height",
//   nav.offsetHeight + "px"
// );


// // Mobile Menu
// document.querySelector(".menu-toggle").onclick = () => {
//   document.querySelector(".nav-links").classList.toggle("show");
// };

// // Font Size Control
// let size = 16;
// document.getElementById("font-plus").onclick = () => { size++; document.body.style.fontSize = size+"px"; };
// document.getElementById("font-minus").onclick = () => { size--; document.body.style.fontSize = size+"px"; };

// // Theme Toggle
// document.getElementById("theme-toggle").onclick = () => {
//   document.body.classList.toggle("dark");
// };

// // Language Switcher Demo
// document.getElementById("language-switcher").onchange = (e)=>{
//   alert("Language switched to: " + e.target.value);
// };





// // slider 
//   let sliderInterval;

// function initSlider() {
// const slides = document.querySelectorAll(".slide");
//   const dots = document.querySelectorAll(".dot");
//   console.log("Slider init – found", slides.length, "slides and", dots.length, "dots");

//   if (!slides.length) return; // Prevent crash if no slider on page

//   let currentIndex = 0;
//   let sliderInterval;

//   function showSlide(index) {
//     slides.forEach(slide => slide.classList.remove("active"));
//     dots.forEach(dot => dot.classList.remove("active"));

//     slides[index].classList.add("active");
//     dots[index].classList.add("active");
//   }

//   function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   }

//   function prevSlide() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
//   }

//   function goToSlide(index) {
//     currentIndex = index;
//     showSlide(currentIndex);
//     clearInterval(sliderInterval);          // Reset timer on manual navigation
//     sliderInterval = setInterval(nextSlide, 5000); // Restart auto-slide
//   }

//   // Attach click handlers to dots (THIS WAS MISSING)
//   dots.forEach((dot, index) => {
//     dot.addEventListener("click", () => goToSlide(index));
//   });

//   // Expose functions if needed for HTML onclick
//   window.nextSlide = nextSlide;
//   window.prevSlide = prevSlide;
//   window.goToSlide = goToSlide;

//   // Show first slide and start auto-slide
//   showSlide(currentIndex);
//   sliderInterval = setInterval(nextSlide, 5000);
// }






// // second page advocate services
// // Simple intersection observer to trigger fade-in
// const rows = document.querySelectorAll('.service-row');
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//     }
//   });
// }, { threshold: 0.1 });

// rows.forEach(row => observer.observe(row));

// // Optional: Auto-rotate images every 4 seconds
// document.querySelectorAll('.service-image').forEach(container => {
//   const imgs = container.querySelectorAll('img');
//   let current = 0;
//   setInterval(() => {
//     imgs[current].classList.remove('active');
//     current = (current + 1) % imgs.length;
//     imgs[current].classList.add('active');
//   }, 4000);
// });

// // blogs section dynamic update code 
// // Temporary "fake backend" blog storage
// let blogs = [
//   {
//     title: "How to File a Case Online",
//     image: "https://images.pexels.com/photos/6077321/pexels-photo-6077321.jpeg",
//     description: "Learn how to submit petitions digitally without visiting the court.",
//     author: "Advocate Support Desk",
//     date: "Feb 2025"
//   },
//   {
//     title: "Track Court Case Status Online",
//     image: "https://images.pexels.com/photos/5668471/pexels-photo-5668471.jpeg",
//     description: "Know hearing dates, orders & judgement status using official portals.",
//     author: "Legal Research Team",
//     date: "Feb 2025"
//   },
//   {
//     title: "Track Court Case Status Online",
//     image: "https://images.pexels.com/photos/5668471/pexels-photo-5668471.jpeg",
//     description: "Know hearing dates, orders & judgement status using official portals.",
//     author: "Legal Research Team",
//     date: "Feb 2025"
//   },{
//     title: "Track Court Case Status Online",
//     image: "https://images.pexels.com/photos/5668471/pexels-photo-5668471.jpeg",
//     description: "Know hearing dates, orders & judgement status using official portals.",
//     author: "Legal Research Team",
//     date: "Feb 2025"
//   },{
//     title: "Track Court Case Status Online",
//     image: "https://images.pexels.com/photos/5668471/pexels-photo-5668471.jpeg",
//     description: "Know hearing dates, orders & judgement status using official portals.",
//     author: "Legal Research Team",
//     date: "Feb 2025"
//   },{
//     title: "Track Court Case Status Online",
//     image: "https://images.pexels.com/photos/5668471/pexels-photo-5668471.jpeg",
//     description: "Know hearing dates, orders & judgement status using official portals.",
//     author: "Legal Research Team",
//     date: "Feb 2025"
//   }
// ];

// // Function to display blogs
// function loadBlogs() {
//   let container = document.getElementById("blogContainer");
//   container.innerHTML = blogs.map(blog => `
//     <div class="blog-card">
//       <img src="${blog.image}">
//       <div class="blog-content">
//         <h3 style="color:white;">${blog.title}</h3>
//         <p style="color:white;">${blog.description}</p>
//         <div class="blog-meta" style="color:black;">${blog.date} | ${blog.author}</div>
//         <a class="blog-btn" href="#">Read Article →</a>
//       </div>
//     </div>
//   `).join("");
// }

// // "Add Blog" - Simulates Backend Update
// function addBlog() {
//   blogs.push({
//     title: document.getElementById("title").value,
//     image: document.getElementById("image").value,
//     description: document.getElementById("description").value,
//     author: document.getElementById("author").value,
//     date: new Date().toLocaleDateString("en-IN",{month:"short",year:"numeric"})
//   });

//   loadBlogs(); // refresh UI
//   alert("Blog Added (Backend Simulation)");
// }

// // how it works 
// // Optional: reveal animation on scroll
// const cards = document.querySelectorAll(".hiw-card");

// const obbserver = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.style.opacity = 1;
//       entry.target.style.transform = "translateY(0)";
//     }
//   });
// }, { threshold: 0.3 });

// cards.forEach(card => {
//   card.style.opacity = 0;
//   card.style.transform = "translateY(30px)";
//   obbserver.observe(card);
// });

// //testmonials
// const tmCards = document.querySelectorAll(".tm-card");

// const tmObserver = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.style.opacity = 1;
//       entry.target.style.transform = "translateY(0)";
//     }
//   });
// }, { threshold: 0.2 });

// tmCards.forEach(card => {
//   card.style.opacity = 0;
//   card.style.transform = "translateY(30px)";
//   tmObserver.observe(card);
// });

// // practice section
// document.querySelectorAll(".pa-card").forEach((card, i) => {
//   card.style.opacity = 0;
//   card.style.transform = "translateY(20px)";
//   setTimeout(() => {
//     card.style.transition = "0.5s ease";
//     card.style.opacity = 1;
//     card.style.transform = "translateY(0)";
//   }, i * 100);
// });

// // filter advocates section page 
// // Change to true to unlock full names
// let isPremiumUser = false;  

// const advocates = [
//   {
//     name: "Sarah Mitchell",
//     specialization: "Corporate Law",
//     location: "Mumbai",
//     experience: 15,
//     image: "/femalelawyer.jpg"
//   },
//   {
//     name: "David Chen",
//     specialization: "Criminal Defense",
//     location: "Delhi",
//     experience: 12,
//     image: "/malelawyer.jpg"
//   },
//   {
//     name: "Emily Rodriguez",
//     specialization: "Family Law",
//     location: "Bangalore",
//     experience: 10,
//     image: "/femalelawyer.jpg"
//   },
//   {
//     name: "Emily Rodriguez",
//     specialization: "Family Law",
//     location: "Bangalore",
//     experience: 10,
//     image: "female2.jpg"
//   },
//   {
//     name: "David Chen",
//     specialization: "Criminal Defense",
//     location: "Delhi",
//     experience: 12,
//     image: "/malelawyer.jpg"
//   },{
//     name: "Sarah Mitchell",
//     specialization: "Corporate Law",
//     location: "Mumbai",
//     experience: 15,
//     image: "female2.jpg"
//   }
// ];

// // Masking function
// function maskName(fullName) {
//   if (isPremiumUser) return fullName;
//   return fullName.split(" ").map(part =>
//     part[0] + part[1] + "***"
//   ).join(" ");
// }

// function renderAdvocates(list) {
//   document.getElementById("advocates-container").innerHTML = "";

//   list.forEach(a => {
//     document.getElementById("advocates-container").innerHTML += `
//       <div class="adv-card" style="  background:rgba(242, 236, 234, 0.9);">
//         <img src="${a.image}">
//         <div class="adv-card-body">
//           <h3 class="adv-name">${maskName(a.name)}</h3>
//           <p class="adv-role">${a.specialization}</p>
//           <p style="color:black;">📍 ${a.location} |  ${a.experience}+ Years Exp.</p>
//           <button class="interest-btn" onclick="alert('Interest Sent!')">Show Interest</button>
//                       <button class="interest-btn" onclick="alert('Interest Sent!')">view Profile</button>

//           </div>
//       </div>`;
//   });
// }

// // Filters
// function applyFilters() {
//   let loc = document.getElementById("filter-location").value;
//   let exp = document.getElementById("filter-experience").value;
//   let spec = document.getElementById("filter-specialization").value;

//   let filtered = advocates.filter(a =>
//     (!loc || a.location === loc) &&
//     (!exp || a.experience >= exp) &&
//     (!spec || a.specialization === spec)
//   );

//   renderAdvocates(filtered);
// }

// // footer section 
// document.querySelectorAll(".footer a").forEach(link => {
//   link.addEventListener("click", e => {
//     e.preventDefault();
//     const page = link.dataset.link;

//     // 🔹 Replace with SPA routing / modal / backend page loader
//     console.log("Navigate to:", page);

//     // Example:
//     // loadPage(page);
//     // openModal(page);
//     // window.location.href = page + ".html";
//   });
// });

// // Function to init contact form (move DOM-dependent code here)
// function initContact() {
//   document.getElementById("contactForm").addEventListener("submit", function(e) {
//     e.preventDefault();
//     alert("Thank you! Your message has been sent.");
//     this.reset();
//   });
// }

// // Function to init FAQ (move DOM-dependent code here)
// function initFaq() {
//   const questions = document.querySelectorAll(".faq-question");

//   questions.forEach(question => {
//     question.addEventListener("click", () => {
//       const item = question.parentElement;

//       // Close other open items
//       document.querySelectorAll(".faq-item").forEach(faq => {
//         if (faq !== item) faq.classList.remove("active");
//       });

//       // Toggle current
//       item.classList.toggle("active");
//     });
//   });
// }

// // the logic for page switching and spa logic 
// const app = document.getElementById("app");

// // function initHome() {
// //   if (typeof loadBlogs === "function") loadBlogs();
// //   if (typeof renderAdvocates === "function") renderAdvocates(advocates);
// //   initContact(); 
// //   initFaq();     
  
// // }


// function initHome() {

//   console.log("initHome started");
//   if (typeof loadBlogs === "function") loadBlogs();
//   if (typeof renderAdvocates === "function") renderAdvocates(advocates);
//   initContact();
//   initFaq();
//   initSlider(); // ✅ ADD THIS
// }

// function initContact() {
//   const form = document.getElementById("contactForm");
//   if (!form) {
//     console.warn("contactForm not found – skipping init");
//     return;
//   }
//   form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     alert("Thank you! Your message has been sent.");
//     this.reset();
//   });
// }

// function initFaq() {
//   const questions = document.querySelectorAll(".faq-question");
//   if (questions.length === 0) {
//     console.warn("No FAQ questions found – skipping");
//     return;
//   }
//   questions.forEach(question => {
//     question.addEventListener("click", () => {
//       const item = question.parentElement;
//       document.querySelectorAll(".faq-item").forEach(faq => {
//         if (faq !== item) faq.classList.remove("active");
//       });
//       item.classList.toggle("active");
//     });
//   });
// }
// function renderPage() {


//   console.log("renderPage called – current hash:", location.hash);
//   const route = location.hash.replace("#", "") || "home";
//   console.log("Loading route:", route);


//   // const route = location.hash.replace("#", "") || "home";
//   // const template = document.getElementById(route);

//   // if (!template) {
//   //   app.innerHTML = "<h1>404</h1>";
//   //   return;
//   // }

//   // app.innerHTML = template.innerHTML;

//   // run page-specific JS
//   if (route === "home") initHome();

//   window.scrollTo(0, 0);
// }

// window.addEventListener("DOMContentLoaded", renderPage);
// window.addEventListener("hashchange", renderPage);






// //login and registerr js logic



function closeAuth(){
  document.getElementById("authPopup").style.display="none";
}

/* connect these with your actual popups */
function openClientForm(){
  alert("Open CLIENT registration popup");
}
function openAdvocateForm(){
  alert("Open ADVOCATE registration popup");
}



function openAuth(tab) {
  document.getElementById("authPopup").style.display = "flex";
  switchTab(tab);
}



function switchTab(tab) {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const loginTab = document.getElementById("loginTab");
  const registerTab = document.getElementById("registerTab");

  loginForm.classList.remove("active");
  registerForm.classList.remove("active");
  loginTab.classList.remove("active");
  registerTab.classList.remove("active");

  if (tab === "login") {
    loginForm.classList.add("active");
    loginTab.classList.add("active");
  } else {
    registerForm.classList.add("active");
    registerTab.classList.add("active");
  }
}

// document.addEventListener("submit", function (e) {
//   if (e.target && e.target.id === "loginForm") {
//     e.preventDefault();

//     closeAuth();

//     // Simulate user
//     localStorage.setItem("isLoggedIn", "true");
//     localStorage.setItem("userName", "Rahul Sharma"); // 👈 REQUIRED

//     updateNavbarAuth();
//     location.hash = "dashboard";
//   }
// });

document.addEventListener("submit", function (e) {

if (e.target.id === "loginForm") {
    e.preventDefault();

    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", "Demo User");
      updateNavbarAuth();
       closeAuth();

      location.hash = "dashboard";
    } else if(email === "client@gmail.com" && password === "client123") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", "Demo User");
      updateNavbarAuth();
           closeAuth();

      location.hash = "clientdashboard";
    }
    else if (email === "advocate@gmail.com" && password === "advocate123"){
       localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", "Demo User");
      updateNavbarAuth();
       closeAuth();

      location.hash = "advocatedashboard"; 
    }
    else {
      alert("Invalid email or password");

    }
  }

});



// registerr as a client and lawyer form logic

/* auth close */
function closeAuth(){
  authPopup.style.display="none";
}

/* client popup */
function openClientForm(){
  clientPopup.style.display="flex";
}
function closeClientForm(){
  clientPopup.style.display="none";
}

/* advocate popup */
function openAdvocateForm(){
  advocatePopup.style.display="flex";
}
function closeAdvocateForm(){
  advocatePopup.style.display="none";
}


function openbrowseprofiles(){
  Browseprofiles.style.display="flex";
}


function closebrowseprofiles(){
  Browseprofiles.style.display="none";
}

// register as a client nexxt button logic

const stteps = document.querySelectorAll(".step");
const secttions = document.querySelectorAll(".form-step");
let currrent = 0;

function update(){
  secttions.forEach((s,i)=>s.classList.toggle("active",i===currrent));
  stteps.forEach((s,i)=>s.classList.toggle("active",i===currrent));
}

document.querySelectorAll(".next").forEach(b=>{
  b.onclick=()=>{
    if(currrent<secttions.length-1){currrent++;update();}
  }
});

document.querySelectorAll(".back").forEach(b=>{
  b.onclick=()=>{
    if(currrent>0){currrent--;update();}
  }
});


// reagister as a cleitne js

const steps = document.querySelectorAll(".step");
const sections = document.querySelectorAll(".client-step");
let current = 0;

function update(){
  sections.forEach((s,i)=>s.classList.toggle("active",i===current));
  steps.forEach((s,i)=>s.classList.toggle("active",i===current));
  document.getElementById("prevBtn").style.display = current===0?"none":"inline-block";
  document.getElementById("nextBtn").innerText = current===sections.length-1?"Submit":"Next";
}

update();

document.getElementById("nextBtn").onclick = ()=>{
  if(current < sections.length-1){
    current++;
    update();
  }else{
    alert("Client Registration Submitted ✅");
  }
};

document.getElementById("prevBtn").onclick = ()=>{
  if(current>0){current--;update();}
};

// // chatbot helper logic code 

// const chatWidget = document.getElementById("chatWidget");
// const chatToggle = document.getElementById("chatToggle");
// const chatMessages = document.getElementById("chatMessages");
// const chatInput = document.getElementById("chatInput");
// const notificationDot = document.querySelector(".notification-dot");

// let chatOpen = false;

// /* TOGGLE CHAT */
// function toggleChat(){
//   chatOpen = !chatOpen;
//   chatWidget.style.display = chatOpen ? "flex" : "none";
//   notificationDot.style.display = "none";
// }

// /* SEND MESSAGE */
// function sendChatMessage(){
//   const text = chatInput.value.trim();
//   if(!text) return;

//   addMessage(text,"user");
//   chatInput.value = "";

//   setTimeout(()=>{
//     addMessage(getBotReply(text),"bot");
//     if(!chatOpen){
//       notificationDot.style.display="block";
//     }
//   },700);
// }

// /* ADD MESSAGE */
// function addMessage(text,type){
//   const msg = document.createElement("div");
//   msg.className = `message ${type}`;
//   msg.innerHTML = `<div class="message-content">${text}</div>`;
//   chatMessages.appendChild(msg);
//   chatMessages.scrollTop = chatMessages.scrollHeight;
// }

// /* SIMPLE BOT LOGIC (replace with AI later) */
// function getBotReply(input){
//   input = input.toLowerCase();

//   if(input.includes("lawyer") || input.includes("advocate"))
//     return "I can help you find a verified advocate based on your legal issue.";

//   if(input.includes("case") || input.includes("legal help"))
//     return "Please tell me your case type (Criminal, Civil, Family, Corporate).";

//   if(input.includes("price") || input.includes("fee"))
//     return "Consultation fees vary by advocate experience and case complexity.";

//   return "Thank you for reaching out. Please provide more details so I can assist you better.";
// }

// /* ENTER KEY SUPPORT */
// chatInput.addEventListener("keydown",e=>{
//   if(e.key==="Enter") sendChatMessage();
// });

// /* INITIAL NOTIFICATION */
// setTimeout(()=>{
//   if(!chatOpen) notificationDot.style.display="block";
// },2000);




// // browse profiles logic 

// const subDepartments = {
//   criminal:[
//     "IPC & CrPC","Cyber Crimes","Juvenile Justice",
//     "White-Collar Crime","Narcotics Law"
//   ],
//   family:[
//     "Marriage & Divorce","Maintenance","Adoption",
//     "Hindu Law","Muslim Law","Christian Law"
//   ],
//   corporate:[
//     "Company Incorporation","Mergers & Acquisitions",
//     "Insolvency & Bankruptcy","SEBI Compliance"
//   ],
//   constitutional:[
//     "Fundamental Rights","Writ Petitions",
//     "Election Law","Centre-State Relations"
//   ],
//   ip:[
//     "Patents","Trademarks","Copyrights","Designs","GI Tags"
//   ],
//   cyber:[
//     "Data Privacy","IT Act Cases","Online Fraud","Digital Contracts"
//   ]
// };

// const locations = {
//   telangana:{
//     Hyderabad:["Banjara Hills","Gachibowli","Madhapur"],
//     Warangal:["Hanamkonda","Kazipet"]
//   },
//   andhra:{
//     Visakhapatnam:["Gajuwaka","MVP Colony"],
//     Vijayawada:["Benz Circle","Auto Nagar"]
//   },
//   karnataka:{
//     Bengaluru:["Whitefield","Indiranagar"],
//     Mysuru:["VV Mohalla","Nazarbad"]
//   },
//   tamilnadu:{
//     Chennai:["T Nagar","Adyar"],
//     Coimbatore:["RS Puram","Gandhipuram"]
//   },
//   maharashtra:{
//     Mumbai:["Andheri","Borivali"],
//     Pune:["Hinjewadi","Kothrud"]
//   }
// };

// /* ================= LOGIC ================= */
// const dept = document.getElementById("department");
// const subDept = document.getElementById("subDepartment");
// const state = document.getElementById("state");
// const district = document.getElementById("district");
// const city = document.getElementById("city");

// dept.onchange = ()=>{
//   subDept.innerHTML = `<option value="">Sub-Department</option>`;
//   (subDepartments[dept.value] || []).forEach(s=>{
//     subDept.innerHTML += `<option>${s}</option>`;
//   });
// };

// state.onchange = ()=>{
//   district.innerHTML = `<option value="">Select District</option>`;
//   city.innerHTML = `<option value="">Select City</option>`;
//   Object.keys(locations[state.value] || {}).forEach(d=>{
//     district.innerHTML += `<option value="${d}">${d}</option>`;
//   });
// };

// district.onchange = ()=>{
//   city.innerHTML = `<option value="">Select City</option>`;
//   (locations[state.value]?.[district.value] || []).forEach(c=>{
//     city.innerHTML += `<option>${c}</option>`;
//   });
// };

// /* ================= EVENTS ================= */
// document.getElementById("filterForm").onsubmit = e=>{
//   e.preventDefault();
//   alert("Filters Applied Successfully ✅");
//    closebrowseprofiles();
// };

// function closePopup(){
//   document.getElementById("profilePopup").style.display="none";
// }







/* =====================================================
   CORE HELPERS
===================================================== */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const safe = (fn) => { try { fn(); } catch (e) { console.warn(e.message); } };

/* =====================================================
   NAVBAR + UI CONTROLS
===================================================== */
function initNavbar() {
  const nav = $(".navbar");
  if (nav) {
    document.documentElement.style.setProperty("--nav-height", nav.offsetHeight + "px");
  }

  $(".menu-toggle")?.addEventListener("click", () =>
    $(".nav-links")?.classList.toggle("show")
  );

  let fontSize = 16;
  $("#font-plus")?.addEventListener("click", () => document.body.style.fontSize = ++fontSize + "px");
  $("#font-minus")?.addEventListener("click", () => document.body.style.fontSize = --fontSize + "px");

  $("#theme-toggle")?.addEventListener("click", () =>
    document.body.classList.toggle("dark")
  );
}

/* =====================================================
   SLIDER (SPA SAFE + PRODUCTION)
===================================================== */


let sliderTimer = null;


function initSlider() {
  const slides = document.querySelectorAll(".case-slide");
  const dots = document.querySelectorAll(".case-dots .dot");

  if (!slides.length) return;

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[index]?.classList.add("active");
    dots[index]?.classList.add("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
    restartAuto();
  }

  function restartAuto() {
    clearInterval(sliderTimer);
    sliderTimer = setInterval(nextSlide, 6000);
  }

  // DOT CLICK
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => goToSlide(i));
  });

  // OPTIONAL: expose controls if buttons use onclick
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
  window.goToSlide = goToSlide;

  showSlide(currentIndex);
  restartAuto();
}

/* =====================================================
   INTERSECTION OBSERVER (REUSABLE)
===================================================== */
function reveal(selector, threshold = 0.2) {
  const els = $$(selector);
  if (!els.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold });

  els.forEach(el => obs.observe(el));
}

/* =====================================================
   BLOGS (FAKE BACKEND)
===================================================== */


const blogs = [
  {
    title: "Ethical Boundaries for Advocates on Digital Platforms",
    excerpt:
      "Understanding Bar Council of India guidelines when engaging with clients online.",
    author: "Adv. R. Sharma",
    role: "BCI Registered Advocate",
    date: "March 2025"
  },
  {
    title: "How Technology is Changing Client–Advocate Communication",
    excerpt:
      "Digital platforms are improving access while maintaining professional independence.",
    author: "Adv. P. Mehta",
    role: "Corporate Law",
    date: "February 2025"
  },
  {
    title: "What Clients Should Know Before Contacting an Advocate Online",
    excerpt:
      "Important points for clients when using digital discovery platforms.",
    author: "Legal Editorial Team",
    role: "Tatito Platform",
    date: "January 2025"
  },
  {
    title: "Why Platforms Must Not Provide Legal Advice",
    excerpt:
      "A clear explanation of why technology platforms must stay advisory-neutral.",
    author: "Adv. S. Iyer",
    role: "Legal Compliance",
    date: "January 2025"
  },
  {
    title: "How Technology is Changing Client–Advocate Communication",
    excerpt:
      "Digital platforms are improving access while maintaining professional independence.",
    author: "Adv. P. Mehta",
    role: "Corporate Law",
    date: "February 2025"
  },
  {
    title: "What Clients Should Know Before Contacting an Advocate Online",
    excerpt:
      "Important points for clients when using digital discovery platforms.",
    author: "Legal Editorial Team",
    role: "Tatito Platform",
    date: "January 2025"
  }
];

// Function to display blogs
function loadBlogs() {
  const container = document.getElementById("blogContainer");
  if (!container) return;

  container.innerHTML = blogs.map(blog => `
    <article class="blog-card premium-blog">

  <!-- AUTHOR ROW -->
  
  <div class="blog-author">
    <div class="author-avatar premium-avatar">
      ${blog.author.charAt(0)}
    </div>

    <div class="author-info">
      <strong>${blog.author}</strong>
      <span class="author-role">${blog.role}r</span>
      <span class="author-date">${blog.date}</span>
    </div>
  </div>

  <!-- CONTENT -->
  <h3 class="blog-title">${blog.title}</h3>
  <p class="blog-excerpt">${blog.excerpt}</p>

  <!-- FOOTER -->
  <div class="blog-footer">
    <span class="blog-tag">Legal Awareness</span>
    <a href="#mainblogs" class="blog-btn premium-btn">
      Read Article →
    </a>
  </div>



</article>

  `).join("");
}



/* =====================================================
   ADVOCATES + FILTER
===================================================== */

const advocates = [
  {
    name: "Sarah Mitchell",
    specialization: "Corporate Law",
    location: "Mumbai",
    experience: 15,
    image: "/femalelawyer.jpg"
  },
  {
    name: "David Chen",
    specialization: "Criminal Defense",
    location: "Delhi",
    experience: 12,
    image: "/malelawyer.jpg"
  },
  {
    name: "Emily Rodriguez",
    specialization: "Family Law",
    location: "Bangalore",
    experience: 10,
    image: "/femalelawyer.jpg"
  },
  {
    name: "Emily Rodriguez",
    specialization: "Family Law",
    location: "Bangalore",
    experience: 10,
    image: "female2.jpg"
  },
  {
    name: "David Chen",
    specialization: "Criminal Defense",
    location: "Delhi",
    experience: 12,
    image: "/malelawyer.jpg"
  },{
    name: "Sarah Mitchell",
    specialization: "Corporate Law",
    location: "Mumbai",
    experience: 15,
    image: "female2.jpg"
  }
];

let isPremiumUser = false;

function maskName(name) {
  return isPremiumUser ? name : name.split(" ").map(p => p.slice(0,2)+"***").join(" ");
}


function renderAdvocates(list) {
  document.getElementById("advocates-container").innerHTML = "";

  list.forEach(a => {
    document.getElementById("advocates-container").innerHTML += `
      <div class="adv-card premium-card">
  <div class="adv-image">
    <img src="${a.image}" alt="Advocate profile">
  </div>

  <div class="adv-card-body">
    <h3 class="adv-name">${maskName(a.name)}</h3>
    <p class="adv-role">${a.specialization}</p>

    <p class="adv-meta">
    📍 ${a.location} <span>•</span> ${a.experience}+ Years Experience
    </p>

    <div class="adv-actions">
      <button class="btn-outline" onclick="alert('Interest Sent!')">
        Interest
      </button>
      <button class="btn-outline" onclick="alert('Opening Profile')">
super intrest      </button>
      <button class="btn-outline" onclick="alert('Opening Profile')">
    view profile
      </button>
      <button class="btn-outline" onclick="alert('Opening Profile')">
chat      </button>
    </div>

    <p class="adv-note">
      Platform facilitated connection only. No legal advice or consultation.
    </p>
  </div>
</div>

      
      `;
  });
}



window.applyFilters = () => {
  const loc = $("#filter-location")?.value;
  const exp = $("#filter-experience")?.value;
  const spec = $("#filter-specialization")?.value;

  const filtered = advocates.filter(a =>
    (!loc || a.location === loc) &&
    (!exp || a.experience >= exp) &&
    (!spec || a.specialization === spec)
  );

  renderAdvocates(filtered);
};

/* =====================================================
   CONTACT FORM
===================================================== */
function initContact() {
  const form = $("#contactForm");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent successfully ✅");
    form.reset();
  });
}

/* =====================================================
   FAQ
===================================================== */
function initFaq() {
  $$(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
      const item = q.closest(".faq-item");
      $$(".faq-item").forEach(f => f !== item && f.classList.remove("active"));
      item.classList.toggle("active");
    });
  });
}

/* =====================================================
   CHATBOT (BASIC)
===================================================== */
function initChat() {
  const widget = $("#chatWidget");
  const toggle = $("#chatToggle");
  const input = $("#chatInput");
  const messages = $("#chatMessages");

  if (!widget || !toggle) return;

  toggle.onclick = () => widget.style.display =
    widget.style.display === "flex" ? "none" : "flex";

  input?.addEventListener("keydown", e => {
    if (e.key === "Enter" && input.value.trim()) {
      messages.innerHTML += `<div class="message user">${input.value}</div>`;
      input.value = "";
    }
  });
}


// update nav bar logic

function setAvatarInitials() {
  const avatar = document.getElementById("avatarInitials");
  const name = localStorage.getItem("userName");

  if (!avatar || !name) return;

  const initials = name
    .split(" ")
    .map(w => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  avatar.textContent = initials;
}



function initProfileDropdown() {
  const wrapper = document.querySelector(".profile-wrapper");
  const trigger = document.getElementById("profileTrigger");
  const dropdown = document.getElementById("profileDropdown");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!wrapper || !trigger || !dropdown) return;

  // Remove old listeners (prevents duplicate binding)
  trigger.onclick = null;
  document.onclick = null;

  // Toggle dropdown
  trigger.addEventListener("click", function (e) {
    e.stopPropagation(); // 🔑 VERY IMPORTANT
    wrapper.classList.toggle("open");
  });

  // Click outside → close
  document.addEventListener("click", function () {
    wrapper.classList.remove("open");
  });

  // Prevent close when clicking inside dropdown
  dropdown.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Logout
  logoutBtn?.addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");

    wrapper.classList.remove("open");
    updateNavbarAuth();
    location.hash = "login";
  });
}


function updateNavbarAuth() {
  const loggedIn = localStorage.getItem("isLoggedIn") === "true";

  const loginBtn = document.querySelector(".loginnav");
  const registerBtn = document.querySelector(".registernav");
  const profileNav = document.querySelector(".profile-nav");

  if (loggedIn) {
    loginBtn?.classList.add("hide");
    registerBtn?.classList.add("hide");
    profileNav?.classList.add("show");

    setAvatarInitials();
  } else {
    loginBtn?.classList.remove("hide");
    registerBtn?.classList.remove("hide");
    profileNav?.classList.remove("show");
  }
}


/* =====================================================
   SPA ROUTER
===================================================== */
const app = $("#app");

function initHome() {
  safe(initSlider);
  safe(loadBlogs);
  safe(() => renderAdvocates(advocates));
  safe(initContact);
  safe(initFaq);
  safe(() => reveal(".service-row", 0.1));
  safe(() => reveal(".hiw-card", 0.3));
  safe(() => reveal(".tm-card", 0.2));
}



function initDashboard() {
  const form = document.getElementById("dashboardForm");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Dashboard data saved (UI only)");
  });
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userName");

  updateNavbarAuth();
  location.hash = "home";
}


function isLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true";
}


function backblog(){

      location.hash = "home";


}

function renderPage() {
  const route = location.hash.replace("#", "") || "home";
  const tpl = document.getElementById(route);

  if (!tpl || !app) {
    app.innerHTML = "<h1>404 - Page Not Found</h1>";
    return;
  }

  // Auth guard
  if (route === "dashboard" && !isLoggedIn()) {
    location.hash = "login";
    return;
  }

  // Inject template
  app.innerHTML = tpl.innerHTML;

  // Page-specific initialization (in safe order)
  requestAnimationFrame(() => {
    if (route === "home") initHome();
    if (route === "dashboard") initDashboard();
if (route === "blogs") initBlogPage();
    if (route === "advocatedashboard") {             // ← ONLY on advocate dashboard!
      initadvocateDashboard();
    }

    updateNavbarAuth();
    window.scrollTo(0, 0);
  });
}









function initadvocateDashboard() {
  const canvas = document.getElementById("earnChart");
  if (!canvas) return;

  new Chart(canvas, {
    type: 'line',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun'],
      datasets: [{
        data: [45000,52000,48000,61000,58000,70000],
        borderColor: '#38bdf8',
        backgroundColor: 'rgba(56,189,248,0.2)',
        borderWidth: 3,
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });
}




// blogs main oage logic 



/* =====================================================
   INIT
===================================================== */
window.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initChat();
    updateNavbarAuth(); // 👈 load avatar on refresh
  initProfileDropdown(); // 👈 ADD THIS
  renderPage();
});

window.addEventListener("hashchange", renderPage);


  function showPage(pageId) {
    // Hide all mains
    document.querySelectorAll('.main').forEach(function(el) {
      el.classList.remove('active');
    });
    // Show selected
    document.getElementById(pageId).classList.add('active');
    // Update sidebar active
    document.querySelectorAll('.menu a').forEach(function(el) {
      el.classList.remove('active');
    });
    document.querySelector(`.menu a[onclick="showPage('${pageId}')"]`).classList.add('active');
  }

  // FAQ Toggle
  function toggleAnswer(el) {
    el.classList.toggle('active');
  }

  // Placeholder for button actions (e.g., filters, sends) - Can be extended with real functionality
  document.querySelectorAll('button').forEach(function(btn) {
    btn.addEventListener('click', function() {
      console.log('Button clicked: ' + this.textContent);
      // Add real logic here, e.g., API calls, form submissions
    });
  });




  /* =====================================================
   BLOG PAGE MODULE – DEDICATED FOR #blg-container
===================================================== */

// Blog data – you can expand this later

// const blogData = [
//   {
//     title: "Building Trust in Digital Platforms",
//     meta: "5 min read • January 2025 • Platform",
//     category: "Platform",
//     body: `
// <h2>Why Trust Matters in Legal Tech</h2>
// <p>In the digital age, trust is the foundation of any successful platform connecting clients with professionals.</p>

// <ul>
//   <li>Verified advocate credentials</li>
//   <li>Transparent communication channels</li>
//   <li>Secure and private messaging</li>
//   <li>No direct legal advice from platform</li>
// </ul>

// <p>We act only as a neutral bridge — facilitating discovery while maintaining professional independence.</p>
//     `
//   },
//   {
//     title: "How Legal Tech Is Evolving",
//     meta: "6 min read • January 2025 • Technology",
//     category: "Technology",
//     body: `
// <h2>The Rise of Neutral Platforms</h2>
// <p>Modern legal technology focuses on access, not advice.</p>

// <p>Key trends include:</p>
// <ul>
//   <li>AI-powered matching (without consultation)</li>
//   <li>End-to-end encrypted messaging</li>
//   <li>Profile verification systems</li>
//   <li>Clear separation between platform and advocate</li>
// </ul>

// <p>Platforms like e-Advocate prioritize neutrality and user control.</p>
//     `
//   },
//   {
//     title: "Choosing the Right Advocate Online",
//     meta: "8 min read • January 2025 • Guide",
//     category: "Guide",
//     body: `
// <h2>Tips for Clients</h2>
// <p>When using digital platforms to find legal help:</p>

// <ol>
//   <li>Check specialization and experience</li>
//   <li>Review location and availability</li>
//   <li>Send interest only after reviewing profile</li>
//   <li>Remember: Platform does not provide legal advice</li>
// </ol>

// <p>All communication happens directly between client and advocate.</p>
//     `
//   },
//   {
//     title: "Security & Privacy in Legal Platforms",
//     meta: "7 min read • January 2025 • Compliance",
//     category: "Compliance",
//     body: `
// <h2>Your Data, Your Control</h2>
// <p>We follow strict privacy guidelines:</p>

// <ul>
//   <li>No storage of case details</li>
//   <li>Messages deleted after delivery confirmation</li>
//   <li>No sharing with third parties</li>
//   <li>Compliant with Bar Council rules</li>
// </ul>

// <p>We are a discovery platform — not a law firm.</p>
//     `
//   }
// ];

// // Global state
// let currentBlogIndex = 0;
// let filteredBlogs = [...blogData];

// /* =====================================================
//    RENDER BLOG LIST
// ===================================================== */
// function renderBlogList() {
//   const list = document.getElementById("blg-list");
//   if (!list) return;

//   list.innerHTML = "";

//   filteredBlogs.forEach((blog, index) => {
//     const li = document.createElement("li");
//     li.textContent = blog.title;
//     li.className = index === currentBlogIndex ? "active" : "";
//     li.onclick = () => loadBlogByIndex(index);
//     list.appendChild(li);
//   });
// }

// /* =====================================================
//    LOAD & DISPLAY SINGLE BLOG
// ===================================================== */
// function loadBlogByIndex(index) {
//   if (index < 0 || index >= filteredBlogs.length) return;

//   const blog = filteredBlogs[index];
//   currentBlogIndex = index;

//   // Update content
//   document.getElementById("blg-title").textContent = blog.title;
//   document.getElementById("blg-meta").textContent = blog.meta;
//   document.getElementById("blg-body").innerHTML = blog.body;

//   // Update counter
//   document.getElementById("blg-counter").textContent = 
//     `${index + 1} of ${filteredBlogs.length}`;

//   // Update active state in list
//   document.querySelectorAll("#blg-list li").forEach((li, i) => {
//     li.classList.toggle("active", i === index);
//   });

//   // Scroll to top of content
//   document.querySelector(".blg-content").scrollTop = 0;

//   // Update progress bar
//   updateReadingProgress();
// }

// /* =====================================================
//    NAVIGATION
// ===================================================== */
// function nextBlog() {
//   if (currentBlogIndex < filteredBlogs.length - 1) {
//     loadBlogByIndex(currentBlogIndex + 1);
//   }
// }

// function prevBlog() {
//   if (currentBlogIndex > 0) {
//     loadBlogByIndex(currentBlogIndex - 1);
//   }
// }

// /* =====================================================
//    SEARCH & FILTER
// ===================================================== */
// function filterBlogs() {
//   const searchVal = document.getElementById("blg-search")?.value.toLowerCase() || "";
//   const categoryVal = document.getElementById("blg-category")?.value || "";

//   filteredBlogs = blogData.filter(blog => {
//     const matchesSearch = blog.title.toLowerCase().includes(searchVal) ||
//                           blog.body.toLowerCase().includes(searchVal);
//     const matchesCategory = !categoryVal || blog.category === categoryVal;

//     return matchesSearch && matchesCategory;
//   });

//   currentBlogIndex = 0;
//   renderBlogList();
//   if (filteredBlogs.length > 0) {
//     loadBlogByIndex(0);
//   } else {
//     document.getElementById("blg-title").textContent = "No blogs found";
//     document.getElementById("blg-body").innerHTML = "<p>Try different keywords or filters.</p>";
//     document.getElementById("blg-counter").textContent = "0 of 0";
//   }
// }

// /* =====================================================
//    READING PROGRESS BAR
// ===================================================== */
// function updateReadingProgress() {
//   const article = document.getElementById("blg-body");
//   const bar = document.getElementById("blg-progress-bar");
//   if (!article || !bar) return;

//   const scrollTop = window.scrollY;
//   const articleTop = article.offsetTop;
//   const articleHeight = article.scrollHeight;
//   const windowHeight = window.innerHeight;

//   const progress = (scrollTop - articleTop + windowHeight) / (articleHeight + windowHeight);
//   bar.style.width = Math.min(Math.max(progress * 100, 0), 100) + "%";
// }

// /* =====================================================
//    MAIN INIT FUNCTION – CALL THIS IN YOUR SPA
// ===================================================== */
// function initBlogPage() {
//   console.log("Blog page initialized");

//   // Initial render
//   renderBlogList();
//   loadBlogByIndex(0);

//   // Attach scroll listener for progress bar
//   window.addEventListener("scroll", updateReadingProgress);

//   // Make functions global for onclick in HTML
//   window.nextBlog = nextBlog;
//   window.prevBlog = prevBlog;
//   window.filterBlogs = filterBlogs;
//   window.loadBlogByIndex = loadBlogByIndex; // if you want direct access
// }

// // Optional: Auto-remove listener when leaving page
// function destroyBlogPage() {
//   window.removeEventListener("scroll", updateReadingProgress);
// }


const mainblogs = [
  {
    title: "Building Trust in Digital Platforms",
    meta: "5 min read • Platform Insights",
    body: `
      <p>Trust is the foundation of any successful digital platform. In modern ecosystems,
      transparency, verification, and communication play a crucial role.</p>
      <p>Enterprise platforms focus on secure onboarding, verified professionals,
      and structured workflows to ensure confidence for users.</p>
    `
  },
  {
    title: "How Legal Tech Is Evolving",
    meta: "6 min read • Technology",
    body: `
      <p>Legal technology is transforming how users interact with professionals.</p>
      <p>From discovery to communication and document handling, platforms are becoming
      more intuitive, secure, and scalable.</p>
    `
  },
  {
    title: "Choosing the Right Advocate Online",
    meta: "4 min read • User Guide",
    body: `
      <p>Online platforms give users access to a wide range of advocates.</p>
      <p>Filters, reviews, experience, and specialization help users make informed decisions.</p>
    `
  },
  {
    title: "Security & Privacy in Legal Platforms",
    meta: "7 min read • Compliance",
    body: `
      <p>Data security and privacy are non-negotiable in enterprise legal platforms.</p>
      <p>Encryption, access control, and compliance frameworks ensure user confidence.</p>
    `
  }
];

let currentBlog = 0;

function loadBlog(index) {
  if (!mainblogs[index]) return;

  currentBlog = index;

  document.getElementById("blg-title").innerText =
    mainblogs[index].title;

  document.getElementById("blg-meta").innerText =
    mainblogs[index].meta;

  document.getElementById("blg-body").innerHTML =
    mainblogs[index].body;

  document.getElementById("blg-counter").innerText =
    `${index + 1} of ${mainblogs.length}`;

  document.querySelectorAll("#blg-list li").forEach((li, i) => {
    li.classList.toggle("active", i === index);
  });
}

function nextBlog() {
  if (currentBlog < mainblogs.length - 1) {
    loadBlog(currentBlog + 1);
  }
}

function prevBlog() {
  if (currentBlog > 0) {
    loadBlog(currentBlog - 1);
  }
}


function initBlogPage() {
  if (!document.getElementById("blg-title")) return;
  loadBlog(0);
}








