# Holiday Caravan Booking Website

This is a website for advertising and booking a holiday caravan. The website is designed to be easy to use and looks good on phones, tablets, and computers.

## Technology Stack

This website is built using modern web technologies:

- **React 19** - Modern UI library for building interactive user interfaces
- **TypeScript** - Type-safe JavaScript for better code quality and developer experience
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with dark mode support

## What This Website Does

This website shows pictures of the caravan and lets people see pricing information. They can contact you through Facebook to make a booking.

The website has:
- A light mode (normal colors) and dark mode (black background)
- Skeleton loading screens for better user experience
- Protected images with watermarks to prevent unauthorized use
- Pictures of the outside of the caravan
- Pictures of the inside of the caravan
- Prices for different types of stays
- A way to contact you on Facebook

## Features

- **Skeleton Loading**: Smooth loading experience with skeleton screens shown for 0.5 seconds
- **Image Protection**: All images include "Niki-and-John" watermark and cannot be right-clicked or saved
- **Responsive Design**: Works perfectly on phones, tablets, and desktop computers
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Modern Architecture**: Built with React components for maintainability

## File Structure

```
holiday-caravan/
├── index.html              # Main HTML entry point for React app
├── package.json            # Node.js dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
├── src/
│   ├── main.tsx           # React application entry point
│   ├── App.tsx            # Main application component
│   ├── App.css            # Application styles (imports original CSS)
│   ├── components/        # React components
│   │   ├── Header.tsx     # Top header with dark mode toggle
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Features.tsx   # Features grid section
│   │   ├── Gallery.tsx    # Image gallery component
│   │   ├── Pricing.tsx    # Pricing cards section
│   │   ├── Contact.tsx    # Contact section
│   │   ├── Modal.tsx      # Image modal popup
│   │   ├── ProtectedImage.tsx  # Watermarked image component
│   │   └── Skeleton.tsx   # Skeleton loading components
│   ├── data/
│   │   └── index.ts       # Application data (features, images, pricing)
│   └── types/
│       └── index.ts       # TypeScript type definitions
├── css/
│   └── style.css          # Original styling (imported by App.css)
├── data/
│   ├── favicon/           # Favicon directory
│   │   └── favicon.ico   # Browser tab icon
│   └── images/            # All caravan images (17 total)
│       ├── frontalview.jpg
│       ├── sideview.jpg
│       └── ... (15 more images)
├── Before react folder/   # Original AngularJS files (archived)
│   ├── index.html         # Original HTML file
│   └── js/
│       └── app.js         # Original AngularJS application
├── robots.txt             # AI scraper protection
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions workflow for deployment
└── README.md              # This file
```

## Development

### Prerequisites
- Node.js 20 or higher
- npm (comes with Node.js)

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

## Deployment to GitHub Pages

### Step 1: Create GitHub Account
1. Go to https://github.com
2. Sign up for free account
3. Verify your email

### Step 2: Create Repository
1. Click the "+" icon (top right)
2. Select "New repository"
3. Repository name: `[Your Username].github.io`
4. Description: "Holiday caravan booking website"
5. Make it Public
6. Click "Create repository"

### Step 3: Upload Files
1. Click "uploading an existing file"
2. Run `npm run build` locally to create the dist folder
3. Drag and drop ALL files from the `dist` folder
4. Write commit message: "Initial website deployment"
5. Click "Commit changes"

### Alternative: Automatic Deployment with GitHub Actions
The repository includes a GitHub Actions workflow that automatically builds and deploys the site:
1. Push your code to the main branch
2. The workflow will automatically build the React app
3. The built site will be deployed to GitHub Pages

### Step 4: Enable GitHub Pages
1. Go to repository Settings
2. Click "Pages" in left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait 2-5 minutes

