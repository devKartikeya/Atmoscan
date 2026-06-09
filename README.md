# 🌤️ Atmoscan

A modern, responsive weather dashboard built with **React** and **Tailwind CSS**, powered by [WeatherAPI](https://www.weatherapi.com/). Atmoscan provides real-time weather insights with a clean, card-based UI and premium design.

---

## ✨ Features
- 🔎 **Search by Location** – instantly fetch weather data for any city.
- 🌡️ **Detailed Metrics** – temperature, feels-like, humidity, wind speed & direction, pressure, visibility, UV index, and more.
- 🎨 **Premium UI** – gradient backgrounds, responsive layouts, and interactive hover effects.
- 📱 **Responsive Design** – adapts seamlessly across mobile, tablet, and desktop.
- ⚡ **Fast & Lightweight** – built with React hooks and Tailwind for smooth performance.

---

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS
- **Icons:** React Icons (FontAwesome set)
- **API:** WeatherAPI (real-time weather data)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/atmoscan.git

# Navigate into the project
cd atmoscan

# Install dependencies
npm install

Running the App

npm start
The app will run locally at http://localhost:5173


🔑 API Setup
Atmoscan uses WeatherAPI for weather data.

Sign up at WeatherAPI and get your API key.

Replace the API key in App.js:

let res = await fetch(`http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${value}&aqi=no`);


📂 Project Structure

src/
 ├── components/
 │    ├── Navbar.js
 │    ├── Search.js
 │    ├── Card.js
 ├── App.js
 ├── index.css
 └── index.js


 🧑‍💻 Contributing
Contributions are welcome!

Fork the repo

Create a new branch (feature/your-feature)

Commit changes

Open a Pull Request

📜 License
This project is licensed under the MIT License – feel free to use and modify it.

🌟 Acknowledgements
WeatherAPI for providing weather data.

Tailwind CSS for utility-first styling.

React Icons (react-icons.github.io in Bing) for beautiful icons.