import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSignOutLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M110 216a6 6 0 0 1-6 6H48a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h56a6 6 0 0 1 0 12H48a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2h56a6 6 0 0 1 6 6Zm110.24-92.24-40-40a6 6 0 0 0-8.48 8.48L201.51 122H104a6 6 0 0 0 0 12h97.51l-29.75 29.76a6 6 0 1 0 8.48 8.48l40-40a6 6 0 0 0 0-8.48Z" />
  </Svg>
);
const Memo = memo(SvgSignOutLight);
export default Memo;
