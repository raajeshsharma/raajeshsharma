const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt user for input
function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function addSkill() {
  try {
    console.log('🚀 Add a new skill to your profile!\n');
    
    const category = await prompt('Category (languages/frontend/backend/database/tools): ');
    const name = await prompt('Technology name: ');
    const proficiency = parseInt(await prompt('Proficiency level (1-5): '));
    
    const levels = ['', 'Beginner', 'Novice', 'Intermediate', 'Advanced', 'Expert'];
    const level = levels[proficiency];
    
    const badge = await prompt('Badge URL (from shields.io): ');
    
    // Read current skills
    const skillsData = JSON.parse(fs.readFileSync('skills.json', 'utf8'));
    
    // Add new skill
    const newSkill = {
      name,
      proficiency,
      level,
      badge
    };
    
    if (skillsData[category]) {
      skillsData[category].push(newSkill);
      
      // Write updated skills
      fs.writeFileSync('skills.json', JSON.stringify(skillsData, null, 2));
      
      console.log(`\n✅ Added ${name} to ${category} with ${proficiency} stars (${level})!`);
      console.log('Run "npm run update-readme" to update your README.md');
    } else {
      console.log(`❌ Invalid category. Use: languages, frontend, backend, database, or tools`);
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    rl.close();
  }
}

addSkill();
