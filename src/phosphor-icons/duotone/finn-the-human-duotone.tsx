import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFinnTheHumanDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 40a24 24 0 0 0-24 24H72a24 24 0 0 0-48 0v80a64 64 0 0 0 64 64h80a64 64 0 0 0 64-64V64a24 24 0 0 0-24-24Zm-8 104a32 32 0 0 1-32 32H88a32 32 0 0 1-32-32v-8a32 32 0 0 1 32-32h80a32 32 0 0 1 32 32Z"
      opacity={0.2}
    />
    <Path d="M168 96H88a40 40 0 0 0-40 40v8a40 40 0 0 0 40 40h80a40 40 0 0 0 40-40v-8a40 40 0 0 0-40-40Zm24 48a24 24 0 0 1-24 24H88a24 24 0 0 1-24-24v-8a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24Zm16-112a32.06 32.06 0 0 0-31 24H79a32 32 0 0 0-63 8v80a72.08 72.08 0 0 0 72 72h80a72.08 72.08 0 0 0 72-72V64a32 32 0 0 0-32-32Zm16 112a56.06 56.06 0 0 1-56 56H88a56.06 56.06 0 0 1-56-56V64a16 16 0 0 1 32 0 8 8 0 0 0 8 8h112a8 8 0 0 0 8-8 16 16 0 0 1 32 0Zm-120-4a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm72 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgFinnTheHumanDuotone);
export default Memo;
