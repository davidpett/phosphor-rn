import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgInfoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M142 176a6 6 0 0 1-6 6 14 14 0 0 1-14-14v-40a2 2 0 0 0-2-2 6 6 0 0 1 0-12 14 14 0 0 1 14 14v40a2 2 0 0 0 2 2 6 6 0 0 1 6 6Zm-18-82a10 10 0 1 0-10-10 10 10 0 0 0 10 10Zm106 34A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102Zm-12 0a90 90 0 1 0-90 90 90.1 90.1 0 0 0 90-90Z" />
  </Svg>
);
const Memo = memo(SvgInfoLight);
export default Memo;
