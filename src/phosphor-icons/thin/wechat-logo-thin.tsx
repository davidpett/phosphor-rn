import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWechatLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m235.6 215.24-8.09-28.32a76 76 0 0 0-60.72-110.6 76 76 0 1 0-138.3 62.6l-8.09 28.32A10 10 0 0 0 30 180a10.08 10.08 0 0 0 2.8-.4l28.32-8.09a75.07 75.07 0 0 0 28.16 8.17 76 76 0 0 0 105.68 39.83l28.32 8.09a10.08 10.08 0 0 0 2.8.4 10 10 0 0 0 9.56-12.76ZM63.45 163.71a4 4 0 0 0-3-.33l-29.87 8.53a2 2 0 0 1-2.47-2.47l8.53-29.87a4 4 0 0 0-.33-3A68 68 0 1 1 158 76.05a76 76 0 0 0-71.5 95.27 67.12 67.12 0 0 1-23.05-7.61Zm164 55.69a2 2 0 0 1-2 .51l-29.87-8.53a4 4 0 0 0-3 .33 68 68 0 1 1 27.16-27.16 4 4 0 0 0-.33 3l8.53 29.87a2 2 0 0 1-.54 1.98ZM140 140a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm56 0a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgWechatLogoThin);
export default Memo;
