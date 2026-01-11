// Add scrolled class to nav when page is scrolled
const nav = document.querySelector('nav');
function updateNavScroll() {
    if (nav) {
        if (window.scrollY > 0) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
}

// Check on load
updateNavScroll();

// Check on scroll
window.addEventListener('scroll', updateNavScroll);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Modal functionality
const modal = document.getElementById('project-modal');

// Project data
const projects = {
    1: {
        title: 'Order Summary',
        description: 'The optimization of the Order Summary UI/UX focused on enhancing clarity and scalability across content and localizations. Key work involved redesigning the line-item layout for price scannability, implementing a systematic token-based spacing strategy for the money line to support complex tax disclosures, and utilizing AI tools for high-fidelity internal asset generation.',
        images: [
            'images/projects/project-1/Order Summary 1.png',
            'images/projects/project-1/Order Summary 2.png',
            'images/projects/project-1/Order Summary 3.png',
            'images/projects/project-1/Order Summary 4.png'
        ],
        tags: ['UX Design', 'UI Design', 'AI Image Generation'],
        sections: [
            {
                title: '1. Resource List: Layout and Text Alignment',
                content: 'The layout was revised to optimize the visual structure of the product line items in the Order Summary.',
                bullets: [
                    'Vertical Alignment: Ensured the product thumbnail aligns vertically with the product name and details, creating a strong visual link between the product image and its description.',
                    'Price Priority: Implemented a text-bottom-align rule for prices with the product name for enhanced readability and scannability. This ensures prices stack cleanly, regardless of long product names or detailed, wrapping descriptions.',
                    'Scalability: The design can accommodate varying content lengths, while guaranteeing the price column remains easy to scan, which improves user processing speed during checkout.'
                ]
            },
            {
                title: '2. Product Thumbnail Sourcing (Midjourney)',
                content: 'To create a high-fidelity demonstration of the layout\'s alignment rules, Midjourney was utilized for internal use to generate clean, consistent, and distraction-free product thumbnails. This ensured the visual content supported the design goal, allowing stakeholders to focus solely on how the layout handled the vertical relationship between the image, product name, and details.'
            },
            {
                title: '3. Money Line Optimization: Precision Spacing',
                content: 'The implementation involved a systematic vertical optimization of the Order Summary\'s totals section. We leveraged the existing design system spacing tokens to precisely govern the space between line items.',
                intro: 'This token-based strategy was critical for establishing a clear visual hierarchy, ensuring:',
                bullets: [
                    'Legibility: Consistent vertical rhythm separates related monetary entries (discounts, gift cards) from totals.',
                    'Scalability for Localization: Sufficient vertical clearance was specifically designed to accommodate variable and multi-line text, such as detailed tax disclosures even in localized checkouts, without crowding the final Total.'
                ],
                conclusion: 'The resulting high-precision spacing dramatically improves the checkout by making the financial summary instantly scannable and trustworthy.'
            }
        ],
        retrospective: {
            title: 'Retrospective & Key Learnings',
            content: 'This project taught me to balance extreme detail orientation with necessary layout limitations to ensure a globally scalable interface:',
            bullets: [
                'Sweating the Details & Prioritization: I learned to prioritize what matters most in a complex layout, focusing on the "sweat the details" mentality (like pixel-level spacing and strict alignment) while accepting layout limitations (like price column non-wrapping) to preserve data integrity and user trust.',
                'Scalability for Global Audiences: I gained crucial experience in designing for the broad scalability required in e-commerce, ensuring the layout fluidly accommodates localization needs and diverse use cases, such as variable text, complex tax disclosures, and different discount formats.'
            ]
        }
    },
    2: {
        title: 'Payment in Checkout',
        description: 'The Payment in Checkout flow was systematized, focusing on conversion, trust, and legal compliance. I established strict content models for payment methods and disclaimers, reduced friction by optimizing third-party redirect patterns for density and speed, and governed all \'Pay now\' area content. Solutions were validated via functional code prototypes to ensure technical feasibility and scalability.',
        images: [
            'images/projects/project-2/Payment in Checkout 1.png',
            'images/projects/project-2/Payment in Checkout 2.png',
            'images/projects/project-2/Payment in Checkout 3.png'
        ],
        tags: ['UX Design', 'UI Design', 'Vibe-coding'],
        sections: [
            {
                title: '1. Payment Methods: Content Model and Standardization',
                content: 'Recognizing the criticality of the Payment method selection within the checkout flow, standardized content models were established to optimize user experience and build buyer trust. The core objective was to streamline consistency and set clear user expectations across all payment options. This required defining clear rules for how payment methods are displayed, including the placement of the method name, critical supplementary product description (like installment options), and the corresponding logo, to ensure every option adheres to a predictable pattern. This systematic approach helps minimize cognitive load and maintains a highly polished, unified design throughout the entire payment section.'
            },
            {
                title: '2. Third-Party Redirects: Vertical Space and Affordance',
                content: 'The existing pattern for third-party payment methods, which required a page redirect, presented challenges related to unnecessary cognitive load and inefficient vertical space usage. The pattern used lengthy descriptive copy and large, outdated iconography to display the redirect message, pushing the critical \'Pay now\' button too far down the page. To increase checkout density and accelerate the purchase funnel, the design solution involved removing the message entirely from the Payment section. Instead, a more concise redirect message was strategically placed below the \'Pay now\' button. This new placement, while shifting the proximity away from the payment method itself, still guides buyers unfamiliar with third-party redirects upon the key action moment, resulting in a significant reduction in vertical space and a cleaner, more polished checkout experience.'
            },
            {
                title: '3. Pay Now Disclaimers: Legal Compliance and Standardization',
                content: 'The \'Pay now\' button is the final, most critical action in the checkout flow. The area immediately surrounding it is highly valuable, yet it is often complicated by mandatory legal disclosures and policy language that varies based on the payment method or third-party extension (as seen across Guest Checkout and Shop Pay). To maintain the button\'s prominence while ensuring compliance, a content model was developed to audit, standardize, and govern all possible content appearing in this space. This effort involved a detailed analysis to determine optimal placement, structure, and consistent use of content that met all legal requirements without creating friction or visual clutter near the purchase completion point. This solution was validated using a functional code prototype (built with Cursor along with Figma MCP) to audit the current state against the ideal state and confirm technical feasibility across all platforms.'
            }
        ],
        retrospective: {
            title: 'Retrospective & Key Learnings',
            content: 'This project taught me the immense leverage of defining strict content models and governing principles early on in high-stakes conversion areas, and the necessity of validating design solutions with technical prototypes:',
            bullets: [
                'Systematic Constraint and Consistency: The primary lesson was the value of defining strict content models and governing principles to manage complexity. This standardization, applied to payment methods and variable legal content, ensured consistency at scale across different checkout flows (e.g., Guest vs. Shop Pay), balancing ideal UX with complex business and legal needs.',
                'Technical Validation and Friction Reduction: Tackling high-impact, high-risk areas—like the third-party redirect pattern and the critical \'Pay now\' space—reinforced the need for technical validation. Utilizing functional code prototypes (built with Cursor and Figma MCP) proved invaluable for auditing the current state against the ideal state, demonstrating technical feasibility, and achieving streamlined solutions.'
            ]
        }
    },
    3: {
        title: 'OTP Component',
        description: 'Standardized verification flows were established through the creation of a scalable OTP component, balancing immediate Payment team needs with long-term system reusability. Following an extensive research and audit, a flexible property was designed, supported by UX guidance to ensure a polished end-to-end checkout experience.',
        images: [
            'images/projects/project-3/OTP Component 1.png',
            'images/projects/project-3/OTP Component 2.png',
            'images/projects/project-3/OTP Component 3.png'
        ],
        tags: ['Research', 'UX Design', 'UI Design'],
        sections: [
            {
                title: '1. Research and Audit',
                content: 'Standard text field components were identified as suboptimal for the high-friction verification process, leading to the requirement for a dedicated OTP (One-Time Password) component. To support the specific needs of the Payment and Customer Accounts teams, a comprehensive audit was performed on both internal patterns and industry-leading examples, including Apple HIG, Uber, and modern UI libraries like Shaden and Mantine. This phase focused on scoping requirements through cross-functional collaboration, ensuring the solution aligned with established user mental models rather than reinventing familiar patterns. This research-driven approach provided a foundation for a component that streamlines requirements while introducing specific improvements for account security and checkout flow.'
            },
            {
                title: '2. Properties and System Scalability',
                content: 'The design of the OTP component was driven by close collaboration with the Payment team, who provided the specific requirements for masked functionality, variable input types, and flexible field counts. A key priority was striking a balance between delivering these immediate needs quickly and ensuring the component was built as a scalable, reusable asset for future use cases across Checkout. The resulting architecture features two sizes for mobile and desktop optimization, support for numeric and alphanumeric inputs, and a robust set of interaction states—default, disabled, and error. By fine-tuning these properties with the engineering team, we ensured the component delivered a smooth, polished interaction that remains highly adaptable for any verification flow.'
            },
            {
                title: '3. Holistic Implementation and UX Guidance',
                content: 'Beyond the core component design and development, the Design System team ensures high-quality implementation through comprehensive UX guidance. UX recommendations and best practices were provided to the Payment team, offering an expert second opinion on the end-to-end verification journey. This effort included optimizing interaction patterns outside the immediate component—such as the seamless transition to the verification modal—and refining supporting elements like instructional copy, \'resend code\' logic, and loading states. By delivering detailed specifications for modal behavior and error handling (illustrated in the \'Pay with Blik\' sequence), a cohesive and frictionless user experience was maintained throughout the entire checkout flow.'
            }
        ],
        retrospective: {
            title: 'Retrospective & Key Learnings',
            content: 'This project highlighted the importance of cross-functional alignment and the value of design stewardship in ensuring both system scalability and high-quality implementation:',
            bullets: [
                'Requirement Alignment and Scalability: Success required intensive communication with stakeholder teams to align on immediate functional requirements while maintaining a focus on future scalability. Striking a balance between building a streamlined solution and a reusable library asset ensured the component could support diverse needs across the organization.',
                'Design Stewardship and Influence: Serving as a strategic partner to the Payment team provided opportunities to influence the broader user journey beyond the component itself. Comprehensive UX guidance—covering flow optimizations and instructional copy—led to a collaborative rethinking of the verification sequence, directly improving the overall user experience.',
                'Technical Craft and Collaboration: Deeply collaborating with developers to \'sweat the details\' of interaction design was critical for the final outcome. This involvement in fine-tuning states, transitions, and loading behaviors ensured the component delivered a polished, professional experience that met both design and technical standards.'
            ]
        }
    },
    4: {
        title: 'Interactive States',
        description: 'Interactive states across the component library were audited and standardized to elevate accessibility and visual affordance. Focus states for selection controls and buttons were refined for reliability, while the introduction of a pressed state provided stronger interaction feedback.',
        images: [
            'images/projects/project-4/Interactive States 1.png',
            'images/projects/project-4/Interactive States 2.png',
            'images/projects/project-4/Interactive States 3.png'
        ],
        tags: ['UX Design', 'UI Design', 'Interaction Design'],
        sections: [
            {
                title: '1. Selection Controls: Focus State Audit and Standardization',
                content: 'A comprehensive audit of interactive components—including checkboxes, switches, and radio buttons—identified inconsistencies in focus state styling that hindered accessibility. To ensure a reliable experience for buyers with accessibility needs, focus rings were standardized across all selection controls. This systematic refinement elevated the design system\'s quality by providing clear, predictable visual cues for keyboard navigation, ensuring that focus states are prominent and consistent regardless of the component type or state.'
            },
            {
                title: '2. Button Architecture: Accessibility and Tone Refinement',
                content: 'As the most critical components within the checkout flow, buttons were evaluated through a targeted audit to optimize focus states for both standard and critical tones. Modifications were made to the focus rings to ensure high visibility and contrast across different variants, such as primary, secondary, and critical (red) buttons. By fine-tuning these states, the components adhere to accessibility requirements while maintaining a cohesive visual language, ensuring that high-stakes actions remain identifiable and navigable for all users.'
            },
            {
                title: '3. Interaction Elevation: Affordance and Pressed States',
                content: 'To improve the tactile feel and visual feedback of the interface, button interactions were elevated through the introduction of a dedicated pressed state. This addition provides stronger affordance during user clicks or taps, bridging the gap between rest and hover states with a clear reactive moment. By defining a specific visual shift for the "pressed" state, the system provides immediate confirmation of user intent, resulting in a more responsive and polished interaction pattern across the entire product ecosystem.'
            }
        ],
        retrospective: {
            title: 'Retrospective & Key Learnings',
            content: 'This project underscored the value of systematic consistency and technical precision in creating an accessible, high-performance interface that functions reliably for all users:',
            bullets: [
                'Foundation of Navigability and Quality: Standardizing focus rings across selection controls established accessibility as a core pillar of design quality, ensuring the system is inherently navigable for users relying on keyboard or assistive technology. This consistency across checkboxes, switches, and radio buttons provides predictable visual cues that enhance the overall usability of the interface.',
                'Systemic Robustness in High-Stakes Actions: The evaluation of button variants highlighted the necessity of maintaining accessibility across a multi-tone system, ensuring even critical-action buttons meet accessibility requirements. These refinements increased the robustness of the checkout flow.',
                'Tactile Affordance and User Trust: The introduction of a dedicated pressed state provided essential micro-interaction feedback that reinforces user intent and creates a more tactile, "finished" feeling. This immediate visual confirmation builds user trust and elevates the perceived quality of the entire checkout.'
            ]
        }
    },
    5: {
        title: 'Design System Stewardship & Documentation',
        description: 'Figma libraries were maintained through changelogs and Slack messages. Technical documentation on shopify.dev was updated with refined properties and best practices. Visual assets were also developed to educate the ecosystem on Checkout Extensions.',
        images: [
            'images/projects/project-5/Design System Stewardship & Documentation 1.png',
            'images/projects/project-5/Design System Stewardship & Documentation 2.png',
            'images/projects/project-5/Design System Stewardship & Documentation 3.png'
        ],
        tags: ['Research', 'UX Design', 'UI Design', 'Content Writing', 'Vibe-coding'],
        sections: [
            {
                title: '1. Library Governance: Figma Maintenance and Internal Alignment',
                content: 'Ongoing maintenance of internal and external Figma UI libraries ensured parity across design and development environments. To improve transparency and tracking, a systematic changelog was initiated to document all design system updates. Communication was streamlined through proactive Slack announcements to the design organization, ensuring all stakeholders remained aligned on the latest components. Additionally, expert guidance was provided to internal designers contributing to the library, maintaining high standards for component architecture and system integrity.'
            },
            {
                title: '2. Technical Documentation: UI Component Standards',
                content: 'The UI component documentation on shopify.dev was updated as a primary resource for both internal teams and third-party developers. In collaboration with the engineering team, a comprehensive list of properties and technical specifications was developed to ensure clarity for external implementation. Guidance focused on illustrating best practices and diverse use cases for each component, helping third-party developers navigate their requirements and needs. To maintain a high standard of communication across the entire library, AI tools were integrated into the documentation process. This approach improved the technical writing efficiency and ensured that the shopify.dev site remained professional and easy to digest for a broader audience.'
            },
            {
                title: '3. Ecosystem Advocacy: Educational Content and Marketing Support',
                content: 'Strategic visual and video assets were developed for marketing blog posts to promote and educate the developer ecosystem on Checkout Extensions. These assets effectively communicated the core concepts and functionality of extensions within the checkout environment, bridging the gap between technical capability and developer awareness. By providing high-fidelity visual context and demonstrations, these efforts helped educate the broader developer community on how to build high-converting, personalized checkout experiences using the extension framework.'
            }
        ],
        retrospective: {
            title: 'Retrospective & Key Learnings',
            content: 'This project demonstrated the importance of clear communication channels and educational documentation in scaling a design system across a global developer ecosystem:',
            bullets: [
                'Transparency through Governance: The implementation of changelogs and dedicated Slack communication channels established a culture of transparency, ensuring that system updates were predictable and easily tracked by the design and engineering organizations. Providing direct expertise for internal contributions further reinforced the system\'s quality and fostered a collaborative environment for designers.',
                'Scalability of Developer Education: Maintaining a robust documentation site provides the external developers with clear properties, use case illustrations, and best practices. Utilizing AI tools to refine these materials ensured that technical standards remained professional and easy to digest for a broader audience.',
                'Visual Storytelling as a Growth Lever: Collaborating with marketing to produce high-quality visuals and videos for developer-facing blogs underscored the power of visual storytelling in product advocacy. These assets simplified complex technical concepts, making the potential of Checkout Extensions more tangible and encouraging developer adoption through clearer education.'
            ]
        }
    }
};

// Function to open project modal
function openProjectModal(projectId, clickedCard) {
    const project = projects[projectId];
    if (!project) return;
    
    // Cancel any pending initialization
    if (initTextToSpeechTimeout) {
        clearTimeout(initTextToSpeechTimeout);
        initTextToSpeechTimeout = null;
    }
    
    // Stop any ongoing speech from previous project - cancel immediately and reset state
    if (speechSynthesis) {
        // Cancel any ongoing speech - this resets paused state
        speechSynthesis.cancel();
        // Clear current utterance reference immediately
        currentUtterance = null;
        // Small delay to ensure cancellation is processed
        setTimeout(() => {
            // Force reset paused state by canceling again if needed
            if (speechSynthesis.paused || speechSynthesis.speaking) {
                speechSynthesis.cancel();
            }
        }, 50);
    }
    
    // Clear any intervals
    if (wordHighlightInterval) {
        clearInterval(wordHighlightInterval);
        wordHighlightInterval = null;
    }
    if (scrubberUpdateInterval) {
        clearInterval(scrubberUpdateInterval);
        scrubberUpdateInterval = null;
    }
    
    // Reset speech state completely
    isPlaying = false;
    currentWordIndex = 0;
    textElements = [];
    allWords = [];
    userHasScrolled = false;
    isScrubbing = false;
    programmaticScroll = false;
    lastHighlightedElement = null;
    currentUtterance = null;
    speechStartTime = null;
    // Keep calibratedWordsPerSecond across projects (it helps with consistency)
    
    // Store current project ID for duration tracking
    window.currentProjectId = projectId;

    const modalBody = document.getElementById('modal-body');
    const modalContent = document.querySelector('.modal-content');
    
    // Create modal content
    let imagesHTML = '';
    project.images.forEach((img, index) => {
        imagesHTML += `<img src="${img}" alt="${project.title} ${index + 1}" style="width: 100%; margin-bottom: 1rem; border-radius: 10px;">`;
    });

    let tagsHTML = '';
    project.tags.forEach(tag => {
        tagsHTML += `<span class="tag">${tag}</span>`;
    });

    // Build sections HTML if they exist
    let sectionsHTML = '';
    if (project.sections && project.sections.length > 0) {
        // Image 1: before first section
        if (project.images[0]) {
            // Add cache-busting parameter to force reload of updated images
            const imageSrc = `${project.images[0]}?v=${Date.now()}`;
            sectionsHTML += `<img src="${imageSrc}" alt="${project.title}" class="modal-section-image">`;
        }
        
        project.sections.forEach((section, index) => {
            let bulletsHTML = '';
            if (section.bullets && section.bullets.length > 0) {
                bulletsHTML = '<ul class="modal-section-bullets">';
                section.bullets.forEach(bullet => {
                    bulletsHTML += `<li>${bullet}</li>`;
                });
                bulletsHTML += '</ul>';
            }
            
            let conclusionHTML = '';
            if (section.conclusion) {
                conclusionHTML = `<p class="modal-section-conclusion">${section.conclusion}</p>`;
            }
            
            sectionsHTML += `
                <div class="modal-section">
                    <h3 class="modal-section-title">${section.title}</h3>
                    <p class="modal-section-content">${section.content}</p>
                    ${section.intro ? `<p class="modal-section-intro">${section.intro}</p>` : ''}
                    ${bulletsHTML}
                    ${conclusionHTML}
                </div>
            `;
            
            // Images 2, 3, 4: after sections 1, 2 respectively
            // Image 4 appears first, then Image 3 (both after section 2)
            if (index === 1) {
                // Image 4 first after section 2
                if (project.images[3]) {
                    const imageSrc = `${project.images[3]}?v=${Date.now()}`;
                    sectionsHTML += `<img src="${imageSrc}" alt="${section.title}" class="modal-section-image">`;
                }
                // Image 3 right after Image 4
                if (project.images[index + 1]) {
                    const imageSrc = `${project.images[index + 1]}?v=${Date.now()}`;
                    // Add special class for Interactive States project image 3 to enable animation
                    const specialClass = (projectId === '4' && project.images[index + 1].includes('Interactive States 3')) ? 'interactive-states-demo' : '';
                    sectionsHTML += `<img src="${imageSrc}" alt="${section.title}" class="modal-section-image ${specialClass}">`;
                }
            } else if (index === 0 && project.images[index + 1]) {
                // Image 2 after section 1 only
                const imageSrc = `${project.images[index + 1]}?v=${Date.now()}`;
                sectionsHTML += `<img src="${imageSrc}" alt="${section.title}" class="modal-section-image">`;
            }
            // No image after section 3 (index === 2)
        });
    } else {
        // Fallback to old structure if no sections
        sectionsHTML = `<div class="modal-images">${imagesHTML}</div>`;
    }
    
    // Build retrospective HTML if it exists
    let retrospectiveHTML = '';
    if (project.retrospective) {
        let retrospectiveBulletsHTML = '';
        if (project.retrospective.bullets && project.retrospective.bullets.length > 0) {
            retrospectiveBulletsHTML = '<ul class="modal-section-bullets">';
            project.retrospective.bullets.forEach(bullet => {
                retrospectiveBulletsHTML += `<li>${bullet}</li>`;
            });
            retrospectiveBulletsHTML += '</ul>';
        }
        
        retrospectiveHTML = `
            <div class="modal-divider"></div>
            <div class="modal-section">
                <h3 class="modal-retrospective-title">${project.retrospective.title}</h3>
                <p class="modal-section-content">${project.retrospective.content}</p>
                ${retrospectiveBulletsHTML}
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-header-left">
                <h2 class="modal-title">${project.title}</h2>
                <div class="modal-header-bottom">
                    <div class="modal-pills">
                        ${tagsHTML}
                    </div>
                </div>
                <div class="modal-audio-controls">
                    <span class="modal-duration" id="modal-duration"></span>
                    <span class="modal-duration-separator">·</span>
                    <button class="modal-play-button" id="modal-play-button" aria-label="Play audio" aria-pressed="false" type="button">
                        <img src="images/icons/play-circle.svg?v=2" alt="" class="play-icon" aria-hidden="true">
                        <img src="images/icons/pause-circle.svg?v=2" alt="" class="pause-icon" style="display: none;" aria-hidden="true">
                    </button>
                    <div class="modal-scrubber-container" id="modal-scrubber-container" style="display: none;">
                        <div class="modal-scrubber-track" 
                             role="slider" 
                             id="modal-scrubber-track"
                             aria-label="Audio playback position"
                             aria-valuemin="0"
                             aria-valuemax="100"
                             aria-valuenow="0"
                             aria-valuetext="0%"
                             tabindex="0">
                            <div class="modal-scrubber-progress" id="modal-scrubber-progress">
                                <div class="modal-scrubber-handle" id="modal-scrubber-handle" aria-hidden="true"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="close" aria-label="Close">
                <img src="images/icons/x.svg" alt="Close">
            </button>
        </div>
        <p class="modal-description">${project.description}</p>
        ${sectionsHTML}
        ${retrospectiveHTML}
    `;

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Reset modal content scroll position to top (page position stays the same)
    if (modalContent) {
        modalContent.scrollTop = 0;
    }
    
    // Fade in backdrop
    requestAnimationFrame(() => {
        modal.classList.add('show');
    });
    
    // Animation: Subtle slide up from bottom
    if (modalContent) {
        // Set initial state - slightly below final position
        modalContent.style.transform = 'translateY(20px)';
        modalContent.style.opacity = '0';
        
        // Force reflow
        modalContent.offsetHeight;
        
        // Animate to final state - very smooth, gentle easing
        requestAnimationFrame(() => {
            modalContent.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease-out';
            modalContent.style.transform = 'translateY(0)';
            modalContent.style.opacity = '1';
        });
    }
    
    // Add scroll listener to show/hide scrollbar and shrink header
    const modalHeader = document.querySelector('.modal-header');
    if (modalContent && modalHeader) {
        const SCROLL_THRESHOLD = 20; // Pixels scrolled before header resizes
        
        let lastScrollTop = modalContent.scrollTop;
        let scrollTimeout = null;
        
        function handleModalScroll() {
            const scrollTop = modalContent.scrollTop;
            
            // Detect if this is a user-initiated scroll (not programmatic)
            // Only check if programmaticScroll flag is false (meaning user initiated)
            if (!programmaticScroll && isPlaying) {
                const scrollDelta = Math.abs(scrollTop - lastScrollTop);
                // If scroll delta is significant and not from our programmatic scroll, user scrolled
                if (scrollDelta > 3) {
                    userHasScrolled = true;
                }
            }
            lastScrollTop = scrollTop;
            
            // Show/hide scrollbar
            modalContent.classList.add('scrolling');
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
                modalContent.classList.remove('scrolling');
            }, 500); // Hide scrollbar 500ms after scrolling stops
            
            // Resize header when scrolled
            if (scrollTop > SCROLL_THRESHOLD) {
                modalHeader.classList.add('scrolled');
            } else {
                modalHeader.classList.remove('scrolled');
            }
        }
        
        // Detect user-initiated scrolling via wheel and touch events
        // These fire BEFORE the scroll event, so we can catch user intent immediately
        // Wheel and touch events are ALWAYS user-initiated, so we don't need to check programmaticScroll
        function handleUserWheel(e) {
            if (isPlaying) {
                userHasScrolled = true;
                // Cancel any ongoing programmatic scroll immediately
                programmaticScroll = false;
                // Stop any smooth scrolling animation by jumping to current position
                const currentScroll = modalContent.scrollTop;
                modalContent.scrollTo({ top: currentScroll, behavior: 'auto' });
            }
        }
        
        function handleUserTouch(e) {
            if (isPlaying) {
                userHasScrolled = true;
                // Cancel any ongoing programmatic scroll immediately
                programmaticScroll = false;
                // Stop any smooth scrolling animation by jumping to current position
                const currentScroll = modalContent.scrollTop;
                modalContent.scrollTo({ top: currentScroll, behavior: 'auto' });
            }
        }
        
        // Also listen for mousedown on scrollbar (if user drags scrollbar)
        function handleMouseDown(e) {
            if (isPlaying) {
                // Check if clicking near scrollbar area (right edge)
                const rect = modalContent.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                if (clickX > modalContent.clientWidth - 20) { // Within 20px of right edge
                    userHasScrolled = true;
                    programmaticScroll = false;
                    const currentScroll = modalContent.scrollTop;
                    modalContent.scrollTo({ top: currentScroll, behavior: 'auto' });
                }
            }
        }
        
        modalContent.addEventListener('scroll', handleModalScroll);
        modalContent.addEventListener('wheel', handleUserWheel, { passive: true });
        modalContent.addEventListener('touchstart', handleUserTouch, { passive: true });
        modalContent.addEventListener('touchmove', handleUserTouch, { passive: true });
        modalContent.addEventListener('mousedown', handleMouseDown);
        
        // Check initial scroll position
        handleModalScroll();
    }
    
    // Initialize button state animation for Interactive States project
    if (projectId === '4' || projectId === 4) {
        initInteractiveStatesAnimation();
    }
    
    // Initialize text-to-speech functionality after modal is shown
    // Use requestAnimationFrame to ensure DOM is fully rendered, then a small delay for safety
    requestAnimationFrame(() => {
        // Clear any existing timeout
        if (initTextToSpeechTimeout) {
            clearTimeout(initTextToSpeechTimeout);
        }
        initTextToSpeechTimeout = setTimeout(() => {
            initTextToSpeech();
            updateDurationDisplay(projectId);
            // Note: initScrubberInteractivity() is called inside initTextToSpeech() to avoid duplicate initialization
            initTextToSpeechTimeout = null;
        }, 150);
    });
}

