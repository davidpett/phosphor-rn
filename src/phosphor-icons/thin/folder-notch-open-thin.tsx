import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderNotchOpenThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M241.72 113a11.88 11.88 0 0 0-9.73-5H212V88a12 12 0 0 0-12-12h-69.34a4 4 0 0 1-2.4-.8l-27.73-20.8a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v144a3.94 3.94 0 0 0 .69 2.24A4 4 0 0 0 32 212h179.09a4 4 0 0 0 3.79-2.74l28.49-85.47a11.86 11.86 0 0 0-1.65-10.79ZM40 60h53.33a4 4 0 0 1 2.4.8l27.73 20.8a12.07 12.07 0 0 0 7.2 2.4H200a4 4 0 0 1 4 4v20h-57.58a12 12 0 0 0-6.66 2l-20 13.31a4 4 0 0 1-2.22.67H69.41a12 12 0 0 0-11.14 7.54L36 187.23V64a4 4 0 0 1 4-4Zm195.78 61.27L208.2 204H37.91l27.79-69.49a4 4 0 0 1 3.71-2.51h48.16a12 12 0 0 0 6.66-2l20-13.31a4 4 0 0 1 2.22-.67H232a4 4 0 0 1 3.79 5.27Z" />
  </Svg>
);
const Memo = memo(SvgFolderNotchOpenThin);
export default Memo;
