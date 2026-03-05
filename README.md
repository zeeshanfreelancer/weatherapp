# Weather Dashboard

A modern, responsive weather application built with **Next.js**, **React**, and **Tailwind CSS**. Get real-time weather information for any city with an elegant, user-friendly interface.

## 🌐 Live Demo

**[Visit the Live Application](https://nextjs-weather-dashboard-rest-api.vercel.app/)**

## ✨ Features

- 🔍 **City Search** - Search weather for any city in the world
- 🌡️ **Real-time Data** - Get current temperature, humidity, and wind speed
- 🎨 **Beautiful UI** - Modern glass-morphism design with smooth animations
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Fast Performance** - Built with Next.js for optimal speed
- 🔒 **Secure API** - API key protected on the server-side
- 🌐 **Real Weather Icons** - Dynamic weather icons from OpenWeatherMap

## 🛠️ Tech Stack

- **Frontend**: React 19, Next.js 16
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **API**: OpenWeatherMap API
- **Deployment**: Vercel
- **Linting**: ESLint

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```env
NEXT_PUBLIC_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
WEATHER_API_KEY=your_openweathermap_api_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
app/
├── components/
│   └── WeatherApp.tsx      # Main weather component
├── api/
│   └── weather/
│       └── route.ts        # Backend API route
├── page.tsx                # Home page
├── layout.tsx              # Root layout
└── globals.css             # Global styles
```

## 🔐 Security

- API keys are stored securely in environment variables
- All API calls are routed through Next.js backend
- No sensitive data is exposed to the client

## 🌍 How It Works

1. User enters a city name in the search bar
2. Frontend sends request to Next.js API route
3. Backend securely calls OpenWeatherMap API with API key
4. Weather data is returned and displayed in the UI
5. Dynamic weather icons update based on current conditions

## 📦 Dependencies

```json
{
  "next": "16.1.6",
  "react": "19.2.3",
  "react-dom": "19.2.3",
  "tailwindcss": "^4"
}
```

## 🚢 Deployment

The app is deployed on **Vercel** and automatically updates on every push to the main branch.

**Live URL**: https://nextjs-weather-dashboard-rest-api.vercel.app/

## 🔄 Environment Variables

For local development, create a `.env.local` file:

```
NEXT_PUBLIC_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
WEATHER_API_KEY=your_api_key_here
```

## 🐛 Troubleshooting

**Tailwind CSS not loading?**
- Clear `.next` folder: `rm -rf .next`
- Restart dev server: `npm run dev`

**API errors?**
- Verify API key is valid in `.env.local`
- Check city name spelling
- Ensure network connection

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [OpenWeatherMap API](https://openweathermap.org/api)

## 🤝 Contributing

Feel free to fork, create feature branches, and submit pull requests for improvements.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 📧 Questions?

If you have any questions or suggestions, feel free to reach out!

---

**Built with ❤️ using Next.js and Tailwind CSS**
