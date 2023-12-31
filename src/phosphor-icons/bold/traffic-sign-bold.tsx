import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrafficSignBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M246 113.46 142.54 10a20.57 20.57 0 0 0-29.08 0L10 113.46a20.57 20.57 0 0 0 0 29.08L113.46 246a20.57 20.57 0 0 0 29.08 0L246 142.54a20.57 20.57 0 0 0 0-29.08ZM128 226.57 29.43 128 128 29.43 226.57 128Zm7.51-122.08a12 12 0 0 1 17-17l24 24a12 12 0 0 1 0 17l-24 24a12 12 0 0 1-17-17L139 132h-27a12 12 0 0 0-12 12v4a12 12 0 0 1-24 0v-4a36 36 0 0 1 36-36h27Z" />
  </Svg>
);
const Memo = memo(SvgTrafficSignBold);
export default Memo;
