import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDiscDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M224 128a96 96 0 1 1-28.12-67.88l-45.25 45.25A32 32 0 1 0 160 128Z"
      opacity={0.2}
    />
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm39.2 96a39.77 39.77 0 0 0-5.84-14l34.23-34.24a87.54 87.54 0 0 1 20 48.28Zm-15.2 8a24 24 0 1 1-24-24 24 24 0 0 1 24 24Zm-24 88a88 88 0 1 1 56.28-155.6L150 94.64A40 40 0 1 0 167.2 136h48.43A88.11 88.11 0 0 1 128 216Z" />
  </Svg>
);
const Memo = memo(SvgDiscDuotone);
export default Memo;
