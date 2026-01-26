import { LoadingContract, LoadingParamsContract } from "@/contracts";
import { ElLoading } from "element-plus";

export function LoadingService(loadingParams: LoadingParamsContract): LoadingContract {
    return ElLoading.service(loadingParams) as LoadingContract;
}