// Calculate and display duration for a project
function updateDurationDisplay(projectId) {
    const project = projects[projectId];
    if (!project) return;
    
    const durationElement = document.getElementById('modal-duration');
    if (!durationElement) return;
    
    // Calculate word count
    let wordCount = 0;
    
    // Title
    if (project.title) {
        wordCount += project.title.split(/\s+/).length;
    }
    
    // Tags
    if (project.tags && project.tags.length > 0) {
        project.tags.forEach(tag => {
            wordCount += tag.split(/\s+/).length;
        });
        wordCount += project.tags.length - 1; // commas
    }
    
    // Description
    if (project.description) {
        wordCount += project.description.split(/\s+/).length;
    }
    
    // Sections
    if (project.sections) {
        project.sections.forEach(section => {
            if (section.title) wordCount += section.title.split(/\s+/).length;
            if (section.content) wordCount += section.content.split(/\s+/).length;
            if (section.intro) wordCount += section.intro.split(/\s+/).length;
            if (section.conclusion) wordCount += section.conclusion.split(/\s+/).length;
            if (section.bullets) {
                section.bullets.forEach(bullet => {
                    wordCount += bullet.split(/\s+/).length;
                });
            }
        });
    }
    
    // Retrospective
    if (project.retrospective) {
        if (project.retrospective.title) wordCount += project.retrospective.title.split(/\s+/).length;
        if (project.retrospective.content) wordCount += project.retrospective.content.split(/\s+/).length;
        if (project.retrospective.bullets) {
            project.retrospective.bullets.forEach(bullet => {
                wordCount += bullet.split(/\s+/).length;
            });
        }
    }
    
    // Calculate duration (2.5 words per second)
    const seconds = Math.round(wordCount / 2.5);
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    
    // Format: "xm xs" or just "xs" if under a minute
    const formatted = seconds < 60 ? `${secs}s` : `${minutes}m ${secs}s`;
    durationElement.textContent = formatted;
}

