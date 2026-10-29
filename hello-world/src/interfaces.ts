import React from "react";

export interface Song {
  songTitle: string;
  duration: string;
}

export interface Movie {
  plakat: string;
  tytul: string;
  rok: number;
  rating: number;
}

export interface Book {
  plakat: string;
  tytul: string;
  rok: number;
  strony: number;
}

export interface Album {
  plakat: string;
  tytul: string;
  rok: number;
  autor: string;
  songs?: Song[];
}

export interface CollapsibleSection {
  title: string;
  children: React.ReactNode;
}