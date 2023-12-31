import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStampDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m159.46 53-17.78 83h-27.36L96.54 53A24 24 0 0 1 120 24h16a24 24 0 0 1 23.46 29Z"
      opacity={0.2}
    />
    <Path d="M224 224a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8Zm0-80v40a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h56.43L88.72 54.71A32 32 0 0 1 120 16h16a32 32 0 0 1 31.29 38.71L151.57 128H208a16 16 0 0 1 16 16Zm-103.21-16h14.42l16.43-76.65A16 16 0 0 0 136 32h-16a16 16 0 0 0-15.65 19.35ZM208 184v-40H48v40h160Z" />
  </Svg>
);
const Memo = memo(SvgStampDuotone);
export default Memo;
