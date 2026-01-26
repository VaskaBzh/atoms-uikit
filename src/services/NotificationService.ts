import { NotificationParamsContract } from "@/contracts";
import { ElNotification } from "element-plus";

export function NotificationService(notificationParams: NotificationParamsContract): void {
    ElNotification(notificationParams);
}