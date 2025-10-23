export interface Heading1 {
  convert(text: string): string;
}

export interface Heading2 {
  convert(text: string): string;
}

export interface Heading3 {
  convert(text: string): string;
}

export interface Paragraph {
  convert(text: string): string;
}

export interface Quote {
  convert(text: string): string;
}

export interface Image {
  convert(url: string): string;
}