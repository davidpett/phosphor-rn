import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLinuxLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M229 222.25a8 8 0 0 1-11.24-1.25C216.39 219.27 184 177.86 184 96a56 56 0 0 0-112 0c0 81.86-32.37 123.27-33.75 125a8 8 0 0 1-12.51-10c.15-.2 7.69-9.9 15.13-28.74C47.77 164.8 56 135.64 56 96a72 72 0 0 1 144 0c0 39.64 8.23 68.8 15.13 86.28 7.48 18.94 15.06 28.64 15.14 28.74a8 8 0 0 1-1.27 11.23ZM100 96a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm68 12a12 12 0 1 0-12 12 12 12 0 0 0 12-12Zm-68.42 28.84a8 8 0 0 0-7.15 14.31l32 16a7.94 7.94 0 0 0 7.15 0l32-16a8 8 0 0 0-7.16-14.31L128 151.05ZM128 184a54.07 54.07 0 0 0-47 28.11 8 8 0 1 0 14 7.78 37.35 37.35 0 0 1 66 0 8 8 0 0 0 14-7.78A54.07 54.07 0 0 0 128 184Z" />
  </Svg>
);
const Memo = memo(SvgLinuxLogo);
export default Memo;
