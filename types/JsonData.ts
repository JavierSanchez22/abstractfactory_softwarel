export interface JsonContent {
  "title 1"?: string;
  "title 2"?: string;
  "title 3"?: string;
  "Paragraph"?: string;
  "Quote"?: string;
  "Image"?: string;
}

export interface JsonData {
  data: JsonContent;
  Convert: "markdown" | "html" | string;
}