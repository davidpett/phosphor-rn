import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGradientThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M28 104a4 4 0 0 1 4-4h80a4 4 0 0 1 0 8H32a4 4 0 0 1-4-4Zm196-4h-80a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8ZM72 140H32a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8Zm152 0h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8Zm-124 4a4 4 0 0 0 4 4h48a4 4 0 0 0 0-8h-48a4 4 0 0 0-4 4Zm-44 36H32a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8Zm56 0H88a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8Zm56 0h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8Zm56 0h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8ZM32 68h192a4 4 0 0 0 0-8H32a4 4 0 0 0 0 8Z" />
  </Svg>
);
const Memo = memo(SvgGradientThin);
export default Memo;
