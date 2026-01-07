# Portfolio Site Maintenance Guide

This guide will help you update and maintain your portfolio site.

## File Structure

```
2026-portfolio-site/
├── index.html          # Main HTML structure
├── css/
│   └── styles.css      # All styling and responsive breakpoints
├── js/
│   └── main.js         # All functionality and project data
├── images/
│   ├── home/           # Home section images
│   └── projects/       # Project images organized by project number
└── fonts/              # Custom fonts
```

## Common Updates

### 1. Adding or Updating a Project

**Location:** `js/main.js` - Look for the `projects` object (around line 50)

**Structure:**
```javascript
const projects = {
    1: {  // Project number (used as ID)
        title: 'Project Title',
        description: 'Short description shown on project card',
        images: [
            'images/projects/project-1/Image 1.png',
            'images/projects/project-1/Image 2.png',
            // Add more image paths here
        ],
        tags: ['Tag 1', 'Tag 2', 'Tag 3'],
        sections: [
            {
                title: 'Section Title',
                content: 'Main content paragraph',
                intro: 'Optional intro paragraph',  // Optional
                bullets: [  // Optional
                    'Bullet point 1',
                    'Bullet point 2'
                ],
                conclusion: 'Optional conclusion paragraph'  // Optional
            }
        ],
        retrospective: {  // Optional
            title: 'Retrospective Title',
            content: 'Retrospective content',
            bullets: [
                'Learning point 1',
                'Learning point 2'
            ]
        }
    }
};
```

**To add a new project:**
1. Add a new entry to the `projects` object with the next number (e.g., `6:`)
2. Add project images to `images/projects/project-6/`
3. Add a project card in `index.html` in the projects section (copy an existing card and update)
4. Make sure the `data-project` attribute matches your project number

**Image placement in modals:**
- First image appears before the first section
- Second image appears after section 1
- Third and fourth images appear after section 2 (if applicable)
- Images are automatically placed based on section index

### 2. Updating Home Page Text

**Location:** `index.html` - Look for `.home-text-content` section (around line 30)

Simply edit the paragraph text directly in the HTML.

### 3. Updating Styling

**Location:** `css/styles.css`

**Key sections:**
- **Design Tokens** (lines 18-100): CSS variables for colors, fonts, spacing
- **Navigation** (around line 200): Nav bar styling
- **Home Section** (around line 300): Home page layout
- **Projects Section** (around line 500): Project cards and grid
- **Modal Styles** (around line 700): Project modal styling
- **Contact Section** (around line 1000): Contact form styling
- **Responsive Breakpoints**:
  - Desktop: Default (1440px+)
  - Tablet: `@media (max-width: 1024px)`
  - Mobile: `@media (max-width: 480px)`

**To change colors globally:**
Update CSS variables in the `:root` section at the top of `styles.css`:
```css
:root {
    --bg-primary: #3a3a3a;
    --text-primary: #ffffff;
    /* etc. */
}
```

### 4. Updating Contact Information

**Location:** `index.html` - Look for `.contact-info` section (around line 129)

Update the email address and LinkedIn link directly in the HTML.

### 5. Adding New Images

1. **Home images:** Add to `images/home/` folder
2. **Project images:** Add to `images/projects/project-X/` folder (where X is project number)
3. **Thumbnails:** Should be named `Thumbnail-Project Name.png`
4. **Project images:** Should be numbered sequentially (e.g., `Project Name 1.png`, `Project Name 2.png`)

**Important:** After adding new images, the browser may cache old images. The code includes cache-busting (`?v=${Date.now()}`) for modal images, but you may need to hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows) to see new images.

### 6. Modifying the Interactive Button Animation

**Location:** `js/main.js` - Look for `initInteractiveStatesAnimation()` function (around line 420)

**To adjust:**
- Button position: Modify `bottom: 25%` and `width: 35%` in `initButtonOverlay()`
- Animation timing: Modify the `delays` object in `animateButtonState()` function
- Button colors: Update `stateColors` object
- Responsive scaling: Adjust `breakpointScale` multipliers for mobile/tablet

### 7. Updating Navigation Links

**Location:** `index.html` - Look for `<nav>` section (around line 13)

Update the anchor links (`href="#home"`, `href="#projects"`, etc.) to match your section IDs.

## Tips

1. **Testing Changes:**
   - Always test on different screen sizes (desktop, tablet, mobile)
   - Use browser DevTools to test responsive breakpoints
   - Hard refresh (Cmd+Shift+R / Ctrl+Shift+R) to clear cache

2. **Image Optimization:**
   - Keep images optimized for web (use tools like ImageOptim or Squoosh)
   - PNG format is used for transparency, JPG for photos
   - Thumbnails should be smaller file sizes

3. **Code Organization:**
   - Project data is centralized in `main.js` for easy updates
   - Styles use CSS variables for consistent theming
   - All functionality is in `main.js` - no external dependencies

4. **Common Issues:**
   - **Images not updating:** Hard refresh the browser (Cmd+Shift+R)
   - **Modal not opening:** Check that project number in `data-project` matches project ID in `projects` object
   - **Styling not applying:** Check browser cache, verify CSS file path is correct

5. **Version Control:**
   - The script tag in `index.html` has `?v=2` - increment this when making major changes to force browser cache refresh

## Advanced Customization

### Adding New Sections to Home Page
Edit `index.html` and add new sections with appropriate IDs. Update navigation links accordingly.

### Modifying Animations
- Home text fade-in: `initTextAnimation()` function in `main.js`
- Pixelated image effect: Canvas code in `main.js` (DOMContentLoaded event)
- Modal animations: CSS transitions in `styles.css` (`.modal-content`)

### Adding New Project Tags
Simply add new tag strings to the `tags` array in the project object. The styling will automatically apply.

## Need Help?

If you're stuck:
1. Check browser console for errors (F12 → Console tab)
2. Verify file paths are correct (case-sensitive on some servers)
3. Ensure HTML structure matches existing patterns
4. Test in multiple browsers
