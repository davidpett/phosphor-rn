import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEyeClosed = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 175a8 8 0 0 1-10.92-3l-19-33.2A123.23 123.23 0 0 1 162 155.46l5.87 35.22a8 8 0 0 1-6.58 9.21 8.4 8.4 0 0 1-1.29.11 8 8 0 0 1-7.88-6.69l-5.77-34.58a133.06 133.06 0 0 1-36.68 0l-5.77 34.58A8 8 0 0 1 96 200a8.4 8.4 0 0 1-1.32-.11 8 8 0 0 1-6.58-9.21l5.9-35.22a123.23 123.23 0 0 1-36.06-16.69L39 172a8 8 0 1 1-13.94-8l20-35a153.47 153.47 0 0 1-19.3-20 8 8 0 1 1 12.46-10c16.6 20.54 45.64 45 89.78 45s73.18-24.49 89.78-45a8 8 0 1 1 12.44 10 153.47 153.47 0 0 1-19.3 20l20 35a8 8 0 0 1-2.92 11Z" />
  </Svg>
);
const Memo = memo(SvgEyeClosed);
export default Memo;
