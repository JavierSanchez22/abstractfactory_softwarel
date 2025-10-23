import * as AP from "../interfaces/AbstractProducts";

export class HTMLHeading1 implements AP.Heading1 {
  public convert(text: string): string {
    return '<h1>${text}</h1>\n';
  }
}

export class HTMLHeading2 implements AP.Heading2 {
  public convert(text: string): string {
    return '<h2>${text}</h2>\n';
  }
}

export class HTMLHeading3 implements AP.Heading3 {
  public convert(text: string): string {
    return '<h3>${text}</h3>\n';
  }
}