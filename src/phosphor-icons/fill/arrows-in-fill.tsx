import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsInFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M144 104V64a8 8 0 0 1 13.66-5.66L172 72.69l30.34-30.35a8 8 0 0 1 11.32 11.32L183.31 84l14.35 14.34A8 8 0 0 1 192 112h-40a8 8 0 0 1-8-8Zm-40 40H64a8 8 0 0 0-5.66 13.66L72.69 172l-30.35 30.34a8 8 0 0 0 11.32 11.32L84 183.31l14.34 14.35A8 8 0 0 0 112 192v-40a8 8 0 0 0-8-8Zm3.06-87.39a8 8 0 0 0-8.72 1.73L84 72.69 53.66 42.34a8 8 0 0 0-11.32 11.32L72.69 84 58.34 98.34A8 8 0 0 0 64 112h40a8 8 0 0 0 8-8V64a8 8 0 0 0-4.94-7.39ZM183.31 172l14.35-14.34A8 8 0 0 0 192 144h-40a8 8 0 0 0-8 8v40a8 8 0 0 0 13.66 5.66L172 183.31l30.34 30.35a8 8 0 0 0 11.32-11.32Z" />
  </Svg>
);
const Memo = memo(SvgArrowsInFill);
export default Memo;
