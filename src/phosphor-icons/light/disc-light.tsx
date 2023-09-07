import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDiscLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm37.52 96a37.79 37.79 0 0 0-6.76-16.27l37-36.95A89.61 89.61 0 0 1 217.8 122ZM154 128a26 26 0 1 1-26-26 26 26 0 0 1 26 26Zm-26 90a90 90 0 1 1 59.22-157.71l-36.95 36.95A38 38 0 1 0 165.52 134h52.28a90.12 90.12 0 0 1-89.8 84Z" />
  </Svg>
);
const Memo = memo(SvgDiscLight);
export default Memo;
