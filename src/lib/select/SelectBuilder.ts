import { ComputedRef, computed } from "vue";
import { SelectOptionPropsContract } from "@/components/select/contracts";

export class SelectBuilder {
	public static buildSelectWithDefault(
		selectData?: (string | number)[],
		prefix?: string,
		translate?: (translatePath: string) => string
	): ComputedRef<SelectOptionPropsContract[]> {
		if (!selectData) {
			return computed(() => [
				{
					label: "",
					value: ""
				}
			]);
		}

		return computed(() => {
			const selectOptions: SelectOptionPropsContract[] = selectData.map((selectValue: string | number): SelectOptionPropsContract => ({
				label: prefix
					? translate
						? translate(prefix + selectValue)
						: prefix + selectValue
					: selectValue,
				value: selectValue
			}));

			selectOptions.unshift({
				label: "",
				value: ""
			});

			return selectOptions;
		});
	}

	public static buildSelect(
		selectData?: (string | number)[],
		prefix?: string,
		translate?: (translatePath: string) => string
	): ComputedRef<SelectOptionPropsContract[]> {
		if (!selectData) {
			return computed(() => [
				{
					label: "",
					value: ""
				}
			]);
		}

		return computed(() => {
			return selectData.map((selectValue: string | number): SelectOptionPropsContract => ({
				label: prefix
					? translate
						? translate(prefix + selectValue)
						: prefix + selectValue
					: selectValue,
				value: selectValue
			}));
		});
	}

	public static buildSelectByData(
		selectData: SelectOptionPropsContract[],
		translate?: (translatePath: string) => string
	): ComputedRef<SelectOptionPropsContract[]> {
		return computed(() => {
			return selectData.map((selectValue: SelectOptionPropsContract): SelectOptionPropsContract => ({
				label: selectValue.label
					? translate
						? translate(String(selectValue.label))
						: selectValue.label
					: "",
				value: selectValue.value,
				img: selectValue.img
			}));
		});
	}
}