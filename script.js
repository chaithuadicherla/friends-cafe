const menuItems = [
    { 
        name: "Chaithu's Latte", 
        price: 120,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        description: "Chaithu's Latte is a popular coffee drink in Friend's Cafe, made with one or two shots of espresso and a large amount of steamed milk, and a thin, light layer of milk foam on top. Chaithu's Latte is Lover's favourite Menu, Making it a perfect choice for those who enjoy a creamy and smooth coffee experience. The rich espresso flavor is balanced by the sweetness of the steamed milk, creating a harmonious blend that is both comforting and satisfying. Whether enjoyed in the morning or as an afternoon pick-me-up, Chaithu's Latte is a delightful treat for coffee lovers at Friend's Cafe."
    },
    { 
        name: "Katta's Espresso", 
        price: 100,
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
        description: "Espresso is a concentrated coffee brewed by forcing hot water (approx. 92°C) under 9–10 bars of high pressure through finely-ground, dark-roasted coffee beans in about 25–30 seconds. The result is a small, strong shot of coffee with a rich flavor and a layer of crema on top. Espresso serves as the base for many popular coffee drinks, such as lattes, cappuccinos, and Americanos. It is known for its bold taste and invigorating effects, making it a favorite choice for coffee enthusiasts around the world."
    },
    { 
        name: "Venky's Cappuccino", 
        price: 130,
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213",
        description: "Venky's Cappuccino is a beloved coffee beverage at Friend's Cafe, crafted with equal parts of espresso, steamed milk, and frothy milk foam. This classic Italian drink offers a perfect balance of bold coffee flavor and creamy texture. The rich espresso provides a robust base, while the steamed milk adds a smooth and velvety consistency. The frothy milk foam on top creates a delightful contrast, making each sip a harmonious blend of flavors and textures. Venky's Cappuccino is an ideal choice for those seeking a comforting and indulgent coffee experience at Friend's Cafe."
    },
    { 
        name: "Shashank's Bounty", 
        price: 150,
        image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52",
        description: "Shashank's Bounty is a delectable dessert offered at Friend's Cafe, known for its irresistible combination of flavors and textures. This indulgent treat features a rich and moist chocolate cake base, layered with a luscious chocolate ganache and topped with a generous amount of whipped cream. The cake is often adorned with chocolate shavings or a drizzle of chocolate sauce, adding an extra touch of decadence. Shashank's Bounty is a perfect choice for those with a sweet tooth, providing a delightful and satisfying experience for dessert lovers at Friend's Cafe. Whether enjoyed as a post-meal indulgence or a special treat, Shashank's Bounty is sure to satisfy cravings and leave a lasting impression on anyone who tries it."
    },
    { 
        name: "Sunny's Muffin", 
        price: 80,
        image: "https://images.unsplash.com/photo-1587668178277-295251f900ce",
        description: "Sunny's Muffin is a delightful baked good offered at Friend's Cafe, known for its moist and flavorful texture. This delicious treat is made with a combination of high-quality ingredients, including flour, sugar, eggs, and butter, resulting in a soft and tender crumb. Sunny's Muffin comes in a variety of flavors, such as blueberry, chocolate chip, and banana nut, catering to different taste preferences. Each muffin is carefully crafted to provide a perfect balance of sweetness and richness, making it an ideal choice for breakfast or as a snack throughout the day. Whether enjoyed with a cup of coffee or on its own, Sunny's Muffin is sure to bring a smile to your face and satisfy your cravings at Friend's Cafe."
    },
    { 
        name: "Macha's Pasta", 
        price: 180,
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/04/white-sauce-pasta.jpg",
        description: "Macha's Pasta is a delectable dish offered at Friend's Cafe, known for its rich and creamy flavors. This mouthwatering pasta is made with al dente noodles tossed in a luscious white sauce, infused with garlic, herbs, and a blend of cheeses. The sauce is velvety and indulgent, perfectly coating each strand of pasta for a satisfying dining experience. Macha's Pasta can be customized with various toppings such as grilled chicken, sautéed vegetables, or crispy bacon, allowing customers to create their own unique flavor combinations. Whether enjoyed as a comforting meal or a special treat, Macha's Pasta is sure to delight the taste buds and leave a lasting impression on anyone who tries it at Friend's Cafe."
    },
    { 
        name: "Rajath's Sandwich", 
        price: 140,
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        description: "Rajath's Sandwich is a delicious and satisfying meal offered at Friend's Cafe, known for its fresh ingredients and bold flavors. This mouthwatering sandwich features layers of tender grilled chicken, crisp lettuce, juicy tomatoes, and creamy mayonnaise, all nestled between two slices of toasted bread. The combination of textures and flavors creates a harmonious blend that is both comforting and indulgent. Rajath's Sandwich can be enjoyed as a quick lunch or a hearty snack, making it a popular choice among customers at Friend's Cafe. Whether paired with a side of fries or enjoyed on its own, Rajath's Sandwich is sure to satisfy cravings and leave a lasting impression on anyone who tries it. "
    },
    { 
        name: "Pallav's Pizza", 
        price: 220,
        image: "https://content3.jdmagicbox.com/v2/comp/hyderabad/l7/040pxx40.xx40.161118020616.b3l7/catalogue/pizza-company-hyderabad-pizza-outlets-2hwccxh.jpg",
        description: "Pallav's Pizza is a delectable and flavorful dish offered at Friend's Cafe, known for its crispy crust, savory toppings, and rich cheese. This mouthwatering pizza features a thin and crispy base, topped with a generous layer of tomato sauce, a blend of cheeses, and a variety of toppings such as pepperoni, mushrooms, bell peppers, and olives. The combination of flavors and textures creates a harmonious blend that is both satisfying and indulgent. Pallav's Pizza can be enjoyed as a quick meal or shared with friends and family, making it a popular choice among customers at Friend's Cafe. Whether paired with a side of garlic bread or enjoyed on its own, Pallav's Pizza is sure to delight the taste buds and leave a lasting impression on anyone who tries it."
    },
    { 
        name: "Vinay's Cookies", 
        price: 90,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
        description: "Vinay's Cookies are a delightful treat offered at Friend's Cafe, known for their soft and chewy texture and irresistible flavors. These delicious cookies are made with high-quality ingredients, including butter, sugar, eggs, and a variety of mix-ins such as chocolate chips, nuts, or dried fruits. Each cookie is carefully crafted to provide the perfect balance of sweetness and richness, making them an ideal choice for satisfying sweet cravings. Vinay's Cookies can be enjoyed as a snack or paired with a cup of coffee or milk for a comforting and indulgent experience. Whether enjoyed fresh out of the oven or savored later, Vinay's Cookies are sure to bring joy and delight to anyone who tries them at Friend's Cafe."
    },
    { 
        name: "Rounith's Croissant", 
        price: 110,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPD4zUoTBei_LVLmT5uIoM4gXcYoz135AGw&s",
        description: "Rounith's Croissant is a delectable pastry offered at Friend's Cafe, known for its flaky and buttery texture. This classic French pastry is made with layers of dough that are folded and rolled multiple times to create a light and airy interior. Rounith's Croissant can be enjoyed plain or filled with a variety of delicious ingredients such as chocolate, almond paste, or ham and cheese. The golden-brown exterior provides a satisfying crunch, while the soft and tender interior offers a delightful contrast. Whether enjoyed for breakfast or as a snack throughout the day, Rounith's Croissant is sure to satisfy cravings and provide a delicious treat for customers at Friend's Cafe."
    },
    { 
        name: "Koushik's Cake", 
        price: 160,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
        description: "Koushik's Cake is a delectable dessert offered at Friend's Cafe, known for its moist and flavorful texture. This delicious treat is made with a combination of high-quality ingredients, including flour, sugar, eggs, and butter, resulting in a soft and tender crumb. Koushik's Cake comes in a variety of flavors, such as chocolate, vanilla, and red velvet, catering to different taste preferences. Each cake is carefully crafted to provide a perfect balance of sweetness and richness, making it an ideal choice for celebrations or as a special treat. Whether enjoyed with a cup of coffee or on its own, Koushik's Cake is sure to bring joy to your taste buds and satisfy your sweet cravings at Friend's Cafe."
    },
    { 
        name: "Pavan's Fries", 
        price: 120,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIUzERgVNoFDB8gpKrOOxmu50m-gAy1Ph-_A&s",
        description: "Pavan's Fries are a delicious and crispy side dish offered at Friend's Cafe, known for their golden-brown exterior and fluffy interior. These mouthwatering fries are made from high-quality potatoes that are cut into thin strips and fried to perfection. Pavan's Fries can be enjoyed on their own or paired with a variety of dipping sauces such as ketchup, mayonnaise, or cheese sauce, allowing customers to customize their flavor experience. Whether served as a side to complement a meal or enjoyed as a snack, Pavan's Fries are sure to satisfy cravings and provide a delightful treat for customers at Friend's Cafe."
    }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const menuContainer = document.getElementById("menuContainer");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

function displayMenu() {
    menuContainer.innerHTML = "";
    menuItems.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <div class="card-buttons">
               <button class="view-btn" data-name="${item.name}">
                  View More
               </button>
            </div>
        `;
        menuContainer.appendChild(card);
    });
}

function displayCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = total;
}

function clearCart() {
    cart = [];
    localStorage.removeItem("cart");
    displayCart();
}

function scrollToMenu() {
    document.querySelector(".menu").scrollIntoView({
        behavior: "smooth"
    });
}

// Counter Animation
const counters = document.querySelectorAll(".counter");

const startCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const speed = target / 100;

        const updateCount = () => {
            count += speed;
            if (count < target) {
                counter.innerText = Math.floor(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
};

// Run animation when section is visible
const statsSection = document.querySelector(".stats");

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        startCounters();
        observer.disconnect();
    }
});

if (statsSection) {
    observer.observe(statsSection);
}

// Testimonials Slider with Fade + Slide
const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let isAnimating = false;

function showSlide(index) {
    if (isAnimating) return;
    isAnimating = true;

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    setTimeout(() => {
        isAnimating = false;
    }, 300);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

if (slides.length > 0) {
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    setInterval(nextSlide, 4000);
}

function viewDetails(name) {
    window.location.href = "details.html?item=" + encodeURIComponent(name);
}

// Details Page Logic
document.addEventListener("DOMContentLoaded", function () {

    if (window.location.pathname.includes("details.html")) {

        const params = new URLSearchParams(window.location.search);
        const itemName = params.get("item");

        if (!itemName) return;

        const item = menuItems.find(i => i.name === itemName);

        if (item) {
            document.getElementById("detailImage").src = item.image;
            document.getElementById("detailName").innerText = item.name;
            document.getElementById("detailPrice").innerText = item.price;
            document.getElementById("detailDescription").innerText = item.description;
        }
    }
});

// Highlight Current Day in Opening Hours
document.addEventListener("DOMContentLoaded", function () {
    const today = new Date().getDay(); // 0 = Sunday, 6 = Saturday
    const rows = document.querySelectorAll(".hours-row");

    rows.forEach(row => {
        if (parseInt(row.getAttribute("data-day")) === today) {
            row.classList.add("active-day");
        }
    });
});

if (menuContainer) {
    displayMenu();
    attachViewButtons();
}

function attachViewButtons() {
    const viewButtons = document.querySelectorAll(".view-btn");

    viewButtons.forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            viewDetails(name);
        });
    });
}

if (typeof emailjs !== "undefined") {
    emailjs.init("vZ5vphsAejJPye9kL");
}

const bookingForm = document.getElementById("bookingForm");

if (typeof emailjs !== "undefined" && bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const formData = new FormData(this);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            date: formData.get("date"),
            time: formData.get("time"),
            guests: formData.get("guests"),
            message: formData.get("message")
        };

        emailjs.send("service_tq8fq6a", "template_mra6sqp", data)
        .then(() => {
            emailjs.send("service_tq8fq6a", "template_jo50h0r", data)
            .then(() => {
                // Show Modal
document.getElementById("successModal").classList.add("active");

// Reset form
bookingForm.reset();


setTimeout(() => {
    window.location.href = "index.html";
}, 2000);
                bookingForm.reset();
            });
        })
        .catch((error) => {
            document.getElementById("bookingMessage").innerText =
                "Something went wrong. Please try again.";
            console.error(error);
        });
    });
}

const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("successModal");

if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });
}

document.addEventListener("DOMContentLoaded", function () {

    const heroSlides = document.querySelectorAll(".hero-slide");
    const prevBtn = document.querySelector(".hero-prev");
    const nextBtn = document.querySelector(".hero-next");

    if (heroSlides.length === 0) return;

    let currentHero = 0;

    function showHeroSlide(index) {
        heroSlides.forEach(slide => slide.classList.remove("active"));
        heroSlides[index].classList.add("active");
    }

    function nextHeroSlide() {
        currentHero = (currentHero + 1) % heroSlides.length;
        showHeroSlide(currentHero);
    }

    function prevHeroSlide() {
        currentHero = (currentHero - 1 + heroSlides.length) % heroSlides.length;
        showHeroSlide(currentHero);
    }

    // Auto slide
    setInterval(nextHeroSlide, 5000);

    // Manual controls
    if (nextBtn) nextBtn.addEventListener("click", nextHeroSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevHeroSlide);

});

// STAR RATING FUNCTIONALITY
document.addEventListener("DOMContentLoaded", function () {

    const stars = document.querySelectorAll(".star-rating span");
    const ratingInput = document.getElementById("ratingValue");

    stars.forEach(star => {
        star.addEventListener("click", function () {
            const value = this.getAttribute("data-value");
            ratingInput.value = value;

            stars.forEach(s => s.classList.remove("active"));
            for (let i = 0; i < value; i++) {
                stars[i].classList.add("active");
            }
        });
    });

    const reviewForm = document.getElementById("reviewForm");
    const reviewModal = document.getElementById("reviewSuccessModal");

    if (reviewForm) {
        reviewForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = new FormData(reviewForm);

            fetch(reviewForm.action, {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    reviewModal.classList.add("active");
                    reviewForm.reset();
                    stars.forEach(s => s.classList.remove("active"));

                    setTimeout(() => {
                        reviewModal.classList.remove("active");
                    }, 3000);
                } else {
                    alert("Error submitting review.");
                }
            }).catch(() => {
                alert("Network error.");
            });
        });
    }

});

if (cartItems && totalPrice) displayCart();