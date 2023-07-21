export type me = {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  skills: string[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
};

export type ipDetails = {
  city: string;
  country: string;
  ip: string;
  loc: string;
  org: string;
  postal: string;
  region: string;
  timezone: string;
};

export type IuseMainContext = {
  me: me;
  ipDetails: ipDetails;
};
