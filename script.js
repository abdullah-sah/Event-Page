const main = document.querySelector('main');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const categoriesSection = document.querySelector('.categories');
const burgerMenu = document.querySelector('.burger');
const cardsContainer = document.querySelector('#cards-container');
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
	categories.forEach(value => menu.append(createCategory(value)));
}

burgerMenu.addEventListener('click', (e) => {
	menu.classList.toggle('hide-menu');
	menu.classList.toggle('show-menu');
	body.classList.toggle('grey-bg');
	body.classList.toggle('remove-grey-bg');
	cardsContainer.classList.toggle('grey-bg');
	cardsContainer.classList.toggle('remove-grey-bg');
});


addCategories();