import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgClubDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M232 144a48 48 0 0 1-88.07 26.44L160 224H96l16.07-53.56a48 48 0 1 1-23.9-71.65 48 48 0 1 1 79.66 0A48 48 0 0 1 232 144Z"
      opacity={0.2}
    />
    <Path d="M184 88h-2.33a56 56 0 1 0-107.34 0H72a56 56 0 1 0 24.54 106.35l-8.2 27.35A8 8 0 0 0 96 232h64a8 8 0 0 0 7.66-10.3l-8.2-27.35A56 56 0 1 0 184 88Zm0 96a40 40 0 0 1-33.4-18 8 8 0 0 0-14.33 6.71l13 43.26h-42.5l13-43.26A8 8 0 0 0 105.4 166a40 40 0 1 1-19.93-59.71 8 8 0 0 0 9.33-12 40 40 0 1 1 66.4 0 8 8 0 0 0 9.33 12A40 40 0 1 1 184 184Z" />
  </Svg>
);
const Memo = memo(SvgClubDuotone);
export default Memo;
