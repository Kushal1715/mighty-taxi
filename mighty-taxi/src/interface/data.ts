export interface NavItem {
  icon: JSX.Element;
  item: string;
  itemChildren?: {
    childrenIcon: JSX.Element;
    childrenItem: string
  }[]
}