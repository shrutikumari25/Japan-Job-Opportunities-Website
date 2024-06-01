// Sample job data (replace this with your actual job data)
const jobListings = [
    { company: 'Company A', position: 'Software Engineer', location: 'New York' },
    { company: 'Company B', position: 'Marketing Manager', location: 'Los Angeles' },
    { company: 'Company C', position: 'Graphic Designer', location: 'Chicago' },
    // Add more job listings as needed...
];

// Function to create job listing blocks
// function createJobListingBlock(job) {
//     const jobListingDiv = document.createElement('div');
//     jobListingDiv.classList.add('jobListing');
//     jobListingDiv.innerHTML = `
//         <h3>${job.company}</h3>
//         <p>${job.position}</p>
//         <p>${job.location}</p>
//     `;
//     return jobListingDiv;
// }

function createJobListingBlock(job) {
    const jobListingDiv = document.createElement('div');
    jobListingDiv.classList.add('jobListing');

    // Create elements for company, position, and location
    const companyDiv = document.createElement('div');
    const detailsDiv = document.createElement('div');

    // Set classes for styling
    companyDiv.classList.add('company');
    detailsDiv.classList.add('details');

    // Set inner HTML content
    companyDiv.innerHTML = `<h3>${job.company}</h3>`;
    detailsDiv.innerHTML = `
        <p><strong>Position:</strong> ${job.position}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <button class="apply-now">Apply Now</button>
    `;

    // Append elements to jobListingDiv
    jobListingDiv.appendChild(companyDiv);
    jobListingDiv.appendChild(detailsDiv);
    // const applyButton = document.createElement('button');
    // applyButton.textContent = 'Apply Now';
    // applyButton.classList.add('apply-button');
    // jobListingDiv.appendChild(applyButton);
   
    return jobListingDiv;
}


// Function to display job listings
function displayJobListings() {
    const jobListingsContainer = document.getElementById('jobListingsContainer');
    jobListingsContainer.innerHTML = ''; // Clear existing listings

    jobListings.forEach(job => {
        const jobListingBlock = createJobListingBlock(job);
        jobListingsContainer.appendChild(jobListingBlock);
    });
}

// Display job listings when the page loads
document.addEventListener('DOMContentLoaded', displayJobListings);
