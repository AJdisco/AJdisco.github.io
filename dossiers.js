document.addEventListener('DOMContentLoaded', () => {
    // Function to check for .txt files and display them in a list
    function fetchDossierFiles() {
        // Simulated example: Fetching the list of files
        // In a real scenario, you might fetch from a server or local directory
        const files = ['The lawbreaker', 'The Obstinate', 'The Epitath', 'The Illusion', 'The Baker', 'The Future', 'The Protectorate', 'The Misdirected', 'The Iconoclast', 'The Sinnerman', 'The Dessert', 'The Tiebreaker'];

        const dossierList = document.querySelector('.dossier-list');
        const ul = document.createElement('ul');

        files.forEach(file => {
            const li = document.createElement('li');
            li.textContent = file;
            ul.appendChild(li);
        });

        dossierList.appendChild(ul);
    }

    fetchDossierFiles();
});
