type RouteType = {
    path?: string,
    title: string,
}

export interface BreadcrumbsPropsContract {
    routeHistory: RouteType[],
    separator?: string,
    separatorIcon?: string,
}