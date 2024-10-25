// Array with featured speakers information
const speakers = [
    {
        name: 'Yochai Benkler',
        title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        img: 'https://via.placeholder.com/80',
        description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.'
    },
    {
        name: 'SohYeong Noh',
        title: 'Director of Art Centre Nabi and a board member of CC Korea',
        img: 'https://via.placeholder.com/80',
        description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding.'
    }
];

// Function to dynamically load speakers
window.onload = function() {
    const speakersList = document.getElementById('speakers-list');

    speakers.forEach(speaker => {
        const speakerItem = document.createElement('div');
        speakerItem.classList.add('speaker-item');
        
        speakerItem.innerHTML = `
            <img src="${speaker.img}" alt="${speaker.name}">
            <div>
                <h3>${speaker.name}</h3>
                <p>${speaker.title}</p>
                <p>${speaker.description}</p>
            </div>
        `;
        
        speakersList.appendChild(speakerItem);
    });
};
