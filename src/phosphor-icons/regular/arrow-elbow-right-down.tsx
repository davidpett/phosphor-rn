import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowRightDown = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m229.66 165.66-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L168 188.69V72H32a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8v124.69l34.34-34.35a8 8 0 0 1 11.32 11.32Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowRightDown);
export default Memo;
