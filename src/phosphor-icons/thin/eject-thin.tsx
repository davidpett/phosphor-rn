import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEjectThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 164H48a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12Zm4 36a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-24a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM48.23 140h159.54a12 12 0 0 0 11.23-7.33 11.68 11.68 0 0 0-2.33-12.8L143 42.37a20.75 20.75 0 0 0-29.92 0l-73.78 77.5a11.68 11.68 0 0 0-2.3 12.8A12 12 0 0 0 48.23 140Zm-3.13-14.61 73.73-77.51a12.78 12.78 0 0 1 18.34 0l73.73 77.51a3.66 3.66 0 0 1 .77 4.12 4.1 4.1 0 0 1-3.9 2.49H48.23a4.1 4.1 0 0 1-3.9-2.49 3.66 3.66 0 0 1 .77-4.12Z" />
  </Svg>
);
const Memo = memo(SvgEjectThin);
export default Memo;
