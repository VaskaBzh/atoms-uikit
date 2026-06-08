import { ButtonPropsContract } from "./contracts";

export function mapToElButton(
  buttonProps?: ButtonPropsContract,
  text?: string,
): Record<string, unknown> | undefined {
  if (!buttonProps && text === undefined) return undefined;
  return {
    ...(text !== undefined && { children: text }),
    ...(buttonProps?.type !== undefined && { type: buttonProps.type }),
    ...(buttonProps?.size !== undefined && { size: buttonProps.size }),
    ...(buttonProps?.isDisable !== undefined && { disabled: buttonProps.isDisable }),
    ...(buttonProps?.isRound !== undefined && { round: buttonProps.isRound }),
    ...(buttonProps?.isCircle !== undefined && { circle: buttonProps.isCircle }),
    ...(buttonProps?.isPlain !== undefined && { plain: buttonProps.isPlain }),
    ...(buttonProps?.isText !== undefined && { text: buttonProps.isText }),
    ...(buttonProps?.isLink !== undefined && { link: buttonProps.isLink }),
    ...(buttonProps?.isBg !== undefined && { bg: buttonProps.isBg }),
    ...(buttonProps?.isLoading !== undefined && { loading: buttonProps.isLoading }),
    ...(buttonProps?.icon !== undefined && { icon: buttonProps.icon }),
    ...(buttonProps?.loadingIcon !== undefined && { loadingIcon: buttonProps.loadingIcon }),
  };
}
