import { MainAlert } from "./alert";
import { MainBreadcrumbs } from "./breadcrumbs";
import { MainButton } from "./button";
import { MainTag } from "./tag";
import { MainCheckbox, MainCheckboxGroup } from "./checkbox";
import { MainCollapse } from "./collapse";
import { MainDatePicker, DateTypeEnum } from "./date-picker";
import { MainDivider } from "./divider";
import { MainEmpty } from "./empty";
import { MainForm, MainFormItem } from "./form";
import { MainIcon } from "./icon";
import { MainInput, MainInputNumber, MainAutocomplete, MainInputRange } from "./input";
import { MainMenu, MainMenuSub, MainMenuGroup, MainMenuItem } from "./menu";
import { MainModal } from "./modal";
import { MainPagination } from "./pagination";
import { MainProgress } from "./progress";
import { MainRadio } from "./radio";
import { MainSelect, MainSelectOption, TimeSelect } from "./select";
import { MainSkeleton, MainSkeletonItem } from "./skeleton";
import { MainStatistic, MainCountdown } from "./statistic";
import { MainSteps, MainStepsItem } from "./step";
import { MainTable, MainTableColumn } from "./table";
import { MainTitle } from "./title";
import { MainTooltip } from "./tooltip";
import { MainTour, MainTourItem } from "./tour";
import { MainTabs, MainTabPanel } from "./tab";
import { MainAffix } from "./affix";
import { MainTree } from "./tree";
import { MainPopover } from "./popover";

export { DateTypeEnum };

export const uiComponents = {
    AtomsPopover: MainPopover,
    AtomsTree: MainTree,
    AtomsInputRange: MainInputRange,
    AtomsAffix: MainAffix,
    AtomsTimeSelect: TimeSelect,
    AtomsTabs: MainTabs,
    AtomsTabPanel: MainTabPanel,
    AtomsAlert: MainAlert,
    AtomsBreadcrumbs: MainBreadcrumbs,
    AtomsButton: MainButton,
    AtomsTag: MainTag,
    AtomsCheckbox: MainCheckbox,
    AtomsCheckboxGroup: MainCheckboxGroup,
    AtomsCollapse: MainCollapse,
    AtomsDatePicker: MainDatePicker,
    AtomsDivider: MainDivider,
    AtomsEmpty: MainEmpty,
    AtomsForm: MainForm,
    AtomsFormItem: MainFormItem,
    AtomsIcon: MainIcon,
    AtomsInput: MainInput,
    AtomsInputNumber: MainInputNumber,
    AtomsAutocomplete: MainAutocomplete,
    AtomsMenu: MainMenu,
    AtomsMenuSub: MainMenuSub,
    AtomsMenuGroup: MainMenuGroup,
    AtomsMenuItem: MainMenuItem,
    AtomsModal: MainModal,
    AtomsPagination: MainPagination,
    AtomsProgress: MainProgress,
    AtomsRadio: MainRadio,
    AtomsSelect: MainSelect,
    AtomsSelectOption: MainSelectOption,
    AtomsSkeleton: MainSkeleton,
    AtomsSkeletonItem: MainSkeletonItem,
    AtomsStatistic: MainStatistic,
    AtomsCountdown: MainCountdown,
    AtomsSteps: MainSteps,
    AtomsStepsItem: MainStepsItem,
    AtomsTable: MainTable,
    AtomsTableColumn: MainTableColumn,
    AtomsTitle: MainTitle,
    AtomsTooltip: MainTooltip,
    AtomsTour: MainTour,
    AtomsTourItem: MainTourItem,
}

export const TestComponentsEnum = {
    popover: MainPopover,
    tree: MainTree,
    inputRange: MainInputRange,
    affix: MainAffix,
    timeSelect: TimeSelect,
    tabs: MainTabs,
    tabPanel: MainTabPanel,
    alert: MainAlert,
    breadcrumbs: MainBreadcrumbs,
    button: MainButton,
    tag: MainTag,
    checkbox: MainCheckbox,
    checkboxGroup: MainCheckboxGroup,
    collapse: MainCollapse,
    datePicker: MainDatePicker,
    divider: MainDivider,
    empty: MainEmpty,
    form: MainForm,
    formItem: MainFormItem,
    icon: MainIcon,
    input: MainInput,
    inputNumber: MainInputNumber,
    autocomplete: MainAutocomplete,
    menu: MainMenu,
    menuSub: MainMenuSub,
    menuGroup: MainMenuGroup,
    menuItem: MainMenuItem,
    modal: MainModal,
    pagination: MainPagination,
    progress: MainProgress,
    radio: MainRadio,
    select: MainSelect,
    selectOption: MainSelectOption,
    skeleton: MainSkeleton,
    skeletonItem: MainSkeletonItem,
    statistic: MainStatistic,
    countdown: MainCountdown,
    steps: MainSteps,
    stepsItem: MainStepsItem,
    table: MainTable,
    tableColumn: MainTableColumn,
    title: MainTitle,
    tooltip: MainTooltip,
    tour: MainTour,
    tourItem: MainTourItem,
}