import AnimatedHOC from "./AnimatedHOC";
import ProgressBar from "./ProgressBar"
import OutsideClickHOC from "./OutsideClickHOC"
import OnlyWithAuthedUser from "./OnlyWithAuthedUser"
import UseSomeActions from "./UseSomeActions"

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
    path: "/useSomeActions",
    title: "useSomeActions",
    description: "useSomeActions custom hook which return choosen actions",
    Solution: UseSomeActions
  },
]
