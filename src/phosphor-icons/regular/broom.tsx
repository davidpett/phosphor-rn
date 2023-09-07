import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBroom = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M235.5 216.81c-22.56-11-35.5-34.58-35.5-64.8v-17.28a15.94 15.94 0 0 0-10.09-14.87L165 110a8 8 0 0 1-4.48-10.34l21.32-53a28 28 0 0 0-16.1-37 28.14 28.14 0 0 0-35.82 16 .61.61 0 0 0 0 .12L108.9 79a8 8 0 0 1-10.37 4.49L73.11 73.14a15.89 15.89 0 0 0-17.37 3.66C34.68 98.45 24 123.75 24 152a111.45 111.45 0 0 0 31.18 77.53A8 8 0 0 0 61 232h171a8 8 0 0 0 3.5-15.19ZM67.14 88l25.41 10.3a24 24 0 0 0 31.23-13.45l21-53c2.56-6.11 9.47-9.27 15.43-7a12 12 0 0 1 6.88 15.92l-21.4 52.99a24 24 0 0 0 13.43 31.14l24.88 9.83V153L55.77 101.71A108.84 108.84 0 0 1 67.14 88Zm48 128a87.53 87.53 0 0 1-24.34-42 8 8 0 0 0-15.49 4 105.16 105.16 0 0 0 18.36 38H64.44A95.54 95.54 0 0 1 40 152a85.9 85.9 0 0 1 7.73-36.29l137.8 55.12c3 18 10.56 33.48 21.89 45.16Z" />
  </Svg>
);
const Memo = memo(SvgBroom);
export default Memo;