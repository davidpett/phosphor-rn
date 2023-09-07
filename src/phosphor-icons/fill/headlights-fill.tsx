import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeadlightsFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 80a8 8 0 0 1 8-8h72a8 8 0 0 1 0 16h-72a8 8 0 0 1-8-8Zm80 88h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16Zm0-64h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16Zm0 32h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16ZM128 48H88.9C44.62 48 8.33 83.62 8 127.39A80 80 0 0 0 88 208h40a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16Z" />
  </Svg>
);
const Memo = memo(SvgHeadlightsFill);
export default Memo;
