import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatsCircleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M229.66 187.13a78 78 0 0 0-61.5-112.71 78 78 0 1 0-141.82 64.71l-7.87 27.57a12 12 0 0 0 14.83 14.83l27.57-7.87a78.25 78.25 0 0 0 26.94 7.9 78.05 78.05 0 0 0 107.32 40.1l27.57 7.87a12 12 0 0 0 14.83-14.83Zm-168.13-25.9a5.82 5.82 0 0 0-1.65.23L30 170l8.53-29.87a6 6 0 0 0-.5-4.53A66 66 0 1 1 64.41 162a6.1 6.1 0 0 0-2.88-.77Zm155.93 26.89L226 218l-29.87-8.53a6 6 0 0 0-4.53.5 66 66 0 0 1-90.48-28.15 77.92 77.92 0 0 0 71-94.68A66 66 0 0 1 218 183.59a6 6 0 0 0-.54 4.53Z" />
  </Svg>
);
const Memo = memo(SvgChatsCircleLight);
export default Memo;
