import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGearBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 76a52 52 0 1 0 52 52 52.06 52.06 0 0 0-52-52Zm0 80a28 28 0 1 1 28-28 28 28 0 0 1-28 28Zm92-27.21v-1.58l14-17.51a12 12 0 0 0 2.23-10.59A111.75 111.75 0 0 0 225 71.89a12 12 0 0 0-9.11-5.89l-22.28-2.5-1.11-1.11L190 40.1a12 12 0 0 0-5.89-9.1 111.67 111.67 0 0 0-27.23-11.27A12 12 0 0 0 146.3 22l-17.51 14h-1.58L109.7 22a12 12 0 0 0-10.59-2.23 111.75 111.75 0 0 0-27.22 11.28A12 12 0 0 0 66 40.11l-2.5 22.28-1.11 1.11L40.1 66a12 12 0 0 0-9.1 5.89 111.67 111.67 0 0 0-11.23 27.23A12 12 0 0 0 22 109.7l14 17.51v1.58L22 146.3a12 12 0 0 0-2.23 10.59 111.75 111.75 0 0 0 11.29 27.22 12 12 0 0 0 9.05 5.89l22.28 2.48 1.11 1.11L66 215.9a12 12 0 0 0 5.89 9.1 111.67 111.67 0 0 0 27.23 11.27A12 12 0 0 0 109.7 234l17.51-14h1.58l17.51 14a12 12 0 0 0 10.59 2.23A111.75 111.75 0 0 0 184.11 225a12 12 0 0 0 5.91-9.06l2.48-22.28 1.11-1.11L215.9 190a12 12 0 0 0 9.06-5.91 111.67 111.67 0 0 0 11.27-27.23A12 12 0 0 0 234 146.3Zm-24.12-4.89a70.1 70.1 0 0 1 0 8.2 12 12 0 0 0 2.61 8.22l12.84 16.05a86.47 86.47 0 0 1-4.33 10.49l-20.43 2.27a12 12 0 0 0-7.65 4 69 69 0 0 1-5.8 5.8 12 12 0 0 0-4 7.65L166.86 207a86.47 86.47 0 0 1-10.49 4.35l-16.05-12.85a12 12 0 0 0-7.5-2.62h-.72a70.1 70.1 0 0 1-8.2 0 12.06 12.06 0 0 0-8.22 2.6l-16.05 12.85A86.47 86.47 0 0 1 89.14 207l-2.27-20.43a12 12 0 0 0-4-7.65 69 69 0 0 1-5.8-5.8 12 12 0 0 0-7.65-4L49 166.86a86.47 86.47 0 0 1-4.35-10.49l12.84-16.05a12 12 0 0 0 2.61-8.22 70.1 70.1 0 0 1 0-8.2 12 12 0 0 0-2.61-8.22L44.67 99.63A86.47 86.47 0 0 1 49 89.14l20.43-2.27a12 12 0 0 0 7.65-4 69 69 0 0 1 5.8-5.8 12 12 0 0 0 4-7.65L89.14 49a86.47 86.47 0 0 1 10.49-4.35l16.05 12.85a12.06 12.06 0 0 0 8.22 2.6 70.1 70.1 0 0 1 8.2 0 12 12 0 0 0 8.22-2.6l16.05-12.85A86.47 86.47 0 0 1 166.86 49l2.27 20.43a12 12 0 0 0 4 7.65 69 69 0 0 1 5.8 5.8 12 12 0 0 0 7.65 4L207 89.14a86.47 86.47 0 0 1 4.35 10.49l-12.84 16.05a12 12 0 0 0-2.63 8.22Z" />
  </Svg>
);
const Memo = memo(SvgGearBold);
export default Memo;
