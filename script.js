// Menu mobile toggle
const menuToggle = document.getElementById("menuToggle")
const navLinks = document.getElementById("navLinks")

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active")
  })
}

// Fermer le menu mobile lors du clic sur un lien
const navItems = document.querySelectorAll(".nav-links a")
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove("active")
    }
  })
})

// Animation des barres de compétences au scroll
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observer tous les éléments avec animation
const animatedElements = document.querySelectorAll(".skill-item, .mission-card, .projet-card")
animatedElements.forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Gestion du formulaire de contact
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Récupération des données du formulaire
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    }

    console.log("[v0] Formulaire soumis:", formData)

    // Afficher un message de confirmation
    alert("Message envoyé avec succès! (Démo uniquement - configurez votre backend)")

    // Réinitialiser le formulaire
    contactForm.reset()
  })
}

// Smooth scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
