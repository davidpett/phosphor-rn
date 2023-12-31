import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextAaLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M85.43 53.45a6 6 0 0 0-10.86 0l-64 136a6 6 0 1 0 10.86 5.11L38.63 158h82.74l17.2 36.55a6 6 0 1 0 10.86-5.11ZM44.28 146 80 70.09 115.72 146ZM200 98c-12.21 0-21.71 3.28-28.23 9.74a6 6 0 0 0 8.46 8.52c4.18-4.15 10.84-6.26 19.77-6.26 14.34 0 26 9.87 26 22v7.24a40.36 40.36 0 0 0-26-9.24c-20.95 0-38 15.25-38 34s17.05 34 38 34a40.36 40.36 0 0 0 26-9.24V192a6 6 0 0 0 12 0v-60c0-18.75-17-34-38-34Zm0 88c-14.34 0-26-9.87-26-22s11.66-22 26-22 26 9.87 26 22-11.66 22-26 22Z" />
  </Svg>
);
const Memo = memo(SvgTextAaLight);
export default Memo;
