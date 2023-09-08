import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCoinFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M207.58 63.84C186.85 53.48 159.33 48 128 48s-58.85 5.48-79.58 15.84S16 88.78 16 104v48c0 15.22 11.82 29.85 32.42 40.16S96.67 208 128 208s58.85-5.48 79.58-15.84S240 167.22 240 152v-48c0-15.22-11.82-29.85-32.42-40.16Zm-87.58 96v32c-19-.62-35-3.42-48-7.49v-31.3a203.43 203.43 0 0 0 48 6.81Zm16 0a203.43 203.43 0 0 0 48-6.81v31.31c-13 4.07-29 6.87-48 7.49ZM32 152v-18.47a82.88 82.88 0 0 0 16.42 10.63c2.43 1.21 5 2.35 7.58 3.43V178c-15.83-7.84-24-17.71-24-26Zm168 26v-30.41c2.61-1.08 5.15-2.22 7.58-3.43A82.88 82.88 0 0 0 224 133.53V152c0 8.29-8.17 18.16-24 26Z" />
  </Svg>
);
const Memo = memo(SvgCoinFill);
export default Memo;
