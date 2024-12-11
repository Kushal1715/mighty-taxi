export interface NavItem {
  icon: JSX.Element;
  item: string;
  route?: string;
  itemChildren?: {
    childrenIcon: JSX.Element;
    childrenItem: string;
    route: string
  }[]
}