# Clearmont Design Code Launchpad

A modern, responsive website built with React, TypeScript, and Tailwind CSS, featuring a centralized font management system.

## 🎨 Font Management System

### **IMPORTANT: Always Use the Font System**

This project uses a centralized font management system. **NEVER hardcode font styles** in components.

### **How to Add New Components to the Font System:**

1. **Import the useFonts hook:**
   ```tsx
   import { useFonts } from '../hooks/useFonts';
   ```

2. **Add data-component attribute to root element:**
   ```tsx
   <div className="your-component" data-component="componentName">
   ```

3. **Add CSS classes for targeting:**
   ```tsx
   <h1 className="your-component" style={h1Font.getFontStyle()}>
   <p className="your-component" style={pFont.getFontStyle()}>
   ```

4. **Use font hooks:**
   ```tsx
   const h1Font = useFonts('componentName', 'h1');
   const pFont = useFonts('componentName', 'p');
   ```

### **Font System Rules:**

- ✅ **DO:** Use `useFonts('componentName', 'elementType')`
- ✅ **DO:** Add `data-component="componentName"` to root elements
- ✅ **DO:** Add CSS classes for font targeting
- ✅ **DO:** Use `style={fontHook.getFontStyle()}` for inline styles
- ❌ **DON'T:** Hardcode `fontFamily` in CSS or inline styles
- ❌ **DON'T:** Use Tailwind font classes like `font-sans`, `font-serif`
- ❌ **DON'T:** Add custom CSS with font properties

### **Available Element Types:**
- `h1`, `h2`, `h3`, `h4` - Headings
- `p` - Paragraphs
- `span` - Inline text
- `li` - List items
- `label` - Form labels

### **Example Component Template:**
```tsx
import { useFonts } from '../hooks/useFonts';

export function NewComponent() {
  const h1Font = useFonts('newComponent', 'h1');
  const pFont = useFonts('newComponent', 'p');

  return (
    <div className="new-component" data-component="newComponent">
      <h1 className="new-component" style={h1Font.getFontStyle()}>
        Your Heading
      </h1>
      <p className="new-component" style={pFont.getFontStyle()}>
        Your paragraph text
      </p>
    </div>
  );
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── admin/          # Admin panel components
│   ├── blog/           # Blog-related components
│   ├── book-club/      # Book club components
│   └── Images/         # Image-related components
├── config/             # Configuration files
│   └── fonts.ts        # Font system configuration
├── hooks/              # Custom React hooks
│   └── useFonts.tsx    # Font management hooks
└── integrations/       # External service integrations
    └── supabase/       # Supabase client and types
```

## 🎯 Font Management

Access the font management system at `/admin` route:
- Change fonts for any component/element combination
- Apply changes surgically (e.g., only H1s in Hero section)
- Reset to default fonts
- Publish changes across the entire website

## 🔧 Technologies Used

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **Build Tool:** Vite
- **Database:** Supabase
- **Deployment:** Vercel-ready
- **Icons:** Lucide React
- **Fonts:** Google Fonts integration

## 📝 Development Guidelines

1. **Always use the font system** - never hardcode fonts
2. **Follow the component template** above for new components
3. **Test font changes** in the admin panel before committing
4. **Use semantic HTML** with proper heading hierarchy
5. **Maintain responsive design** with Tailwind breakpoints

## 🚨 Common Mistakes to Avoid

- ❌ Adding `font-family` in CSS files
- ❌ Using `font-` Tailwind classes
- ❌ Forgetting to add `data-component` attributes
- ❌ Not importing the `useFonts` hook
- ❌ Hardcoding font styles in component props

## 🔍 Troubleshooting

If fonts aren't applying:
1. Check that `data-component` attribute is set
2. Verify CSS classes are added to text elements
3. Ensure `useFonts` hook is imported and used
4. Check the font configuration in `src/config/fonts.ts`
5. Use the admin panel to verify font settings

---

**Remember: The font system is the single source of truth for all typography. Use it consistently!**
