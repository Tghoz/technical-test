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
    throw error;
  }
};

/*@misc{perez2021pysentimiento,
      title={pysentimiento: A Python Toolkit for Sentiment Analysis and SocialNLP tasks},
      author={Juan Manuel Pérez and Juan Carlos Giudici and Franco Luque},
      year={2021},
      eprint={2106.09462},
      archivePrefix={arXiv},
      primaryClass={cs.CL}
}*/

/*@inproceedings{del2020emoevent,
  title={EmoEvent: A multilingual emotion corpus based on different events},
  author={del Arco, Flor Miriam Plaza and Strapparava, Carlo and Lopez, L Alfonso Urena and Mart{\'\i}n-Valdivia, M Teresa},
  booktitle={Proceedings of the 12th Language Resources and Evaluation Conference},
  pages={1492--1498},
  year={2020}
} */



  