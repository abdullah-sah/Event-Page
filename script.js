const mainWrapper = document.querySelector('.main-wrapper');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const categoryContainer = document.querySelector('.category-container');
const navBar = document.querySelector('.navbar');
const burgerMenu = document.querySelector('.burger');
const cardsContainer = document.querySelector('#cards-container');
const footer = document.querySelector('footer');
const categories = [
	{'title': 'Travel & Outdoor', 'icon': 'https://cdn-icons-png.flaticon.com/512/620/620831.png', 'alt': 'An icon for travel and outdoor'},
	{'title': 'Sports & Fitness', 'icon': 'https://cdn-icons-png.flaticon.com/512/1719/1719695.png', 'alt': 'An icon for sports and fitness'},
	{'title': 'Health', 'icon': 'https://cdn-icons-png.flaticon.com/512/898/898655.png', 'alt': 'An icon for health'},
	{'title': 'Dining', 'icon': 'https://cdn-icons-png.flaticon.com/512/4223/4223218.png', 'alt': 'An icon for dining'},
	{'title': 'Gaming', 'icon': 'https://cdn-icons-png.flaticon.com/512/808/808513.png', 'alt': 'An icon for gaming'},
	{'title': 'Social & Networking', 'icon': 'https://cdn-icons-png.flaticon.com/512/3820/3820107.png', 'alt': 'An icon for social and networking'},
	{'title': 'Hobby', 'icon': 'https://cdn-icons-png.flaticon.com/512/2972/2972163.png', 'alt': 'An icon for hobby'},
	{'title': 'Charity & Causes', 'icon': 'https://cdn-icons-png.flaticon.com/512/5623/5623044.png', 'alt': 'An icon for charity and causes'}
	];

const cardContent = [
	{'title': 'Card title', 'date': 'dd/mm/2022', 'img': 'https://circulareconomy.europa.eu/sites/all/themes/cecon_theme/images/events.jpg', 'alt': 'An image representing this event.', 'description': 'This field is for a description about the card. This needs to be a few lines long so I have made this placeholder text a bit wordy to account for that.', 'price': '20.00'},
	{'title': 'Card title', 'date': 'dd/mm/2022', 'img': 'https://circulareconomy.europa.eu/sites/all/themes/cecon_theme/images/events.jpg', 'alt': 'An image representing this event.', 'description': 'This field is for a description about the card. This needs to be a few lines long so I have made this placeholder text a bit wordy to account for that.', 'price': '20.00'},
	{'title': 'Card title', 'date': 'dd/mm/2022', 'img': 'https://circulareconomy.europa.eu/sites/all/themes/cecon_theme/images/events.jpg', 'alt': 'An image representing this event.', 'description': 'This field is for a description about the card. This needs to be a few lines long so I have made this placeholder text a bit wordy to account for that.', 'price': '20.00'},
	{'title': 'Card title', 'date': 'dd/mm/2022', 'img': 'https://circulareconomy.europa.eu/sites/all/themes/cecon_theme/images/events.jpg', 'alt': 'An image representing this event.', 'description': 'This field is for a description about the card. This needs to be a few lines long so I have made this placeholder text a bit wordy to account for that.', 'price': '20.00'},
	{'title': 'Card title', 'date': 'dd/mm/2022', 'img': 'https://circulareconomy.europa.eu/sites/all/themes/cecon_theme/images/events.jpg', 'alt': 'An image representing this event.', 'description': 'This field is for a description about the card. This needs to be a few lines long so I have made this placeholder text a bit wordy to account for that.', 'price': '20.00'},
	{'title': 'Card title', 'date': 'dd/mm/2022', 'img': 'https://circulareconomy.europa.eu/sites/all/themes/cecon_theme/images/events.jpg', 'alt': 'An image representing this event.', 'description': 'This field is for a description about the card. This needs to be a few lines long so I have made this placeholder text a bit wordy to account for that.', 'price': '20.00'},
	{'title': 'Card title', 'date': 'dd/mm/2022', 'img': 'https://circulareconomy.europa.eu/sites/all/themes/cecon_theme/images/events.jpg', 'alt': 'An image representing this event.', 'description': 'This field is for a description about the card. This needs to be a few lines long so I have made this placeholder text a bit wordy to account for that.', 'price': '20.00'},
	{'title': 'Card title', 'date': 'dd/mm/2022', 'img': 'https://circulareconomy.europa.eu/sites/all/themes/cecon_theme/images/events.jpg', 'alt': 'An image representing this event.', 'description': 'This field is for a description about the card. This needs to be a few lines long so I have made this placeholder text a bit wordy to account for that.', 'price': '20.00'},
	{'title': 'Card title', 'date': 'dd/mm/2022', 'img': 'https://circulareconomy.europa.eu/sites/all/themes/cecon_theme/images/events.jpg', 'alt': 'An image representing this event.', 'description': 'This field is for a description about the card. This needs to be a few lines long so I have made this placeholder text a bit wordy to account for that.', 'price': '20.00'},
	{'title': 'Card title', 'date': 'dd/mm/2022', 'img': 'https://circulareconomy.europa.eu/sites/all/themes/cecon_theme/images/events.jpg', 'alt': 'An image representing this event.', 'description': 'This field is for a description about the card. This needs to be a few lines long so I have made this placeholder text a bit wordy to account for that.', 'price': '20.00'}
];

const createCategory = ({ title, icon, alt }) => {
	const div = document.createElement('div');
	const img = document.createElement('img');
	const p = document.createElement('p');
	img.src = icon;
	img.alt = alt;
	img.classList.add('category-img');
	p.innerText = title;
	div.classList.add('category');
	
	div.append(img, p);
	return div;
}

const addCategories = () => {
	categories.forEach(value => categoryContainer.append(createCategory(value)));
}

burgerMenu.addEventListener('click', (e) => {
	menu.classList.toggle('hide-menu');
	menu.classList.toggle('show-menu');
	navBar.classList.toggle('darken-bg');
});
addCategories();




const createCard = ({ title, date, img, alt, description, price }) => {
	const card = document.createElement('div');
	const cardTitle = document.createElement('h2');
	const cardDate = document.createElement('p');
	const cardImg = document.createElement('img');
	const cardDescription = document.createElement('p');
	const cardPrice = document.createElement('p');

	// Adding classes
	card.classList.add('card');
	cardDate.classList.add('date');
	cardDescription.classList.add('description');
	cardPrice.classList.add('price');

	// Adding src + alt text for img:
	cardImg.src = img;
	cardImg.alt = alt;


	// Filling in text for elements
	cardTitle.innerText = title;
	cardDate.innerText = date;
	cardDescription.innerText = description;
	cardPrice.innerText = `Price: £${price}`;


	// Appending elements to their parents
	card.append(cardTitle, cardDate, cardImg, cardDescription, cardPrice);
	return card;
}

const addCards = () => {
	cardContent.forEach(content => cardsContainer.insertBefore(createCard(content), footer));
}

addCards();