// Animate button states for Interactive States project
function initInteractiveStatesAnimation() {
    // Wait for DOM to update and image to load
    setTimeout(() => {
        const demoImage = document.querySelector('.interactive-states-demo');
        if (!demoImage) return;
        
        // Wait for image to load to get accurate dimensions
        if (!demoImage.complete) {
            demoImage.addEventListener('load', () => initButtonOverlay(demoImage));
            return;
        }
        
        initButtonOverlay(demoImage);
    }, 200);
}

function initButtonOverlay(demoImage) {
    // Wrap the image in a container if it's not already wrapped
    let imageWrapper = demoImage.parentElement;
    
    // Check if parent is already a suitable container (has the image as direct child)
    // If the image is directly in the modal body, we need to wrap it
    if (!imageWrapper.classList.contains('modal-section-image-wrapper')) {
        // Create a wrapper div around the image
        imageWrapper = document.createElement('div');
        imageWrapper.className = 'modal-section-image-wrapper';
        imageWrapper.style.cssText = `
            position: relative;
            width: 100%;
            display: block;
        `;
        
        // Insert wrapper before image and move image into it
        demoImage.parentNode.insertBefore(imageWrapper, demoImage);
        imageWrapper.appendChild(demoImage);
    } else {
        // Ensure wrapper is positioned relatively
        if (getComputedStyle(imageWrapper).position === 'static') {
            imageWrapper.style.position = 'relative';
        }
    }
    
    // Get image dimensions for responsive calculations
    const imageRect = demoImage.getBoundingClientRect();
    const imageWidth = imageRect.width;
    const windowWidth = window.innerWidth;
    const isMobile = windowWidth <= 480;
    const isTablet = windowWidth > 480 && windowWidth <= 1024;
    
    // Calculate scale factor based on image width - scales proportionally like the image
    // Use consistent reference width for all breakpoints
    const referenceWidth = 1000;
    const scaleFactor = imageWidth / referenceWidth;
    
    // Apply breakpoint-specific scale multipliers (width stays 35%, only scale changes)
    let breakpointScale = 1; // Desktop default
    if (isMobile) {
        breakpointScale = 0.5; // 50% scale on mobile
    } else if (isTablet) {
        breakpointScale = 0.7; // 70% scale on tablet
    }
    
    const paddingTopBottom = Math.max(3, 10 * scaleFactor * breakpointScale);
    const paddingLeftRight = Math.max(8, 40 * scaleFactor * breakpointScale);
    const fontSize = Math.max(10, 28 * scaleFactor * breakpointScale);
    const buttonPadding = Math.max(8, 28 * scaleFactor * breakpointScale);
    const borderRadius = Math.max(5, 16 * scaleFactor * breakpointScale);
    const overlayBorderRadius = Math.max(8, 20 * scaleFactor * breakpointScale);
    
    // Create button overlay positioned absolutely relative to the image wrapper
    const buttonOverlay = document.createElement('div');
    buttonOverlay.className = 'animated-button-overlay';
    
    // Position relative to the image wrapper using percentage
    // Large button is in bottom row, centered horizontally
    // Width stays constant at 35% across all breakpoints
    buttonOverlay.style.cssText = `
        position: absolute;
        left: 50%;
        bottom: 25%;
        width: 35%;
        transform: translateX(-50%);
        pointer-events: none;
        z-index: 5;
        background-color: #ffffff;
        padding: ${paddingTopBottom}px ${paddingLeftRight}px;
        border-radius: ${overlayBorderRadius}px;
        border: none;
        box-shadow: none;
    `;
    
    // Update padding on window resize for responsiveness
    let resizeTimeout;
    function updatePadding() {
        const newImageRect = demoImage.getBoundingClientRect();
        const newImageWidth = newImageRect.width;
        const newWindowWidth = window.innerWidth;
        const isMobileNow = newWindowWidth <= 480;
        const isTabletNow = newWindowWidth > 480 && newWindowWidth <= 1024;
        
        // Use consistent reference width - scale proportionally like the image
        const newReferenceWidth = 1000;
        const newScaleFactor = newImageWidth / newReferenceWidth;
        
        // Apply breakpoint-specific scale multipliers (width stays 35%)
        let breakpointScale = 1; // Desktop default
        if (isMobileNow) {
            breakpointScale = 0.5; // 50% scale on mobile
        } else if (isTabletNow) {
            breakpointScale = 0.7; // 70% scale on tablet
        }
        
        // Width stays constant at 35% - don't change it
        // buttonOverlay.style.width = '35%'; // Already set, no need to change
        
        const newPaddingTopBottom = Math.max(3, 10 * newScaleFactor * breakpointScale);
        const newPaddingLeftRight = Math.max(8, 40 * newScaleFactor * breakpointScale);
        const newFontSize = Math.max(10, 28 * newScaleFactor * breakpointScale);
        const newButtonPadding = Math.max(8, 28 * newScaleFactor * breakpointScale);
        const newBorderRadius = Math.max(5, 16 * newScaleFactor * breakpointScale);
        const newOverlayBorderRadius = Math.max(8, 20 * newScaleFactor * breakpointScale);
        
        buttonOverlay.style.padding = `${newPaddingTopBottom}px ${newPaddingLeftRight}px`;
        buttonOverlay.style.borderRadius = `${newOverlayBorderRadius}px`;
        button.style.fontSize = `${newFontSize}px`;
        button.style.padding = `${newButtonPadding}px`;
        button.style.borderRadius = `${newBorderRadius}px`;
    }
    
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updatePadding, 100);
    });
    
    // Make sure the image doesn't cover the overlay
    demoImage.style.position = 'relative';
    demoImage.style.zIndex = '1';
    
    // Create the button element matching the Figma design exactly
    const button = document.createElement('button');
    button.className = 'interactive-button-demo';
    const buttonText = document.createElement('span');
    buttonText.textContent = 'Label';
    buttonText.style.cssText = 'display: block; transition: transform 0.1s ease;';
    button.appendChild(buttonText);
    button.style.cssText = `
        width: 100%;
        padding: ${buttonPadding}px;
        font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-size: ${fontSize}px;
        font-weight: 600;
        border: none;
        border-radius: ${borderRadius}px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.1s ease, border-color 0.3s ease;
        background-color: #005bd3; /* Default state - Medium blue */
        color: #ffffff;
        text-align: center;
        pointer-events: none;
        user-select: none;
        position: relative;
        z-index: 1001;
        display: block;
        line-height: 1.5;
    `;
    
    buttonOverlay.appendChild(button);
    // Append to imageWrapper so it's positioned over the image and moves with scroll
    imageWrapper.appendChild(buttonOverlay);
    
    // Animation cycle: rest -> hover -> pressed -> rest (loop)
    const states = ['rest', 'hover', 'pressed'];
    let stateIndex = 0;
    
    // State definitions matching Figma interaction states
    // Default (Rest), State2 (Hover), State3 (Pressed)
    const stateStyles = {
        'rest': {
            backgroundColor: '#005bd3',  // Default blue from Figma
            borderColor: 'transparent',
            transform: 'none'            // No transform - button stays same size
        },
        'hover': {
            backgroundColor: '#004ba3',  // Darker blue for hover
            borderColor: 'transparent',
            transform: 'none'            // No transform - button stays same size
        },
        'pressed': {
            backgroundColor: '#004ba3',  // Same darker blue for pressed
            borderColor: 'transparent',
            transform: 'none'            // No scale - button size stays the same
        }
    };
    
    function animateButtonState() {
        const currentState = states[stateIndex];
        const styles = stateStyles[currentState];
        
        // Apply state-specific styles to button
        button.style.backgroundColor = styles.backgroundColor;
        button.style.borderColor = styles.borderColor;
        button.style.transform = styles.transform;
        
        // Move text down 2px only in pressed state
        if (currentState === 'pressed') {
            buttonText.style.transform = 'translateY(2px)';
        } else {
            buttonText.style.transform = 'translateY(0)';
        }
        
        // Move to next state
        stateIndex = (stateIndex + 1) % states.length;
        
        // Set timing for each state
        const delays = {
            'rest': 2000,    // 2 seconds at rest
            'hover': 1500,   // 1.5 seconds hover
            'pressed': 300   // 0.3 seconds pressed
        };
        
        setTimeout(animateButtonState, delays[currentState]);
    }
    
    // Start animation after a brief delay
    setTimeout(animateButtonState, 1000);
}

