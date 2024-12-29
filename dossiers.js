document.addEventListener('DOMContentLoaded', () => {
    // Function to check for .txt files and display them in a list
    function fetchDossierFiles() {
        // Simulated example: Fetching the list of files
        // In a real scenario, you might fetch from a server or local directory
        const files = ['The lawbreaker.txt', 'The Obstinate.txt', 'The Epitath.txt', 'The Illusion.txt', 'The Baker.txt', 'The Future.txt', 'The Protectorate.txt', 'The Misdirected.txt', 'The Iconoclast.txt', 'The Sinnerman.txt', 'The Dessert.txt', 'The Tiebreaker.txt'];

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
