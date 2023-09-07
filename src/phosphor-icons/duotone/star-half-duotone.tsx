import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStarHalfDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M128 24v166.63a7.93 7.93 0 0 0-4.12 1.16l-51.1 31a8 8 0 0 1-11.89-8.69l13.52-58.54a8.08 8.08 0 0 0-2.54-7.89l-45.11-39.32a8 8 0 0 1 4.54-14.07l59.46-5.14a8 8 0 0 0 6.67-4.88l23.23-55.36A7.84 7.84 0 0 1 128 24Z"
      opacity={0.2}
    />
    <Path d="M239.2 97.29a16 16 0 0 0-13.81-11L166 81.17l-23.28-55.36a15.95 15.95 0 0 0-29.44 0L90.07 81.17l-59.46 5.14a16 16 0 0 0-9.11 28.07l45.11 39.42-13.52 58.54a16 16 0 0 0 23.84 17.34l51-31 51.11 31a16 16 0 0 0 23.84-17.34l-13.51-58.6 45.1-39.36a16 16 0 0 0 4.73-17.09ZM68.68 216l13.52-58.6a16 16 0 0 0-5.08-15.71L32 102.35a.58.58 0 0 1 0-.1l59.44-5.13a16 16 0 0 0 13.35-9.75L120 51.15v133.66l-.27.15ZM224 102.33l-45.1 39.36a16 16 0 0 0-5.08 15.71l13.53 58.6-51.07-31-.27-.15V51.15l15.2 36.22a16 16 0 0 0 13.35 9.75l59.44 5.14v.07Z" />
  </Svg>
);
const Memo = memo(SvgStarHalfDuotone);
export default Memo;
