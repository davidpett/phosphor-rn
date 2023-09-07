import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFootprintsBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M212 180h-56a12 12 0 0 0-12 12v12a40 40 0 0 0 80 0v-12a12 12 0 0 0-12-12Zm-28 40a16 16 0 0 1-16-16h32a16 16 0 0 1-16 16Zm-84-64H44a12 12 0 0 0-12 12v12a40 40 0 0 0 80 0v-12a12 12 0 0 0-12-12Zm-28 40a16 16 0 0 1-16-16h32a16 16 0 0 1-16 16Zm0-184c-14.06 0-27.7 12.33-37.41 33.83-12.45 27.57-16.78 67.52 3.14 90.11a12 12 0 0 0 9 4.06h50.52a12 12 0 0 0 9-4.06c19.92-22.59 15.59-62.54 3.14-90.11C99.68 24.33 86 12 72 12Zm19.07 104H52.9c-6.71-12.13-7.67-35.45 3.56-60.3C63.16 40.85 70.28 36 72 36s8.82 4.85 15.53 19.7c11.2 24.85 10.24 48.17 3.54 60.3Zm67.68 48h50.54a12 12 0 0 0 9-4.06c19.92-22.59 15.59-62.54 3.14-90.11C211.72 48.33 198.08 36 184 36s-27.7 12.33-37.41 33.83c-12.45 27.57-16.78 67.52 3.14 90.11a12 12 0 0 0 9.02 4.06Zm9.74-84.3C175.2 64.85 182.32 60 184 60s8.82 4.85 15.52 19.7c11.23 24.85 10.27 48.17 3.56 60.3h-38.15c-6.7-12.13-7.66-35.45 3.56-60.3Z" />
  </Svg>
);
const Memo = memo(SvgFootprintsBold);
export default Memo;