// Add click handlers to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
        const projectId = this.getAttribute('data-project');
        openProjectModal(projectId, this);
    });
});

// Update close modal to restore scrolling
function closeModal() {
    // Cancel any pending initialization
    if (initTextToSpeechTimeout) {
        clearTimeout(initTextToSpeechTimeout);
        initTextToSpeechTimeout = null;
    }
    
    // Stop any ongoing speech
    stopSpeech();
    
    // Cancel speech synthesis immediately
    if (speechSynthesis) {
        speechSynthesis.cancel();
    }
    
    // Clear any intervals
    if (wordHighlightInterval) {
        clearInterval(wordHighlightInterval);
        wordHighlightInterval = null;
    }
    if (scrubberUpdateInterval) {
        clearInterval(scrubberUpdateInterval);
        scrubberUpdateInterval = null;
    }
    
    const modalContent = document.querySelector('.modal-content');
    
    // Fade out backdrop
    modal.classList.remove('show');
    
    // Reset all state
    isPlaying = false;
    currentWordIndex = 0;
    textElements = [];
    allWords = [];
    userHasScrolled = false;
    isScrubbing = false;
    programmaticScroll = false;
    lastHighlightedElement = null;
    currentUtterance = null;
    
    // Animate out if modal content exists - slide down
    if (modalContent) {
        modalContent.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease-out';
        modalContent.style.transform = 'translateY(20px)';
        modalContent.style.opacity = '0';
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            // Reset transform for next open
            modalContent.style.transform = '';
            modalContent.style.opacity = '';
            modalContent.style.transition = '';
        }, 350);
    } else {
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 350);
    }
}

// Close modal when clicking the close button (using event delegation since it's dynamically created)
document.addEventListener('click', function(event) {
    if (event.target.closest('.close')) {
        closeModal();
    }
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Home text gradient overlay - show only when there's overflow and not scrolled to bottom
function updateHomeTextGradient() {
    const homeTextContent = document.querySelector('.home-text-content');
    if (!homeTextContent) return;
    
    const homeText = document.querySelector('.home-text');
    if (!homeText) return;
    
    const hasOverflow = homeTextContent.scrollHeight > homeTextContent.clientHeight;
    const isScrolledToBottom = homeTextContent.scrollTop + homeTextContent.clientHeight >= homeTextContent.scrollHeight - 1; // -1 for rounding
    const isScrolledFromTop = homeTextContent.scrollTop > 1; // Check if scrolled down from top
    
    // Bottom gradient: show when there's overflow and not at bottom
    if (hasOverflow && !isScrolledToBottom) {
        homeText.classList.add('has-overflow');
    } else {
        homeText.classList.remove('has-overflow');
    }
    
    // Top gradient: show when scrolled down from top
    if (hasOverflow && isScrolledFromTop) {
        homeText.classList.add('has-top-overflow');
    } else {
        homeText.classList.remove('has-top-overflow');
    }
}

// Check on load and resize
window.addEventListener('load', updateHomeTextGradient);
window.addEventListener('resize', updateHomeTextGradient);

// Check on scroll
const homeTextContent = document.querySelector('.home-text-content');
if (homeTextContent) {
    homeTextContent.addEventListener('scroll', updateHomeTextGradient);
}

// Text streaming effect for home text (synchronized with pixel animation)
function initTextStreaming(pixelRevealCallback) {
    const paragraphs = document.querySelectorAll('.home-text-content p');
    if (paragraphs.length === 0) return;
    
    // Store original text and clear paragraphs
    const originalTexts = [];
    let totalChars = 0;
    paragraphs.forEach((p, index) => {
        originalTexts[index] = p.textContent;
        totalChars += p.textContent.length;
        p.textContent = '';
        p.style.opacity = '1'; // Keep visible for streaming effect
        p.style.transform = 'translateY(0)'; // Reset transform to remove any spacing
    });
    
    // Calculate total estimated duration for text streaming
    // This helps sync with pixel animation
    let charCount = 0;
    
    // Stream text character by character
    function streamText(paragraphIndex, charIndex = 0) {
        if (paragraphIndex >= paragraphs.length) {
            // All text is done streaming
            return;
        }
        
        const paragraph = paragraphs[paragraphIndex];
        const originalText = originalTexts[paragraphIndex];
        
        if (charIndex < originalText.length) {
            // Add next character
            paragraph.textContent = originalText.substring(0, charIndex + 1);
            charCount++;
            
            // Determine delay based on character type (even faster streaming)
            let delay = 8; // Base delay ~8ms per character (very fast streaming)
            const char = originalText[charIndex];
            
            // Faster for spaces
            if (char === ' ') {
                delay = 3;
            }
            // Shorter pause for sentence-ending punctuation
            else if (char === '.' || char === '!' || char === '?') {
                delay = 80; // ~80ms pause at sentence end
            }
            // Shorter pause for mid-sentence punctuation
            else if (char === ',' || char === ';' || char === ':') {
                delay = 30;
            }
            
            // Stream next character
            setTimeout(() => {
                streamText(paragraphIndex, charIndex + 1);
            }, delay);
        } else {
            // Move to next paragraph after a brief pause
            setTimeout(() => {
                streamText(paragraphIndex + 1, 0);
            }, 100); // Reduced further for faster streaming
        }
    }
    
    // Start streaming first paragraph immediately
    streamText(0, 0);
    
    // Return total character count for pixel sync
    return totalChars;
}

// Initialize text streaming when page loads (after pixels are ready)
window.addEventListener('load', () => {
    // Calculate text duration BEFORE clearing the text
    estimatedTextDuration = calculateTextDuration();
    // Text streaming will start automatically, pixels will sync with it
    initTextStreaming();
});

// Shared variable to store estimated text duration for pixel sync
let estimatedTextDuration = 0;

// Calculate text duration before text is cleared
function calculateTextDuration() {
    const paragraphs = document.querySelectorAll('.home-text-content p');
    let duration = 0;
    if (paragraphs.length > 0) {
        paragraphs.forEach(p => {
            const text = p.textContent;
            // Estimate: ~8ms per char (very fast), plus pauses for punctuation
            let estimated = text.length * 8;
            // Add extra time for punctuation pauses
            const periods = (text.match(/\./g) || []).length;
            const commas = (text.match(/,/g) || []).length;
            estimated += periods * 72; // Extra pause for periods (80ms - 8ms base)
            estimated += commas * 22; // Extra pause for commas (30ms - 8ms base)
            duration += estimated;
        });
        // Add pause between paragraphs
        duration += (paragraphs.length - 1) * 100;
    }
    return duration;
}

// Pixelated Interactive Image Effect
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('home-image-canvas');
    const imageSource = document.getElementById('home-image-source');
    const homeImageContainer = document.querySelector('.home-image');
    
    if (!canvas || !imageSource || !homeImageContainer) {
        return;
    }
    
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    // Disable image smoothing for crisp, pixelated rendering
    ctx.imageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
    ctx.oImageSmoothingEnabled = false;
    
    let pixels = [];
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;
    let animationFrameId = null;
    
    // Configuration
    const PIXEL_SIZE = 8; // Smaller pixels for more detail (closer to original image)
    const PUSH_STRENGTH = 5.0; // How much pixels move (0.1 = subtle, 1.0 = dramatic, 5.0 = extremely dramatic!)
    const MAX_DISTANCE = 150; // Maximum distance from cursor that pixels react
    
    // Initialize canvas size
    function resizeCanvas() {
        const rect = homeImageContainer.getBoundingClientRect();
        
        if (rect.width === 0 || rect.height === 0) {
            setTimeout(resizeCanvas, 100);
            return;
        }
        
        // Set canvas display size
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
        
        // Set canvas internal resolution (match display size)
        canvas.width = rect.width;
        canvas.height = rect.height;
        
        loadPixels();
    }
    
    // Load and pixelate the image
    function loadPixels() {
        if (!imageSource.complete || imageSource.naturalWidth === 0 || imageSource.naturalHeight === 0) {
            imageSource.onload = function() {
                setTimeout(loadPixels, 200);
            };
            imageSource.onerror = function() {
                // Silently handle error - image will not display pixelated effect
            };
            return;
        }
        
        pixels = [];
        // Use display dimensions (not internal resolution) for drawing
        const displayWidth = parseInt(canvas.style.width);
        const displayHeight = parseInt(canvas.style.height);
        
        // Draw image to fill container (cover style - like original PNG)
        const imageAspect = imageSource.naturalWidth / imageSource.naturalHeight;
        const containerAspect = displayWidth / displayHeight;
        
        
        // Clear canvas and fill with white background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, displayWidth, displayHeight);
        
        // Use cover style - fill entire container, crop image if needed (like object-fit: cover)
        // This matches how the original PNG image was displayed
        let sourceX, sourceY, sourceWidth, sourceHeight;
        
        if (imageAspect > containerAspect) {
            // Image is wider - fit to height, crop width from center
            sourceHeight = imageSource.naturalHeight;
            sourceWidth = imageSource.naturalHeight * containerAspect;
            sourceX = (imageSource.naturalWidth - sourceWidth) / 2;
            sourceY = 0;
        } else {
            // Image is taller - fit to width, crop height from center
            sourceWidth = imageSource.naturalWidth;
            sourceHeight = imageSource.naturalWidth / containerAspect;
            sourceX = 0;
            sourceY = (imageSource.naturalHeight - sourceHeight) / 2;
        }
        
        // Calculate pixel grid dimensions for full container
        const pixelCols = Math.ceil(displayWidth / PIXEL_SIZE);
        const pixelRows = Math.ceil(displayHeight / PIXEL_SIZE);
        
        // Draw image to cover entire container (like object-fit: cover)
        ctx.drawImage(
            imageSource,
            sourceX, sourceY, sourceWidth, sourceHeight,  // Source rectangle (cropped from original)
            0, 0, displayWidth, displayHeight              // Destination rectangle (full container)
        );
        
        // Sample pixels from the entire canvas (image fills container with cover style)
        for (let row = 0; row < pixelRows; row++) {
            for (let col = 0; col < pixelCols; col++) {
                // Calculate pixel position (no offset needed - image fills container)
                const x = col * PIXEL_SIZE;
                const y = row * PIXEL_SIZE;
                
                // Sample color from the canvas at the pixel center
                const sampleX = x + PIXEL_SIZE / 2;
                const sampleY = y + PIXEL_SIZE / 2;
                
                try {
                    const imageData = ctx.getImageData(Math.floor(sampleX), Math.floor(sampleY), 1, 1);
                    const [r, g, b, a] = imageData.data;
                    
                    pixels.push({
                        x: x,
                        y: y,
                        originalX: x,
                        originalY: y,
                        color: `rgba(${r}, ${g}, ${b}, ${a / 255})`,
                        size: PIXEL_SIZE,
                        opacity: 0, // Start invisible for reveal animation
                        visible: false // Track if pixel should be visible
                    });
                } catch (e) {
                    // Fallback to white pixel if sampling fails
                    pixels.push({
                        x: x,
                        y: y,
                        originalX: x,
                        originalY: y,
                        color: 'rgba(255, 255, 255, 1)',
                        size: PIXEL_SIZE,
                        opacity: 0, // Start invisible for reveal animation
                        visible: false // Track if pixel should be visible
                    });
                }
            }
        }
        
        if (pixels.length > 0) {
            // Use the pre-calculated text duration (calculated before text was cleared)
            // Start pixel reveal synchronized with text
            startPixelReveal(true, estimatedTextDuration);
        }
    }
    
    // Random pixel reveal animation (synchronized with text streaming)
    function startPixelReveal(syncWithText = false, estimatedTextDuration = 0) {
        // Shuffle pixels array for random order
        const shuffledPixels = [...pixels].sort(() => Math.random() - 0.5);
        const totalPixels = shuffledPixels.length;
        
        // Calculate reveal duration to sync with text
        let revealDuration;
        if (syncWithText && estimatedTextDuration > 0) {
            // Match text duration (slightly faster so pixels finish before text)
            revealDuration = Math.max(400, estimatedTextDuration * 0.7); // 70% of text duration, min 400ms
        } else {
            revealDuration = 600; // Default 600ms
        }
        
        const pixelsPerFrame = Math.max(1, Math.ceil(totalPixels / (revealDuration / 16))); // ~60fps = 16ms per frame
        
        let currentIndex = 0;
        
        function revealBatch() {
            const endIndex = Math.min(currentIndex + pixelsPerFrame, totalPixels);
            
            for (let i = currentIndex; i < endIndex; i++) {
                if (shuffledPixels[i]) {
                    shuffledPixels[i].visible = true;
                    shuffledPixels[i].opacity = 1;
                }
            }
            
            currentIndex = endIndex;
            draw();
            
            if (currentIndex < totalPixels) {
                requestAnimationFrame(revealBatch);
            }
        }
        
        // Initial draw with all pixels invisible
        draw();
        // Start revealing
        requestAnimationFrame(revealBatch);
    }
    
    // Draw pixels
    function draw() {
        if (pixels.length === 0) {
            return;
        }
        
        // Get current canvas display dimensions
        const displayWidth = parseInt(canvas.style.width);
        const displayHeight = parseInt(canvas.style.height);
        
        // Clear canvas
        ctx.clearRect(0, 0, displayWidth, displayHeight);
        
        // Draw all pixels - use integer coordinates for crisp rendering
        pixels.forEach(pixel => {
            // Only draw visible pixels
            if (pixel.visible !== false) {
                // Use the original color directly - opacity is already in the rgba value
                ctx.fillStyle = pixel.color;
                // Round coordinates to integers to avoid sub-pixel rendering
                const x = Math.round(pixel.x);
                const y = Math.round(pixel.y);
                const size = Math.round(pixel.size);
                ctx.fillRect(x, y, size, size);
            }
        });
    }
    
    // Animate pixels based on mouse position
    function animate() {
        if (!isHovering) {
            // Return to original position when not hovering
            let allReturned = true;
            pixels.forEach(pixel => {
                const dx = pixel.originalX - pixel.x;
                const dy = pixel.originalY - pixel.y;
                
                if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
                    pixel.x += dx * 0.1; // Smooth return
                    pixel.y += dy * 0.1;
                    allReturned = false;
                } else {
                    pixel.x = pixel.originalX;
                    pixel.y = pixel.originalY;
                }
            });
            
            if (allReturned) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
                return;
            }
        } else {
            // Push effect: pixels move away from cursor
            pixels.forEach(pixel => {
                const centerX = pixel.x + pixel.size / 2;
                const centerY = pixel.y + pixel.size / 2;
                
                const dx = centerX - mouseX;
                const dy = centerY - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < MAX_DISTANCE && distance > 0) {
                    const force = (MAX_DISTANCE - distance) / MAX_DISTANCE;
                    const pushX = (dx / distance) * force * PIXEL_SIZE * PUSH_STRENGTH;
                    const pushY = (dy / distance) * force * PIXEL_SIZE * PUSH_STRENGTH;
                    
                    pixel.x = pixel.originalX + pushX;
                    pixel.y = pixel.originalY + pushY;
                } else {
                    // Smooth return to original position
                    const returnX = pixel.originalX - pixel.x;
                    const returnY = pixel.originalY - pixel.y;
                    pixel.x += returnX * 0.1;
                    pixel.y += returnY * 0.1;
                }
            });
        }
        
        draw();
        animationFrameId = requestAnimationFrame(animate);
    }
    
    // Mouse/Touch event handlers
    function handleMove(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        mouseX = clientX - rect.left;
        mouseY = clientY - rect.top;
        
        if (!isHovering) {
            isHovering = true;
            if (!animationFrameId) {
                animate();
            }
        }
    }
    
    function handleLeave() {
        isHovering = false;
    }
    
    // Event listeners
    canvas.addEventListener('mousemove', handleMove);
    canvas.addEventListener('touchmove', handleMove, { passive: true });
    canvas.addEventListener('mouseleave', handleLeave);
    canvas.addEventListener('touchend', handleLeave);
    
    // Initialize - wait for image to load
    function init() {
        // Wait for both DOM and image to be ready
        if (imageSource.complete && imageSource.naturalWidth > 0 && imageSource.naturalHeight > 0) {
            setTimeout(resizeCanvas, 200);
        } else {
            imageSource.onload = function() {
                setTimeout(resizeCanvas, 200);
            };
            imageSource.onerror = function() {
                // Silently handle error - image will not display pixelated effect
            };
        }
    }
    
    init();
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            resizeCanvas();
        }, 100);
    });
});

