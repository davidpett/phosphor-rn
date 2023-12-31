import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextAUnderlineFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M148.73 120h-41.46L128 75.09ZM216 32v192a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V32a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8ZM76.65 167.26a8 8 0 0 0 10.61-3.91L99.89 136h56.22l12.63 27.35a8 8 0 0 0 14.52-6.7l-48-104a8 8 0 0 0-14.52 0l-48 104a8 8 0 0 0 3.91 10.61ZM200 192a8 8 0 0 0-8-8H64a8 8 0 0 0 0 16h128a8 8 0 0 0 8-8Z" />
  </Svg>
);
const Memo = memo(SvgTextAUnderlineFill);
export default Memo;
