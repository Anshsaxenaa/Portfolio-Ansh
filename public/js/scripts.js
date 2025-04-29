fetch('/api/resume')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('resume-container');
    container.innerHTML = `
      <h2>${data.name}</h2>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Education:</b><ul>
        <li>Class 12 – The Gurukul Foundation School, Kashipur (2021–22) – 84%</li>
        <li>Class 10 – Delhi Public School, Kashipur (2019–20) – 79%</li>
        <li>B.Tech in Computer Science Engineering – UPES, Dehradun (2022–2026)</li>
      </ul></p>

      <p><b>Experience:</b> Social Internship at SBBES, Industry Training at WAYEVA (Cloud Computing)</p>

      <p><b>Skills:</b> ${data.skills.join(', ')}</p>

      <p><b>Projects:</b><ul>
        ${data.projects.map(p => `<li>${p}</li>`).join('')}
        <li>College Fee Notification Dashboard</li>
        <li>Chat Messenger Application</li>
      </ul></p>

      <p><b>Certifications:</b><ul>
        <li>WAYEVA Cloud Computing Training (MSME Certified)</li>
        <li>AWS Cloud Practitioner</li>
        <li>Microsoft Azure Fundamentals</li>
        <li>DevOps Bootcamp – INT College, Israel</li>
      </ul></p>

      <p><b>Social:</b><br>
        GitHub: <a href="https://github.com/Anshsaxenaa" target="_blank">github.com/Anshsaxenaa</a><br>
        LinkedIn: <a href="https://www.linkedin.com/in/ansh-saxena-b14671256/" target="_blank">linkedin.com/in/ansh-saxena</a>
      </p>
    `;
  });
