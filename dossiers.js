document.addEventListener('DOMContentLoaded', () => {
    // Function to check for .txt files and display them in a list
    function fetchDossierFiles() {
        // Simulated example: Fetching the list of files
        // In a real scenario, you might fetch from a server or local directory
   const files = [
            { name: 'The lawbreaker.txt', url: 'https://ajdisco.github.io/lawbreaker' },
            { name: 'The Obstinate.txt', url: 'https://ajdisco.github.io/obstinate' },
            { name: 'The Epitath.txt', url: 'https://ajdisco.github.io/epitaph' },
            { name: 'The Illusion.txt', url: 'https://ajdisco.github.io/illusion' },
            { name: 'The Baker.txt', url: 'https://ajdisco.github.io/baker' },
            { name: 'The Future.txt', url: 'https://ajdisco.github.io/future' },
            { name: 'The Protectorate.txt', url: 'https://ajdisco.github.io/protectorate' },
            { name: 'The Misdirected.txt', url: 'https://ajdisco.github.io/misdirected' },
            { name: 'The Iconoclast.txt', url: 'https://ajdisco.github.io/iconoclast' },
            { name: 'The Sinnerman.txt', url: 'https://ajdisco.github.io/sinnerman' },
            { name: 'The Dessert.txt', url: 'https://ajdisco.github.io/dessert' },
            { name: 'The Tiebreaker.txt', url: 'https://ajdisco.github.io/tiebreaker' }
        ];
        const dossierList = document.querySelector('.dossier-list');
        const ul = document.createElement('ul');

        files.forEach(file => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            
            a.textContent = file.name;
            a.href = file.url;

              li.style.animationDelay = `${index * 0.2}s`; // Each item delayed by 0.2 seconds
            
            li.appendChild(a);
            ul.appendChild(li);
        });

        dossierList.appendChild(ul);
    }

    fetchDossierFiles();
});
