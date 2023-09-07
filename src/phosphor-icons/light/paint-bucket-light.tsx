import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaintBucketLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M231.75 163.32a6 6 0 0 0-7.5 0C223.34 164 202 181.38 202 204a26 26 0 0 0 52 0c0-22.62-21.34-40-22.25-40.68ZM228 218a14 14 0 0 1-14-14c0-11.88 8.79-22.55 14-27.83 5.21 5.28 14 16 14 27.83a14 14 0 0 1-14 14Zm.24-98.76L120.76 11.76a6 6 0 0 0-8.49 0l-42 42-26-26a6 6 0 0 0-8.49 8.48l26 26-45.34 45.35a22 22 0 0 0 0 31.11l84.86 84.86a22 22 0 0 0 31.11 0l95.83-95.83a6 6 0 0 0 0-8.49Zm-104.31 95.83a10 10 0 0 1-14.14 0l-84.86-84.86a10 10 0 0 1 0-14.14l45.32-45.32 31.62 31.61a26 26 0 0 0 3.75 32 26 26 0 0 0 36.76 0 26 26 0 0 0-32-40.51L78.74 62.26l37.78-37.77 99 99ZM124 102a14 14 0 1 1-9.9 4.1 13.92 13.92 0 0 1 9.9-4.1Z" />
  </Svg>
);
const Memo = memo(SvgPaintBucketLight);
export default Memo;
