import React from 'react';
import { screen } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('se há na aplicação há um conjunto de links de navegação', () => {
  test('conferir se o primeiro link possui o texto "Home"', () => {
    renderWithRouter(<App />);
    screen.logTestingPlaygroundURL();
    const linkHome = screen.getByRole('link', {
      name: /home/i });
    expect(linkHome).toBeInTheDocument();
  });

  test('se há um link possui o texto "About"', () => {
    renderWithRouter(<App />);
    screen.logTestingPlaygroundURL();
    const linkAbout = screen.getByRole('link', {
      name: /about/i });
    expect(linkAbout).toBeInTheDocument();
  });

  test('se o terceirto link possui o texto "Favorite Pokémons"', () => {
    renderWithRouter(<App />);
    screen.logTestingPlaygroundURL();
    const link3 = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(link3).toBeInTheDocument();
  });
});
