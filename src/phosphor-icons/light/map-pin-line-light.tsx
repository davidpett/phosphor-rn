import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMapPinLineLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 226h-54.78a266.37 266.37 0 0 0 27.31-27.06c27.13-31.2 41.47-64 41.47-94.94a86 86 0 0 0-172 0c0 30.91 14.34 63.74 41.47 94.94A266.37 266.37 0 0 0 110.78 226H56a6 6 0 0 0 0 12h144a6 6 0 0 0 0-12ZM54 104a74 74 0 0 1 148 0c0 59.62-59 108.93-74 120.51-15-11.58-74-60.89-74-120.51Zm112 0a38 38 0 1 0-38 38 38 38 0 0 0 38-38Zm-64 0a26 26 0 1 1 26 26 26 26 0 0 1-26-26Z" />
  </Svg>
);
const Memo = memo(SvgMapPinLineLight);
export default Memo;
