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
                <p>Unexpected Moncton offers curated food and drink walking tours that blend local cuisine, neighbourhood stories, and cultural context.</p>
                <p>The challenge was to design a website that clearly communicated the value of the experience and guided users smoothly from discovery to booking, while establishing a foundation that could scale as additional tours are introduced over time.</p>
            </div>

            <div class="project-text-block">
                <h3>Audience & Design Approach</h3>
                <p>The primary audience consists of travelers (aged 40+) who value storytelling and local character. The approach was guided by three principles:</p>
                <ul class="custom-indent">
                    <li><strong>Structure before scale:</strong> A navigation framework that works for one tour today but supports multiple tours tomorrow.</li>
                    <li><strong>Confidence over persuasion:</strong> Replacing aggressive tactics with transparent information to build trust.</li>
                    <li><strong>Charm without clutter:</strong> A warm, inviting tone paired with scannable layouts.</li>
                </ul>
            </div>

            <div class="project-text-block">
                <h3>Visual & Content Strategy</h3>
                <ul class="custom-indent">
                    <li><strong>Clean visual system:</strong> A restrained palette with warm accents ensures photography remains the focal point.</li>
                    <li><strong>Image-first storytelling:</strong> Using photography to communicate atmosphere and social pace before text.</li>
                    <li><strong>Mobile-first layout:</strong> Designed for readability and booking comfort for users planning on the go.</li>
                </ul>
            </div>

            <div class="project-text-block">
                <h3>CTA Strategy: "Check Availability"</h3>
                <p>Instead of "Book Now," we intentionally used <strong>"Check Availability."</strong> Research shows that "Book Now" can feel too committal; "Check Availability" lowers the barrier, encouraging users to engage without perceived pressure.</p>
            </div>

            <div class="project-text-block">
                <h3>Website UI (Mobile-First Experience)</h3>
                <p>Key mobile screens highlighting content hierarchy and the persistent booking pathway.</p>
                <div class="image-space img-large">
                    <img src="images/mobile website shots.png" alt="Mobile Website Experience">
                </div>
            </div>

            <div class="project-text-block">
                <h3>Brand Assets & Marketing</h3>
                <p>Core brand elements and print materials designed to reinforce local character and trust across all touchpoints.</p>
                <div class="image-space img-med">
                    <img src="images/logo with same thickness.png" alt="Brand Identity System">
                </div>
                <div class="image-space img-med" style="margin-top: 20px;">
                    <img src="images/print UM.png" alt="Print and Marketing Assets">
                </div>
            </div>

            <div class="project-text-block">
                <h3>Reflection & Next Steps</h3>
                <p>This project reinforced the importance of balancing storytelling with functional pathways. Key outcomes included:</p>
                <ul class="custom-indent">
                    <li>A flexible structure ready for brand growth and additional tour offerings.</li>
                    <li>Analytics implementation to establish a foundation for ongoing iteration based on real user behavior.</li>
                </ul>
            </div>
        `
    },

    'project-safesim': {
        title: "SafesimXR",
        subtitle: "Brand Identity & Web Development",
        brandColor: "#FF9118",
        liveLink: "https://safesimxr.com/",
        role: "Brand & Web Designer",
        team: "Solo Project",
        tools: "Figma, HTML, CSS",
        content: `
            <div class="project-text-block">
                <h3>The Vision</h3>
                <p>SafesimXR provides immersive VR training for high-risk industries. The goal was to create a digital presence that felt cutting-edge yet dependable, bridging the gap between advanced technology and practical industrial safety.</p>
            </div>
            <div class="project-text-block">
                <h3>Visual Identity & Industrial Precision</h3>
                <p>I designed the SafesimXR logo to reflect precision and protection. Using a modern, geometric typeface paired with a high-contrast palette, the brand stands out in the tech-heavy XR space while maintaining a corporate edge.</p>
                <div class="image-space img-med">
                    <img src="images/safesimxr logo.png" alt="SafesimXR Brand Design">
                </div>
            </div>
            <div class="project-text-block">
                <h3>High-Conversion Landing Architecture</h3>
                <p>As one of my early projects, I focused on a clean, single-page landing architecture. The layout prioritizes the "Request a Demo" conversion path while clearly explaining the three pillars of their service: Immersion, Reliability, and Scalability.</p>
                <div class="image-space img-large">
                    <img src="images/safesim 3 screens.png" alt="SafesimXR Website Mobile Layout">
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
        tools: "Figma",
        content: `
            <div class="project-text-block">
                <h3>Context & Challenge</h3>
                <p>Real estate investors often rely on fragmented data and manual spreadsheets to calculate investment profitability. Working with Rental Consulting & Spandrel Interactive, I was tasked with designing an integrated suite of tools including a city research map, property analysis chrome extension, and a detailed editable proforma to help investors find upward trends and calculate property ROI with precision.</p>
            </div>

            <div class="project-text-block">
                <h3>Design System & Visual Language</h3>
                <p>To manage high data complexity, I developed a modular branding system. Click the tabs below to explore the core components:</p>
                
                <div class="branding-tabs">
                    <div class="tab-buttons">
                        <button class="tab-btn active" onclick="switchBrandingTab(event, 'logo-tab')">Logo System</button>
                        <button class="tab-btn" onclick="switchBrandingTab(event, 'color-tab')">Color Architecture</button>
                        <button class="tab-btn" onclick="switchBrandingTab(event, 'type-tab')">Typography</button>
                        <button class="tab-btn" onclick="switchBrandingTab(event, 'buttons-tab')">Buttons</button>
                    </div>
                    
                    <div id="logo-tab" class="tab-content active">
                        <div class="image-space img-med">
                            <img src="images/dmp logo.png" alt="Logo Design System">
                        </div>
                        <p>The logo represents "Intelligence in Layers" by symbolizing the depth of data required to build the best deals.</p>
                    </div>
                    
                    <div id="color-tab" class="tab-content">
                        <div class="image-space img-med">
                            <img src="images/dmp colours.png" alt="Color Palette">
                        </div>
                        <p>A primary brand palette of Gold and Slate, supported by a specialized system for data visualization and financial indicators.</p>
                    </div>
                    
                    <div id="type-tab" class="tab-content">
                        <div class="image-space img-med">
                            <img src="images/dmp font.png" alt="Typography System">
                        </div>
                        <p>Utilizing Roboto for its legibility in dense, data-heavy dashboards.</p>
                    </div>

                    <div id="buttons-tab" class="tab-content">
                        <div class="image-space img-med">
                            <img src="images/dmp buttons.png" alt="Buttons System">
                        </div>
                        <p>Buttons styles that will work on light and dark backgrounds.</p>
                    </div>
                </div>

            <div class="project-text-block">
                <h3>Interactive Map (Geographic Discovery Layer)</h3>
                <p>I designed a high-fidelity desktop dashboard featuring an interactive map of Canada. The map serves as the <strong>primary entry point</strong>, reflecting how investors think geographically before evaluating individual property metrics.</p>
                <div class="image-space img-large">
                    <img src="images/dmp map.png" alt="Desktop Market Map Insights Dashboard">
                </div>

            <div class="project-text-block">
                <h3>Chrome Extension (Reducing Tool-Switching Friction)</h3>
                <p>To eliminate the "friction" of constantly switching between a listing site and a calculator, I designed a Chrome Extension that lives directly on Realtor.ca. It provides a <strong>Zero-Friction Analysis</strong>, allowing users to see key profitability numbers instantly. This serves as a "quick-view" entry point that leads users into the deeper Proforma reports.</p>
                <div class="image-space img-med">
                    <img src="images/dmp ext.png" alt="Browser Extension UI Overlay">
                </div>
            </div>

            <div class="project-text-block">
                <h3>The Proforma (The Heart of the Platform)</h3>
                <p>This is the engine of Dealmaker Pro. I designed an organized, multi-tab interface that replaces messy spreadsheets. It allows investors to edit complex variables such as mortgages, management fees, and market-based rent estimates with real-time recalculations.</p>
                <div class="image-space img-large">
                    <img src="images/dmpproforma.png" alt="Complex Proforma Tool and Data Visualization">
                </div>
            </div>

            <div class="project-text-block">
                <h3>Future-Proofing: Mobile Concept & Scalability</h3>
                <p>While the current scope focuses on a desktop experience, I proactively designed a mobile conceptual framework with over 30 screens. This wasn't just about small screens; it was a <strong>stress test for the design system</strong> to ensure that the complex data architecture remains readable and functional in a fully connected mobile and desktop ecosystem.</p>
                <p><strong>Next Steps:</strong> The desktop platform is moving into user testing to validate data clarity and refine the flow before we look toward long-term mobile development.</p>
                <div class="image-space img-large">
                    <img src="images/dmp mobile.png" alt="Mobile Dashboard Stress-Testing the Design System">
                </div>
            </div>

            <div class="project-text-block">
                <h3>Reflection</h3>
                <p>Managing the complexity of financial data while maintaining a clean interface was the primary challenge. Beyond just replacing traditional spreadsheets, this project was about <strong>streamlining the discovery process.</strong></p>
                <p>By integrating the interactive map for geographic discovery and the Chrome extension for immediate analysis, we transformed a slow, manual research phase into a fast, data-driven workflow. This bridge between heavy-duty data analysis and modern UI allows investors to make faster, more confident decisions.</p>
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

// 5. Branding Tabs
function switchBrandingTab(event, tabId) {
    // Prevent default click behavior
    event.preventDefault();
    
    // Find the container for these tabs
    const container = event.target.closest('.branding-tabs');
    
    // Hide all contents
    container.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Deactivate all buttons
    container.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show the specific tab and activate the button
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}
