import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArticleNyTimesFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248 96v16a8 8 0 0 1-8 8h-80a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8Zm-8 40h-80a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8Zm0 48H72a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h168a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8ZM80 168a56.06 56.06 0 0 1-56-56 55.49 55.49 0 0 1 4.11-21A28 28 0 0 1 44 40a8 8 0 0 1 3.89 1l69.93 38.85A12 12 0 0 0 116 56a8 8 0 0 1 0-16 28 28 0 0 1 0 56 8 8 0 0 1-3.89-1l-40-22.21A40 40 0 0 0 72 151.2V112a8 8 0 0 1 16 0v39.19a40.09 40.09 0 0 0 29.73-25.86 8 8 0 0 1 15.08 5.34A56.09 56.09 0 0 1 80 168ZM36.23 77.14a56.33 56.33 0 0 1 17.5-14.58l-11.55-6.42a12 12 0 0 0-6 21Z" />
  </Svg>
);
const Memo = memo(SvgArticleNyTimesFill);
export default Memo;
