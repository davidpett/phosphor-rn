import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCodesandboxLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M229.89 72.25a15.93 15.93 0 0 0-6.18-6.06L135.68 18a15.94 15.94 0 0 0-15.36 0l-88 48.18a15.93 15.93 0 0 0-6.18 6.06A16 16 0 0 0 24 80.18v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-2.11-7.93ZM120 219.61l-32-17.52V152a8 8 0 0 0-4.16-7L40 121V89l80 43.8Zm8-100.73L48.66 75.44l34.48-18.87 41 22.45a8 8 0 0 0 7.68 0l41-22.45 34.48 18.87Zm88 2.1-43.84 24a8 8 0 0 0-4.16 7v50.09l-32 17.52v-86.85l80-43.8Z" />
  </Svg>
);
const Memo = memo(SvgCodesandboxLogoFill);
export default Memo;
