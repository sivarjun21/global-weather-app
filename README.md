# 🌍 Global Weather App

An interactive **3D weather visualization application** built using **React**, **Vite**, **Three.js**, and **OpenWeather API**.  
The application allows users to explore the Earth in 3D, search any city worldwide, and view real-time weather data with dynamic forecasts.

---

# ✨ Features

## 🌎 Interactive 3D Globe

- Fully rotatable 3D Earth
- Smooth auto-rotation
- Realistic Earth night texture
- Atmospheric glow effects

---

## 🔍 Smart City Search

- Search any city worldwide
- Dynamic autocomplete suggestions
- Keyboard Enter support
- Globe automatically rotates to searched city

---

## 🖱️ Click Anywhere on Earth

- Click any location on the globe
- Automatically detects nearest city
- Fetches real-time weather instantly

---

## ☁️ Real-Time Weather

Displays:

- Temperature
- Weather condition
- Humidity
- Wind speed
- Feels-like temperature
- Local date and time of selected city

---

## 📅 5-Day Forecast

- Dynamic 5-day weather prediction
- Starts from the next day
- Weather icons and conditions included

---

## 🌌 Modern UI Design

- Space-themed background
- Animated stars
- Glassmorphism cards
- Responsive futuristic interface

---

<img width="1894" height="860" alt="image" src="https://github.com/user-attachments/assets/d3e294d5-11f6-43f6-a61a-770c4851de72" />

<img width="1882" height="860" alt="image" src="https://github.com/user-attachments/assets/e6aef44d-be3c-49a0-b011-e398ccafd4be" />


# 🛠️ Tech Stack

## Frontend

- React.js
- Vite

## 3D Rendering

- Three.js
- react-globe.gl

## Styling

- CSS3
- Framer Motion

## APIs

- OpenWeather API

---

# 📂 Project Structure

```plaintext
src/
│
├── components/
│   ├── Globe/
│   ├── SearchBar/
│   ├── WeatherCard/
│   ├── Forecast/
│   ├── Navbar/
│   ├── Loader/
│   └── Background/
│
├── pages/
│   └── Home.jsx
│
├── hooks/
│
├── services/
│
├── utils/
│
├── data/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/sivarjun21/global-weather-app.git
```

---

## 2️⃣ Open Project

```bash
cd global-weather-app
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Create Environment File

Create a file named:

```plaintext
.env
```

Add:

```env
VITE_WEATHER_API_KEY=YOUR_API_KEY (Go to the website and get your own API key)
```

---

## 5️⃣ Run Development Server

```bash
npm run dev
```

---

# 🔑 OpenWeather API

Get your free API key from:

:https://openweathermap.org/api

---

# 🚀 Future Improvements

- Live cloud animation
- Weather radar layer
- Day/Night Earth transition
- Voice search
- Favorite cities
- Multi-language support
- Mobile optimization
- Deployment with Vercel

---

# 📚 Learning Outcomes

This project demonstrates:

- React state management
- API integration
- 3D rendering in React
- Asynchronous JavaScript
- Dynamic UI/UX development
- Real-time data handling

---

# 👨‍💻 Author

**Sivarjun Aravind**

B.E CSE (AI & ML)  
Chennai Institute of Technology

---

# ⭐ If you like this project

Give this repository a ⭐ on GitHub.
