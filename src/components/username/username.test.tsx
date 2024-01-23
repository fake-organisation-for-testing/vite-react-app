import { render } from "../../utils/test-utils";
import {Username} from './username';

describe("username component test", () => {
    it("check element with username id in the username document", () => {
        const { getByTestId } = render(<Username name="" nameTag="" />);
        expect(getByTestId('username')).toBeInTheDocument()
    });
})