import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDevicesThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 76h-20V64a20 20 0 0 0-20-20H40a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h116v12a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20V96a20 20 0 0 0-20-20ZM40 172a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h144a12 12 0 0 1 12 12v12h-20a20 20 0 0 0-20 20v76Zm196 20a12 12 0 0 1-12 12h-48a12 12 0 0 1-12-12V96a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12Zm-104 16a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4Zm80-96a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgDevicesThin);
export default Memo;
