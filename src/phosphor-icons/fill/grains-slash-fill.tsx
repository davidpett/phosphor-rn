import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGrainsSlashFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l9.73 10.71Q49.91 56 48 56a8 8 0 0 0-8 8v80a88 88 0 0 0 149.21 63.22l12.87 14.16a8 8 0 1 0 11.84-10.76ZM128 163.37a88.16 88.16 0 0 0-72-51V72.44a71.31 71.31 0 0 1 13.18 2.75L136.29 149a88.17 88.17 0 0 0-8.29 14.37ZM216 64v80a88.13 88.13 0 0 1-3.15 23.4 8 8 0 0 1-5.85 5.66 7.88 7.88 0 0 1-1.86.22 8 8 0 0 1-5.92-2.62L165.9 134a8 8 0 0 1 2.3-12.51 86.64 86.64 0 0 1 31.8-9.14v-39.9a72.33 72.33 0 0 0-50.35 29.36 8 8 0 1 1-13-9.39 88.15 88.15 0 0 1 25.16-23.3C152.62 49.8 135.45 37.74 128 33.2a99.79 99.79 0 0 0-23.4 19.94 8 8 0 0 1-12.21-10.33 112.32 112.32 0 0 1 32-26 8 8 0 0 1 7.16 0c1.32.66 30.27 15.43 44.59 45.15A87.91 87.91 0 0 1 208 56a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgGrainsSlashFill);
export default Memo;
