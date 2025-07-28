# Dynamic GitHub Profile README

This repository uses JSON data to dynamically generate the README.md file, making it easy to maintain and update your skills and expertise levels.

## 📁 File Structure

```
├── README.md              # Your GitHub profile (auto-generated)
├── skills.json           # Your skills data (edit this!)
├── update-readme.js      # Script to generate README from JSON
├── add-skill.js          # Interactive script to add new skills
├── package.json          # NPM configuration
└── .github/workflows/
    └── update-readme.yml # GitHub Action for auto-updates
```

## 🚀 How It Works

1. **skills.json** - Contains all your skills data with proficiency levels
2. **update-readme.js** - Reads the JSON and generates the README
3. **GitHub Actions** - Automatically updates README when JSON changes

## 🛠️ Usage

### Update Your Skills
1. Edit `skills.json` to add/modify/remove skills
2. Run: `npm run update-readme`
3. Commit and push changes

### Add New Skills Interactively
```bash
npm run add-skill
```

### Available Categories
- `languages` - Programming languages
- `frontend` - Frontend technologies  
- `backend` - Backend frameworks/tools
- `database` - Database technologies
- `tools` - Development tools and others

### Proficiency Levels
- 1 ⭐ **Beginner**: Basic understanding and usage
- 2 ⭐⭐ **Novice**: Can work with guidance  
- 3 ⭐⭐⭐ **Intermediate**: Comfortable working independently
- 4 ⭐⭐⭐⭐ **Advanced**: Strong expertise and problem-solving ability
- 5 ⭐⭐⭐⭐⭐ **Expert**: Deep knowledge and can mentor others

## 🤖 Auto-Updates

The GitHub Action automatically:
- Monitors changes to `skills.json`
- Regenerates README.md
- Commits and pushes the updated README

## 📝 Manual Commands

```bash
# Update README from JSON
npm run update-readme

# Add a new skill interactively
npm run add-skill
```

## 🎨 Customization

### Adding New Sections
1. Edit `update-readme.js`
2. Add new functions to generate content
3. Update the JSON structure in `skills.json`

### Changing Badge Styles
Update the badge URLs in `skills.json`. Get new badges from [shields.io](https://shields.io/).

### Modifying the Template
Edit the `generateTechStackSection()` function in `update-readme.js` to change the layout and formatting.

## 🔧 Benefits

✅ **Easy Maintenance**: Update skills in one JSON file  
✅ **Consistent Formatting**: Automated generation ensures consistency  
✅ **Version Control**: Track changes to your skills over time  
✅ **Automated Updates**: GitHub Actions handle the README updates  
✅ **Extensible**: Easy to add new categories and data types  

## 📚 Example JSON Structure

```json
{
  "languages": [
    {
      "name": "Python",
      "proficiency": 5,
      "level": "Expert", 
      "badge": "https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white"
    }
  ]
}
```

## Reference Profile Links
- https://github.com/sriharikapu
- https://github.com/coderjojo/creative-profile-readme?tab=readme-ov-file

Now you can manage your GitHub profile like a pro! 🎉
