import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEggBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M190 57.34C171.06 29 147.88 12 128 12S84.94 29 66 57.34C46.94 86 36 120.46 36 152a92 92 0 0 0 184 0c0-31.54-10.94-66-30-94.66ZM128 220a68.07 68.07 0 0 1-68-68c0-61.12 46.19-116 68-116s68 54.88 68 116a68.07 68.07 0 0 1-68 68Z" />
  </Svg>
);
const Memo = memo(SvgEggBold);
export default Memo;
