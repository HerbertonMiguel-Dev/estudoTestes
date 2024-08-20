import { render, fireEvent } from '@testing-library/react-native'
import App from '../../App'

it("Test exemplo", () => {

  const num1 = 10;
  const num2 = 20;
  const sum = num1 + num2;

  expect(1).toBe(1);
  expect(sum).toBe(30);
  expect(sum).toBeGreaterThan(20)
  expect(sum).toBeLessThan(50)

})

describe("App Componente testes", () => {

  it("deve testar o componente do aplicativo de renderização", () => {
    const { getByText } = render(<App/>)

    expect(getByText("App Contador")).toBeTruthy();
  })

  it("deve mudar o contador ao pressionar o botão", () => {
    const { getByText, getByTestId } = render(<App/>)

    const button = getByText("+")
    fireEvent.press(button);
    fireEvent.press(button);

    const counterText = getByTestId("counter")

    expect(counterText.props.children).toBe(2)

  })


  it("deve diminuir o contador ao clicar no botão", () => {
    const { getByText, getByTestId } = render(<App/>)

    const button = getByText("-")
    fireEvent.press(button);

    const counterText = getByTestId("counter")

    expect(counterText.props.children).toBe(-1)

  })

  it("deve renderizar o componente de boas-vindas", () => {
    const { getByPlaceholderText, getByText } = render(<App/>)

    const input = getByPlaceholderText("Digite seu nome...")
    const loginButton = getByText(/login/i)

    fireEvent.changeText(input, "Lucas")
    fireEvent.press(loginButton);

    expect(input).toBeTruthy();
    expect(loginButton).toBeTruthy();


  })


})