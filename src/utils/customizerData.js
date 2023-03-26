import DefaultSidebarBoxes from "../components/layoutBoxes/DefaultSidebarBoxes"
import SmallSidebarBoxes from "../components/layoutBoxes/SmallSidebarBoxes"

export const sidebarLayouts = [
    {
        id: 1,
        box: <DefaultSidebarBoxes type={"layout"} payload={"default"} />,
        text: "default"
    },
    {
        id: 2,
        box: <DefaultSidebarBoxes type={"layout"} payload={"no-icon"} />,
        text: "no icon"
    },
    {
        id: 3,
        box: <SmallSidebarBoxes payload={"small-icon"} />,
        text: "small (icon view)"
    }
]

export const sidebarColors = [
    {
        id: 1,
        box: <DefaultSidebarBoxes type={"color"} payload={"default"} />,
        text: "default"
    },
    {
        id: 2,
        box: <DefaultSidebarBoxes type={"color"} payload={"#66309d"} />,
        text: "purple"
    },
    {
        id: 3,
        box: <DefaultSidebarBoxes type={"color"} payload={"#0959e3"} />,
        text: "blue"
    },
    {
        id: 4,
        box: <DefaultSidebarBoxes type={"color"} payload={"#0c7531"} />,
        text: "green"
    }
]

export const themes = [
    {
        id: 1,
        box: <DefaultSidebarBoxes type={"theme"} payload={"dark"} />,
        text: "Dark"
    },
    {
        id: 2,
        box: <DefaultSidebarBoxes type={"theme"} payload={"light"} />,
        text: "Light"
    }
]