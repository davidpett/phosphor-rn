import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowUUpLeftDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M80 40v96L32 88Z" opacity={0.2} />
    <Path d="M168 80H88V40a8 8 0 0 0-13.66-5.66l-48 48a8 8 0 0 0 0 11.32l48 48A8 8 0 0 0 88 136V96h80a48 48 0 0 1 0 96H80a8 8 0 0 0 0 16h88a64 64 0 0 0 0-128Zm-96 36.69L43.31 88 72 59.31Z" />
  </Svg>
);
const Memo = memo(SvgArrowUUpLeftDuotone);
export default Memo;
