// 1. Mouse Glow Effect
const glow = document.querySelector('.glow-overlay');
window.addEventListener('mousemove', (e) => {
    glow.style.setProperty('--x', e.clientX + 'px');
    glow.style.setProperty('--y', e.clientY + 'px');
});

// 2. Project Data Store
const projectData = {
    'project-moncton': {
        title: "Unexpected Moncton",
        subtitle: "Brand, UX, and Web Design",
        brandColor: "#F95842", 
        liveLink: "https://unexpectedmoncton.ca",
        role: "UX / Web / Logo Designer",
        team: "2 Collaborators",
        tools: "Figma, WordPress, Kadence",
        content: `
            <div class="project-text-block">
                <h3>Context & Challenge</h3>
                <p>Unexpected Moncton offers a single curated food and drink walking tour. Unlike competitors with multiple options, the challenge was to design a <strong>focused experience</strong> that reduces decision fatigue while building trust with tourists unfamiliar with the area.</p>
            </div>
            <div class="project-text-block">
                <h3>Audience & Design Approach</h3>
                <p>The primary audience consists of travelers (aged 40+) who value storytelling and quality over discounts. My design approach was guided by three core principles:</p>
                <ul class="custom-indent">
                    <li><strong>Focus over choice:</strong> Emphasize one premium tour rather than overwhelming users.</li>
                    <li><strong>Clarity over urgency:</strong> Avoid high-pressure CTAs in favor of confidence-building content.</li>
                    <li><strong>Charm without clutter:</strong> A warm, inviting tone paired with scannable layouts.</li>
                </ul>
            </div>
            <div class="project-text-block">
                <h3>Information Architecture & CTA Strategy</h3>
                <p>Because the business offers a single tour, the site intentionally uses one primary CTA: <strong>"Check Availability."</strong></p>
                <p>Competing CTAs (such as gift cards) were intentionally removed to reduce cognitive load. The label was chosen over "Book Now" to align with a more relaxed, exploratory mindset and reduce perceived pressure during early decision-making.</p>
            </div>
            <div class="project-text-block">
                <h3>Website UI (Mobile-First Booking Experience)</h3>
                <p>Key mobile screens highlighting content hierarchy and the persistent booking pathway.</p>
                <div class="image-space img-large">
                    <img src="images/mobile website shots.png" alt="Mobile Website Experience">
                </div>
            </div>
            <div class="project-text-block">
                <h3>Brand Assets (Logo & Visual System)</h3>
                <p>Core brand elements designed to support clarity, warmth, and local character across digital and print touchpoints.</p>
                <div class="image-space img-med">
                    <img src="images/logo with same thickness.png" alt="Brand Identity System">
                </div>
            </div>
            <div class="project-text-block">
                <h3>Marketing Materials (Physical Touchpoints)</h3>
                <p>Print materials designed to reinforce brand recognition and trust beyond the website experience.</p>
                <div class="image-space img-med">
                    <img src="images/print UM.png" alt="Print and Marketing Assets">
                </div>
            </div>
            <div class="project-text-block">
                <h3>Reflection & Next Steps</h3>
                <p>This project reinforced the importance of designing for real-world decision-making. Early observations showed users consistently reaching the checkout but not always completing. Next steps include:</p>
                <ul class="custom-indent">
                    <li>Reviewing checkout friction points such as pricing clarity and payment steps.</li>
                    <li>Testing reassurance messaging (e.g., cancellation policies) closer to the final commitment action.</li>
                </ul>
            </div>
        `
    },
    'project-simsafe': {
        title: "SimsafeXR",
        subtitle: "Brand Identity & Web Development",
        brandColor: "#FF9118",
        liveLink: "https://safesimxr.com/",
        role: "Brand & Web Designer",
        team: "Solo Project",
        tools: "Figma, HTML, CSS",
        content: `
            <div class="project-text-block">
                <h3>The Vision</h3>
                <p>SimsafeXR provides immersive VR training for high-risk industries. The goal was to create a digital presence that felt cutting-edge yet dependable—bridging the gap between advanced technology and practical industrial safety.</p>
            </div>
            <div class="project-text-block">
                <h3>Visual Identity & Industrial Precision</h3>
                <p>I designed the SimsafeXR logo to reflect precision and protection. Using a modern, geometric typeface paired with a high-contrast palette, the brand stands out in the tech-heavy XR space while maintaining a corporate edge.</p>
                <div class="image-space img-med">
                    <img src="images/simsafe-brand-assets.png" alt="SimsafeXR Brand Design">
                </div>
            </div>
            <div class="project-text-block">
                <h3>High-Conversion Landing Architecture</h3>
                <p>As one of my early projects, I focused on a clean, single-page landing architecture. The layout prioritizes the "Request a Demo" conversion path while clearly explaining the three pillars of their service: Immersion, Reliability, and Scalability.</p>
                <div class="image-space img-large">
                    <img src="images/simsafe-web-mockup.png" alt="SimsafeXR Website Layout">
                </div>
            </div>
            <div class="project-text-block">
                <h3>Key Learnings</h3>
                <p>This project taught me how to translate complex technical services into digestible marketing content. It reinforced the importance of clear hierarchy and a mobile-first approach for corporate clients.</p>
            </div>
        `
    },
    'project-dealmaker': {
        title: "Dealmaker Pro",
        subtitle: "FinTech UI/UX & Real Estate Intelligence",
        brandColor: "#F6B600",
        liveLink: "https://www.dealmakerpro.ca/", 
        role: "Lead UI/UX Designer",
        team: "4 Collaborators",
        tools: "Figma, Real Estate Data APIs",
        content: `
            <div class="project-text-block">
                <h3>Context & Challenge</h3>
                <p>Real estate investors often rely on fragmented data and manual spreadsheets to calculate profitability. Working with Rental Consulting & Spandrel Interactive, I was tasked with designing an integrated suite of tools to help investors find upward trends and calculate property ROI with <strong>surgical precision.</strong></p>
            </div>
            <div class="project-text-block">
                <h3>The Strategy: Layers of Information</h3>
                <p>The core concept was <strong>"Intelligence in Layers,"</strong> designed to prevent information overload by progressively revealing deeper insights only when users needed them. I designed the logo—a layered icon topped with a roof—to symbolize the deep data required to reach a secure investment.</p>
                <div class="image-space img-med">
                    <img src="images/dealmaker-logo-system.png" alt="Dealmaker Pro Logo and Branding System">
                </div>
            </div>
            <div class="project-text-block">
                <h3>Interactive Map (Geographic Discovery Layer)</h3>
                <p>I designed a high-fidelity desktop dashboard featuring an interactive map of Canada. The map serves as the <strong>primary entry point</strong>, reflecting how investors think geographically before evaluating individual property metrics.</p>
                <div class="image-space img-large">
                    <img src="images/dmp map.png" alt="Desktop Market Map Insights Dashboard">
                </div>
            </div>
            <div class="project-text-block">
                <h3>Chrome Extension (Zero-Friction Analysis)</h3>
                <p>To reduce user friction, I designed a Chrome Extension that integrates directly with Realtor.ca. With one click, users see a "Deep Insight" panel without leaving the listing, pulling them seamlessly into the Dealmaker ecosystem.</p>
                <div class="image-space img-med">
                    <img src="images/dmp ext.png" alt="Browser Extension UI Overlay">
                </div>
            </div>
            <div class="project-text-block">
                <h3>Investment Proforma (Real-Time ROI Modeling)</h3>
                <p>The Proforma is the heart of the platform. I designed an interface that replaces complex spreadsheets, allowing investors to adjust purchase price and expenses in real-time. Metrics were <strong>visually grouped</strong> and color-coded to ensure scanability.</p>
                <div class="image-space img-large">
                    <img src="images/dmp proforma.png" alt="Complex Proforma Tool and Data Visualization">
                </div>
            </div>
            <div class="project-text-block">
                <h3>Future Roadmap & Mobile Concepts</h3>
                <p>The next phase focuses on a fully connected ecosystem. While the initial scope was desktop-only, I proactively developed mobile-responsive mockups to support investors scouting properties in the field.</p>
                <p><strong>Testing & Iteration:</strong> This demo will undergo user testing in the coming months. We plan to gather feedback on data clarity to iterate on the mobile experience and refine cross-platform integration.</p>
                <div class="image-space img-large">
                    <img src="images/dmp mobile.png" alt="Mobile Dashboard and Proforma Mockups">
                </div>
            </div>
            <div class="project-text-block">
                <h3>Reflection</h3>
                <p>Managing the complexity of financial data while maintaining a clean interface was the primary challenge. This project allowed me to bridge the gap between heavy-duty data analysis and modern UI, replacing traditional spreadsheets with a scalable digital product.</p>
            </div>
        `
    }
};

