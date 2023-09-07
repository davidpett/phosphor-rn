import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowSquareInBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M132 136v64a12 12 0 0 1-24 0v-35l-59.51 59.49a12 12 0 0 1-17-17L91 148H56a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12Zm76-108H80a20 20 0 0 0-20 20v44a12 12 0 0 0 24 0V52h120v120h-40a12 12 0 0 0 0 24h44a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20Z" />
  </Svg>
);
const Memo = memo(SvgArrowSquareInBold);
export default Memo;
