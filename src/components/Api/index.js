const hf = "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";

export const fetchSentiment = async (inputText) => {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/finiteautomata/beto-sentiment-analysis",
      {
        headers: {
          Authorization: "Bearer " + hf,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ inputs: inputText }),
      }
    );

    if (!response.ok) {
      throw new Error("Error en la respuesta de la API");
    }

    const result = await response.json();
    return result;
    
  } catch (error) {
    console.error("Error en la consulta:", error);
    throw error; // Lanza el error para que pueda ser manejado en el componente
  }
};