### Step 5: Access Your Site
Your website will be live at:
```
https://YOUR-USERNAME.github.io
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## How To Change Pricing

1. Open the file: `src/data/index.ts`
2. Find the section that starts with: `export const pricingOptions: PricingOption[] = [`
3. You'll see TypeScript objects like this:

```typescript
{
  title: 'Weekend Break',
  price: '£225',
  duration: 'Friday - Monday',
  features: [
    'Perfect for quick getaway',
    '3 nights included',
    'Full access to facilities',
    'Flexible check-in times'
  ]
}
```

4. Change the `price: '£225'` to your new price
5. Change any text in the `features` array
6. Save the file
7. Run `npm run build` to rebuild
8. Push to GitHub (if using automatic deployment)

## How To Change Colors

1. Open the file: `css/style.css`
2. Find the `:root {` section at the top
3. You'll see color codes like this:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #0077be 0%, #20b2aa 100%);
    --secondary-gradient: linear-gradient(135deg, #40e0d0 0%, #ff7f50 100%);
    --accent-color: #0077be;
    --text-dark: #0d2f3f;
    --text-light: #ffffff;
}
```

4. Change the color codes:
   - `#0077be` = Ocean blue
   - `#20b2aa` = Light sea green
   - `#40e0d0` = Turquoise
   - `#ff7f50` = Coral
   
5. Use a color picker tool like: https://htmlcolorcodes.com/
6. Replace the codes with your chosen colors
7. Save the file
8. Upload to GitHub (if already deployed)

### Common Color Changes

To change the main theme color:
- Find: `--accent-color: #0077be;`
- Replace `#0077be` with your color code

To change button colors:
- Find: `--primary-gradient`
- Change both color codes in the gradient

To change text color:
- Find: `--text-dark: #0d2f3f;`
- Replace with your preferred dark color

## How The Website Is Organized

The website is now built with React and TypeScript:

- **src/main.tsx** - Entry point that initializes the React application
- **src/App.tsx** - Main application component that manages state and layout
- **src/components/** - Individual React components for each section
- **src/data/index.ts** - All website content (features, images, pricing)
- **src/types/index.ts** - TypeScript type definitions
- **css/style.css** - Original styling (imported by App.css)
- **data/images/** - All the photos of the caravan

### Component Structure

Each section of the website is now a separate React component:
- **Header**: Top banner with copyright and dark mode toggle
- **Hero**: Main banner with call-to-action
- **Features**: Grid of features with icons
- **Gallery**: Reusable image gallery for exterior/interior photos
- **Pricing**: Pricing cards with options
- **Contact**: Contact information and Facebook link
- **Modal**: Image popup viewer
- **ProtectedImage**: Special component that adds watermarks and prevents downloads
- **Skeleton**: Loading placeholder components

## What The Caravan Has

The website lists these features:
- Sleeps 6 people
- Located at Palm Grove
- Veranda with seating around the outside
- Central heating
- Parking space
- Smart TV in every room
- Free WiFi
- Beds already made up when you arrive
- Can provide: cot bed, bed guards, high chair, and pushchair if asked

## When Bookings Open

The website says bookings open on 11th March 2026.

## How People Contact You

There is a Facebook button that links to: https://www.facebook.com/groups/814358534967444

People can click this to message you about bookings.

## If You Want To Change Something

If you want to change prices:
- Open the file `src/data/index.ts`
- Find the section that says `pricingOptions`
- Change the values there
- Run `npm run build` and redeploy

If you want to change colors:
- Open the file `css/style.css`
- Look at the top where it says `:root`
- Change the color codes there
- Run `npm run build` and redeploy

If you want to add or remove pictures:
- Put new pictures in the `data/images` folder
- Open `src/data/index.ts`
- Add the picture names to either `exteriorImages` or `interiorImages`
- Run `npm run build` and redeploy

## Technical Details

The website is built using:
- **React 19** - Modern UI library
- **TypeScript 5** - Type-safe JavaScript
- **Vite 7** - Fast build tool and dev server
- **CSS3** - Modern styling with custom properties
- **Google Fonts** - Playfair Display and Inter fonts

### Browser Support
The website works on:
- Chrome browser
- Firefox browser
- Safari browser
- Edge browser
- Phone browsers
- Tablet browsers

You don't need to install anything. Just visit the web address and it works.

## Protection From Robots

The robots.txt file stops computer programs from:
- Copying your images to train AI
- Putting your images on Google Images
- Archiving your website without permission

This helps keep your pictures safe and yours.

## Image Protection

All images on the website are now protected with:
- **Watermarks**: Every image displays "Niki-and-John" watermark
- **Right-click Protection**: Right-clicking on images is disabled
- **Download Prevention**: Images cannot be saved via browser context menu
- **Drag Prevention**: Images cannot be dragged and dropped

These protections help ensure your images remain your property.

## Technical Details

The website is built using:
- **React 19** - Modern UI library
- **TypeScript 5** - Type-safe JavaScript
- **Vite 7** - Fast build tool and dev server
- **CSS3** - Modern styling with custom properties
- **Google Fonts** - Playfair Display and Inter fonts

## Coding Support

If you need help with the code, you can contact SorynTech:

[![GitHub](https://img.shields.io/badge/GitHub-soryntech-181717?style=for-the-badge&logo=github)](https://github.com/soryntech) [![GitLab](https://img.shields.io/badge/GitLab-soryntech-FCA121?style=for-the-badge&logo=gitlab)](https://gitlab.com/soryntech) [![Discord](https://img.shields.io/badge/Discord-soryntech-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/users/447812883158532106)

## License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0).

Copyright (c) 2026 SorynTech

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/.

---

Note: Whilst SorynTech made this website, it is exempt from the SorynTech Suite of applications and websites.
