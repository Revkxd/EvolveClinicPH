export interface HomePageProps {
  isHomePage: boolean;
  header?: string;
  headerTextStyle?: string;
}

export interface NavOptionsProps {
  classes: string;
  onClickFunction?: () => void;
  buttonStyle?: string;
  excludeContact?: boolean;
}