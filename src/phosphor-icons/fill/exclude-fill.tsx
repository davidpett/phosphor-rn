import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgExcludeFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 160a80 80 0 0 1-158.64 14.64 80 80 0 0 0 93.28-93.28A80 80 0 0 1 240 160Zm-80-80a80.29 80.29 0 0 1 14.64 1.36 80 80 0 1 0-93.28 93.28A80 80 0 0 1 160 80Z" />
  </Svg>
);
const Memo = memo(SvgExcludeFill);
export default Memo;
