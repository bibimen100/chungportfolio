// 1. Mouse Glow
const glow = document.querySelector('.glow-overlay');
window.addEventListener('mousemove', (e) => {
    glow.style.setProperty('--x', e.clientX + 'px');
    glow.style.setProperty('--y', e.clientY + 'px');
});

// 2. Overlay Function
function openOverlay(projectId) {
    console.log("Opening project:", projectId);
    // Tomorrow: add your overlay class toggle and content loader here
    alert("Project Overlay for " + projectId + " will launch tomorrow!");
}

// 3. System Theme Sync
function applyTheme() {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
applyTheme();

const projectData = {
    'project-moncton': {
        title: "Unexpected Moncton",
        subtitle: "Brand, UX, and Web Design",
        liveLink: "https://unexpectedmoncton.ca",
        role: "UX / Web / Logo Designer",
        team: "2 Collaborators",
        tools: "Figma, WordPress, Kadence",
        content: `
            <div class="project-text-block">
                <h3>Context & Challenge</h3>
                <p>Unexpected Moncton required a cohesive brand and digital presence to support a growing tourism experience. The website needed to clearly communicate value to first-time visitors and establish trust for online bookings.</p>
            </div>

            <div class="project-text-block">
                <h3>Brand & Logo Design</h3>
                <p>I led the visual identity, exploring color palettes that reflected discovery and local character. The final logo draws inspiration from city welcome signage.</p>
                <div class="image-space img-med">
                    <img src="images/logo with same thickness.png" alt="Brand Assets">
                </div>
            </div>

            <div class="project-text-block">
                <h3>Website UX & Implementation</h3>
                <p>I researched comparable food tour and local experience websites to inform the site’s structure and content priorities. These insights guided decisions around navigation, content flow, and calls to action.</p>
                <p>The website was built with WordPress and Kadence, focusing on scannable layouts and clear mobile booking pathways.</p>
                <p>Key considerations included:</p>
                <ul class="custom-indent">
                    <li>Scannable layouts that quickly communicate the experience</li>
                    <li>Clear booking pathways without overwhelming first-time users</li>
                    <li>Strong mobile usability, reflecting how most users discover and engage with the site</li>
                </ul>
                <div class="image-space img-large">
                    <img src="images/mobile website shots.png" alt="Website UI UX">
                </div>
            </div>

            <div class="project-text-block">
                <h3>Print & Marketing</h3>
                <p>Ensuring consistency across touchpoints with physical promotional materials.</p>
                <div class="image-space img-med">
                    <img src="images/print UM.png" alt="Marketing Materials">
                </div>

            <div class="project-text-block">
                <h3>Reflection</h3>
                <p>This project reinforced the importance of designing for real-world experiences, where trust, clarity, and storytelling directly impact user decision-making. It strengthened my ability to design flexible systems, collaborate closely with stakeholders, and iterate on a live product over time. </p>
            </div>
            </div>
        `
    }
};

// 1. Updated openOverlay (Removes the alert and updates the content)
function openOverlay(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    document.getElementById('overlay-title').innerText = data.title;
    document.getElementById('overlay-subtitle').innerText = data.subtitle;
    document.getElementById('overlay-live-link').href = data.liveLink;

    document.getElementById('overlay-stats').innerHTML = `
        <div class="stat-item"><h4>Role</h4><p>${data.role}</p></div>
        <div class="stat-item"><h4>Team</h4><p>${data.team}</p></div>
        <div class="stat-item"><h4>Tools</h4><p>${data.tools}</p></div>
    `;

    document.getElementById('overlay-dynamic-content').innerHTML = data.content;

    const overlay = document.getElementById('project-overlay');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Reset scroll position to top
    const body = document.querySelector('.overlay-body');
    if (body) body.scrollTop = 0;
}

function closeOverlay() {
    document.getElementById('project-overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 2. ESC Key Listener
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeOverlay();
    }
});

// 3. Background click to close
window.onclick = function(event) {
    const overlay = document.getElementById('project-overlay');
    if (event.target == overlay) {
        closeOverlay();
    }
}