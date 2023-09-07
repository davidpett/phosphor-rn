import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLockersThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M188 72a4 4 0 0 1-4 4h-24a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4Zm-4 28h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8ZM72 76h24a4 4 0 0 0 0-8H72a4 4 0 0 0 0 8Zm24 24H72a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8Zm124-52v176a4 4 0 0 1-8 0v-20h-80v20a4 4 0 0 1-8 0v-20H44v20a4 4 0 0 1-8 0V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12Zm-96 148V44H48a4 4 0 0 0-4 4v148Zm8 0h80V48a4 4 0 0 0-4-4h-76Z" />
  </Svg>
);
const Memo = memo(SvgLockersThin);
export default Memo;
