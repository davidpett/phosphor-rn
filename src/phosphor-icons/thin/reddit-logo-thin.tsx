import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRedditLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M244 104a28 28 0 0 0-48.3-19.28c-17.9-10.11-40-15.94-63-16.65l6.59-39.52L164 32.36a20 20 0 1 0 1.46-7.87l-28.87-4.44a4 4 0 0 0-4.56 3.29l-7.43 44.71c-23.48.52-46.06 6.36-64.3 16.67A28 28 0 1 0 23 126.21 55.14 55.14 0 0 0 20 144c0 20.58 11.43 39.83 32.18 54.2C72.49 212.26 99.42 220 128 220s55.51-7.74 75.82-21.8C224.57 183.83 236 164.58 236 144a55.14 55.14 0 0 0-3-17.79A28.14 28.14 0 0 0 244 104Zm-60-84a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm40.53 106.25A47.69 47.69 0 0 1 228 144c0 37.5-44.86 68-100 68S28 181.5 28 144a47.71 47.71 0 0 1 3.45-17.72 4 4 0 0 0-1.62-5 20 20 0 1 1 26.35-29 4 4 0 0 0 5.19 1.13l.25-.16C80 82.11 103.51 76 128 76c24.48 0 48 6.11 66.37 17.21l.25.16a4 4 0 0 0 5.19-1.13 20 20 0 1 1 26.35 29 4 4 0 0 0-1.63 5.01Zm-61 47.88a4 4 0 0 1-1.65 5.4 72.22 72.22 0 0 1-67.76 0 4 4 0 0 1 3.76-7.06 64.23 64.23 0 0 0 60.24 0 4 4 0 0 1 5.41 1.66ZM88 140a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm92-12a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgRedditLogoThin);
export default Memo;
