// Import and display research data
import student_info from "./student.json" with { type: 'json' };
console.log(student_info);

let global_id = 0;
let id_name = "research";

let content = document.getElementsByClassName("content")[0];
let searchInput = document.getElementById("search-input");
let searchBtn = document.getElementById("search-button");
let skillFilter = document.getElementById("skill-filter");
let majorFilter = document.getElementById("major-filter");
let periodFilter = document.getElementById("period-filter");
let yearFilter = document.getElementById("year-filter"); 

function init() {
    // Initialization
    let str_html;
    for (let index in student_info) {
        str_html = research_card_html(
            id_name + global_id,
            student_info[index].name,
            student_info[index].year,
            student_info[index].major,
            student_info[index].skill,
            student_info[index].period,
            student_info[index].description
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

function research_card_html(id, name, year, major, skills, period, description) {
    return `<div id="${id}" class="research-card">
                <div class="research-header">
                    <div class="research-title">${name}<a class="mail-text" href="professor_messages.html"><button class="icon-btn email"><i class="material-icons mail-icon" style="font-size:1rem;">mail</i></button></a></div>
                    <div class="research-actions">
                        <button class="icon-btn star-btn"><i class="material-icons star-icon">star</i></button>
                    </div>
                </div>
                <div class="research-details">
                    <div><span class="research-info">Year:</span> <span>${year}</span></div>
                    <div><span class="research-info">Major:</span> <span>${major}</span></div>
                    <div><span class="research-info">Skills:</span> <span>${skills}</span></div>
                    <div><span class="research-info">Period:</span> <span>${period}</span></div>
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
    let major = majorFilter.options[majorFilter.selectedIndex].text;
    let period = periodFilter.options[periodFilter.selectedIndex].text;
    let year = yearFilter.options[yearFilter.selectedIndex].text;

    global_id = 0; // reset global_id
    id_name = "research";
    content.innerHTML = ""; // reset content

    let str_html;
    for (let index in student_info) {
        if ((skill !== "None") && (skill !== student_info[index].skill)) {
            continue; // Skip this since it is not the case
        }
        
        if ((major !== "None") && (major !== student_info[index].major)) {
            continue; // Skip this since it is not the case
        }

        if ((period !== "None") && (period !== student_info[index].period)) {
            continue; // Skip this since it is not the case
        }

        if ((year !== "None") && (year !== student_info[index].year)) {
            continue; // Skip this since it is not the case
        }

        str_html = research_card_html(
            id_name + global_id,
            student_info[index].name,
            student_info[index].year,
            student_info[index].major,
            student_info[index].skill,
            student_info[index].period,
            student_info[index].description
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
majorFilter.addEventListener('change', filter);
yearFilter.addEventListener('change', filter);
periodFilter.addEventListener('change', filter);

