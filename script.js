const filters = document.querySelectorAll('.filter-button');
const cards = document.querySelectorAll('.project-card');

const portfolioImages = {
  quiet: ['WhatsApp Image 2026-11-15 at 3.20.49 PM.jpeg', 'COVID-19 vaccination information poster'],
  soft: ['WhatsApp Image 2026-11-15 at 3.20.51 PM (2).jpeg', 'Krisha Cooking food branding poster'],
  elsewhere: ['WhatsApp Image 2026-11-15 at 3.20.51 PM.jpeg', 'Creative collage poster design'],
  city: ['WhatsApp Image 2026-11-15 at 3.20.53 PM.jpeg', 'Josephine digital book cover design']
};

document.querySelectorAll('.project-open').forEach((button) => {
  const image = portfolioImages[button.dataset.project];
  const cover = button.querySelector('.cover');
  const artwork = document.createElement('img');
  artwork.className = 'cover-image';
  artwork.src = `pics/${image[0]}`;
  artwork.alt = image[1];
  cover.replaceChildren(artwork);
});

const heroImages = [
  ['WhatsApp Image 2026-11-15 at 3.20.50 PM (1).jpeg', 'Save Earth poster design'],
  ['WhatsApp Image 2026-11-15 at 3.20.52 PM (2).jpeg', 'Mohabbatein poster design'],
  ['WhatsApp Image 2026-11-15 at 3.20.50 PM.jpeg', 'Game esports poster design']
];

document.querySelectorAll('.hero-book').forEach((book, index) => {
  const artwork = document.createElement('img');
  artwork.className = 'hero-image';
  artwork.src = `pics/${heroImages[index][0]}`;
  artwork.alt = heroImages[index][1];
  book.replaceChildren(artwork);
});

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach((filter) => {
      const selected = filter === button;
      filter.classList.toggle('is-active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    cards.forEach((card) => {
      card.classList.toggle('is-hidden', category !== 'all' && card.dataset.category !== category);
    });
  });
});

const projects = {
  quiet: {
    title: 'The Quiet Between',
    category: 'Fiction · Self-initiated cover concept · 2025',
    description: 'A contemplative novel about the words we leave unsaid. A warm, low horizon and a moon caught between day and night give this quiet story room to breathe.'
  },
  soft: {
    title: 'Soft Edges',
    category: 'Poetry · Self-initiated cover concept · 2025',
    description: 'A poetry collection about finding softness in the in-between. Concentric forms, a tactile palette and an unguarded title echo the collection’s gentle rhythm.'
  },
  elsewhere: {
    title: 'Elsewhere, Slowly',
    category: 'Non-fiction · Self-initiated cover concept · 2026',
    description: 'A personal guide to moving through the world with more attention. Layered landscapes and a setting sun make the cover feel like the last light on a long walk.'
  },
  city: {
    title: 'A City of Small Wonders',
    category: 'Fiction · Self-initiated cover concept · 2026',
    description: 'A collection of stories about finding magic in the everyday. Bright windows and closely packed buildings turn an ordinary city block into a place full of possibility.'
  }
};

const dialog = document.querySelector('.project-dialog');
const dialogArt = dialog.querySelector('.dialog-art');
const closeDialog = dialog.querySelector('.dialog-close');

document.querySelectorAll('.project-open').forEach((button) => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    dialogArt.replaceChildren(button.querySelector('.cover').cloneNode(true));
    dialog.querySelector('#dialog-title').textContent = project.title;
    dialog.querySelector('.dialog-category').textContent = project.category;
    dialog.querySelector('.dialog-description').textContent = project.description;
    dialog.showModal();
  });
});

closeDialog.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
