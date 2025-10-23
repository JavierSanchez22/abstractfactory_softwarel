import * as AP from "../Interfaces/AbstractProducts"; 


export class MarkDownHeading1 implements AP.Heading1 {
  public convert(text: string): string {
    return `# ${text}\n`; 
  } 
}

export class MarkDownHeading2 implements AP.Heading2 {
  public convert(text: string): string {
    return `## ${text}\n`;
  }
}

export class MarkDownHeading3 implements AP.Heading3 {
  public convert(text: string): string {
    return `### ${text}\n`;
  }
} 

export class MarkDownParagraph implements AP.Paragraph {
  public convert(text: string): string {
    return `${text}\n\n`;
  }
}

export class MarkDownQuote implements AP.Quote {
  public convert(text: string): string {
    return `> ${text}\n\n`;
  }
}