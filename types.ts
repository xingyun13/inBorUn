export type Language = 'zh' | 'en';

export interface NavContent {
  logoMain: string;     // e.g. "INBORUN" or "英倍朗"
  logoHighlight: string; // e.g. "TECH" or "科技"
  logo: string; // e.g. "https://aisearch.cdn.bcebos.com/pic_create/2026-06-04/13/096ef13e4874f634.jpg"
  home: string;
  about: string;
  solutions: string;
  products: string;
  contact: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  cta: string;
}

export interface AboutContent {
  title: string;
  description: string[];
  valuesTitle: string;
  values: {
    title: string;
    desc: string;
  }[];
  servicesTitle: string;
  services: string[];
}

export interface SolutionItem {
  id: string;
  title: string;
  items: string[];
  iconName: 'bldc' | 'mcu' | 'bms';
}

export interface ProductCard {
  name: string;
  image?: string;
  desc?: string;
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface TableData {
  headers: string[];
  rows: string[][]; // Array of rows, where each row is an array of cell values
}

export interface CategoryNode {
  id: string;
  name: string;
  imgUrl?: string; // Image URL for the category listing
  type: 'brand' | 'model';
  // Content for Brand (Introduction View)
  description?: string;
  products?: ProductCard[]; 
  // Content for Model (Table View)
  specs?: SpecRow[]; // Legacy key-value pairs
  tableData?: TableData; // New multi-column table data
  // Children (Sub-menu)
  children?: CategoryNode[];
}

export interface SolutionDetail {
  sidebarTitle: string;
  rootCategories: CategoryNode[]; 
  backButton: string;
  moreText: string;
}

export interface SolutionsContent {
  title: string;
  subtitle: string;
  categories: SolutionItem[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  name: string;
  desc: string;
  imgUrl: string;
  features: string[];
  specs: ProductSpec[];
  applications: string[];
}

export interface ProductsContent {
  title: string;
  subtitle: string;
  list: ProductItem[];
  viewDetailText: string;
  keyFeaturesText: string;
  techSpecsText: string;
  typicalAppsText: string;
  backButton: string;
}

export interface ContactDetails {
  phone: string;
  address: string;
  contactPerson?: string;
  label: string;
}

export interface ContactContent {
  title: string;
  hqTitle: string;
  branchesTitle: string;
  hq: ContactDetails;
  branches: ContactDetails[];
  website: string;
  qrTitle: string;
}

export interface FooterContent {
  copyright: string;
}

export interface Content {
  nav: NavContent;
  hero: HeroContent;
  about: AboutContent;
  solutions: SolutionsContent;
  products: ProductsContent;
  contact: ContactContent;
  footer: FooterContent;
  solutionDetails: Record<string, SolutionDetail>;
}