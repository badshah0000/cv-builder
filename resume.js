document.addEventListener("DOMContentLoaded", function () {
    var data = JSON.parse(localStorage.getItem("resumeData"));
    if (data) {
        document.getElementById("name-output").textContent = data.name;
        document.getElementById("contact-output").textContent = "Phone: ".concat(data.phone, " | Email: ").concat(data.email);
        var educationList_1 = document.getElementById("education-output");
        educationList_1.innerHTML = "";
        data.education.forEach(function (item) {
            var li = document.createElement("li");
            li.textContent = item.trim();
            educationList_1.appendChild(li);
        });
        var skillsList_1 = document.getElementById("skills-output");
        skillsList_1.innerHTML = "";
        data.skills.forEach(function (skill) {
            var li = document.createElement("li");
            li.textContent = skill.trim();
            skillsList_1.appendChild(li);
        });
        var experienceList_1 = document.getElementById("experience-output");
        experienceList_1.innerHTML = "";
        data.experience.forEach(function (item) {
            var li = document.createElement("li");
            li.textContent = item.trim();
            experienceList_1.appendChild(li);
        });
        var profilePicture = document.getElementById("profile-picture");
        if (data.profilePicture) {
            profilePicture.src = data.profilePicture;
        }
        else {
            profilePicture.src = "";
        }
    }
    var downloadBtn = document.getElementById("download-pdf");
    downloadBtn.addEventListener("click", function () {
        var jsPDF = window.jspdf.jsPDF;
        var doc = new jsPDF();
        doc.text(data.name, 10, 10);
        doc.text("Phone: ".concat(data.phone), 10, 20);
        doc.text("Email: ".concat(data.email), 10, 30);
        doc.text("Education", 10, 40);
        data.education.forEach(function (item, index) {
            doc.text("".concat(index + 1, ". ").concat(item), 10, 50 + index * 10);
        });
        doc.text("Skills", 10, 80);
        data.skills.forEach(function (skill, index) {
            doc.text("".concat(index + 1, ". ").concat(skill), 10, 90 + index * 10);
        });
        doc.text("Work Experience", 10, 120);
        data.experience.forEach(function (item, index) {
            doc.text("".concat(index + 1, ". ").concat(item), 10, 130 + index * 10);
        });
        doc.save("resume.pdf");
    });
});
