import { render } from '@testing-library/react-native'
import { Title } from '../../src/Title'

describe("Tests Title component", () => {

  it("should render title correctly", () => {
    const { getByText } = render(<Title title="Sujeito" />)

    expect(getByText("Sujeito")).toBeTruthy();

  })

  it("should check style", () => {
    const { getByText } = render(<Title title="Sujeito" />)

    const titleElement = getByText("Sujeito")


    expect(titleElement.props.style).toMatchObject({
      fontSize: 30,
      color: 'red',
      marginBottom: 20,
    })

  })

})