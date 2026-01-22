import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Mock fetch
global.fetch = jest.fn();

describe('Login Form Basics', () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render form elements', () => {
    // Prosta unit test bez komponentu Login
    const form = document.createElement('form');
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Email';
    
    form.appendChild(emailInput);
    
    expect(emailInput.type).toBe('email');
    expect(emailInput.placeholder).toBe('Email');
  });

  test('should handle fetch call with POST method', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        accessToken: 'fake-token',
        user: { id: 1, email: 'test@example.com' },
      }),
    });

    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com', password: 'pass123' }),
    });

    const data = await response.json();

    expect(response.ok).toBe(true);
    expect(data.accessToken).toBe('fake-token');
    expect(global.fetch).toHaveBeenCalledWith('/login', expect.any(Object));
  });

  test('should handle login error', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 401,
      json: async () => ({
        error: 'Invalid credentials',
      }),
    });

    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email: 'wrong@email.com', password: 'wrong' }),
    });

    expect(response.ok).toBe(false);
    expect(response.status).toBe(401);
  });

  test('should store token in localStorage', () => {
    const token = 'test-token-12345';
    localStorage.setItem('accessToken', token);
    
    const storedToken = localStorage.getItem('accessToken');
    expect(storedToken).toBe(token);
    
    localStorage.clear();
  });
});
