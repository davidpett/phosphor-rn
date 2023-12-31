import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTagChevronLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m235.64 120.23-42.64-64A14 14 0 0 0 181.33 50H24a6 6 0 0 0-4.94 9.41l46.6 67.48a2 2 0 0 1 0 2.14l-46.6 67.56A6 6 0 0 0 24 206h157.33a14 14 0 0 0 11.67-6.23l42.67-64a14 14 0 0 0-.03-15.54Zm-10 8.88-42.67 64a2 2 0 0 1-1.66.89H35.43l40.21-58.23a14 14 0 0 0 0-15.62L35.43 62h145.9a2 2 0 0 1 1.66.89l42.67 64a2 2 0 0 1 0 2.22Z" />
  </Svg>
);
const Memo = memo(SvgTagChevronLight);
export default Memo;
