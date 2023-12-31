import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBoneThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228.6 63.46A31.83 31.83 0 0 0 204.1 52h-.1a32 32 0 1 0-59.17 17 4 4 0 0 1-.51 5L74 144.36a4 4 0 0 1-5 .51A32 32 0 1 0 51.9 204h.1a32 32 0 1 0 59.16-17 4 4 0 0 1 .51-5L182 111.64a4 4 0 0 1 5-.51 32 32 0 0 0 41.6-47.67Zm-6.5 36.34a24 24 0 0 1-30.8 4.55 12 12 0 0 0-14.93 1.65L106 176.37a12 12 0 0 0-1.63 14.93 24 24 0 1 1-44.09 9 4 4 0 0 0-1.12-3.45 4 4 0 0 0-2.83-1.17 4.32 4.32 0 0 0-.62.05 24 24 0 1 1 9-44.09A12 12 0 0 0 79.63 150L150 79.63a12 12 0 0 0 1.63-14.93 24 24 0 1 1 44.09-9 4 4 0 0 0 4.57 4.57A24 24 0 0 1 222.1 99.8Z" />
  </Svg>
);
const Memo = memo(SvgBoneThin);
export default Memo;
