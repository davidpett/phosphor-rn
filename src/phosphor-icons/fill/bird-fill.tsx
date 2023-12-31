import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBirdFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m236.44 73.34-23.23-15.48A60 60 0 0 0 96 76v17.19L1.75 211A8 8 0 0 0 8 224h104a104.11 104.11 0 0 0 104-104v-19.72l20.44-13.62a8 8 0 0 0 0-13.32Zm-126.29 67.78-40 48a8 8 0 0 1-12.3-10.24l40-48a8 8 0 1 1 12.3 10.24ZM164 80a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgBirdFill);
export default Memo;
