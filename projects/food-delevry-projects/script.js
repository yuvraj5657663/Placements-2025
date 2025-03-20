// Sample restaurant data
const restaurants = [
    {
        name: "Pizza Paradise",
        cuisine: "Italian",
        rating: 4.5,
        deliveryTime: "30-45",
        image: "https://via.placeholder.com/300x200"
    },
    {
        name: "Burger Bliss",
        cuisine: "American",
        rating: 4.3,
        deliveryTime: "25-40",
        image: "https://via.placeholder.com/300x200"
    },
    {
        name: "Sushi Select",
        cuisine: "Japanese",
        rating: 4.7,
        deliveryTime: "35-50",
        image: "https://via.placeholder.com/300x200"
    },
    {
        name: "Spice Garden",
        cuisine: "Indian",
        rating: 4.4,
        deliveryTime: "40-55",
        image: "https://via.placeholder.com/300x200"
    }
];

// Populate featured restaurants
function displayRestaurants() {
    const restaurantGrid = document.querySelector('.restaurant-grid');
    
    restaurants.forEach(restaurant => {
        const restaurantCard = document.createElement('div');
        restaurantCard.className = 'category-card';
        
        restaurantCard.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <h3>${restaurant.name}</h3>
            <p>${restaurant.cuisine}</p>
            <div class="restaurant-info">
                <span>⭐ ${restaurant.rating}</span>
                <span>🕒 ${restaurant.deliveryTime} min</span>
            </div>
        `;
        
        restaurantCard.addEventListener('click', () => {
            // Add functionality for restaurant selection
            alert(`You selected ${restaurant.name}! Ordering functionality coming soon.`);
        });
        
        restaurantGrid.appendChild(restaurantCard);
    });
}

// Search functionality
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', () => {
    const address = searchInput.value.trim();
    if (address) {
        alert(`Searching for restaurants near: ${address}`);
        // Add actual search functionality here
    } else {
        alert('Please enter a delivery address');
    }
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayRestaurants();
});

// Add animation on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.backgroundColor = 'white';
    }
});
