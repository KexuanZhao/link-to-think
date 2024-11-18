// Import and display research data
import research_info from "./research.json" with { type: 'json' };
console.log(research_info);

let global_id = 0;
let id_name = "research";

let content = document.getElementsByClassName("content")[0];

function init() {
    // Initialization
    let str_html;
    for (let index in research_info) {
        str_html = research_card_html(
            id_name + global_id,
            research_info[index].title,
            research_info[index].department,
            research_info[index].skills,
            research_info[index].prereq,
            research_info[index].professor,
            research_info[index].office,
            research_info[index].date,
            research_info[index].description
        );
        global_id++;
        content.innerHTML += str_html;
    }
    attachExpandListeners();
}

function attachExpandListeners() {
    // Get all expand buttons
    // Source Cited: https://www.w3schools.com/jsref/met_document_queryselectorall.asp
    let expandButtons = document.querySelectorAll(".expand-icon");
    expandButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            // Identify the corresponding description element
            let card = event.target.closest(".research-card");
            let description = card.querySelector(".research-description");

            // Toggle the description visibility
            if (description.style.display === "none" || description.style.display === "") {
                description.style.display = "block";
                // Change icon to "remove"
                const iconElement = event.target.closest("button").querySelector(".material-icons");
                iconElement.innerText = "remove";
            } else {
                description.style.display = "none";
                // Change icon to "remove"
                const iconElement = event.target.closest("button").querySelector(".material-icons");
                iconElement.innerText = "add"; 
            }
        });
    });
}

function research_card_html(id, title, department, skills, prereq, professor, office, date, description) {
    return `<div id="${id}" class="research-card">
                <div class="research-header">
                    <div class="research-title">${title}</div>
                    <div class="research-actions">
                        <button class="apply-btn">Apply</button>
                        <button class="icon-btn"><i class="material-icons star-icon">star</i></button>
                    </div>
                </div>
                <div class="research-details">
                    <div><span class="research-info">Department:</span> <span>${department}</span></div>
                    <div><span class="research-info">Skills:</span> <span>${skills}</span></div>
                    <div><span class="research-info">Pre-requisite:</span> <span>${prereq}</span></div>
                    <div><span class="research-info">Professor:</span> <span>${professor} 
                        <button class="icon-btn email"><i class="material-icons mail-icon" style="font-size:1rem;">mail</i></button></span></div>
                    <div><span class="research-info">Office Location:</span> <span>${office}</span></div>
                    <div><span class="research-info">Date posted:</span> <span>${date}</span></div>
                </div>                
                <div id="${id}-description" class="research-description" style="display: none;">
                    ${description}
                </div>
                <div class="expand-btn">
                    <button class="icon-btn expand-icon">
                        <i class="material-icons" style="font-size:1.5rem;">add</i>
                    </button>
                </div>
            </div>`;
}

// Initialize the app
init();
