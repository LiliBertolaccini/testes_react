import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('se é exibida na tela a mensagem No favorite pokemon found', () => {
  test('se é exibida na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);
    screen.logTestingPlaygroundURL();
    const mensagem = screen.getByText(/no favorite pokemon found/i);
    expect(mensagem).toBeInTheDocument();
  });

  test('se são exibidos todos os cards de pokémons favoritados', () => {

  });
});
