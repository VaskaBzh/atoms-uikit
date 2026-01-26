import { TabPanelPropsContract } from "./TabPanelPropsContract";

export interface TabsPropsContract {
    modelValue: string | number,
    tabs: TabPanelPropsContract[],
    type?: "" | "card" | "border-card",
    isClosable?: boolean,
    isAddable?: boolean,
    isEditable?: boolean,
    isStretch?: boolean,
    tabPosition?: "top" | "right" | "bottom" | "left",
}