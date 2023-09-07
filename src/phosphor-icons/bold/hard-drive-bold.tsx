import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHardDriveBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20Zm-4 112H36V84h184Zm-56-44a16 16 0 1 1 16 16 16 16 0 0 1-16-16Z" />
  </Svg>
);
const Memo = memo(SvgHardDriveBold);
export default Memo;
