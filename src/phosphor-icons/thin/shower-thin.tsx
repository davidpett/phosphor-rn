import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShowerThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M60 236a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm24-40a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm-64 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm32-32a8 8 0 1 0 8 8 8 8 0 0 0-8-8ZM252 40a4 4 0 0 1-4 4h-28.69a4 4 0 0 0-2.82 1.17l-28.76 28.76L165.86 202a12 12 0 0 1-8.17 9.44 12.09 12.09 0 0 1-3.69.56 12 12 0 0 1-8.46-3.52l-98-98A12 12 0 0 1 54 90.14l128-21.87 28.76-28.76a11.93 11.93 0 0 1 8.55-3.51H248a4 4 0 0 1 4 4Zm-72.89 36.89L55.37 98a4 4 0 0 0-2.19 6.78l98 98a4 4 0 0 0 6.78-2.17Z" />
  </Svg>
);
const Memo = memo(SvgShowerThin);
export default Memo;
