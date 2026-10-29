import { Html, Head, Main, NextScript } from "next/document";

// Sem o lang, o leitor de tela le o portugues com pronuncia de ingles.
export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
