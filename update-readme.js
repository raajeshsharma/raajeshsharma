const fs = require('fs');
const path = require('path');

// Read the skills JSON file
const skillsData = JSON.parse(fs.readFileSync('skills.json', 'utf8'));

// Function to generate star rating
function generateStars(proficiency) {
  return '⭐'.repeat(proficiency);
}

// Function to generate skill table
function generateSkillTable(skills, title) {
  let table = `### ${title}\n`;

  skills.forEach(skill => {
    table += `![${skill.name}](${skill.badge}) \n`;
  });
  
  return table + '\n';
}

// Generate the complete tech stack section
function generateTechStackSection() {
  let content = '## Tech Stack\n\n';
  
  content += generateSkillTable(skillsData.languages, 'Languages');
  content += generateSkillTable(skillsData.frontend, 'Frontend Development');
  content += generateSkillTable(skillsData.backend, 'Backend Development');
  content += generateSkillTable(skillsData.database, 'Database Technologies');
  content += generateSkillTable(skillsData.tools, 'Development Tools & Others');
  content += generateSkillTable(skillsData.cloud, 'Cloud Technologies');

  return content;
}

// Read the current README
let readmeContent = fs.readFileSync('README.md', 'utf8');

// Find the tech stack section and replace it
// Find the tech stack section and replace it
const techStackHeading = '## 🛠️ Tech Stack';
const techStackStart = readmeContent.indexOf(techStackHeading);
let nextSectionStart = -1;
if (techStackStart !== -1) {
  // Find the next heading after tech stack
  const afterTechStack = readmeContent.slice(techStackStart + techStackHeading.length);
  const match = afterTechStack.match(/\n## [^\n]*/);
  if (match) {
    nextSectionStart = techStackStart + techStackHeading.length + match.index;
  } else {
    nextSectionStart = readmeContent.length;
  }
}

if (techStackStart !== -1) {
  const beforeTechStack = readmeContent.substring(0, techStackStart);
  const afterTechStackSection = readmeContent.substring(nextSectionStart);
  const newTechStack = generateTechStackSection();
  const newReadmeContent = beforeTechStack + newTechStack + afterTechStackSection;
  // Write the updated README
  fs.writeFileSync('README.md', newReadmeContent);
  console.log('✅ README.md updated successfully with data from skills.json!');
} else {
  console.log('❌ Could not find the tech stack section to replace.');
  console.log('Tech Stack found:', techStackStart !== -1);
}