import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDiamondDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m229.67 133.62-96 96a7.94 7.94 0 0 1-11.24 0l-96-96a7.94 7.94 0 0 1 0-11.24l96.05-96a7.94 7.94 0 0 1 11.24 0l96 96.05a7.94 7.94 0 0 1-.05 11.19Z"
      opacity={0.2}
    />
    <Path d="m235.33 116.72-96.05-96.06a16 16 0 0 0-22.56 0l-96 96.06a16 16 0 0 0 0 22.56l96.05 96.06a16 16 0 0 0 22.56 0l96.05-96.06a16 16 0 0 0 0-22.56ZM128 224l-96-96 96-96 96 96Z" />
  </Svg>
);
const Memo = memo(SvgDiamondDuotone);
export default Memo;
