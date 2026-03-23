// Theme toggle (light/dark/synthwave) — respects OS preference, manual override persists
(function() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light' || saved === 'synthwave') {
        document.documentElement.setAttribute('data-theme', saved);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
})();

// Project data (preserved from original site)
const projects = {
    1: {
        title: 'Architecting Trust: The Shopify Checkout Engine',
        description: 'Shopify Checkout is a high-stakes interface where localized tax disclosures, variable content, and complex legal requirements must coexist within rigorous layout constraints. Focusing on the Order Summary and Payment sections, I designed a system where technical precision and logic ensured that scannability and user trust remained uncompromised. The primary objective was to architect a framework capable of handling the immense complexity of global commerce at scale.',
        impact: 'This systematic approach enabled the checkout to scale across 50+ localizations without manual layout adjustments, ensuring consistent compliance with regional tax and legal requirements. By standardizing the "money line" logic and payment frameworks, I reduced design-to-engineering friction and accelerated the deployment of new regional features. This work fundamentally de-risked the purchase journey for millions of users by maintaining a high-integrity visual hierarchy across diverse currency formats.',
        images: [
            'images/projects/project-2/Payment 4-2.png',
            'images/projects/project-1/Order Summary 1.png',
            'images/projects/project-1/Order Summary 4.png',
            'images/projects/project-2/Payment in Checkout 1.png',
            'images/projects/project-2/Payment in Checkout 3.png'
        ],
        tags: ['Product Architecture', 'Systems Thinking', 'Interaction Design', 'AI-Assisted Prototyping'],
        sections: [
            {
                title: '1. Order Summary Optimization',
                content: 'The optimization of the Order Summary focused on enhancing clarity and scalability across content and localizations.',
                bullets: [
                    'Precision Spacing via Tokens: I standardized a systematic vertical optimization of the "money line" section. By leveraging existing spacing tokens to precisely govern the space between line items, I established a clear visual hierarchy. This ensured a consistent vertical rhythm that separates related monetary entries (discounts, gift cards) from totals.',
                    'Resource List & Price Priority: I defined a layout logic that uses a text-bottom-align rule for product line items. This maintains visual alignment and a clean text hierarchy, regardless of variable description lengths or currency formats.',
                    'Visual Alignment & Scannability: By ensuring the product thumbnail aligns vertically with the product name and details, I created a strong visual link that improves user processing speed.',
                    'High-Fidelity Sourcing: To demonstrate these alignment rules to stakeholders without distraction, I utilized Midjourney to generate clean, consistent internal product thumbnails, ensuring the focus remained solely on how the layout handled the vertical relationships.'
                ]
            },
            {
                title: '2. Payment Section & Legal Governance',
                content: 'The Payment flow was systematized to prioritize conversion, trust, and legal compliance across diverse merchant needs.',
                bullets: [
                    'Standardized Framework: Recognizing the criticality of payment selection, I established strict framework to streamline consistency. This required defining rules for the placement of method names, supplementary descriptions (like installment options), and logos to ensure a predictable pattern that minimizes cognitive load.',
                    'Third-Party Redirects & Density: I redesigned the pattern for third-party payment methods which previously used inefficient vertical space. By removing outdated iconography and moving concise redirect messages below the "Pay now" button, I increased checkout density and accelerated the purchase funnel without losing necessary user guidance.',
                    'Pay Now Disclaimers & Compliance: The area surrounding the "Pay now" button is often cluttered by mandatory legal disclosures. I developed a governing framework to audit and standardize all possible content in this space, ensuring compliance across Guest Checkout and Shop Pay without creating visual friction at the point of purchase.',
                    'Technical Validation: These solutions were validated via functional code prototypes (built with Cursor and Figma MCP) to audit the current state against the ideal state and confirm technical feasibility across all platforms.'
                ]
            }
        ],
        retrospective: {
            title: 'Retrospective & Key Learnings',
            content: 'This work taught me the immense leverage of defining strict principles early in high-stakes conversion areas:',
            bullets: [
                'Sweating the Details vs. Scalability: I learned to prioritize what matters most\u2014focusing on precise spacing and strict alignment while accepting necessary layout limitations to preserve data integrity across global checkouts.',
                'Systematic Constraint: Defining strict framework for payment methods and legal content proved that standardization is the best way to manage complexity at scale.',
                'The Power of AI Prototyping: Utilizing code-based validation (Cursor/Figma MCP) was invaluable for bridging the gap between ideal UX and complex business/technical needs, ensuring that high-risk areas were built on a foundation of technical feasibility.'
            ]
        }
    },
    2: {
        title: 'Systems at Scale: The Global Checkout Library',
        description: 'As a designer on the Checkout Design System team, I focused on the enablement and scaling of patterns specifically optimized for the checkout experience. I was responsible for architecting components, such as security inputs and complex interactive states, that balanced visual consistency with the high-integrity requirements of a global checkout engine.',
        impact: 'By standardizing complex security patterns and state logic, I established a unified source of truth that eliminated redundant design cycles and accelerated engineering velocity. This framework ensured accessible, high-integrity security checkpoints and a predictable, trust-based experience for millions of global buyers, maintaining system resilience during rapid scaling.',
        heroGif: 'images/projects/PaywithBlik.gif',
        images: [
            'images/projects/project-3/OTP 2-1-Updated.png',
            'images/projects/project-3/OTP 1.png',
            'images/projects/project-4/Interactive States 1.png',
            'images/projects/project-4/Interactive States 2.png',
            'images/projects/project-5/Design System Stewardship & Documentation 2.png'
        ],
        tags: ['Component Standardization', 'System Architecture', 'Cross-Functional Governance', 'Documentation & Specs'],
        sections: [
            {
                title: '1. The OTP (One-Time Password) Component',
                content: 'I led the design and systematization of the OTP component within the Checkout design system. This is a critical security pattern used for buyer verification and high-stakes transitions.',
                bullets: [
                    'Functional Constraints: My focus was on the logic required for a checkout security pattern. I defined how the component handled auto-fill behaviours, error states, and the specific functional requirements of a multi-input code field.',
                    'Security UX: I ensured the pattern balanced rigorous security requirements with a low-friction buyer experience. This involved ensuring that the component met strict accessibility standards so that every buyer could complete security checkpoints without failure.'
                ]
            },
            {
                title: '2. Interactive States & Visual Logic',
                content: 'I led an initiative to standardize and codify Interactive States specifically for the checkout environment. This work was essential to maintain visual integrity across a high-conversion funnel where every interaction affects buyer confidence.',
                bullets: [
                    'Systematic Behaviour: I established strict rules for how components behave in hover, focus, pressed, and disabled states. This systematic approach ensured that every interactive element felt cohesive and provided the necessary affordance for a sensitive financial transaction.',
                    'Standardization for Scale: By defining these patterns at the system level, I helped checkout product teams avoid reinventing state logic. This improved the speed of development and ensured a predictable experience for millions of buyers.'
                ]
            },
            {
                title: '3. Documentation & Governance',
                content: 'A specialized design system is only as successful as its adoption. I focused on bridging the gap between library architecture and product implementation, transforming complex checkout patterns into a reliable, shared source of truth.',
                bullets: [
                    'Documentation as a Product: I authored and governed the documentation for these specialized patterns. I focused on providing clear guidelines that explained the functional requirements and the strategic logic behind each checkout-specific component.',
                    'Ensuring Systemic Integrity: By providing high-quality documentation and clear implementation rules, I helped maintain the integrity of the checkout system as it evolved. This ensured that the quality of the buyer experience remained high across all payment and shipping verticals.'
                ]
            }
        ],
        retrospective: {
            title: 'Retrospective & Key Learnings',
            content: 'My work within the Checkout design system taught me that the true value of a specialized system lies in its ability to provide clarity within high-stakes environments.',
            bullets: [
                'From Craft to Infrastructure: I learned that building a checkout system is about more than just craft; it\'s about codification. It requires the ability to translate complex design decisions into systematic rules that enable specialized engineering teams to move faster without losing quality.',
                'The Importance of Clarity: High-quality documentation is the bridge between a design concept and a successful implementation. I realized that clear communication is what allows a checkout system to remain resilient even as technical and legal requirements change.',
                'Anticipating Systemic Impact: Managing core atoms like OTPs and interactive states taught me to anticipate how a single systemic change would ripple across the entire purchase funnel. This experience reinforced the need for rigor and technical validation in every design decision.'
            ]
        }
    },
    3: {
        title: 'Modernizing the Global E-commerce Experience: Calvin\u00A0Klein',
        description: 'The engagement at Metalab focused on overhauling the Calvin Klein digital experience. The objective was to bridge the gap between an iconic minimalist brand and a high-performance shopping journey. The scope involved modernizing the navigation, the homepage, and the product detail pages to meet global consumer expectations.',
        impact: 'By contributing to the restructuring of the global navigation and selection logic, I helped reduce cognitive load and streamline the path-to-purchase across a massive product catalog. I developed motion-driven design patterns that balanced minimalist aesthetics with functional performance, ensuring a premium brand feel. This collaborative effort resulted in a more intuitive, scalable framework that modernized the brand\'s digital presence for a global consumer base.',
        images: [
            'https://vimeo.com/642194431?autoplay=1&loop=1&muted=1',
            null,
            'https://vimeo.com/642184965?autoplay=1&loop=1&muted=1',
            'https://vimeo.com/642207005?autoplay=1&loop=1&muted=1'
        ],
        tags: ['Interface Strategy', 'Experience Design', 'Motion & Prototyping'],
        sections: [
            {
                title: '1. Navigation and Discovery',
                content: 'The global navigation was restructured to support a massive catalog without sacrificing the premium feel of the brand.',
                bullets: [
                    'Streamlined Architecture: Category structures were reorganized to reduce cognitive load and improve path-finding for a diverse user base.',
                    'Refined Interaction: Sophisticated hover states and transitions were crafted to serve as subtle brand signals and provide clear feedback during the discovery process.'
                ]
            },
            {
                title: '2. The Product Detail Page (PDP)',
                content: 'The PDP was redesigned to prioritize visual storytelling while maintaining conversion utility and interactive precision.',
                bullets: [
                    'Imagery First: Layouts were developed to allow high-fidelity photography to lead the experience and showcase product texture.',
                    'Selection Logic: The color and size selectors were redesigned alongside comprehensive fit guides to ensure a seamless and confident selection process while maintaining a clean visual hierarchy.'
                ]
            },
            {
                title: '3. Collection Discovery and Interaction',
                content: 'A specialized module was developed to facilitate discovery through an immersive, motion-driven experience. This component allowed for extensive product browsing while maintaining a minimalist aesthetic.',
                bullets: [
                    'Horizontal Scrolling: A continuous horizontal pattern was implemented to showcase curated collections. This motion-heavy interaction encouraged exploration without cluttering the layout.',
                    'Information on Hover: Product details were hidden by default to prioritize imagery. Essential info was surfaced through hover interactions, providing immediate context while keeping the interface clean.',
                    'Responsive Feedback: Each product tile used subtle transitions to respond to user intent, reinforcing the modern and premium feel of the digital experience.'
                ]
            }
        ],
        retrospective: {
            title: 'Retrospective & Key Learnings',
            content: 'The engagement with Calvin Klein through Metalab emphasized the importance of balancing high-end brand requirements with rigorous e-commerce performance.',
            bullets: [
                'Aesthetic Range: The work required adapting a design language to meet the specific heritage of the global brand. This involved a deep focus on typography, white space, and subtle motion to maintain brand standards.',
                'Rapid Domain Switching: The partnership reinforced the ability to quickly understand a new industry and its specific user behaviours. The process involved identifying the unique friction points of an iconic global brand and translating its heritage into a high-performance, modern e-commerce experience.',
                'Impact of Interaction: In a minimalist interface, the quality of interaction serves as a primary brand signal. Every transition and state was treated as an opportunity to communicate the quality and modernization of the brand.'
            ]
        }
    },
    4: {
        title: 'Burn to Give: Scaling Altruistic Incentives through Mobile Design',
        description: 'Burn to Give is a social purpose platform that converts healthy habits like exercise into life insurance coverage and food donations. The primary objective was to solve for long-term user retention by ensuring the digital act of giving felt as rewarding and seamless as the exercise itself.',
        impact: 'As a 0 to 1 project, the objective was to move from a conceptual mission to a high-performance mobile product. By establishing the initial design language and core interaction patterns, we created a scalable platform that successfully merged personal wellness with global social impact.',
        heroFit: 'contain',
        images: [
            'images/projects/project-5/Burn to Give 1-1.png',
            'images/projects/project-5/Burn to Give 2.png',
            'images/projects/project-5/Burn to Give 3.png'
        ],
        tags: ['0-1 Product Design', 'Mobile Systems Architecture', 'Behavioral Design', 'Engagement Strategy'],
        sections: [
            {
                title: '1. Strategy and Archetype Discovery',
                content: 'The 0\u20131 phase began with a robust discovery process to align a complex social mission with the needs of diverse user groups.',
                bullets: [
                    'Archetype Logic: We analyzed distinct behaviors for corporate partners, HR admins, and individual users to identify shared friction points across the fitness and charity landscapes.',
                    'Competitive Analysis: Research into similar platforms allowed us to identify comparable problems and set a baseline for transparency and trust in social-purpose products.'
                ]
            },
            {
                title: '2. System Clarity and Product Voice',
                content: 'Rethinking the product system required a unified visual language that could scale alongside new features without increasing cognitive load.',
                bullets: [
                    'Empathetic Tone: I collaborated with a content strategist to craft a product voice that balanced the sensitivity of hunger issues with a motivating wellness experience.',
                    'High-Fidelity Execution: Wireframes were transformed into a high-fidelity ecosystem where seamless tracking flows ensured that the act of giving felt as rewarding as the exercise itself.'
                ]
            },
            {
                title: '3. Scalable Systems and Product Impact',
                content: 'To ensure the product could evolve alongside new feature sets, I established a modular design system that prioritized native performance and visual consistency.',
                bullets: [
                    'Component Logic: A comprehensive library of reusable UI elements was developed to streamline the transition from wireframes to high-fidelity, reducing future design-to-engineering friction.',
                    'Measurable Growth: The focus on a seamless, low-friction tracking flow contributed to a significant increase in user engagement, resulting in improved ratings across both iOS and Android platforms.'
                ]
            }
        ],
        retrospective: {
            title: 'Retrospective & Key Learnings',
            content: '',
            bullets: [
                'Systems Over Screens: Building 0 to 1 taught me that the most beautiful UI fails without a logical component system. Designing for scalability from day one allowed us to introduce complex features later without breaking the core user mental model.',
                'Content is UX: Working with a writer on sensitive topics like global hunger proved that "Voice and Tone" are functional design tools. The right language reduced user guilt and increased the "Reward" feeling of the app.',
                'Archetype Balancing: Learning to design for both the "HR Admin" (Data/Reporting) and the "Daily User" (Motivation/Simplicity) taught me how to manage competing priorities within a single, unified ecosystem.'
            ]
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // --- Theme toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            const next = current === 'light' ? 'dark' : current === 'dark' ? 'synthwave' : 'light';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            const theme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
        }
    });

    // --- Sidebar Navigation ---
    const sidebar = document.getElementById('sidebar');
    const burgerMenu = document.getElementById('burger-menu');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const navProjectsContainer = document.getElementById('nav-projects');
    const contentArea = document.getElementById('content-area');
    const viewHome = document.getElementById('view-home');
    const viewWork = document.getElementById('view-work');

    // Build sidebar project list from project data
    const projectOrder = [1, 2, 4, 3];
    projectOrder.forEach(id => {
        const project = projects[id];
        if (!project) return;
        const item = document.createElement('div');
        item.className = 'nav-project-item';
        item.setAttribute('data-project', id);

        item.innerHTML = `<span class="nav-project-arrow">\u21B3 [ ]</span><span class="nav-project-label">${project.title}</span>`;
        navProjectsContainer.appendChild(item);
    });

    // --- Copy email ---
    const copyBtn = document.getElementById('copy-email');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            navigator.clipboard.writeText('nayeob.kim@gmail.com').then(() => {
                copyBtn.textContent = '[Copied]';
                setTimeout(() => { copyBtn.textContent = '[Copy]'; }, 2000);
            });
        });
    }

    // --- Back to top ---
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 200) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- View Switching ---
    let currentView = 'home';
    let currentProjectId = null;
    let reinitAscii = null;

    let heroResizeHandler = null;

    function showHome() {
        currentView = 'home';
        currentProjectId = null;
        if (heroResizeHandler) {
            window.removeEventListener('resize', heroResizeHandler);
            heroResizeHandler = null;
        }
        viewHome.classList.add('active');
        viewWork.classList.remove('active');
        contentArea.scrollTop = 0;
        window.scrollTo(0, 0);
        updateNavActive();
        closeSidebar();
        if (reinitAscii) {
            requestAnimationFrame(reinitAscii);
        }
    }

    function showProject(projectId) {
        const project = projects[projectId];
        if (!project) return;

        currentView = 'work';
        currentProjectId = projectId;
        viewHome.classList.remove('active');
        viewWork.classList.add('active');

        renderProject(project, projectId);
        contentArea.scrollTop = 0;
        window.scrollTo(0, 0);
        updateNavActive();
        closeSidebar();
    }

    function updateNavActive() {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (currentView === 'home' && item.getAttribute('data-view') === 'home') {
                item.classList.add('active');
            }
            if (currentView === 'work' && item.getAttribute('data-view') === 'work') {
                item.classList.add('active');
            }
        });

        document.querySelectorAll('.nav-project-item').forEach(item => {
            const pid = parseInt(item.getAttribute('data-project'));
            const arrow = item.querySelector('.nav-project-arrow');
            if (pid === currentProjectId) {
                item.classList.add('active');
                arrow.textContent = '\u21B3 [\u2713]';
            } else {
                item.classList.remove('active');
                arrow.textContent = '\u21B3 [ ]';
            }
        });
    }

    // Nav click handlers
    document.querySelectorAll('.nav-item[data-view]').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const view = this.getAttribute('data-view');
            if (view === 'home') {
                showHome();
            } else if (view === 'work') {
                if (projectOrder.length > 0) {
                    showProject(projectOrder[0]);
                }
            }
        });
    });

    document.querySelectorAll('.nav-project-item').forEach(item => {
        item.addEventListener('click', function() {
            const pid = parseInt(this.getAttribute('data-project'));
            showProject(pid);
        });
    });

    // --- Burger menu ---
    function openSidebar() {
        sidebar.classList.add('open');
        burgerMenu.classList.add('open');
        sidebarOverlay.classList.add('open');
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        burgerMenu.classList.remove('open');
        sidebarOverlay.classList.remove('open');
    }

    if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
            if (sidebar.classList.contains('open')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    // --- Render Project Content ---
    function isVimeoUrl(url) {
        return url.includes('vimeo.com');
    }

    function getVimeoEmbedUrl(url) {
        const match = url.match(/vimeo\.com\/(\d+)/);
        if (!match) return url;
        const videoId = match[1];
        const params = new URLSearchParams();
        if (url.includes('autoplay=1')) params.set('autoplay', '1');
        if (url.includes('loop=1')) params.set('loop', '1');
        if (url.includes('muted=1')) params.set('muted', '1');
        params.set('background', '1');
        return `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
    }

    function renderMediaElement(src, alt) {
        if (isVimeoUrl(src)) {
            return `<div class="vimeo-wrapper"><iframe src="${getVimeoEmbedUrl(src)}" allow="autoplay; fullscreen" allowfullscreen></iframe></div>`;
        }
        return `<img src="${src}" alt="${alt || ''}">`;
    }

    function renderProject(project, projectId) {
        const workInfo = document.getElementById('work-info');
        const workHero = document.getElementById('work-hero');
        const workSections = document.getElementById('work-sections');

        // Left column: title, tags, impact, description
        let infoHtml = `<h1 class="work-title">${project.title}</h1>`;

        if (project.tags && project.tags.length > 0) {
            infoHtml += `<div class="work-tags">${project.tags.join(' | ')}</div>`;
        }

        infoHtml += `<div class="work-section-block"><p class="work-section-label">Impact</p><p class="work-section-text">${project.impact}</p></div>`;
        infoHtml += `<div class="work-section-block"><p class="work-section-label">Challenge</p><p class="work-section-text">${project.description}</p></div>`;

        workInfo.innerHTML = infoHtml;

        // Hero image
        workHero.classList.remove('work-hero--gif');
        workHero.classList.remove('work-hero--contain');
        if (project.heroGif) {
            workHero.classList.add('work-hero--gif');
            workHero.innerHTML = `<img src="${project.heroGif}" alt="${project.title}">`;
        } else if (project.images && project.images.length > 0) {
            workHero.innerHTML = renderMediaElement(project.images[0], project.title);
            if (project.heroFit === 'contain') {
                workHero.classList.add('work-hero--contain');
            }
        } else {
            workHero.innerHTML = '<div class="work-hero-placeholder"></div>';
        }

        // Match hero height to info column
        if (heroResizeHandler) {
            window.removeEventListener('resize', heroResizeHandler);
        }
        heroResizeHandler = function() {
            const infoH = workInfo.getBoundingClientRect().height;
            workHero.style.setProperty('--hero-height', infoH + 'px');
            workHero.classList.add('work-hero--matched');
        };
        requestAnimationFrame(() => {
            heroResizeHandler();
            window.addEventListener('resize', heroResizeHandler);
        });

        // Sections below
        let sectionsHtml = '';

        if (project.sections && project.sections.length > 0) {
            project.sections.forEach((section, index) => {
                sectionsHtml += '<div class="work-content-section">';

                // Show corresponding image if available (offset by 1 since first is hero)
                const imageIndex = index + 1;
                if (project.images && project.images[imageIndex]) {
                    sectionsHtml += `<div class="work-content-image">${renderMediaElement(project.images[imageIndex], section.title)}</div>`;
                }

                sectionsHtml += '<div class="work-content-text">';
                sectionsHtml += `<h2 class="work-content-title">${section.title}</h2>`;
                sectionsHtml += '<div class="work-content-body">';
                sectionsHtml += `<p>${section.content}</p>`;

                if (section.bullets && section.bullets.length > 0) {
                    sectionsHtml += '<ul>';
                    section.bullets.forEach(bullet => {
                        sectionsHtml += `<li>${bullet}</li>`;
                    });
                    sectionsHtml += '</ul>';
                }

                sectionsHtml += '</div></div></div>';
            });
        }

        // Remaining images that don't match a section
        if (project.images) {
            const usedImageCount = 1 + (project.sections ? project.sections.length : 0);
            for (let i = usedImageCount; i < project.images.length; i++) {
                sectionsHtml += `<div class="work-content-section"><div class="work-content-image">${renderMediaElement(project.images[i], project.title)}</div></div>`;
            }
        }

        // Retrospective
        if (project.retrospective) {
            sectionsHtml += '<div class="work-retrospective">';
            sectionsHtml += `<h2 class="work-retrospective-title">${project.retrospective.title}</h2>`;
            if (project.retrospective.content) {
                sectionsHtml += `<p class="work-retrospective-intro">${project.retrospective.content}</p>`;
            }
            if (project.retrospective.bullets && project.retrospective.bullets.length > 0) {
                sectionsHtml += '<ul>';
                project.retrospective.bullets.forEach(bullet => {
                    sectionsHtml += `<li>${bullet}</li>`;
                });
                sectionsHtml += '</ul>';
            }
            sectionsHtml += '</div>';
        }

        workSections.innerHTML = sectionsHtml;
    }

    // Initialize: show home view
    showHome();

    // --- ASCII Canvas Effect ---
    const asciiCanvas = document.getElementById('ascii-canvas');
    const asciiPre = document.querySelector('.ascii-portrait');

    if (asciiCanvas && asciiPre) {
        const ctx = asciiCanvas.getContext('2d');
        const rawText = asciiPre.textContent;
        const lines = rawText.split('\n').filter(l => l.length > 0);
        const rows = lines.length;
        const cols = lines.reduce((max, l) => Math.max(max, l.length), 0);

        const ASCII_LINE_HEIGHT = 1.2;

        let fontSize = 12;
        let charW = 0;
        let charH = 0;
        let chars = [];
        let canvasW = 0;
        let canvasH = 0;
        let revealed = false;
        let revealStart = 0;
        let animId = null;

        const WAVE_AMP = 1.8;
        const WAVE_SPEED = 0.0012;
        const WAVE_FREQ = 0.06;
        const REVEAL_DURATION = 1200;

        function initAscii() {
            const containerW = asciiCanvas.parentElement.getBoundingClientRect().width;

            // Measure char width at a reference size to find the ratio
            ctx.font = "100px 'IBM Plex Mono', monospace";
            const refCharW = ctx.measureText('M').width;
            const charRatio = refCharW / 100;

            // Calculate font-size so that cols * charW = containerW
            fontSize = containerW / (cols * charRatio);
            charW = fontSize * charRatio;
            charH = fontSize * ASCII_LINE_HEIGHT;
            canvasW = Math.ceil(cols * charW);
            canvasH = Math.ceil(rows * charH);

            const dpr = window.devicePixelRatio || 1;
            asciiCanvas.width = canvasW * dpr;
            asciiCanvas.height = canvasH * dpr;
            asciiCanvas.style.width = canvasW + 'px';
            asciiCanvas.style.height = canvasH + 'px';
            ctx.scale(dpr, dpr);

            chars = [];
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const ch = lines[r][c] || ' ';
                    if (ch === ' ') continue;
                    chars.push({
                        ch,
                        col: c,
                        row: r,
                        x: c * charW,
                        y: (r + 1) * charH,
                        opacity: 0,
                        revealDelay: Math.random()
                    });
                }
            }

            revealed = false;
            revealStart = performance.now();
            if (!animId) tick(revealStart);
        }

        function getTextColor() {
            const theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'synthwave') return '#9cdcfe';
            return theme === 'dark' ? '#ffffff' : '#000000';
        }

        function tick(now) {
            const dpr = window.devicePixelRatio || 1;
            ctx.clearRect(0, 0, canvasW, canvasH);
            ctx.font = `${fontSize}px 'IBM Plex Mono', monospace`;
            ctx.textBaseline = 'bottom';

            const elapsed = now - revealStart;
            const color = getTextColor();

            for (let i = 0; i < chars.length; i++) {
                const p = chars[i];

                // Reveal
                if (!revealed) {
                    const charRevealTime = p.revealDelay * REVEAL_DURATION;
                    if (elapsed >= charRevealTime) {
                        const fadeProgress = Math.min(1, (elapsed - charRevealTime) / 300);
                        p.opacity = fadeProgress;
                    }
                } else {
                    p.opacity = 1;
                }

                if (p.opacity <= 0) continue;

                // Wave displacement
                const waveY = Math.sin(p.col * WAVE_FREQ + now * WAVE_SPEED) * WAVE_AMP;
                const waveX = Math.cos(p.row * WAVE_FREQ * 0.7 + now * WAVE_SPEED * 0.6) * WAVE_AMP * 0.4;

                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = color;
                ctx.fillText(p.ch, p.x + waveX, p.y + waveY);
            }

            ctx.globalAlpha = 1;

            if (!revealed && elapsed >= REVEAL_DURATION + 300) {
                revealed = true;
            }

            animId = requestAnimationFrame(tick);
        }

        reinitAscii = function() {
            cancelAnimationFrame(animId);
            animId = null;
            revealed = true;
            initAscii();
            chars.forEach(c => c.opacity = 1);
        };

        document.fonts.ready.then(() => {
            initAscii();
        });

        let asciiResizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(asciiResizeTimeout);
            asciiResizeTimeout = setTimeout(() => {
                cancelAnimationFrame(animId);
                animId = null;
                revealed = true;
                initAscii();
                chars.forEach(c => c.opacity = 1);
            }, 150);
        });
    }
});
