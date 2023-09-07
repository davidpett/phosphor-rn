import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAirplaneTiltThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m180.67 113.1 31.05-29.23.09-.08a28 28 0 0 0-39.6-39.6l-.08.09-29.23 31.05-85.53-31.1a4 4 0 0 0-4.2.93l-24 24a4 4 0 0 0 .61 6.16l68 45.29L78.35 140H56a4 4 0 0 0-2.83 1.18l-24 24a4 4 0 0 0 1.34 6.54l38.42 15.36 15.34 38.37v.09a4 4 0 0 0 6.59 1.23l23.93-23.93A4 4 0 0 0 116 200v-22.35l19.38-19.38 45.29 67.95a4 4 0 0 0 6.16.61l24-24a4 4 0 0 0 .93-4.2Zm4 104.62-45.29-67.94a4 4 0 0 0-2.98-1.78h-.39a4 4 0 0 0-2.83 1.18l-24 24A4 4 0 0 0 108 176v22.34l-18.53 18.54-13.75-34.37a4 4 0 0 0-2.23-2.23l-34.37-13.75L57.66 148H80a4 4 0 0 0 2.83-1.17l24-24a4 4 0 0 0-.61-6.16l-67.94-45.3L57 52.62l85.61 31.13a4 4 0 0 0 4.28-1l31-32.93a20 20 0 0 1 28.31 28.27l-32.93 31a4 4 0 0 0-1 4.28L203.38 199Z" />
  </Svg>
);
const Memo = memo(SvgAirplaneTiltThin);
export default Memo;
