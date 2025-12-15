# Screen Templates for Jagadish Reddy Portfolio

## How to Use These Templates

These HTML files are designed to be rendered and converted to texture images for the 3D portfolio.

### Steps:

1. **Open each HTML file in a browser**
   - The files are sized at 1920x1080px for optimal quality

2. **Take screenshots or use a tool to convert to images:**
   - **Option A - Screenshots:**
     - Open in browser at 100% zoom
     - Use browser developer tools to set viewport to 1920x1080
     - Take full page screenshot

   - **Option B - Automated (Recommended):**
     ```bash
     # Using headless Chrome
     google-chrome --headless --screenshot --window-size=1920,1080 about-screen.html
     ```

3. **Convert to required formats:**
   The portfolio uses KTX2 format for optimal performance. You'll need to:

   a. Save screenshots as PNG first

   b. Convert to KTX2 using texture tools:
   ```bash
   # Install KTX-Software tools from: https://github.com/KhronosGroup/KTX-Software

   # Convert PNG to KTX2
   toktx --t2 --genmipmap --uastc --zcmp output.ktx2 input.png
   ```

4. **Replace the texture files:**

   - `about-screen.html` → `static/textures/screens/aboutMeScreens/bigScreenAbout.ktx2`
   - `skills-screen.html` → `static/textures/screens/aboutMeScreens/bigScreenSkills.ktx2`
   - `experience-screen.html` → `static/textures/screens/aboutMeScreens/bigScreenExperience.ktx2`

5. **Create mobile versions:**
   - Adjust the HTML files to 1024x768 for mobile screens
   - Convert and save to: `bigScreenAboutMobile.ktx2`, etc.

## Files to Update

### About/Skills/Experience Screens
Located in: `static/textures/screens/aboutMeScreens/`
- bigScreenAbout.ktx2
- bigScreenSkills.ktx2
- bigScreenExperience.ktx2
- bigScreenAboutMobile.ktx2
- bigScreenSkillsMobile.ktx2
- bigScreenExperienceMobile.ktx2

### Project Screens
Located in: `static/textures/screens/vendingMachineScreens/`
- project1.ktx2 through project8.ktx2
- Create project cards with descriptions from CONTENT_FOR_SCREENS.md

### Shop Name
The shop name "Jesse's Ramen" appears in the 3D model itself. To change to "Jaggu's Place":
- This requires editing the 3D model in Blender
- The model files are in: `static/models/ramenShop/glTF/`
- Open in Blender, edit text objects, and re-export

### Arcade/Credits Screen
Located in: `static/textures/screens/arcadeScreens/`
- arcadeScreenCredits.ktx2
- Update with your credits and acknowledgments

## Alternative: Quick Text Overlay Solution

If you want a faster solution without recreating all textures, you could:
1. Add dynamic text rendering using Three.js text geometry
2. Overlay HTML elements on the 3D scene
3. Use canvas-based texture generation at runtime

Let me know if you'd like me to implement any of these alternative approaches!

## Tools Needed

1. **Browser** - Any modern browser for viewing HTML
2. **Screenshot tool** - Browser DevTools or OS screenshot utility
3. **Image editor** - GIMP, Photoshop, or online tools
4. **KTX tools** - For format conversion: https://github.com/KhronosGroup/KTX-Software
5. **Blender** (optional) - For editing 3D model text

## Support

For questions about the content or technical implementation, refer to:
- CONTENT_FOR_SCREENS.md - All text content
- src/Experience/sources.js - List of all texture files used
- src/Experience/World/Materials.js - How textures are applied
