

## Add Foundation's Instagram Account

I'll update the Instagram links throughout the website to point to the foundation's official Instagram account: **kalango_foundation**

### Changes Required

**1. Footer Component** (`src/components/layout/Footer.tsx`)
- Update line 38: Change `href="https://instagram.com"` to `href="https://www.instagram.com/kalango_foundation"`

**2. Contact Page** (`src/pages/ContactPage.tsx`)
- Update line 35: Change the Instagram URL in the `socialLinks` array from `"https://instagram.com"` to `"https://www.instagram.com/kalango_foundation"`

### Result
After these changes, clicking the Instagram icon in either the footer (visible on all pages) or the Contact page will take visitors directly to the foundation's Instagram profile at **instagram.com/kalango_foundation**.

### Technical Details
- Both files use the `Instagram` icon from `lucide-react`
- The links open in a new tab (`target="_blank"`) with proper security attributes (`rel="noopener noreferrer"`)
- No new dependencies or components needed

