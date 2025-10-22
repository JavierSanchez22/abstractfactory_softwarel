import {
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  Quote,
  Image,
} from "./AbstractProducts";

export interface ConverterFactory {
  createHeading1(): Heading1;
  createHeading2(): Heading2;
  createHeading3(): Heading3;
  createParagraph(): Paragraph;
  createQuote(): Quote;
  createImage(): Image;
}