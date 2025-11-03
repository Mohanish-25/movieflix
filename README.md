# MovieFlix

A modern, cross-platform movie application built with React Native and Expo, featuring a beautiful UI powered by
NativeWind (Tailwind CSS for React Native).

## Features

- 📱 Cross-platform support (iOS, Android, and Web)
- 🎨 Modern UI with Tailwind CSS styling via NativeWind
- 🔄 Smooth animations with React Native Reanimated
- 🗺️ File-based routing with Expo Router
- 🔐 Backend integration with Appwrite
- 📊 Type-safe development with TypeScript
- 🎭 Bottom tab navigation
- 🖼️ Optimized image loading with Expo Image

## Tech Stack

- Frontend: React Native with Expo
- Styling: NativeWind (Tailwind CSS for React Native)
- Navigation: Expo Router
- Language: TypeScript
- Backend: Appwrite
- API: The Movie Database (TMDB)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Expo CLI
- iOS Simulator (for Mac users) or Android Emulator
- TMDB API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohanish-25/movieflix.git
   cd movieflix
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following configuration:

   ```env
   # TMDB API Configuration
   EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key_here
   
   # Appwrite Backend Configuration
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_appwrite_database_id
   EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   EXPO_PUBLIC_APPWRITE_PROJECT_NAME="MovieApp"
   EXPO_PUBLIC_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1

4. **Start the development server**
   ```bash
   npx expo start
   ```

## Project Structure

   ```
   movieflix/
   ├── app/                  # Expo Router screens
   │   ├── (tabs)/           # Tab navigation screens
   │   └── movies/           # Dynamic movie routes
   │
   ├── components/           # Reusable UI components
   ├── services/             # API services and custom hooks
   ├── constants/            # App-wide constants and exports
   ├── interfaces/           # TypeScript type definitions
   ├── assets/               # Static assets (fonts, icons, images)
   └── types/                # Additional type declarations
   ```
