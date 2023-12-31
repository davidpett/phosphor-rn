import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMicrosoftPowerpointLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M96 98H80a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-10h10a22 22 0 0 0 0-44Zm0 32H86v-20h10a10 10 0 0 1 0 20Zm40-104a102.35 102.35 0 0 0-81 40H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h15a102 102 0 1 0 81-164Zm89.8 96H158V80a14 14 0 0 0-14-14h-2V38.2a90.15 90.15 0 0 1 83.8 83.8ZM130 38.21V66H70.78A90.39 90.39 0 0 1 130 38.21ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2Zm32.78 14H130v27.79A90.39 90.39 0 0 1 70.78 190ZM142 217.8V190h2a14 14 0 0 0 14-14v-42h67.8a90.14 90.14 0 0 1-83.8 83.8Z" />
  </Svg>
);
const Memo = memo(SvgMicrosoftPowerpointLogoLight);
export default Memo;
