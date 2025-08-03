// Static job data (you can add more)
const jobs = [
    {
        title: "Frontend Developer",
        requiredSkills: ["HTML", "CSS", "JavaScript", "React", "Redux", "TypeScript", "Tailwind CSS"]
    },
    {
        title: "Backend Engineer",
        requiredSkills: ["Node.js", "Express", "MongoDB", "SQL", "REST API", "Docker", "Python"]
    },
    {
        title: "Full-Stack Developer",
        requiredSkills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Docker", "GraphQL"]
    },
    {
        title: "Data Scientist",
        requiredSkills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "R", "Statistics", "Machine Learning", "SQL"]
    },
    {
        title: "Machine Learning Engineer",
        requiredSkills: ["Python", "TensorFlow", "PyTorch", "ML Algorithms", "Model Deployment", "Docker", "Kubernetes", "GCP"]
    },
    {
        title: "DevOps Engineer",
        requiredSkills: ["Linux", "AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Shell Scripting", "Ansible"]
    },
    {
        title: "Cloud Architect",
        requiredSkills: ["AWS", "Azure", "GCP", "Kubernetes", "DevOps", "Networking", "Security", "Infrastructure as Code"]
    },
    {
        title: "AI Research Scientist",
        requiredSkills: ["Deep Learning", "Neural Networks", "PyTorch", "TensorFlow", "Mathematics", "Python", "Research Papers"]
    },
    {
        title: "Data Engineer",
        requiredSkills: ["SQL", "ETL", "Spark", "Kafka", "Python", "Airflow", "BigQuery", "Data Warehousing"]
    },
    {
        title: "Cybersecurity Analyst",
        requiredSkills: ["Networking", "Penetration Testing", "SIEM", "Firewall", "Python", "Security Audits", "Incident Response"]
    },
    {
        title: "Product Manager (Tech)",
        requiredSkills: ["Agile", "Scrum", "Product Roadmap", "JIRA", "UX Research", "Business Strategy", "A/B Testing"]
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
        const matched = job.requiredSkills.filter(skill =>
            userSkills.includes(skill.toLowerCase())
        );
        const score = (matched.length / job.requiredSkills.length) * 100;

        if (score > 0) {
            matches.push({
                ...job,
                score: score.toFixed(0),
                matchedSkills: matched
            });
        }
    });

    matches.sort((a, b) => b.score - a.score);

    const output = matches.length === 0
        ? '<p>No matches found. Try different skills!</p>'
        : matches.map(match => `
            <div class="job">
                <h3>${match.title}</h3>
                <p><strong>Match Score:</strong> ${match.score}%</p>
                <p><strong>Required Skills:</strong> ${match.requiredSkills.join(', ')}</p>
                <p><strong>Your Matching Skills:</strong> ${match.matchedSkills.join(', ')}</p>
            </div>
        `).join('');

    document.getElementById('results').innerHTML = output;
}
