import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgJeepDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M224 104H32l10.65-49.68A8 8 0 0 1 50.47 48h155.06a8 8 0 0 1 7.82 6.32Z"
      opacity={0.2}
    />
    <Path d="M240 96h-9.53l-9.29-43.35A16.08 16.08 0 0 0 205.53 40H50.47a16.08 16.08 0 0 0-15.65 12.65L25.53 96H16a8 8 0 0 0 0 16h8v96a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-24h96v24a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-96h8a8 8 0 0 0 0-16ZM50.47 56h155.06l8.57 40H41.9ZM64 208H40v-24h24Zm128 0v-24h24v24Zm24-40h-64v-32a8 8 0 0 0-16 0v32h-16v-32a8 8 0 0 0-16 0v32H40v-56h176ZM56 140a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm120 0a12 12 0 1 1 12 12 12 12 0 0 1-12-12Z" />
  </Svg>
);
const Memo = memo(SvgJeepDuotone);
export default Memo;
