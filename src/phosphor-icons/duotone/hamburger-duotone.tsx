import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHamburgerDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m188 176 20-7.27V184a32 32 0 0 1-32 32H80a32 32 0 0 1-32-32v-16.73L68 160l40 16 40-16Zm27.82-89.72C209.32 55.55 172.48 32 128 32S46.68 55.55 40.18 86.28A8 8 0 0 0 48.07 96h159.86a8 8 0 0 0 7.89-9.72Z"
      opacity={0.2}
    />
    <Path d="M48.07 104h159.86a16 16 0 0 0 15.72-19.38C216.22 49.5 176 24 128 24S39.78 49.5 32.35 84.62A16 16 0 0 0 48.07 104ZM128 40c39.82 0 74.21 20.61 79.93 48H48.07l-.07-.07C53.79 60.61 88.18 40 128 40Zm101.26 112.48-41.13 15L151 152.57a8 8 0 0 0-5.94 0l-37 14.81L71 152.57a8 8 0 0 0-5.7-.09l-44 16a8 8 0 0 0 5.47 15L40 178.69V184a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-9.67l18.73-6.81a8 8 0 1 0-5.47-15ZM200 184a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24v-11.12l11.87-4.32L105 183.43a8 8 0 0 0 5.94 0l37-14.81 37 14.81a8 8 0 0 0 5.7.09l9.27-3.37ZM16 128a8 8 0 0 1 8-8h208a8 8 0 0 1 0 16H24a8 8 0 0 1-8-8Z" />
  </Svg>
);
const Memo = memo(SvgHamburgerDuotone);
export default Memo;
