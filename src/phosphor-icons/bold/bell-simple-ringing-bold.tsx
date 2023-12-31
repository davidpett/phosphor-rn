import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBellSimpleRingingBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M172 228a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12Zm58.94-169.52a115.25 115.25 0 0 0-40.54-44.62 12 12 0 1 0-12.8 20.29 90.1 90.1 0 0 1 32 35.38A12 12 0 0 0 220.3 76a11.86 11.86 0 0 0 5.51-1.35 12 12 0 0 0 5.13-16.17ZM46.37 69.53a90.1 90.1 0 0 1 32-35.38A12 12 0 1 0 65.6 13.86a115.25 115.25 0 0 0-40.54 44.62 12 12 0 0 0 5.13 16.17A11.86 11.86 0 0 0 35.7 76a12 12 0 0 0 10.67-6.47Zm173.51 98.35A20 20 0 0 1 204 200H52a20 20 0 0 1-15.91-32.12c7.17-9.33 15.73-26.62 15.88-55.94A76 76 0 0 1 204 112c.15 29.26 8.71 46.55 15.88 55.88ZM196.34 176c-8.16-13-16.19-33.57-16.34-63.94A52 52 0 1 0 76 112c-.15 30.42-8.18 51-16.34 64Z" />
  </Svg>
);
const Memo = memo(SvgBellSimpleRingingBold);
export default Memo;
