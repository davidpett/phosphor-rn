import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsNineDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Z"
      opacity={0.2}
    />
    <Path d="M72 60a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm56-12a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm68 24a12 12 0 1 0-12-12 12 12 0 0 0 12 12ZM60 116a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm68 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm68 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12ZM60 184a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm68 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm68 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgDotsNineDuotone);
export default Memo;
