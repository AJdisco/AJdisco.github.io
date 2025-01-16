document.addEventListener('DOMContentLoaded', () => {
    // Data for Potential candidates and Deceased
    const potentialCandidates = [
        { name: 'The Cosmos', url: 'https://ajdisco.github.io/Cosmos' },
        { name: 'The Unknown', url: 'https://ajdisco.github.io/Unknown' },
        { name: 'The Lawbreaker', url: 'https://ajdisco.github.io/dossiers/inactive-deceased/lawbreaker.html' },
        { name: 'The Epitath', url: 'https://ajdisco.github.io/dossiers/inactive-deceased/Epitaph.html' }
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

        // Add hover effect only for invalid links
        if (candidate.name === 'The Lawbreaker' || candidate.name === 'The Epitath') {
            a.classList.add('valid-link'); // Valid links
        } else {
            a.classList.add('access-denied-link'); // Invalid links
        }

        // Save the original text for hover restoration
        a.setAttribute('data-original-text', candidate.name);

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

        // All links in "Deceased" are considered invalid
        a.classList.add('access-denied-link');

        // Save the original text for hover restoration
        a.setAttribute('data-original-text', person.name);

        li.appendChild(a);
        deceasedList.appendChild(li);
    });

    // Append the lists to their respective sections
    potentialSection.appendChild(potentialList);
    deceasedSection.appendChild(deceasedList);

    // Append the sections to the main list container
    dossierList2.appendChild(potentialSection);
    dossierList2.appendChild(deceasedSection);

    // Add event listener for hover effect on invalid links
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
    });
});
