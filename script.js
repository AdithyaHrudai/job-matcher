// Static job data (you can add more)
const jobs = [
    {
        title: "Frontend Developer",
        requiredSkills: ["JavaScript", "React", "CSS", "HTML"]
    },
    {
        title: "Backend Engineer",
        requiredSkills: ["Python", "Node.js", "SQL", "API"]
    },
    {
        title: "Data Scientist",
        requiredSkills: ["Python", "Machine Learning", "R", "Statistics"]
    },
    {
        title: "Full-Stack Developer",
        requiredSkills: ["JavaScript", "Python", "React", "Node.js"]
    }
];

function matchJobs() {
    const input = document.getElementById('skillsInput').value.trim();
    const userSkills = input.split(',').map(skill => skill.trim().toLowerCase());
    
    if (userSkills.length === 0 || input === '') {
        document.getElementById('results').innerHTML = '<p>Please enter some skills!</p>';
        return;
    }
    
    let matches = [];
    
    jobs.forEach(job => {
        let matchCount = 0;
        job.requiredSkills.forEach(req => {
            if (userSkills.includes(req.toLowerCase())) {
                matchCount++;
            }
        });
        const score = (matchCount / job.requiredSkills.length) * 100;
        if (score > 0) {
            matches.push({ ...job, score: score.toFixed(0) });
        }
    });
    
    // Sort by score descending
    matches.sort((a, b) => b.score - a.score);
    
    let output = '';
    if (matches.length === 0) {
        output = '<p>No matches found. Try different skills!</p>';
    } else {
        matches.forEach(match => {
            output += `<div class="job">
                <h3>${match.title}</h3>
                <p>Match Score: ${match.score}%</p>
                <p>Required: ${match.requiredSkills.join(', ')}</p>
            </div>`;
        });
    }
    
    document.getElementById('results').innerHTML = output;
}
