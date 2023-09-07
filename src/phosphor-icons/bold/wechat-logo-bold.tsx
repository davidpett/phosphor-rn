import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWechatLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236.06 187.69a84 84 0 0 0-63.73-118.78 84 84 0 1 0-152.39 70.78l-7.24 25.36A18 18 0 0 0 30 188a17.8 17.8 0 0 0 5-.7l25.35-7.24a82.4 82.4 0 0 0 23.42 7 84 84 0 0 0 112 41l25.36 7.24a18 18 0 0 0 22.25-22.25Zm-168.78-31a12 12 0 0 0-9.05-1l-19.49 5.57 5.57-19.49a12 12 0 0 0-1-9.05A60 60 0 0 1 145 69.37a84 84 0 0 0-68.55 91.39 60.34 60.34 0 0 1-9.17-4.06Zm144.41 33.07 5.57 19.49-19.49-5.57a12 12 0 0 0-9.05 1 60 60 0 1 1 24-24 12 12 0 0 0-1.03 9.09ZM152 144a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm48 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgWechatLogoBold);
export default Memo;
