import { ConverterFactory } from "../Interfaces/ConverterFactory";
import * as AP from "../Interfaces/AbstractProducts";
import { JsonData, JsonContent } from "../types/JsonData";

export class JsonConverter {
    private _heading1Converter: AP.Heading1;
    private _heading2Converter: AP.Heading2;
    private _heading3Converter: AP.Heading3;
    private _paragraphConverter: AP.Paragraph;
    private _quoteConverter: AP.Quote;
    private _imageConverter: AP.Image;

    constructor(factory: ConverterFactory) {
        this._heading1Converter = factory.createHeading1();
        this._heading2Converter = factory.createHeading2();
        this._heading3Converter = factory.createHeading3();
        this._paragraphConverter = factory.createParagraph();
        this._quoteConverter = factory.createQuote();
        this._imageConverter = factory.createImage();
    }
    public convert(jsonData: JsonData): string {
        const data: JsonContent = jsonData.data;
        let output: string[] = [];
        if (data["title 1"]) {
            output.push(this._heading1Converter.convert(data["title 1"]));
        }
        if (data["title 2"]) {
            output.push(this._heading2Converter.convert(data["title 2"]));
        }
        if (data["title 3"]) {
            output.push(this._heading3Converter.convert(data["title 3"]));
        }
        if (data["Paragraph"]) {
            output.push(this._paragraphConverter.convert(data["Paragraph"]));
        }
        if (data["Quote"]) {
            output.push(this._quoteConverter.convert(data["Quote"]));
        }
        if (data["Image"]) {
            output.push(this._imageConverter.convert(data["Image"]));
        }
        return output.join("");
    }
}