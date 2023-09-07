import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatsCircleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m235.6 215.24-8.09-28.32a76 76 0 0 0-60.75-110.61 76 76 0 1 0-138.27 62.61l-8.09 28.32A10 10 0 0 0 30 180a10.08 10.08 0 0 0 2.8-.4l28.32-8.09a76 76 0 0 0 28.13 8.18 76 76 0 0 0 105.71 39.82l28.32 8.09a10.08 10.08 0 0 0 2.8.4 10 10 0 0 0 9.56-12.76Zm-174.07-52a3.75 3.75 0 0 0-1.1.16l-29.87 8.53a2 2 0 0 1-2.47-2.47l8.53-29.87a4 4 0 0 0-.33-3 68 68 0 1 1 27.16 27.16 4 4 0 0 0-1.92-.53ZM227.4 219.4a2 2 0 0 1-2 .51l-29.87-8.53a4 4 0 0 0-3 .33A68 68 0 0 1 98 180a76 76 0 0 0 71.5-95.28 68 68 0 0 1 50.21 99.88 4 4 0 0 0-.33 3l8.53 29.87a2 2 0 0 1-.51 1.93Z" />
  </Svg>
);
const Memo = memo(SvgChatsCircleThin);
export default Memo;
