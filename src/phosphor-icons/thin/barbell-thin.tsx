import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBarbellThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248 124h-12V88a12 12 0 0 0-12-12h-20V64a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v60h-56V64a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v12H32a12 12 0 0 0-12 12v36H8a4 4 0 0 0 0 8h12v36a12 12 0 0 0 12 12h20v12a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-60h56v60a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-12h20a12 12 0 0 0 12-12v-36h12a4 4 0 0 0 0-8ZM32 172a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h20v88Zm60 20a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4Zm104 0a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4Zm32-24a4 4 0 0 1-4 4h-20V84h20a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgBarbellThin);
export default Memo;
