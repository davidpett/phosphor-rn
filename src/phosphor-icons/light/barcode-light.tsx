import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBarcodeLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M230 48v40a6 6 0 0 1-12 0V54h-34a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6ZM72 202H38v-34a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6h40a6 6 0 0 0 0-12Zm152-40a6 6 0 0 0-6 6v34h-34a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6ZM32 94a6 6 0 0 0 6-6V54h34a6 6 0 0 0 0-12H32a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6Zm48-12a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6Zm102 86V88a6 6 0 0 0-12 0v80a6 6 0 0 0 12 0Zm-38-86a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6Zm-32 0a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6Z" />
  </Svg>
);
const Memo = memo(SvgBarcodeLight);
export default Memo;
