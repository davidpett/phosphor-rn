import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 44a84.11 84.11 0 0 0-76.41 49.12A60.71 60.71 0 0 0 72 92a60 60 0 0 0 0 120h88a84 84 0 0 0 0-168Zm0 160H72a52 52 0 1 1 8.55-103.3A83.66 83.66 0 0 0 76 128a4 4 0 0 0 8 0 76 76 0 1 1 76 76Z" />
  </Svg>
);
const Memo = memo(SvgCloudThin);
export default Memo;
