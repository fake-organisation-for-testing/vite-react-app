import { render } from "../../utils/test-utils";
import {Icon} from './icon';

describe("Icon component test", () => {
    it("check the icon component contains the alt description", () => {
        const { getByAltText } = render(<Icon path="" alt="image-description" />);
        const element = expect(getByAltText('image-description'))
        element.toHaveAccessibleName('image-description')
    });
})