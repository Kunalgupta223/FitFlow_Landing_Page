// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Smooth scroll function
function scrollTo(selector) {
  const element = document.querySelector(selector)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

// Form submission
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault()
  
  const submitBtn = this.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent

  submitBtn.textContent = "Sending..."
  submitBtn.disabled = true

  setTimeout(() => {
    this.reset()
    submitBtn.textContent = originalText
    submitBtn.disabled = false

    // Show success message
    const successMessage = document.getElementById("successMessage")
    successMessage.style.display = "block"

    setTimeout(() => {
      successMessage.style.display = "none"
    }, 4000)
  }, 1500)
})

// Play video demo
function playVideo() {
  alert("Video demo would open in a modal or new window")
}

// Add fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in")
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe all feature cards, testimonial cards, and pricing cards
document.querySelectorAll(".feature-card, .testimonial-card, .pricing-card").forEach((el) => {
  observer.observe(el)
})

// Active nav link on scroll
window.addEventListener("scroll", () => {
  let current = ""
  const sections = document.querySelectorAll("section")

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active")
    }
  })
})