// Contact form submission handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Form submission logic can be added here (e.g., email service integration)
        // For now, just prevent default to avoid page reload
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// ============================================
// Password Protection System
// ============================================

// Configuration
const PASSWORD = 'portfolio2026'; // Change this to your desired password
const STORAGE_KEY_DEFAULT_STATE = 'passwordProtectionDefault';
const STORAGE_KEY_AUTHENTICATED = 'passwordAuthenticated';

// Get elements
const passwordOverlay = document.getElementById('password-overlay');
const passwordForm = document.getElementById('password-form');
const passwordInput = document.getElementById('password-input');
const passwordError = document.getElementById('password-error');
const projectsGrid = document.getElementById('projects-grid');
const settingsModal = document.getElementById('settings-modal');
const lockToggleSwitch = document.getElementById('lock-toggle-switch');
const unlockToggleSwitch = document.getElementById('unlock-toggle-switch');
const currentDefaultStateSpan = document.getElementById('current-default-state');
const resetAccessBtn = document.getElementById('reset-access-btn');

// Get default state from localStorage or set to 'unlocked' by default
function getDefaultState() {
    const stored = localStorage.getItem(STORAGE_KEY_DEFAULT_STATE);
    return stored || 'unlocked'; // Default to unlocked
}

// Set default state
function setDefaultState(state) {
    localStorage.setItem(STORAGE_KEY_DEFAULT_STATE, state);
    updateSettingsUI();
}

// Check if user is authenticated
function isAuthenticated() {
    return localStorage.getItem(STORAGE_KEY_AUTHENTICATED) === 'true';
}

// Set authenticated state
function setAuthenticated(authenticated) {
    if (authenticated) {
        localStorage.setItem(STORAGE_KEY_AUTHENTICATED, 'true');
    } else {
        localStorage.removeItem(STORAGE_KEY_AUTHENTICATED);
    }
}

// Check URL parameter
function checkURLParameter() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('unlock') === 'true';
}

// Show/hide password overlay
function showPasswordOverlay() {
    if (passwordOverlay) {
        passwordOverlay.classList.add('active');
        if (projectsGrid) {
            projectsGrid.classList.add('locked');
        }
    }
}

function hidePasswordOverlay() {
    if (passwordOverlay) {
        passwordOverlay.classList.remove('active');
        if (projectsGrid) {
            projectsGrid.classList.remove('locked');
        }
        // Clear password input
        if (passwordInput) {
            passwordInput.value = '';
        }
        if (passwordError) {
            passwordError.style.display = 'none';
        }
    }
}

// Handle password form submission
if (passwordForm) {
    passwordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const enteredPassword = passwordInput.value.trim();
        
        if (enteredPassword === PASSWORD) {
            setAuthenticated(true);
            hidePasswordOverlay();
        } else {
            // Show error
            if (passwordError) {
                passwordError.style.display = 'block';
            }
            // Clear input
            if (passwordInput) {
                passwordInput.value = '';
                passwordInput.focus({ preventScroll: true });
            }
        }
    });
}

// Initialize password protection
function initPasswordProtection() {
    // Check URL parameter first (highest priority)
    if (checkURLParameter()) {
        hidePasswordOverlay();
        return;
    }
    
    // Check if authenticated
    if (isAuthenticated()) {
        hidePasswordOverlay();
        return;
    }
    
    // Check default state
    const defaultState = getDefaultState();
    if (defaultState === 'locked') {
        showPasswordOverlay();
    } else {
        hidePasswordOverlay();
    }
}

// Settings Modal Functions
function openSettingsModal() {
    if (settingsModal) {
        settingsModal.classList.add('show');
        updateSettingsUI();
    }
}

function closeSettingsModal() {
    if (settingsModal) {
        settingsModal.classList.remove('show');
    }
}

function updateSettingsUI() {
    const defaultState = getDefaultState();
    
    if (currentDefaultStateSpan) {
        currentDefaultStateSpan.textContent = defaultState === 'locked' ? 'Locked' : 'Unlocked';
    }
    
    if (lockToggleSwitch && unlockToggleSwitch) {
        if (defaultState === 'locked') {
            lockToggleSwitch.classList.add('active');
            unlockToggleSwitch.classList.remove('active');
        } else {
            unlockToggleSwitch.classList.add('active');
            lockToggleSwitch.classList.remove('active');
        }
    }
}

// Settings toggle switch handlers
if (lockToggleSwitch) {
    lockToggleSwitch.addEventListener('click', function() {
        setDefaultState('locked');
        // Re-initialize to apply changes
        initPasswordProtection();
    });
}

if (unlockToggleSwitch) {
    unlockToggleSwitch.addEventListener('click', function() {
        setDefaultState('unlocked');
        // Re-initialize to apply changes
        initPasswordProtection();
    });
}

// Reset access button handler
if (resetAccessBtn) {
    resetAccessBtn.addEventListener('click', function() {
        setAuthenticated(false);
        closeSettingsModal();
        // Re-initialize to show password overlay
        initPasswordProtection();
    });
}

// Close settings modal handlers
const settingsModalClose = document.querySelector('.settings-modal-close');
if (settingsModalClose) {
    settingsModalClose.addEventListener('click', closeSettingsModal);
}

if (settingsModal) {
    settingsModal.addEventListener('click', function(e) {
        if (e.target === settingsModal) {
            closeSettingsModal();
        }
    });
}

// Keyboard shortcut: Ctrl/Cmd + Shift + L
document.addEventListener('keydown', function(e) {
    // Check for Ctrl+Shift+L (Windows/Linux) or Cmd+Shift+L (Mac)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
        e.preventDefault();
        if (settingsModal && settingsModal.classList.contains('show')) {
            closeSettingsModal();
        } else {
            openSettingsModal();
        }
    }
    
    // ESC to close settings modal
    if (e.key === 'Escape' && settingsModal && settingsModal.classList.contains('show')) {
        closeSettingsModal();
    }
});

// Initialize on page load
window.addEventListener('load', function() {
    initPasswordProtection();
});

// ============================================
// Text-to-Speech Functionality
// ============================================

