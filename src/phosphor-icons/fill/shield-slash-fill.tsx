import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShieldSlashFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M213.92 210.61a8 8 0 1 1-11.84 10.77l-14.51-16a147.19 147.19 0 0 1-54.57 33.8 15.44 15.44 0 0 1-10 0c-15.2-5-91-34.76-91-124.38V56a16 16 0 0 1 8.26-14 8 8 0 0 1 13.66-7.39ZM208 40H98.52a8 8 0 0 0-5.92 13.38l107.09 117.79a7.94 7.94 0 0 0 5.91 2.62 7.64 7.64 0 0 0 1.26-.1 8 8 0 0 0 6-4.61c7.37-16.36 11.1-34.62 11.1-54.29V56A16 16 0 0 0 208 40Z" />
  </Svg>
);
const Memo = memo(SvgShieldSlashFill);
export default Memo;
