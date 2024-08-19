import { render, waitFor } from '@testing-library/react-native'
import AxiosMockAdapter from 'axios-mock-adapter'
import api from '../../src/services/api'
import { Game } from '../../src/Game'

const mock = new AxiosMockAdapter(api)

describe("Testes de componentes do Game", () => {
  afterEach(() => {
    mock.reset();
  })

  it("renderiza os dados do jogo corretamente na chamada da API", async () => {
    mock.onGet("/next-api/?api=game&id=15").reply(200, {
      title: "Jogo Mock Teste",
      image_url: "https://sujeitoprogramador.com/next-api/foto15.png"
    })

    const { getByText, getByTestId } = render(<Game/>)

    await waitFor(() => {
      expect(getByText("Jogo Mock Teste")).toBeTruthy();
      expect(getByTestId("avatarGame").props.source.uri).toBe("https://sujeitoprogramador.com/next-api/foto15.png")
    }) 

  })

  it("deve exibir uma mensagem de erro quando a chamada da API falhar", async () => {
    mock.onGet("/next-api/?api=game&id=15").networkError();

    const { findByText } = render(<Game/>)

    //Esperar pela mensagem de erro na tela.
    const erroMessage = await findByText("Erro ao buscar dados")
    expect(erroMessage).toBeTruthy();


  })

})