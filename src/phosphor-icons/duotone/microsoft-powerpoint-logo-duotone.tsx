import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMicrosoftPowerpointLogoDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M152 80v96a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h104a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M96 96H80a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-8h8a24 24 0 0 0 0-48Zm0 32h-8v-16h8a8 8 0 0 1 0 16Zm40-104a104.33 104.33 0 0 0-82 40H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h14a104 104 0 1 0 82-168Zm87.63 96H160V80a16 16 0 0 0-16-16V40.37A88.13 88.13 0 0 1 223.63 120ZM128 40.37V64H75.63A88.36 88.36 0 0 1 128 40.37ZM40 80h104v47.9a.51.51 0 0 0 0 .2V176H40Zm88 112v23.63A88.36 88.36 0 0 1 75.63 192Zm16 23.63V192a16 16 0 0 0 16-16v-40h63.63A88.13 88.13 0 0 1 144 215.63Z" />
  </Svg>
);
const Memo = memo(SvgMicrosoftPowerpointLogoDuotone);
export default Memo;
