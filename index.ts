// Muestra del diagrama
import { JsonConverter } from "./client/JsonConverter";
import { ConverterFactory } from "./interfaces/ConverterFactory";
import { MarkDownFactory } from "./concreteFactories/MarkDownFactory";
import { HTMLFactory } from "./concreteFactories/HTMLFactory";
import { JsonData } from "./types/JsonData";
import * as fs from "fs";
import * as path from "path";

function getFactory(format: string): ConverterFactory {
    if (format === "markdown") {
        return new MarkDownFactory();
    } else if (format === "html") {
        return new HTMLFactory();
    } else {
        throw new Error(`Formato desconocido: ${format}.`);
    }
}

function runConversion(dataToConvert: JsonData) {
    try {
        const factory = getFactory(dataToConvert.Convert);
        const converter = new JsonConverter(factory);
        const output = converter.convert(dataToConvert);
        console.log(`\n--- CONVERSIÓN A: ${dataToConvert.Convert.toUpperCase()} ---`);
        console.log("JSON DE ENTRADA:");
        console.log(JSON.stringify(dataToConvert.data, null, 2));
        console.log("\nSALIDA GENERADA:");
        console.log(output);
    } catch (e: any) {
        console.error(e.message);
    }
}

function main() {
    const args = process.argv;
    if (args.length < 3) {
        console.error("Error: Debes proporcionar la ruta al archivo .json");
        console.log("Uso: npx ts-node src/index.ts <ruta_al_archivo.json>");
        process.exit(1);
    }
    const fileName = args[2];
    const filePath = path.resolve(process.cwd(), fileName);

    try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const jsonData: JsonData = JSON.parse(fileContent);

        console.log(`Archivo leído exitosamente: ${fileName}`);
        runConversion(jsonData);
        
    } catch (error: any) {
        if (error.code === 'ENOENT') {
            console.error(`Error: No se pudo encontrar el archivo en: ${filePath}`);
        } else if (error instanceof SyntaxError) {
            console.error(`Error: El archivo '${fileName}' no contiene un JSON válido.`);
        } else {
            console.error("Error desconocido al leer el archivo:", error.message);
        }
        process.exit(1);
    }
}

main();
