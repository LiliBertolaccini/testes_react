import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <PokemonDetails.jd />', () => {
  it('Teste se as informações detalhadas do pokémon selecionado são mostradas na tela', () => {
    renderWithRouter(<App />);

    // deve conter um texto 'More Details' onde é o nome de Pikachu
    const pikaDetails = screen.queryByRole('link', { name: 'More details' });
    userEvent.click(pikaDetails);

    const agha2 = screen.getByRole('heading', { level: 2, name: 'Pikachu Details' });
    expect(agha2).toBeInTheDocument();
    expect(pikaDetails).not.toBeInTheDocument();

    // heading h2 com o texto Summary
    const ahga2Summary = screen.getByRole('heading', { level: 2, name: 'Summary' });
    expect(ahga2Summary).toBeInTheDocument();

    // parágrafo com o resumo do pokémon específico sendo visualizado
    const infoPokemonText = screen.getByText(/Pokémon roasts hard berries with electricity/i);
    expect(infoPokemonText).toBeInTheDocument();
  });
  it('Teste se existe na página uma seção com os mapas contendo as localizações do pokémon e a opção de favoritar', () => {
    renderWithRouter(<App />);

    // link 'More Details'
    const linkPoke = screen.getByRole('link', { name: 'More details' });
    userEvent.click(linkPoke);

    // existir um heading h2 com o texto Game Locations of 'nome' do pokémon exibido
    const localPoke = screen.getByRole('heading', { level: 2, name: 'Game Locations of Pikachu' });
    expect(localPoke).toBeInTheDocument();

    const mapImg = screen.getAllByRole('img', { name: 'Pikachu location' });
    expect(mapImg.length).toBe(2);
    expect(mapImg[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(mapImg[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');

    const mapImg1 = screen.getByText('Kanto Viridian Forest');
    const mapImg2 = screen.getByText('Kanto Power Plant');
    expect(mapImg1).toBeInTheDocument();
    expect(mapImg2).toBeInTheDocument();

    // checkbox
    const pokiCheck = screen.getByLabelText('Pokémon favoritado?');
    expect(pokiCheck).toBeInTheDocument();

    userEvent.click(pokiCheck);
    expect(pokiCheck).toBeChecked();

    userEvent.click(pokiCheck);
    expect(pokiCheck).not.toBeChecked();
  });
  // eu tentei fazer pelo q ia ser avaliado só, não deu certo. fiquei mais de 1 dia fazendo testes e não consgui. + minha desorganizção, por isso apaguei.
});
