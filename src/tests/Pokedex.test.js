import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

// const pokes = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
describe('se é a página pokedex', () => {
  test('página contém um heading h2 com o texto Encountered pokémons', () => {});
  renderWithRouter(<App />);
  const agha2 = screen.getByRole('heading', { level: 2, name: /Encountered pokémons/i });
  expect(agha2).toBeInTheDocument();

  test('testa se o botão Próximo pokémon tem filtro', () => {
    renderWithRouter(<App />);
    const pokButton1 = screen.getAllByTestId('pokemon-type-button');
    expect(pokButton1).toHaveLength(7);
  });

  test('testa se o botão do tipo de pokemon esta habilitado', () => {
    renderWithRouter(<App />);
    const pokeButton1 = screen.getByRole('button', { name: 'Fire' });
    userEvent.click(pokeButton1);
    const pokeFire = screen.getAllByText('Fire');
    expect(pokeFire).toHaveLength(2);
  });

  test('Teste se o botão All é clicavel', () => {
    renderWithRouter(<App />);
    const pokeAll = screen.getByRole('button', { name: 'All' });
    userEvent.click(pokeAll);
  });
});
