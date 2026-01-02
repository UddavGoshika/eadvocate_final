// nav bar 

const nav = document.querySelector(".navbar");
document.documentElement.style.setProperty(
  "--nav-height",
  nav.offsetHeight + "px"
);


// Mobile Menu
document.querySelector(".menu-toggle").onclick = () => {
  document.querySelector(".nav-links").classList.toggle("show");
};

// Font Size Control
let size = 16;
document.getElementById("font-plus").onclick = () => { size++; document.body.style.fontSize = size+"px"; };
document.getElementById("font-minus").onclick = () => { size--; document.body.style.fontSize = size+"px"; };

// Theme Toggle
document.getElementById("theme-toggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Language Switcher Demo
document.getElementById("language-switcher").onchange = (e)=>{
  alert("Language switched to: " + e.target.value);
};

// second page advocate services
// Simple intersection observer to trigger fade-in
const rows = document.querySelectorAll('.service-row');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

rows.forEach(row => observer.observe(row));

// Optional: Auto-rotate images every 4 seconds
document.querySelectorAll('.service-image').forEach(container => {
  const imgs = container.querySelectorAll('img');
  let current = 0;
  setInterval(() => {
    imgs[current].classList.remove('active');
    current = (current + 1) % imgs.length;
    imgs[current].classList.add('active');
  }, 4000);
});

// blogs section dynamic update code 
// Temporary "fake backend" blog storage
let blogs = [
  {
    title: "How to File a Case Online",
    image: "https://images.pexels.com/photos/6077321/pexels-photo-6077321.jpeg",
    description: "Learn how to submit petitions digitally without visiting the court.",
    author: "Advocate Support Desk",
    date: "Feb 2025"
  },
  {
    title: "Track Court Case Status Online",
    image: "https://images.pexels.com/photos/5668471/pexels-photo-5668471.jpeg",
    description: "Know hearing dates, orders & judgement status using official portals.",
    author: "Legal Research Team",
    date: "Feb 2025"
  },
  {
    title: "Track Court Case Status Online",
    image: "https://images.pexels.com/photos/5668471/pexels-photo-5668471.jpeg",
    description: "Know hearing dates, orders & judgement status using official portals.",
    author: "Legal Research Team",
    date: "Feb 2025"
  },{
    title: "Track Court Case Status Online",
    image: "https://images.pexels.com/photos/5668471/pexels-photo-5668471.jpeg",
    description: "Know hearing dates, orders & judgement status using official portals.",
    author: "Legal Research Team",
    date: "Feb 2025"
  },{
    title: "Track Court Case Status Online",
    image: "https://images.pexels.com/photos/5668471/pexels-photo-5668471.jpeg",
    description: "Know hearing dates, orders & judgement status using official portals.",
    author: "Legal Research Team",
    date: "Feb 2025"
  },{
    title: "Track Court Case Status Online",
    image: "https://images.pexels.com/photos/5668471/pexels-photo-5668471.jpeg",
    description: "Know hearing dates, orders & judgement status using official portals.",
    author: "Legal Research Team",
    date: "Feb 2025"
  }
];

// Function to display blogs
function loadBlogs() {
  let container = document.getElementById("blogContainer");
  container.innerHTML = blogs.map(blog => `
    <div class="blog-card">
      <img src="${blog.image}">
      <div class="blog-content">
        <h3 style="color:black;">${blog.title}</h3>
        <p style="color:black;">${blog.description}</p>
        <div class="blog-meta" style="color:black;">${blog.date} | ${blog.author}</div>
        <a class="blog-btn" href="#">Read Article →</a>
      </div>
    </div>
  `).join("");
}

// "Add Blog" - Simulates Backend Update
function addBlog() {
  blogs.push({
    title: document.getElementById("title").value,
    image: document.getElementById("image").value,
    description: document.getElementById("description").value,
    author: document.getElementById("author").value,
    date: new Date().toLocaleDateString("en-IN",{month:"short",year:"numeric"})
  });

  loadBlogs(); // refresh UI
  alert("Blog Added (Backend Simulation)");
}

// how it works 
// Optional: reveal animation on scroll
const cards = document.querySelectorAll(".hiw-card");

const obbserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.3 });

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(30px)";
  obbserver.observe(card);
});

