import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCubeThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m221.76 69.66-88-48.18a12 12 0 0 0-11.52 0l-88 48.18A12 12 0 0 0 28 80.18v95.64a12 12 0 0 0 6.24 10.52l88 48.18a11.95 11.95 0 0 0 11.52 0l88-48.18a12 12 0 0 0 6.24-10.52V80.18a12 12 0 0 0-6.24-10.52ZM126.08 28.5a3.94 3.94 0 0 1 3.84 0L216.67 76 128 124.52 39.33 76Zm-88 150.83a4 4 0 0 1-2.08-3.51V83.29l88 48.16v94.91Zm179.84 0-85.92 47v-94.88l88-48.16v92.53a4 4 0 0 1-2.08 3.5Z" />
  </Svg>
);
const Memo = memo(SvgCubeThin);
export default Memo;
