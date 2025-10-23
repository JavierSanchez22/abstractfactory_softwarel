import { JsonConverter } from "./client/JsonConverter";
import { ConverterFactory } from "./interfaces/ConverterFactory";
import { MarkDownFactory } from "./concreteFactories/MarkDownFactory";
import { HTMLFactory } from "./concreteFactories/HTMLFactory";
import { JsonData } from "./types/JsonData";
import "/styles.css"

let ultimoResultado: string = "";
let tipoConversion: "markdown" | "html" | string = "";

function getFactory(format: string): ConverterFactory {
  if (format === "markdown") {
    return new MarkDownFactory();
  } else if (format === "html") {
    return new HTMLFactory();
  } else {
    throw new Error(`Formato desconocido: ${format}.`);
  }
}

function runConversion(dataToConvert: JsonData): string {
  const factory = getFactory(dataToConvert.Convert);
  const converter = new JsonConverter(factory);
  const output = converter.convert(dataToConvert);

  ultimoResultado = output;
  tipoConversion = dataToConvert.Convert;

  return output;
}

const fileInput = document.getElementById("jsonFileInput") as HTMLInputElement;
const convertButton = document.getElementById(
  "convertButton"
) as HTMLButtonElement;
const outputArea = document.getElementById("outputArea") as HTMLPreElement;
const downloadButton = document.getElementById(
  "downloadButton"
) as HTMLButtonElement;


function descargarArchivo() {
  if (!ultimoResultado) return;

  let filename = "conversion.txt";
  let mimeType = "text/plain";

  if (tipoConversion === "markdown") {
    filename = "conversion.md";
    mimeType = "text/markdown";
  } else if (tipoConversion === "html") {
    filename = "conversion.html";
    mimeType = "text/html";
  }

  const blob = new Blob([ultimoResultado], { type: mimeType });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); 
  a.download = filename;

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
}

convertButton.addEventListener("click", () => {
  const file = fileInput.files?.[0];

  downloadButton.classList.add("hidden");
  ultimoResultado = "";

  if (!file) {
    outputArea.textContent = "Error: Por favor, selecciona un archivo .json";
    return;
  }

  const reader = new FileReader();

  reader.onload = (event) => {
    try {
      const fileContent = event.target?.result as string;
      const jsonData: JsonData = JSON.parse(fileContent);

      const output = runConversion(jsonData);

      outputArea.textContent = output;
      downloadButton.classList.remove("hidden");
    } catch (e: any) {
      if (e instanceof SyntaxError) {
        outputArea.textContent = `Error: El archivo no es un JSON válido.\n${e.message}`;
      } else {
        outputArea.textContent = `Error: ${e.message}`;
      }
    }
  };

  reader.onerror = () => {
    outputArea.textContent = "Error: No se pudo leer el archivo.";
  };

  reader.readAsText(file);
});

downloadButton.addEventListener("click", descargarArchivo);