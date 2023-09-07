import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgOptionLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M230 184a6 6 0 0 1-6 6h-63.06a13.92 13.92 0 0 1-12.52-7.74L96.84 79.11A2 2 0 0 0 95.06 78H32a6 6 0 0 1 0-12h63.06a13.92 13.92 0 0 1 12.52 7.74l51.58 103.15a2 2 0 0 0 1.78 1.11H224a6 6 0 0 1 6 6ZM152 78h72a6 6 0 0 0 0-12h-72a6 6 0 0 0 0 12Z" />
  </Svg>
);
const Memo = memo(SvgOptionLight);
export default Memo;
