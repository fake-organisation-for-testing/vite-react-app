import { render } from "../../utils/test-utils";
import {Image} from './image';

describe("Image component test", () => {
    it("check the Image component contains the alt description", () => {
        const { getByAltText } = render(<Image path="" alt="image-description" />);
        const element = expect(getByAltText('image-description'))
        element.toHaveAccessibleName('image-description')
    });
})