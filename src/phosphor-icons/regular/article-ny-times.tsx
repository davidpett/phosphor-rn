import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArticleNyTimes = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 104a8 8 0 0 1 8-8h80a8 8 0 0 1 0 16h-80a8 8 0 0 1-8-8Zm88 24h-80a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16Zm0 32h-80a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16Zm0 32H72a8 8 0 0 0 0 16h168a8 8 0 0 0 0-16ZM80 176a56.06 56.06 0 0 1-56-56 55.49 55.49 0 0 1 4.11-21A28 28 0 0 1 44 48a8 8 0 0 1 3.89 1l69.93 38.85A12 12 0 0 0 116 64a8 8 0 0 1 0-16 28 28 0 0 1 0 56 8 8 0 0 1-3.89-1l-40-22.21A40 40 0 0 0 72 159.2V120a8 8 0 0 1 16 0v39.19a40.09 40.09 0 0 0 29.73-25.86 8 8 0 0 1 15.08 5.34A56.09 56.09 0 0 1 80 176ZM36.23 85.14a56.33 56.33 0 0 1 17.5-14.58l-11.55-6.42a12 12 0 0 0-6 21Z" />
  </Svg>
);
const Memo = memo(SvgArticleNyTimes);
export default Memo;
