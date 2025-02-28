type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  col: string;
  row: string;
  image: string;
  author: Author;
  tags: string[];
};
