// constants/index.ts

// 🌐 API Endpoints
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com';

export const ENDPOINTS = {
  PROPERTIES: '/properties',
  BOOKINGS: '/bookings',
  USERS: '/users',
};

// ⚙️ App Configuration
export const CONFIG = {
  SITE_NAME: 'RealEstatePro',
  DEFAULT_LANGUAGE: 'en',
  CURRENCY: 'GHS',
};

// 📝 UI Text
export const UI_TEXT = {
  BOOK_NOW: 'Book Now',
  VIEW_DETAILS: 'View Details',
  NO_PROPERTIES_FOUND: 'No properties found.',
  LOADING: 'Loading...',
};
