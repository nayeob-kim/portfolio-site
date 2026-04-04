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
        heroFit: 'contain',
        heroBg: '#D9D9D9',
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
            'images/projects/project-4/Interactive States 1-Updated.png',
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
        heroFit: 'contain',
        heroBg: '#000000',
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
        heroBg: '#ffffff',
        images: [
            'images/projects/project-5/Burn to Give 1-1-Updated.png',
            null,
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

    // --- Password Lock ---
    const LOCK_PASSWORD = 'portfolio2026';
    const lockContent = document.getElementById('lock-content');
    const bioText = document.getElementById('bio-text');
    const lockForm = document.getElementById('lock-form');
    const lockInput = document.getElementById('lock-input');
    const lockError = document.getElementById('lock-error');
    let pendingProjectId = null;

    function isUnlocked() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('unlock') === 'true') return true;
        return localStorage.getItem('portfolio_unlocked') === 'true';
    }

    function showLock(projectId) {
        pendingProjectId = projectId;
        viewHome.classList.add('active');
        viewWork.classList.remove('active');
        bioText.style.display = 'none';
        lockContent.style.display = 'block';
        if (lockError) lockError.classList.remove('visible');
        if (lockInput) { lockInput.value = ''; lockInput.focus(); }
        window.scrollTo(0, 0);
        if (reinitAscii) requestAnimationFrame(reinitAscii);
    }

    function hideLock() {
        lockContent.style.display = 'none';
        bioText.style.display = 'block';
    }

    function unlock() {
        localStorage.setItem('portfolio_unlocked', 'true');
        hideLock();
        if (pendingProjectId !== null) {
            showProject(pendingProjectId);
            pendingProjectId = null;
        }
    }

    if (lockForm) {
        lockForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (lockInput.value.trim().toLowerCase() === LOCK_PASSWORD) {
                unlock();
            } else {
                if (lockError) lockError.classList.add('visible');
                lockInput.value = '';
                lockInput.focus();
            }
        });
    }

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
        hideLock();
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

        if (!isUnlocked()) {
            showLock(projectId);
            closeSidebar();
            return;
        }

        currentView = 'work';
        currentProjectId = projectId;
        viewHome.classList.remove('active');
        viewWork.classList.add('active');
        hideLock();

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

    // --- Playground Modal ---
    const playgroundToggle = document.getElementById('playground-toggle');
    const playgroundOverlay = document.getElementById('playground-overlay');
    const playgroundClose = document.getElementById('playground-close');
    const playgroundMin = document.getElementById('playground-min');
    const playgroundMax = document.getElementById('playground-max');
    const playgroundWindow = document.querySelector('.playground-window');
    let reclampBg = null;

    function resetPlaygroundIcons() {
        if (playgroundMin) playgroundMin.innerHTML = '_';
        if (playgroundMax) playgroundMax.innerHTML = '&#9723;';
    }

    function openPlayground() {
        playgroundOverlay.classList.add('open');
        playgroundOverlay.classList.remove('minimized');
        playgroundWindow.classList.remove('maximized');
        document.body.style.overflow = 'hidden';
        resetPlaygroundIcons();
        closeSidebar();
        if (reclampBg) reclampBg();
    }

    function closePlayground() {
        playgroundOverlay.classList.remove('open', 'minimized');
        playgroundWindow.classList.remove('maximized');
        document.body.style.overflow = '';
        resetPlaygroundIcons();
    }

    if (playgroundToggle) {
        playgroundToggle.addEventListener('click', function(e) {
            e.preventDefault();
            openPlayground();
        });
    }

    if (playgroundClose) {
        playgroundClose.addEventListener('click', closePlayground);
    }

    if (playgroundMin) {
        playgroundMin.addEventListener('click', function() {
            var isMinimized = playgroundOverlay.classList.toggle('minimized');
            playgroundWindow.classList.remove('maximized');
            document.body.style.overflow = isMinimized ? '' : 'hidden';
            playgroundMin.innerHTML = isMinimized ? '<span class="restore-icon"></span>' : '_';
            if (playgroundMax) playgroundMax.innerHTML = '&#9723;';
            if (!isMinimized && reclampBg) reclampBg();
        });
    }

    if (playgroundMax) {
        playgroundMax.addEventListener('click', function() {
            playgroundWindow.classList.toggle('maximized');
            playgroundOverlay.classList.remove('minimized');
            document.body.style.overflow = 'hidden';
            playgroundMin.innerHTML = '_';
            playgroundMax.innerHTML = playgroundWindow.classList.contains('maximized')
                    ? '<span class="restore-icon"></span>'
                    : '&#9723;';
            if (reclampBg) reclampBg();
        });
    }

    if (playgroundOverlay) {
        let overlayDownTarget = null;
        let overlayDownX = 0, overlayDownY = 0;

        playgroundOverlay.addEventListener('mousedown', function(e) {
            overlayDownTarget = e.target;
            overlayDownX = e.clientX;
            overlayDownY = e.clientY;
        });

        playgroundOverlay.addEventListener('mouseup', function(e) {
            if (overlayDownTarget !== playgroundOverlay || e.target !== playgroundOverlay) return;
            var dx = e.clientX - overlayDownX;
            var dy = e.clientY - overlayDownY;
            if (Math.abs(dx) > 5 || Math.abs(dy) > 5) return;
            if (!playgroundOverlay.classList.contains('minimized')) {
                playgroundOverlay.classList.add('minimized');
                playgroundWindow.classList.remove('maximized');
                document.body.style.overflow = '';
                if (playgroundMin) playgroundMin.innerHTML = '<span class="restore-icon"></span>';
                if (playgroundMax) playgroundMax.innerHTML = '&#9723;';
            }
            overlayDownTarget = null;
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && playgroundOverlay.classList.contains('open')) {
                closePlayground();
            }
        });
    }

    // --- Playground Tray Touch Scroll (mobile) ---
    (function() {
        var tray = document.querySelector('.playground-tray');
        if (!tray) return;
        var startX, scrollStart, isScrolling;

        tray.addEventListener('touchstart', function(e) {
            if (e.touches.length !== 1) return;
            startX = e.touches[0].clientX;
            scrollStart = tray.scrollLeft;
            isScrolling = false;
        });

        tray.addEventListener('touchmove', function(e) {
            if (e.touches.length !== 1) return;
            var dx = startX - e.touches[0].clientX;
            if (!isScrolling && Math.abs(dx) > 8) isScrolling = true;
            if (isScrolling) {
                tray.scrollLeft = scrollStart + dx;
                e.stopPropagation();
            }
        });
    })();

    // --- Playground Sticker Buttons ---
    const playgroundBody = document.getElementById('playground-body');
    var bgOffsetX = 0, bgOffsetY = 0;
    const couchSticker = document.getElementById('couch-sticker');
    const couchItem = document.getElementById('couch-item');

    const bagSticker = document.getElementById('bag-sticker');
    const bagItem = document.getElementById('bag-item');
    var triggerBagChips = null;

    const plantSticker = document.getElementById('plant-sticker');
    const plantItem = document.getElementById('plant-item');

    const bilboSticker = document.getElementById('bilbo-sticker');
    const bilboItem = document.getElementById('bilbo-item');
    const tvSticker = document.getElementById('tv-sticker');
    const tvItem = document.getElementById('tv-item');

    function checkShowBagSticker() {
        if (bagSticker &&
            couchItem && couchItem.style.display === 'block' &&
            tvItem && tvItem.style.display === 'block') {
            bagSticker.style.display = '';
        }
    }

    var stickerMap = [
        { sticker: plantSticker, item: plantItem },
        { sticker: bilboSticker, item: bilboItem },
        { sticker: tvSticker, item: tvItem },
        { sticker: couchSticker, item: couchItem }
    ];

    var stickerDrag = null;
    var stickerStartX = 0, stickerStartY = 0;
    var stickerMoved = false;
    var itemZIndex = 10;

    function clientToCX(clientX, clientY) {
        var rect = playgroundBody.getBoundingClientRect();
        var centerX = rect.left + rect.width / 2;
        var centerY = rect.top + rect.height / 2;
        return {
            cx: clientX - centerX - bgOffsetX,
            cy: clientY - centerY - bgOffsetY
        };
    }

    function onStickerPlace(entry) {
        if (entry.sticker === couchSticker || entry.sticker === tvSticker) checkShowBagSticker();
        if (entry.sticker === bilboSticker) checkChipBubble();
    }

    function bindStickerEvents(entry) {
        if (!entry.sticker || !entry.item) return;

        entry.sticker.addEventListener('mousedown', function(e) {
            if (entry.item.style.display === 'block') return;
            stickerDrag = entry;
            stickerStartX = e.clientX;
            stickerStartY = e.clientY;
            stickerMoved = false;
            e.preventDefault();
        });

        entry.sticker.addEventListener('click', function() {
            if (stickerMoved) { stickerMoved = false; return; }
            if (entry.item.style.display === 'block') {
                entry.item.style.display = 'none';
                entry.item.style.opacity = '';
            } else {
                entry.item.style.display = 'block';
                entry.item.style.opacity = '';
                entry.item.style.zIndex = ++itemZIndex;
                if (entry.isBag) entry.item.src = 'images/playground/bag.png';
                entry.item.dataset.cx = '0';
                entry.item.dataset.cy = '0';
                entry.item.style.left = `calc(50% + ${bgOffsetX}px)`;
                entry.item.style.top = `calc(50% + ${bgOffsetY}px)`;
                onStickerPlace(entry);
            }
        });

        entry.sticker.addEventListener('touchstart', function(e) {
            if (entry.item.style.display === 'block' || e.touches.length !== 1) return;
            stickerDrag = entry;
            stickerStartX = e.touches[0].clientX;
            stickerStartY = e.touches[0].clientY;
            stickerMoved = false;
        }, { passive: true });
    }

    stickerMap.forEach(bindStickerEvents);

    function showStickerGhost(entry, clientX, clientY) {
        entry.item.style.display = 'block';
        entry.item.style.opacity = '0.6';
        entry.item.style.zIndex = ++itemZIndex;
        entry.item.classList.add('dragging');
        if (entry.isBag) entry.item.src = 'images/playground/bag.png';
        var pos = clientToCX(clientX, clientY);
        entry.item.dataset.cx = pos.cx;
        entry.item.dataset.cy = pos.cy;
        entry.item.style.left = `calc(50% + ${pos.cx + bgOffsetX}px)`;
        entry.item.style.top = `calc(50% + ${pos.cy + bgOffsetY}px)`;
    }

    window.addEventListener('mousemove', function(e) {
        if (!stickerDrag) return;
        var dx = e.clientX - stickerStartX;
        var dy = e.clientY - stickerStartY;
        if (!stickerMoved && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
            stickerMoved = true;
            showStickerGhost(stickerDrag, e.clientX, e.clientY);
        }
        if (stickerMoved) {
            var pos = clientToCX(e.clientX, e.clientY);
            stickerDrag.item.dataset.cx = pos.cx;
            stickerDrag.item.dataset.cy = pos.cy;
            stickerDrag.item.style.left = `calc(50% + ${pos.cx + bgOffsetX}px)`;
            stickerDrag.item.style.top = `calc(50% + ${pos.cy + bgOffsetY}px)`;
        }
    });

    window.addEventListener('mouseup', function() {
        if (!stickerDrag) return;
        if (stickerMoved) {
            stickerDrag.item.style.opacity = '';
            stickerDrag.item.classList.remove('dragging');
            onStickerPlace(stickerDrag);
        }
        stickerDrag = null;
    });

    window.addEventListener('touchmove', function(e) {
        if (!stickerDrag || e.touches.length !== 1) return;
        var dx = e.touches[0].clientX - stickerStartX;
        var dy = e.touches[0].clientY - stickerStartY;
        if (!stickerMoved && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
            stickerMoved = true;
            showStickerGhost(stickerDrag, e.touches[0].clientX, e.touches[0].clientY);
        }
        if (stickerMoved) {
            e.preventDefault();
            var pos = clientToCX(e.touches[0].clientX, e.touches[0].clientY);
            stickerDrag.item.dataset.cx = pos.cx;
            stickerDrag.item.dataset.cy = pos.cy;
            stickerDrag.item.style.left = `calc(50% + ${pos.cx + bgOffsetX}px)`;
            stickerDrag.item.style.top = `calc(50% + ${pos.cy + bgOffsetY}px)`;
        }
    }, { passive: false });

    window.addEventListener('touchend', function() {
        if (!stickerDrag) return;
        if (stickerMoved) {
            stickerDrag.item.style.opacity = '';
            stickerDrag.item.classList.remove('dragging');
            onStickerPlace(stickerDrag);
        }
        stickerDrag = null;
    });

    let chipsExist = false;
    let chipBubble = null;
    let chipBubbleTimer = null;

    function createChipBubble() {
        if (chipBubble) return;
        chipBubble = document.createElement('div');
        chipBubble.className = 'speech-bubble';
        chipBubble.innerHTML = '<span class="speech-text">Clean up!</span><img src="images/playground/speech.png?v=3" alt="Warning" draggable="false">';
        playgroundBody.appendChild(chipBubble);
    }

    function positionChipBubble() {
        if (!chipBubble || !playgroundBody) return;
        const chips = Array.from(playgroundBody.querySelectorAll('.playground-chip'));
        if (chips.length === 0) return;
        chips.sort(function(a, b) {
            return parseFloat(a.dataset.cx || 0) - parseFloat(b.dataset.cx || 0);
        });
        const mid = chips[Math.floor(chips.length / 2)];
        const cx = parseFloat(mid.dataset.cx || 0);
        const cy = parseFloat(mid.dataset.cy || 0);
        chipBubble.style.left = `calc(50% + ${cx + bgOffsetX + 20}px)`;
        chipBubble.style.top = `calc(50% + ${cy + bgOffsetY - mid.offsetHeight / 2 - 60}px)`;
    }

    function showChipBubble() {
        if (!chipBubble) createChipBubble();
        positionChipBubble();
        var bubbleImg = chipBubble.querySelector('img');
        if (bubbleImg && !bubbleImg.complete) {
            bubbleImg.onload = function() {
                if (chipBubble) chipBubble.classList.add('visible');
            };
        } else {
            chipBubble.classList.add('visible');
        }
        setTimeout(function() {
            hideChipBubble();
        }, 5000);
    }

    function hideChipBubble() {
        if (chipBubble) {
            chipBubble.classList.remove('visible');
            chipBubble.remove();
            chipBubble = null;
        }
        clearTimeout(chipBubbleTimer);
    }

    function checkChipBubble() {
        clearTimeout(chipBubbleTimer);
        const bilboVisible = bilboItem && bilboItem.style.display === 'block';
        const hasChips = playgroundBody && playgroundBody.querySelectorAll('.playground-chip').length > 0;
        if (bilboVisible && hasChips) {
            chipBubbleTimer = setTimeout(showChipBubble, 3000);
        } else {
            hideChipBubble();
        }
    }

    if (bagSticker && bagItem) {
        var bagEntry = { sticker: bagSticker, item: bagItem, isBag: true };
        stickerMap.push(bagEntry);
        bindStickerEvents(bagEntry);

        const chipSrcs = [
            'images/playground/chip1.png',
            'images/playground/chip2.png',
            'images/playground/chip3.png'
        ];

        function spawnChips() {
            const bagCX = parseFloat(bagItem.dataset.cx || 0);
            const bagCY = parseFloat(bagItem.dataset.cy || 0);
            const couchBottom = parseFloat(couchItem.dataset.cy || 0) + couchItem.offsetHeight / 2;
            const floorCY = couchBottom + 10;

            const count = 5;
            for (let i = 0; i < count; i++) {
                const chip = document.createElement('img');
                chip.src = chipSrcs[i % chipSrcs.length];
                chip.className = 'playground-item playground-chip';
                chip.draggable = false;
                chip.style.width = '24px';
                chip.style.imageRendering = 'pixelated';
                chip.style.pointerEvents = 'none';

                const startCX = bagCX;
                const startCY = bagCY - 20;
                chip.dataset.cx = startCX;
                chip.dataset.cy = startCY;
                chip.style.left = `calc(50% + ${startCX + bgOffsetX}px)`;
                chip.style.top = `calc(50% + ${startCY + bgOffsetY}px)`;

                playgroundBody.appendChild(chip);

                const vx = (Math.random() - 0.5) * 350;
                const vy = -(100 + Math.random() * 250);
                const rot = (Math.random() - 0.5) * 800;
                const gravity = 400 + Math.random() * 200;
                const startTime = performance.now();

                (function() {
                    requestAnimationFrame(function step(now) {
                        var t = (now - startTime) / 1000;
                        var cx = startCX + vx * t;
                        var cy = startCY + vy * t + 0.5 * gravity * t * t;
                        var landed = cy >= floorCY;
                        if (landed) cy = floorCY;

                        chip.dataset.cx = cx;
                        chip.dataset.cy = cy;
                        chip.style.left = `calc(50% + ${cx + bgOffsetX}px)`;
                        chip.style.top = `calc(50% + ${cy + bgOffsetY}px)`;
                        chip.style.transform = `translate(-50%, -50%) rotate(${rot * t}deg)`;

                        if (landed) { chip.style.pointerEvents = ''; return; }
                        requestAnimationFrame(step);
                    });
                })();
            }
        }

        const broomSticker = document.getElementById('broom-sticker');
        const broomItem = document.getElementById('broom-item');

        triggerBagChips = function() {
            bagItem.src = 'images/playground/bag-cumpled.png';
            chipsExist = true;
            spawnChips();
            if (broomSticker) broomSticker.style.display = '';
            checkChipBubble();
            setTimeout(function() {
                bagItem.src = 'images/playground/bag.png';
            }, 250);
        };

        bagItem.addEventListener('click', function(e) {
            e.preventDefault();
            triggerBagChips();
        });

        if (broomSticker && broomItem) {
            var broomEntry = { sticker: broomSticker, item: broomItem };
            stickerMap.push(broomEntry);
            bindStickerEvents(broomEntry);
        }
    }

    // --- Playground Draggable Items & Background Pan ---
    if (playgroundBody) {
        let dragItem = null;
        let dragStartX = 0, dragStartY = 0;
        let itemStartCX = 0, itemStartCY = 0;
        let dragMoved = false;

        let panningBg = false;
        let bgStartOffsetX = 0, bgStartOffsetY = 0;

        var bgImg = new Image();
        bgImg.src = 'images/playground/bg-expanded.png';
        var bgNaturalW = 0, bgNaturalH = 0;
        bgImg.onload = function() {
            bgNaturalW = bgImg.naturalWidth;
            bgNaturalH = bgImg.naturalHeight;
        };

        function clampBgOffset() {
            if (!bgNaturalW || !bgNaturalH) return;
            var containerW = playgroundBody.clientWidth;
            var containerH = playgroundBody.clientHeight;
            var renderedW = 1800;
            var renderedH = (bgNaturalH / bgNaturalW) * renderedW;
            var maxX = Math.max(0, (renderedW - containerW) / 2);
            var maxY = Math.max(0, (renderedH - containerH) / 2);
            bgOffsetX = Math.max(-maxX, Math.min(maxX, bgOffsetX));
            bgOffsetY = Math.max(-maxY, Math.min(maxY, bgOffsetY));
        }

        function applyBgPos() {
            clampBgOffset();
            playgroundBody.style.backgroundPosition = `calc(50% + ${bgOffsetX}px) calc(50% + ${bgOffsetY}px)`;
            updateAllItemPositions();
        }

        reclampBg = function() {
            requestAnimationFrame(applyBgPos);
        };

        function applyItemPos(item, cx, cy) {
            item.dataset.cx = cx;
            item.dataset.cy = cy;
            item.style.left = `calc(50% + ${cx + bgOffsetX}px)`;
            item.style.top = `calc(50% + ${cy + bgOffsetY}px)`;
        }

        function updateAllItemPositions() {
            var items = playgroundBody.querySelectorAll('.playground-item');
            for (var i = 0; i < items.length; i++) {
                var it = items[i];
                var cx = parseFloat(it.dataset.cx) || 0;
                var cy = parseFloat(it.dataset.cy) || 0;
                it.style.left = `calc(50% + ${cx + bgOffsetX}px)`;
                it.style.top = `calc(50% + ${cy + bgOffsetY}px)`;
            }
        }

        playgroundBody.addEventListener('mousedown', function(e) {
            const item = e.target.closest('.playground-item');
            if (e.target.closest('.playground-tray')) return;
            dragMoved = false;
            if (item) {
                dragItem = item;
                dragStartX = e.clientX;
                dragStartY = e.clientY;
                itemStartCX = parseFloat(item.dataset.cx) || 0;
                itemStartCY = parseFloat(item.dataset.cy) || 0;
                item.style.zIndex = ++itemZIndex;
                item.classList.add('dragging');
            } else {
                panningBg = true;
                dragStartX = e.clientX;
                dragStartY = e.clientY;
                bgStartOffsetX = bgOffsetX;
                bgStartOffsetY = bgOffsetY;
                playgroundBody.style.cursor = 'grabbing';
            }
            e.preventDefault();
        });

        function checkBroomSweep() {
            var broom = document.getElementById('broom-item');
            if (!broom || !dragItem || dragItem !== broom || broom.style.display === 'none') return;
            var broomRect = broom.getBoundingClientRect();
            const chips = playgroundBody.querySelectorAll('.playground-chip');
            chips.forEach(function(chip) {
                const chipRect = chip.getBoundingClientRect();
                if (broomRect.left < chipRect.right &&
                    broomRect.right > chipRect.left &&
                    broomRect.top < chipRect.bottom &&
                    broomRect.bottom > chipRect.top) {
                    chip.remove();
                }
            });
            var remaining = playgroundBody.querySelectorAll('.playground-chip');
            if (chipsExist && remaining.length === 0) {
                chipsExist = false;
                hideChipBubble();
            }
        }

        window.addEventListener('mousemove', function(e) {
            if (dragItem) {
                dragMoved = true;
                const cx = itemStartCX + (e.clientX - dragStartX);
                const cy = itemStartCY + (e.clientY - dragStartY);
                applyItemPos(dragItem, cx, cy);
                checkBroomSweep();
            } else if (panningBg) {
                bgOffsetX = bgStartOffsetX + (e.clientX - dragStartX);
                bgOffsetY = bgStartOffsetY + (e.clientY - dragStartY);
                applyBgPos();
            }
        });

        window.addEventListener('mouseup', function() {
            if (dragItem) {
                if (dragMoved && dragItem === bagItem && triggerBagChips) triggerBagChips();
                dragItem.classList.remove('dragging');
                dragItem = null;
            }
            if (panningBg) {
                panningBg = false;
                playgroundBody.style.cursor = '';
            }
        });

        playgroundBody.addEventListener('touchstart', function(e) {
            if (e.target.closest('.playground-tray') || e.touches.length !== 1) return;
            const item = e.target.closest('.playground-item');
            dragMoved = false;
            if (item) {
                dragItem = item;
                dragStartX = e.touches[0].clientX;
                dragStartY = e.touches[0].clientY;
                itemStartCX = parseFloat(item.dataset.cx) || 0;
                itemStartCY = parseFloat(item.dataset.cy) || 0;
                item.style.zIndex = ++itemZIndex;
                item.classList.add('dragging');
            } else {
                panningBg = true;
                dragStartX = e.touches[0].clientX;
                dragStartY = e.touches[0].clientY;
                bgStartOffsetX = bgOffsetX;
                bgStartOffsetY = bgOffsetY;
            }
        }, { passive: true });

        playgroundBody.addEventListener('touchmove', function(e) {
            if (e.touches.length !== 1) return;
            if (dragItem) {
                dragMoved = true;
                const cx = itemStartCX + (e.touches[0].clientX - dragStartX);
                const cy = itemStartCY + (e.touches[0].clientY - dragStartY);
                applyItemPos(dragItem, cx, cy);
                checkBroomSweep();
            } else if (panningBg) {
                bgOffsetX = bgStartOffsetX + (e.touches[0].clientX - dragStartX);
                bgOffsetY = bgStartOffsetY + (e.touches[0].clientY - dragStartY);
                applyBgPos();
            }
            e.preventDefault();
        }, { passive: false });

        playgroundBody.addEventListener('touchend', function() {
            if (dragItem) {
                if (dragMoved && dragItem === bagItem && triggerBagChips) triggerBagChips();
                dragItem.classList.remove('dragging');
                dragItem = null;
            }
            if (panningBg) {
                panningBg = false;
            }
        });
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
        workHero.classList.remove('work-hero--gif', 'work-hero--contain');
        workHero.style.backgroundColor = '';
        if (project.heroGif) {
            workHero.classList.add('work-hero--gif');
            workHero.innerHTML = `<img src="${project.heroGif}" alt="${project.title}">`;
        } else if (project.images && project.images.length > 0) {
            workHero.innerHTML = renderMediaElement(project.images[0], project.title);
            if (project.heroFit === 'contain') {
                workHero.classList.add('work-hero--contain');
                if (project.heroBg) {
                    workHero.style.backgroundColor = project.heroBg;
                }
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
                    const src = project.images[imageIndex];
                    sectionsHtml += `<div class="work-content-image">${renderMediaElement(src, section.title)}</div>`;
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

        const REVEAL_DURATION = 1200;
        const DRIFT_AMP = 1;
        const DRIFT_SPEED = 0.0008;

        const GLITCH_CHARS = '@#%&*+=!?~^$.:;';
        const GLITCH_DURATION = 900;
        const GLITCH_SCATTER = 10;
        let glitching = false;
        let glitchStart = 0;

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
                        revealDelay: Math.random(),
                        glitchOffX: (Math.random() - 0.5) * 2 * GLITCH_SCATTER,
                        glitchOffY: (Math.random() - 0.5) * 2 * GLITCH_SCATTER,
                        glitchChar: GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)],
                        glitchDelay: Math.random()
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

                let drawX = p.x;
                let drawY = p.y;
                let drawCh = p.ch;
                let drawAlpha = p.opacity;

                if (revealed && !glitching) {
                    var t = now * DRIFT_SPEED;
                    var seedX = p.col * 0.13 + p.row * 0.07;
                    var seedY = p.col * 0.09 + p.row * 0.15;
                    drawX += Math.sin(t + seedX * 6.28) * Math.cos(t * 0.7 + seedY * 3.14) * DRIFT_AMP;
                    drawY += Math.cos(t * 0.8 + seedY * 6.28) * Math.sin(t * 0.6 + seedX * 3.14) * DRIFT_AMP;
                }

                if (glitching) {
                    const gt = (now - glitchStart) / GLITCH_DURATION;
                    const scatter = gt < 0.4
                        ? Math.min(1, gt / 0.25)
                        : Math.max(0, 1 - (gt - 0.4) / 0.6);

                    drawX += p.glitchOffX * scatter;
                    drawY += p.glitchOffY * scatter;

                    if (scatter > 0.5 && p.glitchDelay > 0.65) {
                        drawCh = p.glitchChar;
                    }

                    drawAlpha *= (0.7 + 0.3 * (1 - scatter));
                }

                ctx.globalAlpha = drawAlpha;
                ctx.fillStyle = color;
                ctx.fillText(drawCh, drawX, drawY);
            }

            ctx.globalAlpha = 1;

            if (!revealed && elapsed >= REVEAL_DURATION + 300) {
                revealed = true;
            }

            if (glitching && (now - glitchStart) >= GLITCH_DURATION) {
                glitching = false;
            }

            animId = requestAnimationFrame(tick);
        }

        asciiCanvas.style.cursor = 'pointer';
        asciiCanvas.addEventListener('click', function() {
            if (!glitching && revealed) {
                glitching = true;
                glitchStart = performance.now();
                chars.forEach(p => {
                    p.glitchOffX = (Math.random() - 0.5) * 2 * GLITCH_SCATTER;
                    p.glitchOffY = (Math.random() - 0.5) * 2 * GLITCH_SCATTER;
                    p.glitchChar = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
                    p.glitchDelay = Math.random();
                });
            }
        });

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
            asciiResizeTimeout = setTimeout(reinitAscii, 150);
        });
    }
});