//testmonials
const tmCards = document.querySelectorAll(".tm-card");

const tmObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

tmCards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(30px)";
  tmObserver.observe(card);
});

// practice section
document.querySelectorAll(".pa-card").forEach((card, i) => {
  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";
  setTimeout(() => {
    card.style.transition = "0.5s ease";
    card.style.opacity = 1;
    card.style.transform = "translateY(0)";
  }, i * 100);
});

// filter advocates section page 
// Change to true to unlock full names
let isPremiumUser = false;  

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

// Masking function
function maskName(fullName) {
  if (isPremiumUser) return fullName;
  return fullName.split(" ").map(part =>
    part[0] + part[1] + "***"
  ).join(" ");
}

function renderAdvocates(list) {
  document.getElementById("advocates-container").innerHTML = "";

  list.forEach(a => {
    document.getElementById("advocates-container").innerHTML += `
      <div class="adv-card">
        <img src="${a.image}">
        <div class="adv-card-body">
          <h3 class="adv-name">${maskName(a.name)}</h3>
          <p class="adv-role">${a.specialization}</p>
          <p style="color:black;">📍 ${a.location} | ⭐ ${a.experience}+ Years Exp.</p>
          <button class="interest-btn" onclick="alert('Interest Sent!')">Show Interest</button>
                      <button class="interest-btn" onclick="alert('Interest Sent!')">view Profile</button>

          </div>
      </div>`;
  });
}

// Filters
function applyFilters() {
  let loc = document.getElementById("filter-location").value;
  let exp = document.getElementById("filter-experience").value;
  let spec = document.getElementById("filter-specialization").value;

  let filtered = advocates.filter(a =>
    (!loc || a.location === loc) &&
    (!exp || a.experience >= exp) &&
    (!spec || a.specialization === spec)
  );

  renderAdvocates(filtered);
}

// footer section 
document.querySelectorAll(".footer a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.dataset.link;

    // 🔹 Replace with SPA routing / modal / backend page loader
    console.log("Navigate to:", page);

    // Example:
    // loadPage(page);
    // openModal(page);
    // window.location.href = page + ".html";
  });
});

// Function to init contact form (move DOM-dependent code here)
function initContact() {
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
  });
}

// Function to init FAQ (move DOM-dependent code here)
function initFaq() {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(question => {
    question.addEventListener("click", () => {
      const item = question.parentElement;

      // Close other open items
      document.querySelectorAll(".faq-item").forEach(faq => {
        if (faq !== item) faq.classList.remove("active");
      });

      // Toggle current
      item.classList.toggle("active");
    });
  });
}

// the logic for page switching and spa logic 
const app = document.getElementById("app");

function initHome() {
  // only things that MUST run after home loads
  if (typeof loadBlogs === "function") loadBlogs();
  if (typeof renderAdvocates === "function") renderAdvocates(advocates);
  initContact();  // Add this
  initFaq();      // Add this
}

function renderPage() {
  const route = location.hash.replace("#", "") || "home";
  const template = document.getElementById(route);

  if (!template) {
    app.innerHTML = "<h1>404</h1>";
    return;
  }

  app.innerHTML = template.innerHTML;

  // run page-specific JS
  if (route === "home") initHome();

  window.scrollTo(0, 0);
}

window.addEventListener("DOMContentLoaded", renderPage);
window.addEventListener("hashchange", renderPage);



//login and registerr js logic



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

// chatbot helper logic code 

const chatWidget = document.getElementById("chatWidget");
const chatToggle = document.getElementById("chatToggle");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const notificationDot = document.querySelector(".notification-dot");

let chatOpen = false;

/* TOGGLE CHAT */
function toggleChat(){
  chatOpen = !chatOpen;
  chatWidget.style.display = chatOpen ? "flex" : "none";
  notificationDot.style.display = "none";
}

/* SEND MESSAGE */
function sendChatMessage(){
  const text = chatInput.value.trim();
  if(!text) return;

  addMessage(text,"user");
  chatInput.value = "";

  setTimeout(()=>{
    addMessage(getBotReply(text),"bot");
    if(!chatOpen){
      notificationDot.style.display="block";
    }
  },700);
}

