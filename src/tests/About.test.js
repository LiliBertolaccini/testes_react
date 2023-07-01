import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('se há na aplicação há um conjunto de links de navegação', () => {
  test('testar se a página tem informação sobre a "Pokédex"', () => {
    renderWithRouter(<About />);
    const infoPoke = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémons');
    expect(infoPoke).toBeInTheDocument();
  });

  test('testar se a páguina tem um h2 o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const agha2 = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(agha2).toBeInTheDocument();
  });

  test('testar se a página tem a imagem e o src de um Pokédex', () => {
    renderWithRouter(<About />);
    // const imagPok = container.querySelector('#sandbox');
    const imgPok = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const imagPok = screen.getByRole('img', {
      name: /pokédex/i,
    });
    // expect(imgPok).toBeInTheDocument();
    expect(imagPok.src).toBe(imgPok);
    expect(imagPok.alt).toBe('Pokédex');
  });
});
