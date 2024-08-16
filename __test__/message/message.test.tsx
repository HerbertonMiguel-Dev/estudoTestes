import { render, screen, fireEvent } from '@testing-library/react-native'
import { Message } from '../../src/Message'

describe("Component Message", () => {

  it("should render text message", () => {
    render(<Message/>)

    //Verifica se a mensagem inicial é Aguardando...
    expect(screen.getByTestId("message").props.children).toBe("Aguardando...")
  })

  it("should change message on click button", async () => {
    render(<Message/>)

    expect(screen.getByTestId("message").props.children).toBe("Aguardando...")

    fireEvent.press(screen.getByText("Acessar"))

    //expect(screen.getByTestId("message").props.children).toBe("Bem vindo Matheus")

    const text = await screen.findByText("Bem vindo Herberton")
    expect(text.props.children).toBe("Bem vindo Herberton")

  })

})