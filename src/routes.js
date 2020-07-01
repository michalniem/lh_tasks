import AnimatedHOC from "./AnimatedHOC";
import ProgressBar from "./ProgressBar"
import OutsideClickHOC from "./OutsideClickHOC"
import OnlyWithAuthedUser from "./OnlyWithAuthedUser"
import MultilangComponent from "./MultilangComponent"
import RefLink from "./RefLink"
import GeolocalizationCustomHook from "./GeolocalizationCustomHook"

export default [
  {
    path: "/animatedHOC",
    title: "Animated HOC",
    description: "Animated HOC. Componet which pass info about wrapped component visibility.",
    Solution: AnimatedHOC
  },
  {
    path: "/progressBar",
    title: "Reading Progress Bar",
    description: "Progress Bar HOC. Componet with reader scroll progress bar above wrapped component.",
    Solution: ProgressBar
  },
  {
    path: "/outsideClickHOC",
    title: "Outside Click Hoc",
    description: "Outside Click Hoc",
    Solution: OutsideClickHOC
  },
  {
    path: "/onlyWithAuthedUser",
    title: "Only With Authed User",
    description: "Only With Authed User HOC",
    Solution: OnlyWithAuthedUser
  },
  {
    path: "/multilangComponent",
    title: "MultilangComponent",
    description: "MultilangComponent, TranslatedText, useTranslations hook",
    Solution: MultilangComponent
  },
  {
    path: "/refLink",
    title: "Reflink",
    description: "Reflink",
    Solution: RefLink
  },
  {
    path: "/geolocalizationCustomHook",
    title: "useGeo",
    description: "Custom hook to watching user position",
    Solution: GeolocalizationCustomHook
  },
]
