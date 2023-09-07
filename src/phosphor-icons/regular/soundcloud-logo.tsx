import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSoundcloudLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M24 120v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm24-32a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8Zm32-8a8 8 0 0 0-8 8v104a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8Zm32-32a8 8 0 0 0-8 8v136a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8Zm110.84 58.34A80 80 0 0 0 144 40a8 8 0 0 0 0 16 63.76 63.76 0 0 1 63.68 57.53 8 8 0 0 0 6.44 7A32 32 0 0 1 208 184h-64a8 8 0 0 0 0 16h64a48 48 0 0 0 14.84-93.66Z" />
  </Svg>
);
const Memo = memo(SvgSoundcloudLogo);
export default Memo;
