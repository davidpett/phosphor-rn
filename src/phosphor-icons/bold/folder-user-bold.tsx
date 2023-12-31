import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderUserBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220.51 197.94a36 36 0 1 0-57 0 43.75 43.75 0 0 0-15.08 23 12 12 0 0 0 8.52 14.67 11.77 11.77 0 0 0 3.05.39 12 12 0 0 0 11.59-8.92C174 218.2 182.35 212 192 212s18 6.2 20.4 15.08a12 12 0 0 0 23.19-6.17 43.7 43.7 0 0 0-15.08-22.97ZM192 164a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm24-96h-82.61l-26-29.29A20 20 0 0 0 92.41 32H40a20 20 0 0 0-20 20v148.61A19.41 19.41 0 0 0 39.38 220h73.18a12 12 0 0 0 0-24H44V92h168v16a12 12 0 0 0 24 0V88a20 20 0 0 0-20-20ZM44 68V56h46.61l10.67 12Z" />
  </Svg>
);
const Memo = memo(SvgFolderUserBold);
export default Memo;
