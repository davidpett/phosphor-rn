import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSignatureFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 168H63.86c2.66-5.24 5.33-10.63 8-16.11 14.94 1.65 32.62-8.8 52.74-31.22.6 1.66 1.27 3.37 2 5.1 6.51 15.25 14.91 23.94 25 25.85 10.34 2 20.58-3.23 31.08-15.82C189.5 143.87 203.5 152 232 152a8 8 0 0 0 0-16c-30.63 0-39.55-10.59-40-16.22a8 8 0 0 0-15.51-2.54c-12.17 18.25-19.38 19.14-22 18.66-8.33-1.57-16.08-20.93-18.69-33.51a8 8 0 0 0-14.8-2.23c-19.8 24.62-33.08 33-41.41 35.14 8.49-18.88 14.83-35.45 18.89-49.4 6.82-23.44 7.32-39.83 1.51-50.1-3-5.36-9.29-11.75-21.91-11.8h-.25c-16 .11-28.6 15.3-34.62 41.7-3.59 15.71-4.18 33.19-1.63 48s7.86 25.51 15.55 31.89c-3.72 7.73-7.53 15.28-11.23 22.43H24a8 8 0 0 0 0 16h13.41c-11.32 21-20.12 35.64-20.26 35.88a8 8 0 1 0 13.71 8.24c.15-.26 11.27-18.79 24.7-44.12H232a8 8 0 0 0 0-16Zm-40-48v-.21a1.11 1.11 0 0 1 0 .21Z" />
  </Svg>
);
const Memo = memo(SvgSignatureFill);
export default Memo;
