const imagePath = (name) => `pics/${name}`;

const portfolioItems = [
  { file: 'WhatsApp Image 2026-11-15 at 3.20.49 PM.jpeg', title: 'Vaccination Information', category: 'posters', label: 'Poster · Public health', year: '2025', alt: 'COVID-19 vaccination information poster' },
  { file: 'WhatsApp Image 2026-11-15 at 3.20.50 PM (1).jpeg', title: 'Save Earth', category: 'posters', label: 'Poster · Awareness campaign', year: '2025', alt: 'Save Earth poster design' },
  { file: 'WhatsApp Image 2026-11-15 at 3.20.50 PM.jpeg', title: 'Game Esport Competition', category: 'posters', label: 'Poster · Event campaign', year: '2025', alt: 'Game esports competition poster design' },
  { file: 'WhatsApp Image 2026-11-15 at 3.20.51 PM (1).jpeg', title: 'Maa Durga Mandal', category: 'posters', label: 'Poster · Cultural event', year: '2025', alt: 'Maa Durga Mandal cultural event poster' },
  { file: 'WhatsApp Image 2026-11-15 at 3.20.52 PM (2).jpeg', title: 'Mohabbatein', category: 'posters', label: 'Poster · Visual concept', year: '2025', alt: 'Mohabbatein poster with a rose' },
  { file: 'Nudge livelihood fund.jpg', title: 'Nudge Livelihood VC Fund', category: 'posters', label: 'Campaign · Social impact', year: '2025', alt: 'Nudge livelihood VC fund campaign poster' },
  { file: 'Gudi Padwa!.jpg', title: 'Gudi Padwa Celebration', category: 'posters', label: 'Poster · Festival campaign', year: '2025', alt: 'Gudi Padwa celebration design' },
  { file: 'Blue and Gold Modern Birthday Instagram Post.jpg', title: 'Seema Birthday', category: 'branding', label: 'Social · Birthday design', year: '2025', alt: 'Blue and gold birthday social media design' },
  { file: 'Blue Pink Green Minimal Flower Decorative Flag.jpg', title: 'Welcome', category: 'branding', label: 'Graphic · Decorative design', year: '2025', alt: 'Blue pink and green welcome floral design' },
  { file: 'WhatsApp Image 2026-11-15 at 3.20.51 PM (2).jpeg', title: 'Krisha Cooking', category: 'branding', label: 'Branding · Food design', year: '2025', alt: 'Krisha Cooking food branding design' },
  { file: 'WhatsApp Image 2026-11-15 at 3.20.51 PM.jpeg', title: 'Creative Collage', category: 'branding', label: 'Graphic · Collage design', year: '2025', alt: 'Creative collage graphic design' },
  { file: '1.jpg', title: 'Eximious Identity Study', category: 'branding', label: 'Branding · Identity study', year: '2026', alt: 'Eximious blue identity design study' },
  { file: '2.jpg', title: 'Green House Icon', category: 'branding', label: 'Graphic · 3D icon', year: '2026', alt: 'Green house and clock 3D icon design' },
  { file: 'Copy of Cream and Brown Illustrative Boho Housewarming Invitation.jpg', title: 'Griha Pravesh', category: 'invitations', label: 'Invitation · Housewarming', year: '2024', alt: 'Illustrated Griha Pravesh housewarming invitation' },
  { file: 'Cream and Brown Boho Housewarming Invitation.jpg', title: 'Our New Home', category: 'invitations', label: 'Invitation · Housewarming', year: '2024', alt: 'Cream and brown housewarming invitation' },
  { file: 'Pink Apartment Illustration Housewarming Party Invitation.jpg', title: 'Warm Our New Apartment', category: 'invitations', label: 'Invitation · Housewarming', year: '2024', alt: 'Pink illustrated apartment housewarming invitation' },
  { file: 'The Winslough Food Fair.jpg', title: 'Winslough Menu', category: 'invitations', label: 'Event design · Food fair', year: '2025', alt: 'Winslough Food Fair menu design' },
  { file: 'Josephine.jpg', title: 'Josephine', category: 'editorial', label: 'Editorial · Book cover', year: '2025', alt: 'Josephine book cover design' }
];

