"use client";

export type Ime = {
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

export type IiPInfo = {
  city: string;
  country: string;
  ip: string;
  loc: string;
  org: string;
  postal: string;
  region: string;
  timezone: string;
};

export type IuseApp = {
  me: Ime;
  ipInfo: IiPInfo;
};

export type IipToken = string | undefined;
