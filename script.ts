const form = document.getElementById("resume-form") as HTMLFormElement;

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form values
  const name = (document.getElementById("name-input") as HTMLInputElement).value;
  const phone = (document.getElementById("phone-input") as HTMLInputElement).value;
  const email = (document.getElementById("email-input") as HTMLInputElement).value;
  const education = (document.getElementById("education-input") as HTMLInputElement).value.split(",");
  const skills = (document.getElementById("skills-input") as HTMLInputElement).value.split(",");
  const experience = (document.getElementById("experience-input") as HTMLInputElement).value.split(",");
  const profilePictureFile = (document.getElementById("profile-picture-input") as HTMLInputElement).files?.[0];

  // Save data to localStorage
  const reader = new FileReader();
  reader.onload = function() {
    const profilePicture = reader.result as string;
    localStorage.setItem("resumeData", JSON.stringify({ name, phone, email, education, skills, experience, profilePicture }));
    
    // Open the new page with resume
    window.open("resume.html", "_blank");
  };

  if (profilePictureFile) {
    reader.readAsDataURL(profilePictureFile);
  } else {
    localStorage.setItem("resumeData", JSON.stringify({ name, phone, email, education, skills, experience, profilePicture: null }));
    window.open("resume.html", "_blank");
  }
});




