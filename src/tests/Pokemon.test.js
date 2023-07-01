import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testa o componente Pokemon', () => {
  it('se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const pikaDetails = screen.getByRole('link', { name: /more details/i });
    const { href } = pikaDetails;
    expect(pikaDetails).toBeDefined();
    expect(href).toBeDefined();
    userEvent.click(pikaDetails);
    const pikaName = screen.getByTestId('pokemon-name');
    expect(pikaName).toHaveTextContent(/pikachu/i);
    const pikaTipo = screen.getByTestId('pokemon-type');
    expect(pikaTipo).toHaveTextContent(/electric/i);
    const pikaWeigth = screen.getByTestId('pokemon-weight');
    expect(pikaWeigth).toHaveTextContent(/average weight: 6.0 kg/i);
    const pikaImage = screen.getByAltText(/pikachu sprite/i);
    const { src } = pikaImage;
    const url = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(pikaImage).toBeDefined();
    expect(src).toBe(url);
  });

  it('se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);
    const pikaDetails = screen.getByText('More details');
    userEvent.click(pikaDetails);
    const checkboxs = screen.getByRole('checkbox');
    userEvent.click(checkboxs);
    const pikaFavorito = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(pikaFavorito);
    const pikaStar = screen.getByAltText(/is marked as favorite/i);
    expect(pikaStar).toHaveAttribute('src', '/star-icon.svg');
    expect(pikaStar).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
});
