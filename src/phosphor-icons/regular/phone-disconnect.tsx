import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPhoneDisconnect = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M231.59 90.13C175.44 34 80.56 34 24.41 90.13c-20 20-21.92 49.49-4.69 71.71A16 16 0 0 0 32.35 168a15.8 15.8 0 0 0 5.75-1.08l49-17.37.29-.11a16 16 0 0 0 9.75-11.73l5.9-29.52a76.52 76.52 0 0 1 49.68-.11l6.21 29.75a16 16 0 0 0 9.72 11.59l.29.11 49 17.39a16 16 0 0 0 18.38-5.06c17.19-22.24 15.26-51.73-4.73-71.73ZM223.67 152l-.3-.12-48.82-17.33-6.21-29.74A16 16 0 0 0 158 93a92.56 92.56 0 0 0-60.34.13 16 16 0 0 0-10.32 12l-5.9 29.51-48.81 17.22c-.1 0-.17.13-.27.17-12.33-15.91-11-36.23 3.36-50.58 25-25 58.65-37.53 92.28-37.53s67.27 12.51 92.28 37.53c14.33 14.35 15.72 34.67 3.39 50.55Zm.32 48a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgPhoneDisconnect);
export default Memo;
