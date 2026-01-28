# Befrites Self-Service Ordering Kiosk - Proposal Demo

A modern, touch-friendly self-service ordering kiosk system for Befrites restaurant.

## Features

- **Category Navigation** - Easy browsing through menu categories (Specials, Kebabs, Meat, Plates, Sides, Drinks)
- **Item Customization** - Select meat type, portion size, and combo options
- **Shopping Cart** - Add/remove items, adjust quantities
- **Order Confirmation** - Generate order numbers with receipt summary
- **Bilingual Support** - Latvian and English text throughout
- **Responsive Design** - Works on tablets, kiosks, and mobile devices

## How to Deploy on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" button (top right) -> "New repository"
3. Name it: `befrites-kiosk-demo`
4. Set it to **Public**
5. Click "Create repository"

### Step 2: Upload Files

1. On the repository page, click "uploading an existing file"
2. Drag and drop all files from this folder:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
3. Click "Commit changes"

### Step 3: Enable GitHub Pages

1. Go to repository **Settings** (tab at the top)
2. Scroll down to **Pages** (left sidebar)
3. Under "Source", select **main** branch
4. Click **Save**
5. Wait 1-2 minutes for deployment

### Step 4: Access Your Demo

Your demo will be live at:
```
https://YOUR-USERNAME.github.io/befrites-kiosk-demo/
```

## Local Testing

Simply open `index.html` in any web browser to test locally.

## File Structure

```
Restaurant_Kiosk_Demo/
├── index.html      # Main HTML structure
├── styles.css      # All styling
├── app.js          # Application logic
└── README.md       # This file
```

## Menu Data

The menu is based on Befrites restaurant menu with:
- Specials (Combo deals)
- Kebabs (with meat options and combo upgrades)
- Meat dishes (wings, nuggets, gyros with portion sizes)
- Plates (S/M/L/XL sizing)
- Sides (fries, falafel, onion rings, etc.)
- Drinks (soft drinks, coffee, beer)

## Customization

To modify the menu, edit the `menuData` object in `app.js`.

---

**Demo created for management proposal presentation**