let speechSynthesis = null;
let currentUtterance = null;
let isPlaying = false;
let textElements = [];
let currentWordIndex = 0;
let allWords = [];
let wordHighlightInterval = null;
let lastHighlightedElement = null; // Track last highlighted element to avoid unnecessary clears
let speechStartTime = null;
let speechDurations = {}; // Store durations per project ID
let totalSpeechDuration = 0; // Total estimated duration in seconds
let scrubberUpdateInterval = null;
let calibratedWordsPerSecond = null; // Calibrated rate based on actual speech
let isScrubbing = false;
let userHasScrolled = false; // Track if user has manually scrolled
let programmaticScroll = false; // Track if scroll is programmatic // Track if user is actively scrubbing
let initTextToSpeechTimeout = null; // Track initialization timeout to cancel if needed

function initTextToSpeech() {
    // Check if browser supports Web Speech API
    if (!('speechSynthesis' in window)) {
        console.warn('Web Speech API not supported');
        const playButton = document.getElementById('modal-play-button');
        if (playButton) {
            playButton.style.display = 'none'; // Hide button if not supported
        }
        return;
    }
    
    // Cancel any ongoing speech first
    if (speechSynthesis) {
        speechSynthesis.cancel();
    }
    
    speechSynthesis = window.speechSynthesis;
    
    // Load voices (some browsers need this)
    if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.onvoiceschanged = function() {
            // Voices loaded
        };
    }
    
    // Wait a bit more to ensure DOM is ready
    const playButton = document.getElementById('modal-play-button');
    if (!playButton) {
        console.warn('Play button not found - retrying...');
        // Retry after a short delay
        setTimeout(() => {
            const retryButton = document.getElementById('modal-play-button');
            if (!retryButton) {
                console.error('Play button still not found after retry');
                return;
            }
            attachPlayButtonListeners(retryButton);
        }, 100);
        return;
    }
    
    attachPlayButtonListeners(playButton);
}

function attachPlayButtonListeners(playButton) {
    // Remove any existing listeners by cloning
    const newButton = playButton.cloneNode(true);
    playButton.parentNode.replaceChild(newButton, playButton);
    
    // Update the ID reference after cloning
    const actualButton = document.getElementById('modal-play-button');
    if (!actualButton) {
        console.error('Button lost after cloning - this should not happen');
        return;
    }
    
    actualButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleSpeech();
    });
    
    // Keyboard accessibility - ensure Enter and Space keys work
    actualButton.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            toggleSpeech();
        }
    });
    
    // Reset state
    isPlaying = false;
    currentWordIndex = 0;
    updatePlayButton();
    hideScrubber();
    
    // Reset user scroll flag
    userHasScrolled = false;
    
    // Initialize scrubber interactivity
    initScrubberInteractivity();
}

function toggleSpeech() {
    if (!speechSynthesis) {
        console.error('Speech synthesis not available');
        return;
    }
    
    // If speech is paused but we don't have a current utterance, cancel and start fresh
    // This can happen when switching projects - the paused state persists but utterance is gone
    if (speechSynthesis.paused && !currentUtterance) {
        speechSynthesis.cancel();
        isPlaying = false;
        startSpeech();
        return;
    }
    
    if (isPlaying || speechSynthesis.speaking) {
        pauseSpeech();
    } else {
        if (speechSynthesis.paused && currentUtterance) {
            resumeSpeech();
        } else {
            startSpeech();
        }
    }
}

function pauseSpeech() {
    if (speechSynthesis && isPlaying) {
        speechSynthesis.pause();
        if (wordHighlightInterval) {
            clearInterval(wordHighlightInterval);
            wordHighlightInterval = null;
        }
        stopScrubberUpdate();
        isPlaying = false;
        updatePlayButton();
        // Note: speechStartTime is kept so we can adjust it on resume
    }
}

function resumeSpeech() {
    if (speechSynthesis && speechSynthesis.paused && currentUtterance) {
        // Adjust start time to account for the pause
        // Calculate how much time has elapsed before pause
        if (speechStartTime) {
            const elapsedBeforePause = Date.now() - speechStartTime;
            // Reset start time to current time minus elapsed time to maintain sync
            speechStartTime = Date.now() - elapsedBeforePause;
        }
        
        speechSynthesis.resume();
        isPlaying = true;
        startWordHighlighting();
        updatePlayButton();
    } else {
        // If paused but no utterance, start fresh
        startSpeech();
    }
}

function startSpeech() {
    if (!speechSynthesis) {
        console.error('Speech synthesis not available');
        return;
    }
    
    // Cancel any ongoing speech immediately - this resets paused state
    speechSynthesis.cancel();
    
    // Stop any existing speech and clear state
    stopSpeech();
    
    // Small delay to ensure cancellation is fully processed and state is reset
    setTimeout(() => {
        // Double-check that speech is fully canceled
        if (speechSynthesis.paused || speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }
        startSpeechInternal();
    }, 100);
}

function startSpeechInternal() {
    if (!speechSynthesis) {
        console.error('Speech synthesis not available');
        return;
    }
    
    // Extract all text from modal
    const modalBody = document.getElementById('modal-body');
    if (!modalBody) {
        console.error('Modal body not found');
        return;
    }
    
    // Get all text elements
    const title = modalBody.querySelector('.modal-title');
    const description = modalBody.querySelector('.modal-description');
    
    // Get all sections first
    const allSections = modalBody.querySelectorAll('.modal-section');
    
    // Get retrospective section separately (it's also a .modal-section)
    const retrospective = modalBody.querySelector('.modal-retrospective-title')?.parentElement;
    
    // Filter out the retrospective section from regular sections
    const sections = Array.from(allSections).filter(section => {
        // Exclude the retrospective section (it contains .modal-retrospective-title)
        return section !== retrospective;
    });
    
    // Build text array with elements for highlighting
    textElements = [];
    let fullText = '';
    
    if (title) {
        const text = title.textContent.trim();
        if (text) {
            textElements.push({ element: title, text: text, type: 'title' });
            fullText += text + '. ';
        }
    }
    
    // Extract pills/tags
    const pills = modalBody.querySelectorAll('.modal-pills .tag');
    if (pills.length > 0) {
        const pillTexts = Array.from(pills).map(pill => pill.textContent.trim()).filter(text => text);
        if (pillTexts.length > 0) {
            const pillsContainer = modalBody.querySelector('.modal-pills');
            // Remove "Tags:" prefix - just join the pills with commas
            const pillsText = pillTexts.join(', ') + '.';
            if (pillsContainer) {
                // Store pill texts for restoration
                textElements.push({ 
                    element: pillsContainer, 
                    text: pillsText, 
                    type: 'pills',
                    pillTexts: pillTexts // Store original pill texts for restoration
                });
                fullText += pillsText + ' ';
            }
        }
    }
    
    if (description) {
        const text = description.textContent.trim();
        if (text) {
            textElements.push({ element: description, text: text, type: 'description' });
            fullText += text + '. ';
        }
    }
    
    sections.forEach(section => {
        const titleEl = section.querySelector('.modal-section-title');
        const contentEl = section.querySelector('.modal-section-content');
        const introEl = section.querySelector('.modal-section-intro');
        const conclusionEl = section.querySelector('.modal-section-conclusion');
        const bulletsEl = section.querySelector('.modal-section-bullets');
        
        if (titleEl) {
            const text = titleEl.textContent.trim();
            if (text) {
                textElements.push({ element: titleEl, text: text, type: 'section-title' });
                fullText += text + '. ';
            }
        }
        
        if (contentEl) {
            const text = contentEl.textContent.trim();
            if (text) {
                textElements.push({ element: contentEl, text: text, type: 'content' });
                fullText += text + '. ';
            }
        }
        
        if (introEl) {
            const text = introEl.textContent.trim();
            if (text) {
                textElements.push({ element: introEl, text: text, type: 'intro' });
                fullText += text + '. ';
            }
        }
        
        if (bulletsEl) {
            const bullets = bulletsEl.querySelectorAll('li');
            bullets.forEach(bullet => {
                const text = bullet.textContent.trim();
                if (text) {
                    textElements.push({ element: bullet, text: text, type: 'bullet' });
                    fullText += text + '. ';
                }
            });
        }
        
        if (conclusionEl) {
            const text = conclusionEl.textContent.trim();
            if (text) {
                textElements.push({ element: conclusionEl, text: text, type: 'conclusion' });
                fullText += text + '. ';
            }
        }
    });
    
    if (retrospective) {
        const titleEl = retrospective.querySelector('.modal-retrospective-title');
        const contentEl = retrospective.querySelector('.modal-section-content');
        const bulletsEl = retrospective.querySelector('.modal-section-bullets');
        
        if (titleEl) {
            const text = titleEl.textContent.trim();
            if (text) {
                textElements.push({ element: titleEl, text: text, type: 'retrospective-title' });
                fullText += text + '. ';
            }
        }
        
        if (contentEl) {
            const text = contentEl.textContent.trim();
            if (text) {
                textElements.push({ element: contentEl, text: text, type: 'retrospective-content' });
                fullText += text + '. ';
            }
        }
        
        if (bulletsEl) {
            const bullets = bulletsEl.querySelectorAll('li');
            bullets.forEach(bullet => {
                const text = bullet.textContent.trim();
                if (text) {
                    textElements.push({ element: bullet, text: text, type: 'retrospective-bullet' });
                    fullText += text + '. ';
                }
            });
        }
    }
    
    if (!fullText.trim()) {
        console.error('No text found to read');
        return;
    }
    
    // Build word array with timing estimates
    allWords = fullText.trim().split(/\s+/);
    
    // Create utterance
    currentUtterance = new SpeechSynthesisUtterance(fullText.trim());
    currentUtterance.rate = 1.0;
    currentUtterance.pitch = 1.0;
    currentUtterance.volume = 1.0;
    
    // Try to get a good voice - wait for voices to load if needed
    let voices = speechSynthesis.getVoices();
    
    // If no voices, wait for them to load
    if (voices.length === 0) {
        speechSynthesis.onvoiceschanged = function() {
            voices = speechSynthesis.getVoices();
            if (voices.length > 0 && currentUtterance) {
                const preferredVoice = voices.find(v => v.lang.startsWith('en')) || voices[0];
                currentUtterance.voice = preferredVoice;
            }
        };
    } else if (voices.length > 0) {
        // Prefer a native English voice
        const preferredVoice = voices.find(v => v.lang.startsWith('en')) || voices[0];
        currentUtterance.voice = preferredVoice;
    }
    
    currentUtterance.onstart = function(event) {
        speechStartTime = Date.now();
        currentWordIndex = 0;
        
        // Calculate total duration based on word count
        // Use calibrated rate if available, otherwise use conservative estimate
        const estimatedWordsPerSecond = calibratedWordsPerSecond || 1.5;
        totalSpeechDuration = Math.round(allWords.length / estimatedWordsPerSecond);
        
        showScrubber();
        
        // Highlight the first word immediately
        if (allWords.length > 0) {
            highlightCurrentWord(0);
        }
        
        // Start highlighting using time-based approach for better sync
        startWordHighlighting();
        
        startScrubberUpdate();
    };
    
    currentUtterance.onend = function(event) {
        // Calculate and store duration
        if (speechStartTime && window.currentProjectId) {
            const duration = Date.now() - speechStartTime;
            const durationSeconds = (duration / 1000).toFixed(2);
            const durationMinutes = (duration / 60000).toFixed(2);
            
            speechDurations[window.currentProjectId] = {
                milliseconds: duration,
                seconds: parseFloat(durationSeconds),
                minutes: parseFloat(durationMinutes),
                formatted: duration < 60000 
                    ? `${durationSeconds}s` 
                    : `${Math.floor(duration / 60000)}m ${((duration % 60000) / 1000).toFixed(0)}s`
            };
            
            // Calibrate words per second based on actual speech duration
            if (allWords.length > 0 && duration > 0) {
                const actualWordsPerSecond = allWords.length / (duration / 1000);
                calibratedWordsPerSecond = actualWordsPerSecond;
            }
        }
        
        if (wordHighlightInterval) {
            clearInterval(wordHighlightInterval);
            wordHighlightInterval = null;
        }
        stopScrubberUpdate();
        isPlaying = false;
        currentUtterance = null;
        currentWordIndex = 0;
        speechStartTime = null;
        updatePlayButton();
        clearHighlights();
        hideScrubber();
    };
    
    currentUtterance.onpause = function(event) {
        isPlaying = false;
        updatePlayButton();
        // Keep scrubber visible but paused
    };
    
    currentUtterance.onresume = function(event) {
        isPlaying = true;
        updatePlayButton();
        startScrubberUpdate();
    };
    
    currentUtterance.onerror = function(event) {
        console.error('Speech synthesis error:', event);
        console.error('Error type:', event.error);
        console.error('Error charIndex:', event.charIndex);
        stopSpeech();
    };
    
    // Start speech
    try {
        // Cancel any existing speech first
        speechSynthesis.cancel();
        
        // Some browsers need a small delay
        setTimeout(() => {
            speechSynthesis.speak(currentUtterance);
        }, 100);
        
        isPlaying = true;
        updatePlayButton();
    } catch (error) {
        console.error('Error starting speech:', error);
        stopSpeech();
    }
}

