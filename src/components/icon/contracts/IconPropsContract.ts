import { Component } from "vue";

export interface IconPropsContract {
	size?: number,
	icon: string | Component,
	color?: string,
}