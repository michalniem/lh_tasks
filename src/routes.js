import AnimatedHOC from "./AnimatedHOC";
import ProgressBar from "./ProgressBar"
import OnlyWithAuthedUser from "./OnlyWithAuthedUser"

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
    path: "/onlyWithAuthedUser",
    title: "Only With Authed User",
    description: "Only With Authed User HOC",
    Solution: OnlyWithAuthedUser
  },
]
