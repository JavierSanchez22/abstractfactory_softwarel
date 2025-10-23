import { ConverterFactory } from "../interfaces/ConverterFactory";
import * as AP from "../interfaces/AbstractProducts";
import * as CP from "../concreteProducts/MarkdownProducts";
export class MarkDownFactory implements ConverterFactory {
    public createHeading1(): AP.Heading1 {
        return new CP.MarkDownHeading1();
    }
    public createHeading2(): AP.Heading2 {
        return new CP.MarkDownHeading2();
    }
    public createHeading3(): AP.Heading3 {
        return new CP.MarkDownHeading3();
    }
    public createParagraph(): AP.Paragraph {
        return new CP.MarkDownParagraph();
    }
    public createQuote(): AP.Quote {
        return new CP.MarkDownQuote();
    }
    public createImage(): AP.Image {
        return new CP.MarkDownImage();
    }
}