const categoryNames = { all: 'All work', posters: 'Posters & campaigns', branding: 'Branding & social', invitations: 'Invitations & events', editorial: 'Editorial & covers' };
document.querySelector('.note-index').textContent = 'END OF SELECTION · 18 / 18';
document.querySelector('.topbar nav a[href="#work"] span').textContent = '18';
document.title = 'Gauri Pal — Creative design portfolio';
document.querySelector('meta[name="description"]').content = 'Creative portfolio of Gauri Pal, featuring posters, branding, invitations, social designs and editorial covers.';
document.querySelector('.wordmark').firstChild.textContent = 'GP';
document.querySelector('.wordmark').setAttribute('aria-label', 'Gauri Pal home');
document.querySelector('.nav-contact').href = 'mailto:gauripal54@gmail.com';
document.querySelector('.nav-contact').firstChild.textContent = 'Email Gauri ';
document.querySelector('.about-mark > span').textContent = 'GP';
document.querySelector('.about-description').textContent = 'I’m Gauri Pal, a graphic designer creating expressive posters, thoughtful invitations, bold social designs and visuals that make every message feel memorable.';
document.querySelector('.about-copy .text-link').href = 'mailto:gauripal54@gmail.com';
document.querySelector('.about-copy .text-link').firstChild.textContent = 'gauripal54@gmail.com · 9930192378 ';
document.querySelector('.footer-title').href = 'mailto:gauripal54@gmail.com';
document.querySelector('.footer-meta p').textContent = 'Graphic designer · Gauri Pal';
document.querySelector('.footer-meta a[href^="mailto:"]').href = 'mailto:gauripal54@gmail.com';
document.querySelector('.footer-meta a[href^="mailto:"]').textContent = 'GAURIPAL54@GMAIL.COM';
document.querySelector('.footer-meta > span:last-child').textContent = 'CALL · 9930192378';
const portfolioFilters = document.querySelectorAll('.filter-button');
const grid = document.querySelector('.project-grid');
const portfolioDialog = document.querySelector('.project-dialog');
const portfolioDialogArt = portfolioDialog.querySelector('.dialog-art');
const portfolioCloseDialog = portfolioDialog.querySelector('.dialog-close');

portfolioFilters.forEach((button) => {
  const category = button.dataset.filter === 'all' ? 'all' : button.dataset.filter;
  button.dataset.filter = category;
  button.innerHTML = `${categoryNames[category]} <span>${category === 'all' ? portfolioItems.length : portfolioItems.filter((item) => item.category === category).length}</span>`;
});

grid.replaceChildren();
portfolioItems.forEach((item, index) => {
  const card = document.createElement('article');
  card.className = `project-card ${index % 4 === 0 ? 'card-large' : ''}`;
  card.dataset.category = item.category;
  card.innerHTML = `<button class="project-open" type="button" aria-label="View ${item.title} project"><div class="cover cover-image-card"><span class="cover-kicker">${item.label}</span><span class="cover-author">${item.title}</span><span class="cover-edition">${item.year}</span></div><span class="view-project">View project <span>↗</span></span></button><div class="project-meta"><div><h3>${item.title}</h3><p>${item.label}</p></div><span class="project-year">${item.year}</span></div>`;
  const artwork = document.createElement('img');
  artwork.className = 'cover-image';
  artwork.src = imagePath(item.file);
  artwork.alt = item.alt;
  card.querySelector('.cover').prepend(artwork);
  grid.append(card);
});

const heroImages = [
  ['WhatsApp Image 2026-11-15 at 3.20.50 PM (1).jpeg', 'Save Earth poster design'],
  ['WhatsApp Image 2026-11-15 at 3.20.52 PM (2).jpeg', 'Mohabbatein poster design'],
  ['WhatsApp Image 2026-11-15 at 3.20.50 PM.jpeg', 'Game esports poster design']
];

document.querySelectorAll('.hero-book').forEach((book, index) => {
  const artwork = document.createElement('img');
  artwork.className = 'hero-image';
  artwork.src = imagePath(heroImages[index][0]);
  artwork.alt = heroImages[index][1];
  book.replaceChildren(artwork);
});

const portfolioCards = [...grid.querySelectorAll('.project-card')];
portfolioFilters.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    portfolioFilters.forEach((filter) => {
      const selected = filter === button;
      filter.classList.toggle('is-active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    portfolioCards.forEach((card) => card.classList.toggle('is-hidden', category !== 'all' && card.dataset.category !== category));
  });
});

document.querySelectorAll('.project-open').forEach((button, index) => {
  button.addEventListener('click', () => {
    const item = portfolioItems[index];
    portfolioDialogArt.replaceChildren(button.querySelector('.cover').cloneNode(true));
    portfolioDialog.querySelector('#dialog-title').textContent = item.title;
    portfolioDialog.querySelector('.dialog-category').textContent = item.label;
    portfolioDialog.querySelector('.dialog-description').textContent = `A ${item.category} project focused on clear communication, expressive visuals and thoughtful design details.`;
    portfolioDialog.showModal();
  });
});

portfolioCloseDialog.addEventListener('click', () => portfolioDialog.close());
portfolioDialog.addEventListener('click', (event) => {
  if (event.target === portfolioDialog) portfolioDialog.close();
});
