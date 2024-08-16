import { fireEvent, render } from '@testing-library/react-native'
import { Form } from '../../src/Form'

describe("Component Form", () => {

  it("deve chamar handleLogin com o nome de usuário e senha quando o botão for pressionado", () => {
    const { getByText, getByPlaceholderText } = render(<Form/>)

   const emailInput = getByPlaceholderText("Digite seu email")
   const passwordInput = getByPlaceholderText("Digite sua senha")
   const button = getByText("Login")

   fireEvent.changeText(emailInput, "teste@teste.com") 
   fireEvent.changeText(passwordInput, "123123")

   fireEvent.press(button)

   expect(getByText("Login autorizado!")).toBeTruthy();

  })

  it("deve verificar o usuário do texto renderizado", () => {
    const { getByText, getByPlaceholderText, queryByText } = render(<Form/>)

    const emailInput = getByPlaceholderText("Digite seu email")
    const passwordInput = getByPlaceholderText("Digite sua senha")
    const button = getByText("Login")

    fireEvent.changeText(emailInput, "matheus@matheus.com") 
    fireEvent.changeText(passwordInput, "123123")

    fireEvent.press(button);

    const textUser = queryByText("Login autorizado!")

    expect(textUser).not.toBeTruthy();
    expect(textUser).toBeNull();

  })

})