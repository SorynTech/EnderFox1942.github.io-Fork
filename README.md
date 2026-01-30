# Holiday Caravan Booking Website

This is a website for advertising and booking a holiday caravan. The website is designed to be easy to use and looks good on phones, tablets, and computers.

## What This Website Does

This website shows pictures of the caravan and lets people see pricing information. They can contact you through Facebook to make a booking.

The website has:
- A light mode (normal colors) and dark mode (black background)
- Pictures of the outside of the caravan
- Pictures of the inside of the caravan
- Prices for different types of stays
- A way to contact you on Facebook

## File Structure

```
holiday-caravan/
├── index.html              # Main HTML page
├── css/
│   └── style.css          # All styling and colors
├── js/
│   └── app.js             # AngularJS application logic
├── data/
│   ├── favicon/           # Favicon directory
│   │   └── favicon.ico   # Browser tab icon (place your icon here)
│   └── images/            # All caravan images (17 total)
│       ├── frontalview.jpg
│       ├── sideview.jpg
│       ├── livingspace.jpg
│       ├── kitchen.jpg
│       ├── bedroom.jpg
│       └── ... (12 more images)
├── robots.txt             # AI scraper protection
└──── README.md              # This file
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
2. Drag and drop ALL files from the `[Your Username].github.io` folder
3. Write commit message: "Initial website deployment"
4. Click "Commit changes"

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

1. Open the file: `js/app.js`
2. Find the section that starts with: `$scope.pricingOptions = [`
3. You'll see something like this:

```javascript
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
7. Upload to GitHub (if already deployed)

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

The website is made up of several files:

- index.html - This is the main page that people see
- style.css - This controls how everything looks (colors, spacing, fonts)
- app.js - This makes the website interactive (dark mode, picture viewing)
- robots.txt - This stops robots from copying your pictures
- Images folder - Contains all the photos of the caravan

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
- Open the file called app.js
- Find the section that says "pricingOptions"
- Change the numbers there

If you want to change colors:
- Open the file called style.css
- Look at the top where it says ":root"
- Change the color codes there

If you want to add or remove pictures:
- Put new pictures in the images folder
- Open app.js
- Add the picture names to either "exteriorImages" or "interiorImages"

## What You Need To Use The Website

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

## Technical Details

The website is built using:
- HTML5 (the structure)
- CSS3 (the styling)
- AngularJS 1.8.2 (the interactive parts)
- Google Fonts for nice text

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
