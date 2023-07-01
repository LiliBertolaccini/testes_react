import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('se é a página NotFound', () => {
  test('testar se a página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const agha = screen.getByRole('heading', { level: 2, name: 'Page requested not found' });
    expect(agha).toBeInTheDocument();
  });

  test('Se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<NotFound />);
    const imgSRC = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', imgSRC);
  });
});
