import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaintBucketDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m116.52 16-95.83 95.83a16 16 0 0 0 0 22.63l84.85 84.85a16 16 0 0 0 22.63 0L224 123.48Zm-6.66 114.14a20 20 0 1 1 28.28 0 20 20 0 0 1-28.28 0ZM248 204a20 20 0 0 1-40 0c0-20 20-36 20-36s20 16 20 36Z"
      opacity={0.2}
    />
    <Path d="M233 161.75a8 8 0 0 0-10 0c-.94.76-23 18.68-23 42.25a28 28 0 0 0 56 0c0-23.57-22.06-41.49-23-42.25ZM228 216a12 12 0 0 1-12-12c0-10.18 7-19.53 12-24.93 5 5.42 12 14.8 12 24.93a12 12 0 0 1-12 12Zm1.66-98.17L122.17 10.34a8 8 0 0 0-11.31 0L70.25 51l-24.6-24.66a8 8 0 0 0-11.31 11.32l24.6 24.6L15 106.17a24 24 0 0 0 0 33.94L99.89 225a24 24 0 0 0 33.94 0l95.83-95.83a8 8 0 0 0 0-11.34Zm-107.15 95.83a8 8 0 0 1-11.31 0L26.34 128.8a8 8 0 0 1 0-11.31l43.91-43.92 29.12 29.12a28 28 0 1 0 11.31-11.32L81.57 62.26l35-34.95 96.17 96.17Zm-7-106.14a13.26 13.26 0 1 1-.05.06s.05-.05.05-.06Z" />
  </Svg>
);
const Memo = memo(SvgPaintBucketDuotone);
export default Memo;
