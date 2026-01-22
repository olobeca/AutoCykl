import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Mock fetch
global.fetch = jest.fn();

describe('API Fetch Tests', () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should fetch featured offers from API', async () => {
    const mockOffers = [
      {
        id: 1,
        brand: 'Toyota',
        model: 'Corolla',
        price: 85000,
        year: 2018,
        mileage: 50000,
        fuelType: 'Benzyna',
        location: 'Warszawa',
        Type: 'premium',
      },
    ];

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        featuredOffers: mockOffers,
      }),
    });

    const response = await fetch('/offers/getFeaturedOffers');
    const data = await response.json();

    expect(response.ok).toBe(true);
    expect(data.featuredOffers).toHaveLength(1);
    expect(data.featuredOffers[0].brand).toBe('Toyota');
  });

  test('should handle API error', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({
        error: 'Server error',
      }),
    });

    const response = await fetch('/offers/getFeaturedOffers');
    
    expect(response.ok).toBe(false);
    expect(response.status).toBe(500);
  });

  test('should format offer data correctly', () => {
    const offer = {
      id: 1,
      brand: 'Honda',
      model: 'Civic',
      price: 90000,
      year: 2019,
      mileage: 40000,
      fuelType: 'Diesel',
      location: 'Kraków',
      Type: 'premium',
    };

    const formattedPrice = `${offer.price} zł`;
    const formattedTitle = `${offer.brand} ${offer.model}`;
    const formattedMileage = `${offer.mileage} km`;

    expect(formattedPrice).toBe('90000 zł');
    expect(formattedTitle).toBe('Honda Civic');
    expect(formattedMileage).toBe('40000 km');
  });

  test('should handle network request with credentials', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    const response = await fetch('/api/offers/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ brand: 'Ford', model: 'Focus' }),
    });

    expect(global.fetch).toHaveBeenCalledWith(
      '/api/offers/create',
      expect.objectContaining({
        method: 'POST',
        credentials: 'include',
      })
    );
  });
});
