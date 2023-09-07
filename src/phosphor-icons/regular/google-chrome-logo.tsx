import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGoogleChromeLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 16a88 88 0 0 1 73.72 40H128a48.08 48.08 0 0 0-45.6 33L59.32 73A87.89 87.89 0 0 1 128 40Zm32 88a32 32 0 1 1-32-32 32 32 0 0 1 32 32Zm-120 0a87.44 87.44 0 0 1 9.56-39.86L86.43 152c.06.1.13.19.19.28a48 48 0 0 0 51.2 22.72l-23.1 40A88.14 88.14 0 0 1 40 128Zm92.69 87.87L169.57 152c.08-.14.14-.28.22-.42a47.88 47.88 0 0 0-6-55.58H210a88 88 0 0 1-77.29 119.87Z" />
  </Svg>
);
const Memo = memo(SvgGoogleChromeLogo);
export default Memo;
