import { render, fireEvent } from '@testing-library/react-native'
import App from '../App'

it("teste exemplo", () =>{
  expect(1).toBe(1)
})

describe("App Componente testes", () => {

  it("should Test render App component", () => {
    const { getByText } = render(<App/>)

    expect(getByText("App Contador")).toBeTruthy();

  })

  it("should change counter on press button", () => {
    const { getByText, getByTestId } = render(<App/>)

    const button = getByText("+")
    fireEvent.press(button);
    fireEvent.press(button);

    const counterText = getByTestId("counter")

    expect(counterText.props.children).toBe(2)
  })

  it("should decrease counter on clicking button", () => {
      const { getByText, getByTestId } = render(<App/>)

      const button = getByText("-")
      fireEvent.press(button);

      const counterText = getByTestId("counter")

      expect(counterText.props.children).toBe(-1)

    })

})