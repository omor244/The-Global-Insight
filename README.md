# 📰 The Global Insight – Professional News Portal

**The Global Insight** is a high-performance, modern news application designed to deliver breaking news with speed and elegance. Built using **React 19** and **Tailwind CSS v4**, this platform offers a seamless user experience across all devices.

---

## 🔗 Project Links
* **Live Demo:** [https://elegant-ganache-0e695f.netlify.app](https://elegant-ganache-0e695f.netlify.app/)
* **GitHub Repository:** [https://github.com/omor244/The-Global-Insight](https://github.com/omor244/The-Global-Insight)

---

## ✨ Key Features

* **Bento Grid Layout:** A sophisticated homepage design that organizes news stories based on importance using a modern Bento Grid system.
* **Expandable Search System:** A professional, animated search bar in the Navbar that provides real-time filtering using **React Context API**.
* **Dynamic Routing:** Powered by **React Router 7**, providing seamless navigation and dedicated details pages for every news article.
* **20+ Authentic News Items:** Pre-loaded with realistic news data covering National, International, Sports, and Technology categories.
* **Optimized Performance with TanStack Query:** * **Server State Management:** Efficient data fetching and synchronization.
    * **Smart Caching:** Instant transitions between news categories without redundant API calls.
    * **Skeleton Loaders:** Custom pulse animations to provide a premium feel even on slow connections.
* **Fully Responsive:** Meticulously optimized for high-end mobile devices, tablets, and desktops.
* **Branded 404 Error Page:** A custom "Headline Missing" error page to keep users engaged even when they hit a broken link.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Core Frontend Library (Latest) |
| **TanStack Query** | Server-state Management & Caching |
| **Vite** | Ultra-fast Build Tool |
| **Tailwind CSS v4** | Next-generation Utility-first Styling |
| **DaisyUI v5** | Premium UI Component Library |
| **React Router 7** | Modern Client-side Routing |
| **Axios** | Data Fetching & API Integration |
| **Lucide React** | High-quality Modern Icon Set |
| **Netlify / Vercel** | Hosting & Production Deployment |

---

## ⚡ Data Management (TanStack Query)

In this project, **TanStack Query (React Query)** is utilized to manage the lifecycle of news data. This replaces the traditional `useEffect` approach with a more robust solution:

* **Caching:** Once news articles are fetched, they are cached globally. Moving back and forth between "Sports" and "National" is instantaneous.
* **Loading/Error States:** Leveraging `isLoading` and `isError` to provide a smooth UI/UX with skeleton screens.
* **Query Keys:** Organized query keys (e.g., `['allNews']`) ensure data remains consistent across all components.

---

## 📂 Project Architecture

```text
├── public/                 # Static database and assets
│   ├── AllNews.json        # Main JSON database for news articles
│   └── categories.json     # Dynamic navigation menu data
├── src/
│   ├── Components/         # Reusable UI (Navbar, Footer, NewsCard)
│   ├── Context/            # Global State Management (Search filtering)
│   ├── Pages/              # Full page views (Home, Category, Details)
│   └── main.jsx            # Entry point of the application
└── package.json            # Project dependencies and scripts