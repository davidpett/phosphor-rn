import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAndroidLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M172 156a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm-80-8a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm144 20v24a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12v-22.87a109.43 109.43 0 0 1 37.18-82.29l-28-28a4 4 0 0 1 5.66-5.66l28.57 28.57A106.63 106.63 0 0 1 127.62 60h.38a107.16 107.16 0 0 1 64.78 21.57l28.39-28.4a4 4 0 1 1 5.66 5.66L199 86.64c1.78 1.56 3.52 3.17 5.21 4.86A107.25 107.25 0 0 1 236 168Zm-8 0A100 100 0 0 0 128 68h-.35C72.7 68.19 28 113.56 28 169.13V192a4 4 0 0 0 4 4h192a4 4 0 0 0 4-4Z" />
  </Svg>
);
const Memo = memo(SvgAndroidLogoThin);
export default Memo;
