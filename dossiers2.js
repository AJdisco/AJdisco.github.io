document.addEventListener('DOMContentLoaded', () => {
    // Function to check for .txt files and display them in a list
    function fetchDossierFiles() {
        // Simulated example: Fetching the list of files
        // In a real scenario, you might fetch from a server or local directory
   const files = [
            { name: 'The Cosmos', url: 'https://ajdisco.github.io/lawbreaker' },
            { name: 'The Test', url: 'https://ajdisco.github.io/obstinate' },
            { name: 'The Test', url: 'https://ajdisco.github.io/epitaph' },
            { name: 'The Test', url: 'https://ajdisco.github.io/illusion' },
            { name: 'The Test', url: 'https://ajdisco.github.io/baker' },
            { name: 'The Test', url: 'https://ajdisco.github.io/future' },
            { name: 'The Test', url: 'https://ajdisco.github.io/protectorate' },
            { name: 'The Test', url: 'https://ajdisco.github.io/misdirected' },
            { name: 'The Test', url: 'https://ajdisco.github.io/iconoclast' },
            { name: 'The Test', url: 'https://ajdisco.github.io/sinnerman' },
            { name: 'The Test', url: 'https://ajdisco.github.io/dessert' },
            { name: 'The Test', url: 'https://ajdisco.github.io/tiebreaker' }
        ];
        const dossierList = document.querySelector('.dossier-list');
        const ul = document.createElement('ul');

        files.forEach((file, index) => {
            console.log('Index:', index);  // Check if the index is defined here
            const li = document.createElement('li');
            const a = document.createElement('a');
            
            a.textContent = file.name;
            a.href = file.url;
            a.target = '_blank';

            li.style.animationDelay = `${index * 0.2}s`; // Each item delayed by 0.2 seconds
            
            li.appendChild(a);
            ul.appendChild(li);
        });

        dossierList.appendChild(ul);
    }

    fetchDossierFiles();
});
