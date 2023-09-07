import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRocketLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M150 224a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6Zm-22-114a10 10 0 1 0-10-10 10 10 0 0 0 10 10Zm93.67 45.4L209.31 211a14 14 0 0 1-22.31 8l-27.79-21H96.82L69 219a14 14 0 0 1-22.34-8l-12.33-55.6a14.06 14.06 0 0 1 2.91-12l29-34.76a121.28 121.28 0 0 1 8.48-36.71c12.72-31.88 35.52-51.88 44.73-59a14 14 0 0 1 17.16 0c9.21 7.12 32 27.12 44.73 59a121.28 121.28 0 0 1 8.48 36.71l29 34.76a14.06 14.06 0 0 1 2.85 12ZM98.26 186h59.48c21.93-38.46 26.12-75.33 12.43-109.62-11.95-30-34.35-48.87-40.93-54a2 2 0 0 0-2.48 0c-6.58 5.09-29 24-40.93 54-13.69 34.29-9.5 71.16 12.43 109.62ZM87 190.4c-12-21.49-18.9-42.6-20.62-63.19l-19.92 23.87a2 2 0 0 0-.42 1.71l12.37 55.64a2 2 0 0 0 3.2 1.13l.13-.11Zm122.57-39.32-19.89-23.87c-1.72 20.59-8.6 41.7-20.62 63.19l25.23 19 .13.11a2 2 0 0 0 3.2-1.13L210 152.79a2 2 0 0 0-.46-1.71Z" />
  </Svg>
);
const Memo = memo(SvgRocketLight);
export default Memo;
