// ...existing code...

// Hamburger menu dropdown slide-down for mobile
document.addEventListener('DOMContentLoaded', function () {
    // Hamburger toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            // Close all dropdowns when menu is closed
            if (!navLinks.classList.contains('active')) {
                document.querySelectorAll('.nav-links > li').forEach(li => li.classList.remove('show-dropdown'));
            }
        });
    }

    // Dropdown slide-down for mobile hamburger nav
    document.querySelectorAll('.nav-links > li').forEach(function (li) {
        const dropdown = li.querySelector('.dropdown-content');
        if (dropdown) {
            li.addEventListener('click', function (e) {
                // Only on mobile and only if hamburger is active
                if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
                    e.stopPropagation();
                    // Remove show-dropdown from all siblings
                    document.querySelectorAll('.nav-links > li').forEach(function (sib) {
                        if (sib !== li) sib.classList.remove('show-dropdown');
                    });
                    // Toggle this dropdown
                    li.classList.toggle('show-dropdown');
                }
            });
        }
    });

    // Optional: close dropdowns if clicking outside nav
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            document.querySelectorAll('.nav-links > li').forEach(li => li.classList.remove('show-dropdown'));
        }
    });
});

// ...existing code...

// Yard Test Slider
let currentYardSlide = 0;
const yardSlides = document.querySelectorAll('.yard-slide');

function showYardSlide(index) {
    yardSlides.forEach((slide, i) => {
        slide.classList.remove('active-slide');
        if (i === index) {
            slide.classList.add('active-slide');
        }
    });
}

function nextYardSlide() {
    currentYardSlide = (currentYardSlide + 1) % yardSlides.length;
    showYardSlide(currentYardSlide);
}

function prevYardSlide() {
    currentYardSlide = (currentYardSlide - 1 + yardSlides.length) % yardSlides.length;
    showYardSlide(currentYardSlide);
}

// Road Test Slider
function switchTest(index) {
    const buttons = document.querySelectorAll('.test-toggle .toggle-btn');

    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
        } else {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        }
    });

    // (Optional) Show/Hide forms
    const forms = ['theory-form', 'yard-form', 'road-form'];
    forms.forEach((formId, i) => {
        const form = document.getElementById(formId);
        if (form) {
            form.style.display = i === index ? 'block' : 'none';
        }
    });
}

// Add to your script.js
window.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('language-modal');
    if (modal) modal.style.display = 'flex';
});

function setLanguage(lang) {
    // You can store the language in localStorage or a cookie if needed
    // localStorage.setItem('preferredLanguage', lang);
    document.getElementById('language-modal').style.display = 'none';
    // Optionally, update the UI or reload content based on language
}

// Add to your script.js
function openPaymentModal() {
    document.getElementById('payment-modal').style.display = 'flex';
}
function closePaymentModal() {
    document.getElementById('payment-modal').style.display = 'none';
}
document.getElementById('payment-form').onsubmit = function(e) {
    e.preventDefault();
    // Add your payment logic here
    alert('Payment processed!');
    closePaymentModal();
};

function closeModal() 
{

    const modal = document.getElementById('language-modal');
    modal.classList.add('closing');

    setTimeout(function () 
    {

        modal.style.display = 'none';
        modal.classList.remove('closing');

    }, 400); // match animation duration

}

// Example data (replace with real data as needed)
const licenseData = {
  type: "Driver",
  name: "Leruo Mohutsiwa",
  uniqueNumber: "BW-DR-20250711-12345",
  fines: 0
};

// Set info in the card
document.getElementById('license-name').textContent = licenseData.name;
document.getElementById('license-number').textContent = licenseData.uniqueNumber;
document.getElementById('license-fines').textContent = "P" + licenseData.fines.toFixed(2);

// Encode all info in the QR code (could be a URL or JSON)
const qrValue = JSON.stringify(licenseData);

// Generate QR code
new QRCode(document.getElementById("qrcode"), {
  text: qrValue,
  width: 120,
  height: 120
});
