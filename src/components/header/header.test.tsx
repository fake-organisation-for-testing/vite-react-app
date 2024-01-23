import { render } from "../../utils/test-utils";
import {Header} from './header';

describe("header component test", () => {
    it("check the header component contains the header styles", () => {
        const { getByTestId } = render(<Header />);
        const element = expect(getByTestId('header'))
        element.toHaveStyle(`
            width: 414px;
            display: flex;
            justify-content: space-between;
        `)
    });
})