function startWordHighlighting() {
    if (wordHighlightInterval) {
        clearInterval(wordHighlightInterval);
        wordHighlightInterval = null;
    }
    
    // Don't start if we're past the end
    if (currentWordIndex >= allWords.length) {
        return;
    }
    
    // Calculate words per second rate
    // Use calibrated rate if available, otherwise use conservative estimate
    const speechRate = currentUtterance ? currentUtterance.rate : 1.0;
    let wordsPerSecond;
    
    if (calibratedWordsPerSecond) {
        // Use calibrated rate from previous speech
        wordsPerSecond = calibratedWordsPerSecond * speechRate;
    } else {
        // Conservative estimate: 1.5 words per second (slower to avoid getting ahead)
        wordsPerSecond = 1.5 * speechRate;
    }
    
    const intervalMs = Math.max(500, 1000 / wordsPerSecond); // Minimum 500ms between highlights
    
    // Start highlighting from the current word index
    // Note: The word at currentWordIndex should already be highlighted before this function is called
    // So the interval will increment to the next word, then highlight it
    wordHighlightInterval = setInterval(() => {
        if ((isPlaying || speechSynthesis.speaking) && currentWordIndex < allWords.length) {
            // Move to next word first (since current word was already highlighted)
            currentWordIndex++;
            if (currentWordIndex < allWords.length) {
                highlightCurrentWord(currentWordIndex);
            }
        } else if (currentWordIndex >= allWords.length || (!isPlaying && !speechSynthesis.speaking)) {
            clearInterval(wordHighlightInterval);
            wordHighlightInterval = null;
        }
    }, intervalMs);
}

function stopSpeech(hideScrubberOnStop = true) {
    if (speechSynthesis && (isPlaying || speechSynthesis.speaking || speechSynthesis.paused)) {
        // Cancel to reset paused state
        speechSynthesis.cancel();
        
        // If speech was interrupted, don't record duration
        
        if (wordHighlightInterval) {
            clearInterval(wordHighlightInterval);
            wordHighlightInterval = null;
        }
        stopScrubberUpdate();
        isPlaying = false;
        currentUtterance = null;
        currentWordIndex = 0;
        speechStartTime = null;
        updatePlayButton();
        clearHighlights();
        
        // Only hide scrubber if explicitly requested (not when seeking)
        if (hideScrubberOnStop) {
            hideScrubber();
        }
        
        // Ensure paused state is cleared
        setTimeout(() => {
            if (speechSynthesis.paused) {
                speechSynthesis.cancel();
            }
        }, 10);
    }
}

// Scrubber functions
function showScrubber() {
    const scrubberContainer = document.getElementById('modal-scrubber-container');
    if (scrubberContainer) {
        scrubberContainer.style.display = 'block';
    }
}

function hideScrubber() {
    const scrubberContainer = document.getElementById('modal-scrubber-container');
    if (scrubberContainer) {
        scrubberContainer.style.display = 'none';
    }
    stopScrubberUpdate();
}

function startScrubberUpdate() {
    stopScrubberUpdate(); // Clear any existing interval
    
    if (!speechStartTime || totalSpeechDuration === 0) return;
    
    scrubberUpdateInterval = setInterval(() => {
        // Don't auto-update while user is actively scrubbing
        if (!speechStartTime || isScrubbing) {
            return;
        }
        
        const elapsed = (Date.now() - speechStartTime) / 1000; // elapsed time in seconds
        const progress = Math.min(elapsed / totalSpeechDuration, 1); // clamp between 0 and 1
        
        updateScrubberProgress(progress);
    }, 100); // Update every 100ms for smooth animation
}

function stopScrubberUpdate() {
    if (scrubberUpdateInterval) {
        clearInterval(scrubberUpdateInterval);
        scrubberUpdateInterval = null;
    }
}

function updateScrubberProgress(progress) {
    const scrubberProgress = document.getElementById('modal-scrubber-progress');
    const scrubberTrack = document.getElementById('modal-scrubber-track');
    
    if (scrubberProgress) {
        scrubberProgress.style.width = (progress * 100) + '%';
    }
    
    // Update ARIA attributes for accessibility
    if (scrubberTrack) {
        const percentage = Math.round(progress * 100);
        scrubberTrack.setAttribute('aria-valuenow', percentage);
        scrubberTrack.setAttribute('aria-valuetext', `${percentage}%`);
    }
}

// Initialize scrubber interactivity
function initScrubberInteractivity() {
    const scrubberTrack = document.getElementById('modal-scrubber-track');
    const scrubberHandle = document.getElementById('modal-scrubber-handle');
    
    if (!scrubberTrack) {
        return;
    }
    
    // Remove existing listeners by cloning (to prevent duplicate listeners)
    const scrubberContainer = document.getElementById('modal-scrubber-container');
    if (!scrubberContainer) return;
    
    // Clone the track to remove existing listeners
    const newTrack = scrubberTrack.cloneNode(true);
    scrubberTrack.parentNode.replaceChild(newTrack, scrubberTrack);
    
    // Get the new handle after cloning
    const newHandle = document.getElementById('modal-scrubber-handle');
    if (!newHandle) {
        return;
    }
    
    // Re-get the track after cloning
    const track = document.getElementById('modal-scrubber-track');
    if (!track) return;
    
    // Update references
    const handle = newHandle;
    
    let isDragging = false;
    
    // Calculate progress from click position
    function getProgressFromEvent(e) {
        const rect = track.getBoundingClientRect();
        const x = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
        const clickX = x - rect.left;
        const progress = Math.max(0, Math.min(1, clickX / rect.width));
        return progress;
    }
    
    // Seek to position
    function seekToPosition(progress, updateVisualOnly = false) {
        if (totalSpeechDuration === 0 || allWords.length === 0) return;
        
        // Update visual progress
        updateScrubberProgress(progress);
        
        // Calculate target word index based on progress
        const targetWordIndex = Math.floor(progress * allWords.length);
        
        // Highlight the word at the target position immediately (even during drag)
        // This ensures the page scrolls to follow the highlight during scrubbing
        if (targetWordIndex < allWords.length) {
            // Find and highlight the target word
            let cumulativeWords = 0;
            for (let i = 0; i < textElements.length; i++) {
                const elementData = textElements[i];
                const element = elementData.element;
                if (!element) continue;
                
                const words = elementData.text.split(/\s+/);
                
                if (targetWordIndex >= cumulativeWords && targetWordIndex < cumulativeWords + words.length) {
                    const localWordIndex = targetWordIndex - cumulativeWords;
                    clearHighlights();
                    highlightWordInElement(element, localWordIndex);
                    // scrollToElement will check isScrubbing and allow scrolling during scrubbing
                    scrollToElement(element);
                    break;
                }
                
                cumulativeWords += words.length;
            }
        }
        
        // If only updating visual (during drag), don't seek audio
        if (updateVisualOnly) return;
        
        // If speech is playing or paused, restart from new position
        if (isPlaying || speechSynthesis.speaking || speechSynthesis.paused) {
            const wasPlaying = isPlaying && !speechSynthesis.paused;
            
            // Keep scrubber visible during seek - don't hide it
            showScrubber();
            
            stopSpeech(false); // Don't hide scrubber when seeking
            
            // Stop any existing highlighting before seeking
            if (wordHighlightInterval) {
                clearInterval(wordHighlightInterval);
                wordHighlightInterval = null;
            }
            clearHighlights();
            
            // Restart from target word index
            currentWordIndex = targetWordIndex;
            
            // Rebuild text from target word onwards
            const remainingText = allWords.slice(targetWordIndex).join(' ');
            
            if (remainingText.trim()) {
                // Create new utterance from remaining text
                const newUtterance = new SpeechSynthesisUtterance(remainingText.trim());
                newUtterance.rate = 1.0;
                newUtterance.pitch = 1.0;
                newUtterance.volume = 1.0;
                
                // Try to get a good voice
                let voices = speechSynthesis.getVoices();
                if (voices.length > 0) {
                    const preferredVoice = voices.find(v => v.lang.startsWith('en')) || voices[0];
                    newUtterance.voice = preferredVoice;
                }
                
                // Calculate elapsed time based on progress
                const elapsedSeconds = progress * totalSpeechDuration;
                
                // Set up event handlers
                newUtterance.onstart = function() {
                    // Adjust start time to account for the progress
                    speechStartTime = Date.now() - (elapsedSeconds * 1000);
                    isPlaying = true;
                    updatePlayButton();
                    
                    // Ensure scrubber is visible when speech starts after seeking
                    showScrubber();
                    
                    // Highlight the current word immediately (the word we're starting from)
                    if (currentWordIndex < allWords.length) {
                        highlightCurrentWord(currentWordIndex);
                    }
                    
                    // Start highlighting using time-based approach
                    startWordHighlighting();
                    
                    startScrubberUpdate();
                };
                
                newUtterance.onend = function() {
                    if (wordHighlightInterval) {
                        clearInterval(wordHighlightInterval);
                        wordHighlightInterval = null;
                    }
                    stopScrubberUpdate();
                    isPlaying = false;
                    currentUtterance = null;
                    currentWordIndex = 0;
                    speechStartTime = null;
                    updatePlayButton();
                    clearHighlights();
                    // Only hide scrubber if speech ended naturally (not from seeking/interaction)
                    // Keep scrubber visible if user is interacting or if speech was interrupted
                    if (!isScrubbing && !speechSynthesis.speaking && !speechSynthesis.pending) {
                        hideScrubber();
                    }
                };
                
                newUtterance.onerror = function(event) {
                    console.error('Speech synthesis error:', event);
                    stopSpeech();
                };
                
                currentUtterance = newUtterance;
                
                // Start speech
                speechSynthesis.cancel();
                
                // Ensure scrubber is visible before starting new speech
                showScrubber();
                
                setTimeout(() => {
                    speechSynthesis.speak(newUtterance);
                    if (wasPlaying) {
                        isPlaying = true;
                        updatePlayButton();
                    }
                }, 100);
            }
        }
    }
    
    // Click on track to seek (but not if dragging handle)
    track.addEventListener('click', function(e) {
        // Prevent click if we just finished dragging (to avoid double-seek)
        if (isDragging || e.target === handle || handle.contains(e.target)) {
            return; // Don't trigger on handle click or during drag
        }
        
        // Ensure scrubber stays visible
        showScrubber();
        
        // Reset scroll lock when user interacts with scrubber
        userHasScrolled = false;
        
        // Set scrubbing flag to allow auto-scroll during seek
        isScrubbing = true;
        stopScrubberUpdate();
        
        const progress = getProgressFromEvent(e);
        seekToPosition(progress, false);
        
        // Reset scrubbing flag after seek completes
        setTimeout(() => {
            isScrubbing = false;
            if (isPlaying && speechStartTime) {
                startScrubberUpdate();
            }
        }, 200);
    });
    
    // Drag handle
    function startDrag(e) {
        isDragging = true;
        isScrubbing = true; // Set scrubbing flag immediately to allow auto-scroll
        userHasScrolled = false; // Reset scroll lock when user interacts with scrubber
        e.preventDefault();
        e.stopPropagation();
        
        // Ensure scrubber stays visible
        showScrubber();
        
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchmove', handleDrag, { passive: false });
        document.addEventListener('touchend', stopDrag);
    }
    
    function handleDrag(e) {
        if (!isDragging) return;
        e.preventDefault();
        e.stopPropagation();
        isScrubbing = true; // Set scrubbing flag to allow auto-scroll during drag
        
        // Stop auto-update while dragging
        stopScrubberUpdate();
        
        // Add scrubbing class to disable transition
        const scrubberContainer = document.getElementById('modal-scrubber-container');
        if (scrubberContainer) {
            scrubberContainer.classList.add('scrubbing');
        }
        
        const progress = getProgressFromEvent(e);
        seekToPosition(progress, true); // Update visual and scroll during drag
    }
    
    function stopDrag(e) {
        if (!isDragging) return;
        e.preventDefault();
        e.stopPropagation();
        isDragging = false;
        
        // Ensure scrubber stays visible
        showScrubber();
        
        // Remove scrubbing class to re-enable transition
        const scrubberContainer = document.getElementById('modal-scrubber-container');
        if (scrubberContainer) {
            scrubberContainer.classList.remove('scrubbing');
        }
        
        const progress = getProgressFromEvent(e);
        seekToPosition(progress, false); // Actually seek on drag end
        
        // Reset scrubbing flag and resume auto-update after seek completes
        setTimeout(() => {
            isScrubbing = false;
            if (isPlaying && speechStartTime) {
                startScrubberUpdate(); // Resume auto-update if playing
            }
        }, 150);
        
        document.removeEventListener('mousemove', handleDrag);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchmove', handleDrag);
        document.removeEventListener('touchend', stopDrag);
    }
    
    // Keyboard accessibility for scrubber
    track.addEventListener('keydown', function(e) {
        if (!isPlaying && !speechSynthesis.speaking && !speechSynthesis.paused) {
            return; // Don't allow keyboard control if speech isn't available
        }
        
        let newProgress = 0;
        const currentProgress = totalSpeechDuration > 0 && speechStartTime 
            ? Math.min((Date.now() - speechStartTime) / 1000 / totalSpeechDuration, 1)
            : parseFloat(track.getAttribute('aria-valuenow')) / 100;
        
        switch(e.key) {
            case 'ArrowRight':
            case 'ArrowUp':
                e.preventDefault();
                newProgress = Math.min(1, currentProgress + 0.05); // 5% increments
                seekToPosition(newProgress, false);
                break;
            case 'ArrowLeft':
            case 'ArrowDown':
                e.preventDefault();
                newProgress = Math.max(0, currentProgress - 0.05); // 5% increments
                seekToPosition(newProgress, false);
                break;
            case 'Home':
                e.preventDefault();
                seekToPosition(0, false);
                break;
            case 'End':
                e.preventDefault();
                seekToPosition(1, false);
                break;
            case 'PageUp':
                e.preventDefault();
                newProgress = Math.min(1, currentProgress + 0.1); // 10% increments
                seekToPosition(newProgress, false);
                break;
            case 'PageDown':
                e.preventDefault();
                newProgress = Math.max(0, currentProgress - 0.1); // 10% increments
                seekToPosition(newProgress, false);
                break;
        }
    });
    
    if (handle) {
        handle.addEventListener('mousedown', startDrag);
        handle.addEventListener('touchstart', startDrag, { passive: false });
    }
}

