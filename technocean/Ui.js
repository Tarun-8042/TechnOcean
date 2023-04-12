const devProfile=document.getElementById("Dev-Profile");
const cpProfile=document.getElementById("cp-profile");
const aiMlProfile=document.getElementById("ai-ml-profile");
const cyberSecurityProfile=document.getElementById("cybersecurity-profile");


const devProfilePopUp=document.getElementById("dev-profile-popup");
const cpProfilePopUp=document.getElementById("cp-profile-popup");
const aiMlProfilePopUp=document.getElementById("ai-ml-profile-popup");
const cyberSecurityProfilePopUp=document.getElementById("cybersecurity-profile-popup");

devProfile.addEventListener("click",()=>{
    devProfilePopUp.style.display="block";
});

cpProfile.addEventListener("click",()=>{
    cpProfilePopUp.style.display="block";
});

aiMlProfile.addEventListener("click",()=>{
    aiMlProfilePopUp.style.display="block";
});

cyberSecurityProfile.addEventListener("click",()=>{
    cyberSecurityProfilePopUp.style.display="block";
});

