import { render, waitFor } from '@testing-library/react-native'
import AxiosMockAdapter from 'axios-mock-adapter'
import api from '../../src/services/api'
import { Game } from '../../src/Game'

const mock = new AxiosMockAdapter(api)

describe("Game component tests", () => {
  afterEach(() => {
    mock.reset();
  })

  it("renders game data correctly on Api call", async () => {
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

})