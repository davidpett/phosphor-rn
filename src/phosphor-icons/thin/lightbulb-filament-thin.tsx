import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLightbulbFilamentThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M172 232a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4Zm40-128a83.59 83.59 0 0 1-32.11 66.06A20.2 20.2 0 0 0 172 186v6a12 12 0 0 1-12 12H96a12 12 0 0 1-12-12v-6a20 20 0 0 0-7.76-15.81A83.58 83.58 0 0 1 44 104.47C43.75 59 80.52 21.09 126 20a84 84 0 0 1 86 84Zm-8 0a76 76 0 0 0-77.84-76C85 29 51.77 63.27 52 104.43a75.62 75.62 0 0 0 29.17 59.43A28 28 0 0 1 92 186v6a4 4 0 0 0 4 4h28v-50.34l-30.83-30.83a4 4 0 0 1 5.66-5.66L128 138.34l29.17-29.17a4 4 0 1 1 5.66 5.66L132 145.66V196h28a4 4 0 0 0 4-4v-6a28.14 28.14 0 0 1 10.94-22.2A75.62 75.62 0 0 0 204 104Z" />
  </Svg>
);
const Memo = memo(SvgLightbulbFilamentThin);
export default Memo;
