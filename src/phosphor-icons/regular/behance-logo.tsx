import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBehanceLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 80a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16h-64a8 8 0 0 1-8-8Zm-24 78a42 42 0 0 1-42 42H32a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h58a38 38 0 0 1 25.65 66A42 42 0 0 1 136 158Zm-96-42h50a22 22 0 0 0 0-44H40Zm80 42a26 26 0 0 0-26-26H40v52h54a26 26 0 0 0 26-26Zm128-6a8 8 0 0 1-8 8h-71a32 32 0 0 0 56.59 11.2 8 8 0 0 1 12.8 9.61A48 48 0 1 1 248 152Zm-17-8a32 32 0 0 0-62 0Z" />
  </Svg>
);
const Memo = memo(SvgBehanceLogo);
export default Memo;
