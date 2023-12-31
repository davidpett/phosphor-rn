import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSynagogueDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 80v32h-32V80a16 16 0 0 1 16-16 16 16 0 0 1 16 16ZM72 80a16 16 0 0 0-16-16 16 16 0 0 0-16 16v32h32Zm0 56v80h40v-40a16 16 0 0 1 16-16 16 16 0 0 1 16 16v40h40v-80l-56-32Z"
      opacity={0.2}
    />
    <Path d="M208 57.38V32a8 8 0 0 0-16 0v25.38A24 24 0 0 0 176 80v42.21l-40-22.85V72a8 8 0 0 0-16 0v27.36l-40 22.85V80a24 24 0 0 0-16-22.62V32a8 8 0 0 0-16 0v25.38A24 24 0 0 0 32 80v136a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8V80a24 24 0 0 0-16-22.62ZM200 72a8 8 0 0 1 8 8v24h-16V80a8 8 0 0 1 8-8ZM56 72a8 8 0 0 1 8 8v24H48V80a8 8 0 0 1 8-8Zm-8 48h16v88H48Zm80 32a24 24 0 0 0-24 24v32H80v-67.36l48-27.43 48 27.43V208h-24v-32a24 24 0 0 0-24-24Zm64 56v-88h16v88Z" />
  </Svg>
);
const Memo = memo(SvgSynagogueDuotone);
export default Memo;
