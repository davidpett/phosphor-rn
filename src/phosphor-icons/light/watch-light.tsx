import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWatchLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M206 128a77.92 77.92 0 0 0-32.53-63.31L167.1 29.5A14 14 0 0 0 153.32 18h-50.64A14 14 0 0 0 88.9 29.5l-6.37 35.19a77.87 77.87 0 0 0 0 126.62l6.37 35.19a14 14 0 0 0 13.78 11.5h50.64a14 14 0 0 0 13.78-11.5l6.37-35.19A77.92 77.92 0 0 0 206 128ZM100.71 31.64a2 2 0 0 1 2-1.64h50.64a2 2 0 0 1 2 1.64l4.56 25.19a77.68 77.68 0 0 0-63.7 0Zm54.58 192.72a2 2 0 0 1-2 1.64h-50.61a2 2 0 0 1-2-1.64l-4.56-25.19a77.68 77.68 0 0 0 63.7 0ZM128 194a66 66 0 1 1 66-66 66.08 66.08 0 0 1-66 66Zm46-66a6 6 0 0 1-6 6h-40a6 6 0 0 1-6-6V88a6 6 0 0 1 12 0v34h34a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgWatchLight);
export default Memo;
