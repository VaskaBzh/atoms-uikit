import { MessageParamsContract } from "@/contracts";
import { ElMessage } from "element-plus";

export function MessageService(messageParams: MessageParamsContract): void {
    // @ts-ignore
    ElMessage(messageParams);
}