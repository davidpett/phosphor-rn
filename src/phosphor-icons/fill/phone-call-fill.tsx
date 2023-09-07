import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPhoneCallFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152.27 37.93a8 8 0 0 1 9.8-5.66 86.22 86.22 0 0 1 61.66 61.66 8 8 0 0 1-5.66 9.8 8.23 8.23 0 0 1-2.07.27 8 8 0 0 1-7.73-5.93 70.35 70.35 0 0 0-50.33-50.34 8 8 0 0 1-5.67-9.8Zm-2.33 41.8c13.79 3.68 22.65 12.55 26.33 26.34A8 8 0 0 0 184 112a8.23 8.23 0 0 0 2.07-.27 8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46Zm72.43 78.73-47.11-21.11-.13-.06a16 16 0 0 0-15.17 1.4 8.12 8.12 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92 16 16 0 0 0-9.51-16.62Z" />
  </Svg>
);
const Memo = memo(SvgPhoneCallFill);
export default Memo;
