import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCirclesThreePlusDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M112 80a32 32 0 1 1-32-32 32 32 0 0 1 32 32Zm64-32a32 32 0 1 0 32 32 32 32 0 0 0-32-32Zm-96 96a32 32 0 1 0 32 32 32 32 0 0 0-32-32Z"
      opacity={0.2}
    />
    <Path d="M80 40a40 40 0 1 0 40 40 40 40 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm96 16a40 40 0 1 0-40-40 40 40 0 0 0 40 40Zm0-64a24 24 0 1 1-24 24 24 24 0 0 1 24-24Zm-96 80a40 40 0 1 0 40 40 40 40 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm136-24a8 8 0 0 1-8 8h-24v24a8 8 0 0 1-16 0v-24h-24a8 8 0 0 1 0-16h24v-24a8 8 0 0 1 16 0v24h24a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgCirclesThreePlusDuotone);
export default Memo;
