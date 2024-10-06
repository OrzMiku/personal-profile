export type Social = {
  name: string;
  url: string;
};

export type Project = {
  name: string;
  description: string;
  url: string;
};

export type Profile = {
  name: string;
  tagline: string;
  avatar: string;
  email: string;
  socials: Social[];
  projects: Project[];
  icp?: {
    name: string;
    url: string;
  };
};
