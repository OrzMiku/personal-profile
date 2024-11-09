export type Social = {
  name: string;
  url: string;
  external?: boolean;
};

export type Project = {
  name: string;
  description: string;
  url: string;
  external?: boolean;
};

export type Profile = {
  name: string;
  tagline: string;
  avatar: string;
  email: string;
  icp?: {
    name: string;
    url: string;
  };
};
