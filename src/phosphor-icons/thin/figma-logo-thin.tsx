import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFigmaLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176.46 96A36 36 0 0 0 160 28H88a36 36 0 0 0-16.46 68 36 36 0 0 0 1.56 64.76A40 40 0 1 0 132 196v-45.41A36 36 0 1 0 176.46 96ZM188 64a28 28 0 0 1-28 28h-28V36h28a28 28 0 0 1 28 28Zm-56 36h5.41a36.41 36.41 0 0 0-5.41 5.41ZM60 64a28 28 0 0 1 28-28h36v56H88a28 28 0 0 1-28-28Zm64 132a32 32 0 1 1-32-32h32Zm0-40H88a28 28 0 0 1 0-56h36Zm36 0a28 28 0 1 1 28-28 28 28 0 0 1-28 28Z" />
  </Svg>
);
const Memo = memo(SvgFigmaLogoThin);
export default Memo;
