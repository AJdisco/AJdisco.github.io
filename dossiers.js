document.addEventListener('DOMContentLoaded', () => {
    // Function to check for .txt files and display them in a list
    function fetchDossierFiles() {
        // Simulated example: Fetching the list of files
        // In a real scenario, you might fetch from a server or local directory
        const files = [
            { name: 'The Chimera', url: 'https://ajdisco.github.io/Chimera' },
            { name: 'The Lawbreaker', url: 'https://ajdisco.github.io/dossiers/active/lawbreaker' },
            { name: 'The Obstinate', url: 'https://ajdisco.github.io/obstinate' },
            { name: 'The Epitath', url: 'https://ajdisco.github.io/dossiers/active/epitaph' },
            { name: 'The Illusion', url: 'https://ajdisco.github.io/illusion' },
            { name: 'The Baker', url: 'https://ajdisco.github.io/baker' },
            { name: 'The Future', url: 'https://ajdisco.github.io/future' },
            { name: 'The Protectorate', url: 'https://ajdisco.github.io/protectorate' },
            { name: 'The Misdirected', url: 'https://ajdisco.github.io/misdirected' },
            { name: 'The Iconoclast', url: 'https://ajdisco.github.io/iconoclast' },
            { name: 'The Sinnerman', url: 'https://ajdisco.github.io/sinnerman' },
            { name: 'The Dessert', url: 'https://ajdisco.github.io/dessert' },
            { name: 'The Tiebreaker', url: 'https://ajdisco.github.io/tiebreaker' }
        ];

        const dossierList = document.querySelector('.dossier-list');
        const ul = document.createElement('ul');

        // Create a heading for "Active Council Members"
        const heading = document.createElement('h2');
        heading.textContent = 'Active Council Members';
        dossierList.appendChild(heading); // Add the heading at the top of the lists

        files.forEach((file, index) => {
            console.log('Index:', index);  // Check if the index is defined here
            const li = document.createElement('li');
            const a = document.createElement('a');
            
            a.textContent = file.name;
            a.href = file.url;

            // Add class for hover effect, only for invalid links
            if (file.name === 'The Lawbreaker') {
                // If it's a valid link, no hover effect
                a.classList.add('valid-link'); 
            } else {
                a.classList.add('access-denied-link'); // For "access denied" effect
            }

            li.style.animationDelay = `${index * 0.2}s`; // Each item delayed by 0.2 seconds
            
            li.appendChild(a);
            ul.appendChild(li);

            if (index === 0) {
                li.style.fontSize = '1.5em'; // Larger font size
                li.style.fontWeight = 'bold'; // Bold text
            }
        });

        dossierList.appendChild(ul);
    }

    fetchDossierFiles();

    // Handle hover effect for access-denied links
    document.querySelectorAll('.access-denied-link').forEach(link => {
        link.addEventListener('mouseover', function() {
            // Change the text when hovering
            this.textContent = 'Access Denied';
            this.classList.add('access-denied');
        });

        link.addEventListener('mouseout', function() {
            // Reset the text when hover ends
            this.textContent = this.getAttribute('data-original-text');
            this.classList.remove('access-denied');
        });

        // Save the original text for later restoration
        link.setAttribute('data-original-text', link.textContent);
    });
});
