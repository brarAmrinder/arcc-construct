# ARC Construction

A modern, high-performance web application for **ARC Construction**—providing premium residential and commercial construction services in Auckland, New Zealand. Built with **Next.js 15 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

---

## Features

- **Responsive & Premium UI**: Custom dark theme design tailored with rich navy `#0B132B` and gold accent palettes.
- **Dynamic Contact & Quote System**: Fully interactive quote request form with direct phone dialing (`tel:`) and location mapping integration.
- **Seamless Navigation**: Fixed backdrop-blur navigation with mobile-responsive menu drawer.
- **Fluid Animations**: Smooth page transitions and interactive micro-animations powered by Framer Motion.
- **SEO Optimized**: Fully configured Next.js Metadata API for Auckland-focused local SEO.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://framer.com/motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist](https://vercel.com/font)

---

## 📁 Project Structure

```text
├── app/
│   ├── components/       # Reusable UI components (Navbar, Footer, Contact, etc.)
│   ├── contact/          # Contact & Free Quote route (/contact)
│   ├── ourstory/         # About & Company story route (/ourstory)
│   ├── services/         # Construction services route (/services)
│   ├── globals.css       # Global styles & CSS variables
│   ├── layout.tsx        # Root layout wrapper with font & nav setup
│   └── page.tsx          # Homepage
├── public/               # Static image assets and icons
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies & scripts

```
## ⚡ Getting Started

### Prerequisites

Ensure you have **Node.js 18.x** or later installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   
git clone git@github.com:brarAmrinder/arcc-construct.git
cd arcc-construct
   
Install dependencies:

Bash
npm install
# or
yarn install
# or
pnpm install
Run the development server:

Bash
npm run dev
Open in browser:
Navigate to http://localhost:3000 to view the site live.

📦 Build & Production
To build the application for production deployment:

Bash
npm run build
npm run start
🌐 Deployment
The easiest way to deploy this Next.js app is using the Vercel Platform:

Push your code to GitHub / GitLab / Bitbucket.

Import your repository into Vercel.

Vercel will automatically detect Next.js and build the project.

---

##Screenshots

1. Main screen of app
   <img width="1187" height="2513" alt="MainPage" src="https://github.com/user-attachments/assets/451a2937-7856-4aa0-a0cc-1719e5a75df6" />

2. game logic - touch a mole and it counts score
   <img width="1187" height="2513" alt="GamePlay" src="https://github.com/user-attachments/assets/e7f5e2e8-8b51-4227-ac7d-24633a06d247" />

3. Leaderboard screenshots which updates scores based on player performance

   <img width="1187" height="2513" alt="Leaderboard" src="https://github.com/user-attachments/assets/a11e218e-e059-4c2c-b535-04a46e2b0b9f" />

<img width="1187" height="2513" alt="Leaderboard2" src="https://github.com/user-attachments/assets/f7b6fa70-1476-4fc1-9595-b76ec78d5134" />


## Author

**Amrinder Brar**

GitHub: https://github.com/brarAmrinder

---

## 📄 License

This project was developed for educational purposes.


