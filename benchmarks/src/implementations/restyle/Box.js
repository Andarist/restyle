import { styled } from "restyle";
import View from "./View";

const styles = {
  outer: {
    alignSelf: "flex-start",
    padding: 4,
  },
  row: {
    flexDirection: "row",
  },
  color0: {
    backgroundColor: "#14171A",
  },
  color1: {
    backgroundColor: "#AAB8C2",
  },
  color2: {
    backgroundColor: "#E6ECF0",
  },
  color3: {
    backgroundColor: "#FFAD1F",
  },
  color4: {
    backgroundColor: "#F45D22",
  },
  color5: {
    backgroundColor: "#E0245E",
  },
  fixed: {
    width: 6,
    height: 6,
  },
};

export default (p) => (
  <View
    css={{
      ...styles[`color${p.color}`],
      ...(p.fixed && styles.fixed),
      ...(p.layout === "row" && styles.row),
      ...(p.outer && styles.outer),
    }}
    {...p}
  />
);
