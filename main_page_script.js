// Import and display research data
import research_info from "./research.json" with { type: 'json' };
console.log(research_info);

let global_id = 0;
let id_name = "research";

let content = document.getElementsByClassName("content")[0];
let searchInput = document.getElementById("search-input");
let searchBtn = document.getElementById("search-button");
let skillFilter = document.getElementById("skill-filter");
let depFilter = document.getElementById("department-filter");
let commitFilter = document.getElementById("commitment-filter");
let compenFilter = document.getElementById("compensation-filter"); 

function init() {
    // Initialization
    let str_html;
    for (let index in research_info) {
        str_html = research_card_html(
            id_name + global_id,
            research_info[index].title,
            research_info[index].department,
            research_info[index].skills,
            research_info[index].professor,
            research_info[index].compensation,
            research_info[index].commitment,
            research_info[index].description
        );
        global_id++;
        content.innerHTML += str_html;
    }
    attachExpandListeners();
    attachStarListeners();
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
                let iconElement = event.target.closest("button").querySelector(".material-icons");
                iconElement.innerText = "remove";
            } else {
                description.style.display = "none";
                // Change icon to "remove"
                let iconElement = event.target.closest("button").querySelector(".material-icons");
                iconElement.innerText = "add"; 
            }
        });
    });
}

function attachStarListeners() {
    let starButtons = document.querySelectorAll(".star-btn");
    starButtons.forEach((button)=> {
        button.addEventListener("click", (event) => {
            // Identify the corresponding description element
            let card = event.target.closest(".research-card");
            let star = card.querySelector(".star-icon");

            // // Toggle the description visibility
            if (star.style.color == "gold") {
                star.style.color = "white";
            } else {
                star.style.color = "gold";
            }
        });
    });
}

function research_card_html(id, title, department, skills, professor, compensation, commitment, description) {
    return `<div id="${id}" class="research-card">
                <div class="research-header">
                    <div class="research-title">${title}</div>
                    <div class="research-actions">
                        <a class="apply-text" href="appli.html"><button class="apply-btn">Apply</button></a>
                        <button class="icon-btn star-btn"><i class="material-icons star-icon">star</i></button>
                    </div>
                </div>
                <div class="research-details">
                    <div><span class="research-info">Department:</span> <span>${department}</span></div>
                    <div><span class="research-info">Skills:</span> <span>${skills}</span></div>
                    <div><span class="research-info">Professor:</span> <span>${professor} 
                        <a class="mail-text" href="student_messages.html"><button class="icon-btn email"><i class="material-icons mail-icon" style="font-size:1rem;">mail</i></button></a></span></div>
                    <div><span class="research-info">Compensation:</span> <span>${compensation}</span></div>
                    <div><span class="research-info">Commitment:</span> <span>${commitment}</span></div>
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

function filter() {
    let skill = skillFilter.options[skillFilter.selectedIndex].text;
    let department = depFilter.options[depFilter.selectedIndex].text;
    let commitment = commitFilter.options[commitFilter.selectedIndex].text;
    let compensation = compenFilter.options[compenFilter.selectedIndex].text;

    global_id = 0; // reset global_id
    id_name = "research";
    content.innerHTML = ""; // reset content

    let str_html;
    for (let index in research_info) {
        if ((skill !== "None") && (skill !== research_info[index].skills)) {
            continue; // Skip this since it is not the case
        }
        
        if ((department !== "None") && (department !== research_info[index].department)) {
            continue; // Skip this since it is not the case
        }

        if ((commitment !== "None") && (commitment !== research_info[index].commitment)) {
            continue; // Skip this since it is not the case
        }

        if ((compensation !== "None") && (compensation !== research_info[index].compensation)) {
            continue; // Skip this since it is not the case
        }

        str_html = research_card_html(
            id_name + global_id,
            research_info[index].title,
            research_info[index].department,
            research_info[index].skills,
            research_info[index].prereq,
            research_info[index].professor,
            research_info[index].office,
            research_info[index].date,
            research_info[index].compensation,
            research_info[index].commitment,
            research_info[index].description
        );
        global_id++;
        content.innerHTML += str_html;
    }
    attachExpandListeners();
    attachStarListeners();
}

// For now, it clears the input of the search
function search() {
    searchInput.value = "";
}

// Initialize the app
init();
searchBtn.addEventListener('click', search);
skillFilter.addEventListener('change', filter);
depFilter.addEventListener('change', filter);
commitFilter.addEventListener('change', filter);
compenFilter.addEventListener('change', filter);

