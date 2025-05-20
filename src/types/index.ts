export interface Feature {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface Screenshot {
  id: number;
  url: string;
  alt: string;
}

export interface RoadmapItem {
  id: number;
  title: string;
  description: string;
  date: string;
  completed: boolean;
}
