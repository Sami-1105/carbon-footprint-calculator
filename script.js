document.getElementById("enter-site").addEventListener("click", function () {
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("main-site").classList.remove("hidden");
});
document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-site");
  const welcomeScreen = document.getElementById("welcome-screen");
  const mainSite = document.getElementById("main-site");

  enterBtn.addEventListener("click", () => {
   
    welcomeScreen.style.opacity = "0";
    setTimeout(() => {
      welcomeScreen.style.display = "none";
      mainSite.classList.remove("hidden");
    }, 500); 
  });

  
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1); 
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

 
  const form = document.querySelector("form");
  const resultBox = document.getElementById("result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const electricity = Number(document.getElementById("electricity").value);
    const transport = Number(document.getElementById("transport").value);
    const paper = Number(document.getElementById("paper").value);
    
  const carbonEstimate = (electricity * 0.5) + (transport * 0.21) + (paper * 0.006);
  let carbonComment = '';

  if (carbonEstimate <= 120) {
    carbonComment = 'Low Carbon Footprint! Keep up the good work!';
  } else if (carbonEstimate > 120 && carbonEstimate <= 190) {
    carbonComment = 'Moderate Carbon Footprint. Consider reducing your energy consumption and transportation.';
  } else {
    carbonComment = 'High Carbon Footprint. Follow tips to  reduce your carbon emissions!';
  }

  resultBox.innerHTML = `
    <strong>Estimated Carbon Footprint:</strong> ${carbonEstimate.toFixed(2)} kg CO₂/month
    <p>${carbonComment}</p>
  `;
});

  
});

document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      document.getElementById("thankYouMessage").style.display = "block";
      form.reset();
    } else {
      alert("Oops! Something went wrong.");
    }
  }).catch(error => {
    console.error("Submission error:", error);
    alert("Network error. Please try again later.");
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.getAttribute('href').substring(1);

      sections.forEach(section => {
        if (section.id === targetId) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });
    });
  });
});


