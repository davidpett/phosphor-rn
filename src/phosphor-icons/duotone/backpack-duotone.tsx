import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBackpackDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 96v120a8 8 0 0 1-8 8h-24v-72a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v72H56a8 8 0 0 1-8-8V96a48 48 0 0 1 48-48h64a48 48 0 0 1 48 48Z"
      opacity={0.2}
    />
    <Path d="M168 40.58V32a24 24 0 0 0-24-24h-32a24 24 0 0 0-24 24v8.58A56.09 56.09 0 0 0 40 96v120a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V96a56.09 56.09 0 0 0-48-55.42ZM112 24h32a8 8 0 0 1 8 8v8h-48v-8a8 8 0 0 1 8-8Zm56 136H88v-8a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8Zm-80 16h48v8a8 8 0 0 0 16 0v-8h16v40H88Zm112 40h-16v-64a24 24 0 0 0-24-24H96a24 24 0 0 0-24 24v64H56V96a40 40 0 0 1 40-40h64a40 40 0 0 1 40 40v120ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgBackpackDuotone);
export default Memo;