/* ADD MESSAGE */
function addMessage(text,type){
  const msg = document.createElement("div");
  msg.className = `message ${type}`;
  msg.innerHTML = `<div class="message-content">${text}</div>`;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

/* SIMPLE BOT LOGIC (replace with AI later) */
function getBotReply(input){
  input = input.toLowerCase();

  if(input.includes("lawyer") || input.includes("advocate"))
    return "I can help you find a verified advocate based on your legal issue.";

  if(input.includes("case") || input.includes("legal help"))
    return "Please tell me your case type (Criminal, Civil, Family, Corporate).";

  if(input.includes("price") || input.includes("fee"))
    return "Consultation fees vary by advocate experience and case complexity.";

  return "Thank you for reaching out. Please provide more details so I can assist you better.";
}

/* ENTER KEY SUPPORT */
chatInput.addEventListener("keydown",e=>{
  if(e.key==="Enter") sendChatMessage();
});

/* INITIAL NOTIFICATION */
setTimeout(()=>{
  if(!chatOpen) notificationDot.style.display="block";
},2000);




// browse profiles logic 

const subDepartments = {
  criminal:[
    "IPC & CrPC","Cyber Crimes","Juvenile Justice",
    "White-Collar Crime","Narcotics Law"
  ],
  family:[
    "Marriage & Divorce","Maintenance","Adoption",
    "Hindu Law","Muslim Law","Christian Law"
  ],
  corporate:[
    "Company Incorporation","Mergers & Acquisitions",
    "Insolvency & Bankruptcy","SEBI Compliance"
  ],
  constitutional:[
    "Fundamental Rights","Writ Petitions",
    "Election Law","Centre-State Relations"
  ],
  ip:[
    "Patents","Trademarks","Copyrights","Designs","GI Tags"
  ],
  cyber:[
    "Data Privacy","IT Act Cases","Online Fraud","Digital Contracts"
  ]
};

const locations = {
  telangana:{
    Hyderabad:["Banjara Hills","Gachibowli","Madhapur"],
    Warangal:["Hanamkonda","Kazipet"]
  },
  andhra:{
    Visakhapatnam:["Gajuwaka","MVP Colony"],
    Vijayawada:["Benz Circle","Auto Nagar"]
  },
  karnataka:{
    Bengaluru:["Whitefield","Indiranagar"],
    Mysuru:["VV Mohalla","Nazarbad"]
  },
  tamilnadu:{
    Chennai:["T Nagar","Adyar"],
    Coimbatore:["RS Puram","Gandhipuram"]
  },
  maharashtra:{
    Mumbai:["Andheri","Borivali"],
    Pune:["Hinjewadi","Kothrud"]
  }
};

/* ================= LOGIC ================= */
const dept = document.getElementById("department");
const subDept = document.getElementById("subDepartment");
const state = document.getElementById("state");
const district = document.getElementById("district");
const city = document.getElementById("city");

dept.onchange = ()=>{
  subDept.innerHTML = `<option value="">Sub-Department</option>`;
  (subDepartments[dept.value] || []).forEach(s=>{
    subDept.innerHTML += `<option>${s}</option>`;
  });
};

state.onchange = ()=>{
  district.innerHTML = `<option value="">Select District</option>`;
  city.innerHTML = `<option value="">Select City</option>`;
  Object.keys(locations[state.value] || {}).forEach(d=>{
    district.innerHTML += `<option value="${d}">${d}</option>`;
  });
};

district.onchange = ()=>{
  city.innerHTML = `<option value="">Select City</option>`;
  (locations[state.value]?.[district.value] || []).forEach(c=>{
    city.innerHTML += `<option>${c}</option>`;
  });
};

/* ================= EVENTS ================= */
document.getElementById("filterForm").onsubmit = e=>{
  e.preventDefault();
  alert("Filters Applied Successfully ✅");
   closebrowseprofiles();
};

function closePopup(){
  document.getElementById("profilePopup").style.display="none";
}
