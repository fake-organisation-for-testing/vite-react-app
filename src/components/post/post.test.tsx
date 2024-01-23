import { render } from "../../utils/test-utils";
import {Post} from './post';

describe("post component test", () => {
    it("check element with post id in the post document", () => {
        const { getByTestId } = render(<Post />);
        expect(getByTestId('post')).toBeInTheDocument()
    });
})