export interface NestedContainerType {
  id: number;
  __component: string;
  text: string;
  img: {
    data: {
      id: number;
      attributes: {
        url: string;
      };
    };
  };
}
export type Blog = {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    Timestamp: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Image: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          url: string;
        };
      };
    };
    Categories: {
      data: {
        id: number;
        attributes: {
          Title: string;
        };
      }[];
    };
    NestedContainer: [] | [NestedContainerType];
  };
};

export type BlogResponse = {
  data: [Blog];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
