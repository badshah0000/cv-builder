var form = document.getElementById("resume-form");
form.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Get form values
    var name = document.getElementById("name-input").value;
    var phone = document.getElementById("phone-input").value;
    var email = document.getElementById("email-input").value;
    var education = document.getElementById("education-input").value.split(",");
    var skills = document.getElementById("skills-input").value.split(",");
    var experience = document.getElementById("experience-input").value.split(",");
    var profilePictureFile = (_a = document.getElementById("profile-picture-input").files) === null || _a === void 0 ? void 0 : _a[0];
    // Save data to localStorage
    var reader = new FileReader();
    reader.onload = function () {
        var profilePicture = reader.result;
        localStorage.setItem("resumeData", JSON.stringify({ name: name, phone: phone, email: email, education: education, skills: skills, experience: experience, profilePicture: profilePicture }));
        // Open the new page with resume
        window.open("resume.html", "_blank");
    };
    if (profilePictureFile) {
        reader.readAsDataURL(profilePictureFile);
    }
    else {
        localStorage.setItem("resumeData", JSON.stringify({ name: name, phone: phone, email: email, education: education, skills: skills, experience: experience, profilePicture: null }));
        window.open("resume.html", "_blank");
    }
});
