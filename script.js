
/* Matrix Background */

const canvas=document.getElementById("matrix");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const letters="01";
const matrix=letters.split("");

const fontSize=14;
const columns=canvas.width/fontSize;
const drops=[];

for(let x=0;x<columns;x++) drops[x]=1;

function drawMatrix(){
ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#0F0";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){
const text=matrix[Math.floor(Math.random()*matrix.length)];
ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
drops[i]=0;

drops[i]++;
}
}

setInterval(drawMatrix,33);


/* Projects Display */

const projects = [
  {
    name: "QR Code Generator",
    description: "A lightweight Python-based command-line tool that generates high-quality QR code images from any input text/URL and saves them as PNG files with customizable filenames and size. The tool produces clean, scannable QR codes that can be used for websites, events, documents, posters, or digital sharing, enabling quick access to information through a single scan.",
    url: "https://github.com/Shubham3438/QR-Code-Generator-Python",
    tech: "Python",
    date: "Jun 2025 – Jul 2025"
  },
  {
    name: "Password Generator",
    description: "A Python script that takes password length as input and instantly creates a fully random, secure password using a mix of characters. The program successfully generates strong, unpredictable passwords, improving user security and reducing the risk of weak-password attacks.",
    url: "https://github.com/Shubham3438/Password-Generator-Python-",
    tech: "Python",
    date: "Aug 2023 – Sep 2023"
  }
];

const container=document.getElementById("githubProjects");

projects.forEach(project=>{
  const div=document.createElement("div");
  div.className="card";
  div.innerHTML=`<h3>${project.name}</h3>
  <p><small>${project.tech} | ${project.date}</small></p>
  <p>${project.description}</p>
  <a href="${project.url}" target="_blank">View Project</a>`;
  container.appendChild(div);
});


/* Training Popup */

function openTraining(){
document.getElementById("modalContent").innerHTML=
`<p>
Library Management System Training<br><br>
✔ Book Management<br>
✔ Student Records<br>
✔ Issue/Return Tracking<br>
✔ File Handling<br>
✔ OOP Concepts<br>
</p>`;

document.getElementById("modal").style.display="block";
}


/* Certificates Display */

const certificates = [
  {
    name: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    date: "Oct – 2025"
  },
  {
    name: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    issuer: "Infosys",
    date: "Aug – 2025"
  },
  {
    name: "Build Generative AI Apps and Solutions with No-Code Tools",
    issuer: "Infosys",
    date: "Aug – 2025"
  },
  {
    name: "Master Generative AI & Generative AI tools (ChatGPT & more)",
    issuer: "Infosys",
    date: "Aug – 2025"
  }
];

const certContainer=document.getElementById("certificatesContainer");
const certLink="https://drive.google.com/drive/folders/1lR1rgp4fj7x6Q_3pt6jb4QwGsssD-iRw";

certificates.forEach(cert=>{
  const div=document.createElement("div");
  div.className="card";
  div.style.cursor="pointer";
  div.innerHTML=`<h3>${cert.name}</h3>
  <p><small>${cert.issuer} | ${cert.date}</small></p>`;
  div.onclick=()=>{
    window.open(certLink, "_blank");
  };
  certContainer.appendChild(div);
});


/* Certificate Preview */

function previewCert(img){
document.getElementById("modalContent").innerHTML=
`<img src="${img.src}">`;

document.getElementById("modal").style.display="block";
}

function closeModal(){
document.getElementById("modal").style.display="none";
}


/* Extracurricular Activities Display */

const activities = [
  "Took part in DU Hack 3.0 Hackathon, where I worked closely with my team to brainstorm, build, and present a creative tech solution within a limited time.",
  "Contributed to HackWithVertos 2024 by capturing key moments of the hackathon through creative and high-quality photography.",
  "Volunteered with a local NGO and participated in community tree-plantation drives to support environmental sustainability.",
  "Solved 60+ problems on LeetCode."
];

const activitiesContainer=document.getElementById("activitiesContainer");
let activitiesHTML="";

activities.forEach(activity=>{
  activitiesHTML+=`<p>• ${activity}</p>`;
});

activitiesContainer.innerHTML=activitiesHTML;


/* Education Display */

const educationData = {
  university: {
    institution: "Lovely Professional University",
    degree: "B.Tech CSE",
    specialization: "Cybersecurity",
    period: "August 2023",
    cgpa: "6.35"
  },
  intermediate: {
    percentage: "70.8%"
  },
  matriculation: {
    percentage: "74.2%"
  }
};

const educationContainer=document.getElementById("educationContainer");
const div=document.createElement("div");
div.className="card";
div.innerHTML=`
  <p><strong>${educationData.university.institution} – ${educationData.university.degree} (${educationData.university.specialization})</strong></p>
  <p>CGPA: ${educationData.university.cgpa} | ${educationData.university.period}</p>
  <p>Intermediate: ${educationData.intermediate.percentage} | Matriculation: ${educationData.matriculation.percentage}</p>
`;
educationContainer.appendChild(div);


/* Footer Contact Information */

const contactInfo = [
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/shubham3438/",
    icon: "🔗"
  },
  {
    label: "Email",
    value: "shubhamkishor3438@gmail.com",
    icon: "✉️"
  },
  {
    label: "GitHub",
    value: "https://github.com/Shubham3438",
    icon: "🐙"
  },
  {
    label: "Mobile",
    value: "+91 8521101757",
    icon: "📱"
  }
];

const footerContent=document.getElementById("footerContent");

contactInfo.forEach(info=>{
  const div=document.createElement("div");
  div.className="card";
  div.style.display="flex";
  div.style.alignItems="center";
  div.style.justifyContent="center";
  div.style.flexDirection="column";
  div.style.textAlign="center";
  div.style.padding="20px";
  div.style.gap="10px";
  
  let content="";
  if(info.value.startsWith("http")){
    content=`<span style="font-size:24px;">${info.icon}</span><a href="${info.value}" target="_blank" style="text-decoration:none; color:#0F0;">${info.label}</a>`;
  } else if(info.label === "Email"){
    content=`<span style="font-size:24px;">${info.icon}</span><a href="mailto:${info.value}" style="text-decoration:none; color:#0F0;">${info.label}</a>`;
  } else {
    content=`<span style="font-size:24px;">${info.icon}</span><span>${info.value}</span>`;
  }
  
  div.innerHTML=content;
  footerContent.appendChild(div);
});
