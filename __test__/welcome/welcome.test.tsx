import { render, fireEvent } from '@testing-library/react-native'
import { Welcome } from '../../src/Welcome'

describe("Testes de componentes Welcome", () => {

  it("deve exibir uma mensagem de boas-vindas ao pressionar o botão de login", () => {
    const handleGetUserMock = jest.fn();

    const { getByPlaceholderText, getByText } = render(<Welcome handleGetUser={handleGetUserMock} />)

    const input = getByPlaceholderText("Digite seu nome...")
    fireEvent.changeText(input, "Matheus")


    const button = getByText(/login/i)
    fireEvent.press(button)

   expect(getByText(/bem vindo matheus/i)).toBeTruthy();
   expect(handleGetUserMock).toHaveBeenCalled();


  })

  it("não deve exibir mensagem de boas-vindas quando a entrada estiver vazia e o botão de login for pressionado", () => {
    const handleGetUserMock = jest.fn();

    const { getByText, queryByText } = render(<Welcome handleGetUser={handleGetUserMock}/>)

    const loginButton = getByText(/login/i)
    fireEvent.press(loginButton);

    const message = queryByText(/Bem vindo/)
    expect(message).toBeNull();
    expect(handleGetUserMock).not.toHaveBeenCalled();

  })

})