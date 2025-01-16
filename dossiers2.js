document.addEventListener('DOMContentLoaded', () => {
    // Data for Potential candidates and Deceased
    const potentialCandidates = [
        { name: 'The Cosmos', url: 'https://ajdisco.github.io/Cosmos' },
        { name: 'The Unknown', url: 'https://ajdisco.github.io/Unknown' },
        { name: 'The Lawbreaker', url: 'https://ajdisco.github.io/dossiers/incative-deceased/lawbreaker.html' },
         { name: 'The Epitath', url: 'https://ajdisco.github.io/dossiers/inactive-deceased/Epitaph.html'}
    ];

    const deceased = [
        { name: 'The Phylanx', url: 'https://ajdisco.github.io/phylanx' },
        { name: 'The Tiebreaker', url: 'https://ajdisco.github.io/Tiebreaker' }
    ];

    // Select the container for List 2
    const dossierList2 = document.querySelector('.list-2');

    // Create sections for "Potential candidates" and "Deceased"
    const potentialSection = document.createElement('div');
    const deceasedSection = document.createElement('div');

 files.forEach((file, index) => {
            console.log('Index:', index);  // Check if the index is defined here
            const li = document.createElement('li');
            const a = document.createElement('a');
            
            a.textContent = file.name;
            a.href = file.url;

            // Add class for hover effect, only for invalid links
            if (file.name === 'The Lawbreaker' || file.name === 'The Epitath') {
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
    // Create headings
    const potentialHeading = document.createElement('h2');
    potentialHeading.textContent = 'Potential Candidates';
    potentialSection.appendChild(potentialHeading);

    const deceasedHeading = document.createElement('h2');
    deceasedHeading.textContent = 'Deceased';
    deceasedSection.appendChild(deceasedHeading);

    // Create lists for each section
    const potentialList = document.createElement('ul');
    const deceasedList = document.createElement('ul');

    // Populate "Potential Candidates" list
    potentialCandidates.forEach((candidate) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = candidate.name;
        a.href = candidate.url;
        a.target = '_blank';
        a.classList.add('access-denied-link'); // Add class for hover effect
        li.appendChild(a);
        potentialList.appendChild(li);
    });

    // Populate "Deceased" list
    deceased.forEach((person) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = person.name;
        a.href = person.url;
        a.target = '_blank';
        a.classList.add('access-denied-link'); // Add class for hover effect
        li.appendChild(a);
        deceasedList.appendChild(li);
    });

    // Append the lists to their respective sections
    potentialSection.appendChild(potentialList);
    deceasedSection.appendChild(deceasedList);

    // Append the sections to the main list container
    dossierList2.appendChild(potentialSection);
    dossierList2.appendChild(deceasedSection);

    // Add event listener for hover effect on links
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
