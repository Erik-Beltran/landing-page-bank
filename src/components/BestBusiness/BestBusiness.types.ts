export type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export type BestBusinessData = {
  id: number;
  icon: IconComponent;
  title: string;
  description: string;
}[];