// Function to get speech durations
function getSpeechDurations() {
    return speechDurations;
}

function highlightCurrentWord(wordIndex) {
    if (wordIndex >= allWords.length) return;
    
    // Find which element contains this word first
    let cumulativeWords = 0;
    let targetElement = null;
    let targetLocalIndex = -1;
    let targetElementData = null;
    
    for (let i = 0; i < textElements.length; i++) {
        const elementData = textElements[i];
        const element = elementData.element;
        if (!element) continue;
        
        const words = elementData.text.split(/\s+/);
        
        if (wordIndex >= cumulativeWords && wordIndex < cumulativeWords + words.length) {
            targetElement = element;
            targetElementData = elementData;
            targetLocalIndex = wordIndex - cumulativeWords;
            break;
        }
        
        cumulativeWords += words.length;
    }
    
    // Clear highlights only if we found a target element and it's different from last one
    if (targetElement) {
        // Only clear if switching to a different element
        if (lastHighlightedElement !== targetElement) {
            clearHighlights();
            lastHighlightedElement = targetElement;
        }
        highlightWordInElement(targetElement, targetLocalIndex);
        scrollToElement(targetElement);
    }
}

function highlightWordInElement(element, wordIndex) {
    // Get original text from stored data
    const elementData = textElements.find(data => data.element === element);
    if (!elementData) return;
    
    // Special handling for pills container
    if (elementData.type === 'pills') {
        highlightWordInPills(element, wordIndex, elementData.text);
        return;
    }
    
    const text = elementData.text;
    const words = text.split(/(\s+)/);
    
    let wordCount = 0;
    let highlightedHTML = '';
    
    words.forEach(word => {
        if (word.trim()) {
            if (wordCount === wordIndex) {
                highlightedHTML += `<span class="speech-highlight">${word}</span>`;
            } else {
                highlightedHTML += escapeHtml(word);
            }
            wordCount++;
        } else {
            highlightedHTML += escapeHtml(word);
        }
    });
    
    element.innerHTML = highlightedHTML;
}

function highlightWordInPills(pillsContainer, wordIndex, pillsText) {
    // Pills text format: "tag1, tag2, tag3."
    // When pillsText is split by spaces, we get: ["tag1word1", "tag1word2,", "tag2word1", "tag2word2,", "tag3word1", "tag3word2", "tag3word3."]
    // The commas/periods are attached to the last word of each tag
    
    const words = pillsText.split(/\s+/);
    
    if (wordIndex >= words.length) return;
    
    // Get the element data to restore original pill texts
    const elementData = textElements.find(data => data.element === pillsContainer);
    if (!elementData || !elementData.pillTexts) return;
    
    // Find which tag contains this word by matching against the actual split words
    const tags = pillsContainer.querySelectorAll('.tag');
    let cumulativeWords = 0;
    let targetTagIndex = -1;
    let localWordIndex = -1;
    
    // First pass: find which tag contains the word
    // We need to match wordIndex against the actual words array from pillsText
    // Example: "UX Design, UI Design, AI Image Generation." splits to:
    // ["UX", "Design,", "UI", "Design,", "AI", "Image", "Generation."]
    // Word indices: 0=UX, 1=Design,, 2=UI, 3=Design,, 4=AI, 5=Image, 6=Generation.
    tags.forEach((tag, tagIndex) => {
        const originalTagText = elementData.pillTexts && tagIndex < elementData.pillTexts.length 
            ? elementData.pillTexts[tagIndex] 
            : tag.textContent.trim();
        const tagWords = originalTagText.split(/\s+/);
        
        // Check if wordIndex falls within this tag's word range in the pillsText split
        if (wordIndex >= cumulativeWords && wordIndex < cumulativeWords + tagWords.length) {
            targetTagIndex = tagIndex;
            localWordIndex = wordIndex - cumulativeWords;
        }
        
        // Count words as they appear in pillsText (commas are attached to last word, so no extra count needed)
        cumulativeWords += tagWords.length;
    });
    
    // If we found the target tag, highlight it
    if (targetTagIndex >= 0 && localWordIndex >= 0) {
        // Only restore tags that have highlights (to minimize visual glitches)
        tags.forEach((tag, index) => {
            const hasHighlight = tag.classList.contains('speech-highlight-pill') || tag.querySelector('.speech-highlight');
            if (hasHighlight && index !== targetTagIndex && elementData.pillTexts && index < elementData.pillTexts.length) {
                tag.classList.remove('speech-highlight-pill');
                tag.textContent = elementData.pillTexts[index];
            }
        });
        
        // Now highlight the target tag
        const targetTag = tags[targetTagIndex];
        const originalTagText = elementData.pillTexts[targetTagIndex];
        
        // Only modify if the tag doesn't already have the correct highlight
        const currentHighlight = targetTag.querySelector('.speech-highlight');
        const expectedWord = originalTagText.split(/\s+/)[localWordIndex];
        
        // Check if we need to update
        const needsUpdate = !currentHighlight || currentHighlight.textContent.trim() !== expectedWord;
        
        if (needsUpdate) {
            // Store current dimensions to prevent layout shift
            const currentWidth = targetTag.offsetWidth;
            const currentHeight = targetTag.offsetHeight;
            
            const words = originalTagText.split(/(\s+)/);
            let highlightedHTML = '';
            let wordCount = 0;
            
            words.forEach(word => {
                if (word.trim()) {
                    if (wordCount === localWordIndex) {
                        highlightedHTML += `<span class="speech-highlight">${word}</span>`;
                    } else {
                        highlightedHTML += escapeHtml(word);
                    }
                    wordCount++;
                } else {
                    highlightedHTML += word; // Preserve whitespace
                }
            });
            
            // Use requestAnimationFrame to minimize layout shifts
            requestAnimationFrame(() => {
                targetTag.innerHTML = highlightedHTML;
                // Force a reflow to ensure consistent sizing
                void targetTag.offsetWidth;
            });
        }
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function scrollToElement(element) {
    const modalContent = document.querySelector('.modal-content');
    if (!modalContent || !element) return;
    
    // Don't auto-scroll if user has manually scrolled - UNLESS we're scrubbing
    // During scrubbing, we want to follow the highlight
    if (userHasScrolled && !isScrubbing) {
        return; // Exit early - no auto-scrolling at all (unless scrubbing)
    }
    
    const elementRect = element.getBoundingClientRect();
    const modalRect = modalContent.getBoundingClientRect();
    const modalHeader = document.querySelector('.modal-header');
    const headerHeight = modalHeader ? modalHeader.offsetHeight : 0;
    
    // Check if element is outside viewport (with some padding)
    const padding = 50;
    const isAboveViewport = elementRect.top < (modalRect.top + headerHeight + padding);
    const isBelowViewport = elementRect.bottom > (modalRect.bottom - padding);
    
    if (isAboveViewport || isBelowViewport) {
        // Calculate scroll position to center the element
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const scrollPosition = elementTop - (modalContent.clientHeight / 2) + (elementHeight / 2);
        
        // Mark as programmatic scroll to avoid triggering userHasScrolled
        programmaticScroll = true;
        
        // Store the target scroll position to detect if user scrolls away
        const targetScrollTop = Math.max(0, scrollPosition);
        
        modalContent.scrollTo({
            top: targetScrollTop,
            behavior: 'smooth'
        });
        
        // Reset flag after scroll animation completes (longer timeout to account for smooth scroll)
        setTimeout(() => {
            programmaticScroll = false;
            // Double-check: if scroll position changed significantly, user must have scrolled
            const currentScrollTop = modalContent.scrollTop;
            if (Math.abs(currentScrollTop - targetScrollTop) > 20 && isPlaying) {
                userHasScrolled = true;
            }
        }, 800); // Longer timeout to ensure smooth scroll completes
    }
}

function clearHighlights() {
    textElements.forEach(data => {
        const element = data.element;
        if (!element) return;
        
        if (data.type === 'pills') {
            // Restore pills to original state
            const tags = element.querySelectorAll('.tag');
            tags.forEach((tag, index) => {
                tag.classList.remove('speech-highlight-pill');
                // Restore original tag text (remove any highlighting spans)
                const highlighted = tag.querySelector('.speech-highlight');
                if (highlighted && data.pillTexts && index < data.pillTexts.length) {
                    // Use requestAnimationFrame to batch DOM updates and prevent layout shifts
                    requestAnimationFrame(() => {
                        tag.textContent = data.pillTexts[index];
                    });
                } else if (!highlighted && data.pillTexts && index < data.pillTexts.length) {
                    // Also restore if no highlight but text might have been modified
                    requestAnimationFrame(() => {
                        tag.textContent = data.pillTexts[index];
                    });
                }
            });
        } else {
            // Restore original text for other elements
            const highlighted = element.querySelector('.speech-highlight');
            if (highlighted) {
                element.textContent = data.text;
            }
        }
    });
}

function updatePlayButton() {
    const playButton = document.getElementById('modal-play-button');
    if (!playButton) return;
    
    const playIcon = playButton.querySelector('.play-icon');
    const pauseIcon = playButton.querySelector('.pause-icon');
    
    if (isPlaying) {
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';
        playButton.setAttribute('aria-label', 'Pause audio');
        playButton.setAttribute('aria-pressed', 'true'); // WCAG: Indicate pressed state
    } else {
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
        playButton.setAttribute('aria-label', 'Play audio');
        playButton.setAttribute('aria-pressed', 'false'); // WCAG: Indicate unpressed state
    }
}
