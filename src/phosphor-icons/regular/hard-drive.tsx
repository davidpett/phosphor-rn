import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHardDrive = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 64H32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16Zm0 112H32V80h192v96Zm-24-48a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgHardDrive);
export default Memo;
