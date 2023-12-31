import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPillLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M215 41a51.28 51.28 0 0 0-72.5 0L41 142.5a51.26 51.26 0 0 0 72.49 72.5L215 113.5a51.31 51.31 0 0 0 0-72.5ZM105 206.5A39.26 39.26 0 0 1 49.48 151L96 104.49 151.52 160ZM206.52 105 160 151.51 104.48 96 151 49.5a39.26 39.26 0 0 1 55.52 55.5Zm-18.26-21.24a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.49-8.48l24-24a6 6 0 0 1 8.49 0Z" />
  </Svg>
);
const Memo = memo(SvgPillLight);
export default Memo;
