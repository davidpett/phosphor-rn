import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgIdentificationCardDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 48H40a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8ZM96 144a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z"
      opacity={0.2}
    />
    <Path d="M200 112a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Zm-8 24h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16Zm40-80v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16Zm-16 144V56H40v144h176Zm-80.26-34a8 8 0 1 1-15.5 4c-2.63-10.26-13.06-18-24.25-18s-21.61 7.74-24.25 18a8 8 0 1 1-15.5-4 39.84 39.84 0 0 1 17.19-23.34 32 32 0 1 1 45.12 0 39.76 39.76 0 0 1 17.2 23.34ZM96 136a16 16 0 1 0-16-16 16 16 0 0 0 16 16Z" />
  </Svg>
);
const Memo = memo(SvgIdentificationCardDuotone);
export default Memo;
