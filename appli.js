let saveBtn = document.getElementById("save-progress");
let submitBtn = document.getElementById("submit-application");
let progressInfo = document.getElementById("progress-info");
let submissionModal = document.getElementById("submission-modal");
let closeSubmissionModalBtn = document.getElementById("close-submission-modal");
let progressModal = document.getElementById("progress-modal");
let closeProgressModalBtn = document.getElementById("close-progress-modal");

saveBtn.addEventListener("click", function() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const time = `${hours}:${minutes}`;
    progressInfo.textContent = `Progress saved at ${time}`;
    progressModal.style.display = "block"
});

// hide the progress modal when hittintg "close"
closeProgressModalBtn.addEventListener("click", function() {
    progressModal.style.display = "none";
});

// display the submission modal when hittintg "submit"
submitBtn.addEventListener("click", function() {
    submissionModal.style.display = "block";
});

// hide the modal and go back to the student main page when hitting "close"
closeSubmissionModalBtn.addEventListener("click", function() {
    submissionModal.style.display = "none"; 
});

// if the user clicks outside of the modal, just hide it
window.addEventListener("click", function(event) {
    if (event.target === submissionModal) {
        submissionModal.style.display = "none";
    }
    if (event.target === progressModal) {
        progressModal.style.display = "none";
    }
});
