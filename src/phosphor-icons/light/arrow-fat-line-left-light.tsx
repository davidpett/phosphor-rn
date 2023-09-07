import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatLineLeftLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 74h-58V32a6 6 0 0 0-10.24-4.24l-96 96a6 6 0 0 0 0 8.48l96 96A6 6 0 0 0 126 224v-42h58a6 6 0 0 0 6-6V80a6 6 0 0 0-6-6Zm-6 96h-58a6 6 0 0 0-6 6v33.51L32.49 128 114 46.49V80a6 6 0 0 0 6 6h58Zm44-90v96a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatLineLeftLight);
export default Memo;
