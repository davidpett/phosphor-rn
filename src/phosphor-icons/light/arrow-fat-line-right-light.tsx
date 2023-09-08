import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatLineRightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m236.24 123.76-96-96A6 6 0 0 0 130 32v42H72a6 6 0 0 0-6 6v96a6 6 0 0 0 6 6h58v42a6 6 0 0 0 10.24 4.24l96-96a6 6 0 0 0 0-8.48ZM142 209.51V176a6 6 0 0 0-6-6H78V86h58a6 6 0 0 0 6-6V46.49L223.51 128ZM46 80v96a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatLineRightLight);
export default Memo;
