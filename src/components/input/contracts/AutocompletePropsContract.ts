export type AutocompleteItemType = { [key: string]: any };

export interface AutocompletePropsContract {
    modelValue: string | number | undefined,
    // placeholder: string,
    // main complete logic
    fetchSuggestions: (queryString: string, callback: any) => void,
    isClearable?: boolean,
    isTriggerOnFocus?: boolean,
    // class to customize popover
    popperClass?: string,
}