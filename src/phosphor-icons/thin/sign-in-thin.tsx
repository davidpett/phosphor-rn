import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSignInThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m138.83 130.83-40 40a4 4 0 0 1-5.66-5.66L126.34 132H24a4 4 0 0 1 0-8h102.34L93.17 90.83a4 4 0 0 1 5.66-5.66l40 40a4 4 0 0 1 0 5.66ZM192 36h-56a4 4 0 0 0 0 8h56a4 4 0 0 1 4 4v160a4 4 0 0 1-4 4h-56a4 4 0 0 0 0 8h56a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgSignInThin);
export default Memo;
