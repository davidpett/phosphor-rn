import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCookieBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M167.31 160.69a16 16 0 1 1-22.62 0 16 16 0 0 1 22.62 0Zm-86.62-8a16 16 0 1 0 22.62 0 16 16 0 0 0-22.62 0Zm14.62-33.38a16 16 0 1 0-22.62 0 16 16 0 0 0 22.62 0Zm48-6.62a16 16 0 1 0 0 22.62 16 16 0 0 0 0-22.62ZM236 128A108 108 0 1 1 128 20a12 12 0 0 1 12 12 36 36 0 0 0 36 36 12 12 0 0 1 12 12 36 36 0 0 0 36 36 12 12 0 0 1 12 12Zm-24.67 10.65A60.17 60.17 0 0 1 165 91a60.17 60.17 0 0 1-47.66-46.32 84 84 0 1 0 94 94Z" />
  </Svg>
);
const Memo = memo(SvgCookieBold);
export default Memo;
