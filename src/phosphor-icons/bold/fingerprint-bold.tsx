import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFingerprintBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 128a224.48 224.48 0 0 1-26.37 105.54 12 12 0 1 1-21.16-11.32A200.33 200.33 0 0 0 136 128a8 8 0 0 0-16 0 12 12 0 0 1-24 0 32 32 0 0 1 64 0Zm-32-72a12 12 0 1 0 0 24 48.05 48.05 0 0 1 48 48c0 7.62-.36 15.32-1.07 22.87A12 12 0 0 0 185.74 164h1.14a12 12 0 0 0 11.93-10.87c.79-8.3 1.18-16.76 1.18-25.13A72.08 72.08 0 0 0 128 56ZM96 92.23a12 12 0 0 0-16-17.88A72.1 72.1 0 0 0 56 128a120.11 120.11 0 0 1-15.12 58.37 12 12 0 0 0 21 11.69A144.14 144.14 0 0 0 80 128a48.08 48.08 0 0 1 16-35.77Zm10.1 64.1a12 12 0 0 0-14.46 8.9 158.61 158.61 0 0 1-18.88 45.86 12 12 0 0 0 20.5 12.48A182.86 182.86 0 0 0 115 170.79a12 12 0 0 0-8.9-14.46Zm76.73 24.07a12 12 0 0 0-14.64 8.6 241.5 241.5 0 0 1-8 24.87 12 12 0 0 0 6.91 15.49 11.76 11.76 0 0 0 4.29.8 12 12 0 0 0 11.21-7.71 260.2 260.2 0 0 0 8.79-27.37 12 12 0 0 0-8.56-14.68ZM128 16A112.12 112.12 0 0 0 16 127.44v.57a79.81 79.81 0 0 1-5 27.82 12 12 0 1 0 22.5 8.35 103.59 103.59 0 0 0 6.5-35.6v-.57a88 88 0 0 1 176-.5v.5a282.12 282.12 0 0 1-6.74 61.38 12 12 0 0 0 9.09 14.33 11.84 11.84 0 0 0 2.65.28 12 12 0 0 0 11.7-9.38 305.87 305.87 0 0 0 7.3-66.07v-.54A112.13 112.13 0 0 0 128 16Z" />
  </Svg>
);
const Memo = memo(SvgFingerprintBold);
export default Memo;