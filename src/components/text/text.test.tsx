import { render } from "../../utils/test-utils";
import {Text} from './text';

describe("text component test", () => {
    it("check the text component contains the text styles", () => {
        const { getByTestId } = render(<Text text="" />);
        const element = expect(getByTestId('text'))
        element.toHaveStyle(`
            color: #141619;
            font-family: "SF Pro Text";
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 20.5px;
            letter-spacing: -0.3px;
            width: 311px;
            text-align: left;
        `)
    });
})