document.addEventListener('DOMContentLoaded', () => {
    // Data for Potential candidates and Deceased
    const potentialCandidates = [
        { name: 'The Cosmos', url: 'https://ajdisco.github.io/Cosmos' },
        { name: 'The Unknwon', url: 'https://ajdisco.github.io/Unknown' }
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
        li.appendChild(a);
        deceasedList.appendChild(li);
    });

    // Append the lists to their respective sections
    potentialSection.appendChild(potentialList);
    deceasedSection.appendChild(deceasedList);

    // Append the sections to the main list container
    dossierList2.appendChild(potentialSection);
    dossierList2.appendChild(deceasedSection);
});