// 3. Overlay Control Functions
function openOverlay(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    // Set Dynamic Brand Color for the Live Site Button
    const liveBtn = document.getElementById('overlay-live-link');
    liveBtn.style.setProperty('--brand-color', data.brandColor);
    liveBtn.href = data.liveLink;

    // Populate Overlay Elements
    document.getElementById('overlay-title').innerText = data.title;
    document.getElementById('overlay-subtitle').innerText = data.subtitle;

    document.getElementById('overlay-stats').innerHTML = `
        <div class="stat-item"><h4>Role</h4><p>${data.role}</p></div>
        <div class="stat-item"><h4>Team</h4><p>${data.team}</p></div>
        <div class="stat-item"><h4>Tools</h4><p>${data.tools}</p></div>
    `;

    document.getElementById('overlay-dynamic-content').innerHTML = data.content;

    // Show Overlay and Lock Scroll
    const overlay = document.getElementById('project-overlay');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Reset internal scroll to top
    const overlayBody = document.querySelector('.overlay-body');
    if (overlayBody) overlayBody.scrollTop = 0;
}

function closeOverlay() {
    document.getElementById('project-overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 4. Keyboard & Click Event Listeners
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeOverlay();
});

window.onclick = function(event) {
    const overlay = document.getElementById('project-overlay');
    if (event.target == overlay) closeOverlay();
}
