import { ConverterFactory } from "../interfaces/ConverterFactory";
import * as AP from "../interfaces/AbstractProducts";
import * as CP from "../concreteProducts/HtmlProducts";

export class HTMLFactory implements ConverterFactory {
    public createHeading1(): AP.Heading1 {
        return new CP.HTMLHeading1();
    }
    public createHeading2(): AP.Heading2 {
        return new CP.HTMLHeading2();
    }
    public createHeading3(): AP.Heading3 {
        return new CP.HTMLHeading3();
    }
    public createParagraph(): AP.Paragraph {
        return new CP.HTMLParagraph();
    }
    public createQuote(): AP.Quote {
        return new CP.HTMLQuote();
    }
    public createImage(): AP.Image {
        return new CP.HTMLImage();
    }
}