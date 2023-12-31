import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWechatLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M229.66 187.13a78 78 0 0 0-61.47-112.7 78 78 0 1 0-141.85 64.7l-7.87 27.57a12 12 0 0 0 14.83 14.83l27.56-7.87a77.06 77.06 0 0 0 27 7.92 78 78 0 0 0 107.29 40.08l27.57 7.87a12 12 0 0 0 14.83-14.83ZM64.41 162a6 6 0 0 0-4.53-.5L30 170l8.53-29.87a6 6 0 0 0-.5-4.53 66 66 0 1 1 116.85-61.4 77.92 77.92 0 0 0-71 94.68A64.87 64.87 0 0 1 64.41 162Zm153.05 26.16L226 218l-29.87-8.53a6 6 0 0 0-4.53.5 66 66 0 1 1 26.4-26.38 6 6 0 0 0-.54 4.53ZM142 140a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm56 0a10 10 0 1 1-10-10 10 10 0 0 1 10 10Z" />
  </Svg>
);
const Memo = memo(SvgWechatLogoLight);
export default Memo;
