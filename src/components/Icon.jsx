import { Path, Svg } from "@react-pdf/renderer";
import PropTypes from "prop-types";

export default function Icon({ faIcon, style = {}, fill, width }) {
  if (!faIcon) {
    return <></>;
  }

  const { icon } = faIcon;
  const duotone = Array.isArray(icon[4]);
  const paths = Array.isArray(icon[4]) ? icon[4] : [icon[4]];
  const computedStyle = { ...style, width: width || style.width || "14px" };
  const color = fill || style.color || "black";

  return (
    <Svg viewBox={`0 0 ${icon[0]} ${icon[1]}`} style={computedStyle}>
      {paths &&
        paths.map((d, index) => (
          <Path
            d={d}
            key={index}
            fill={color}
            fillOpacity={duotone && index === 0 ? 0.4 : 1.0}
          />
        ))}
    </Svg>
  );
}

Icon.propTypes = {
  faIcon: PropTypes.object,
  style: PropTypes.object,
  fill: PropTypes.string,
  width: PropTypes.string,
};
