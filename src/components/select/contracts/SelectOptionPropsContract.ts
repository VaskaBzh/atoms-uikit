import { Component } from "vue";

export interface SelectOptionPropsContract {
    label?: string | number,
    value: string | number | boolean,
    img?: string | Component,
    isDisabled?: boolean,
}