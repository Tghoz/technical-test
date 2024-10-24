import { useState } from "react";
import DoughnutChart from "./chart/DoughnutChart";
import BarChart from "./chart/BarChart";
import LikeCard from "./cards/LikeCard";
import ComentCard from "./cards/ComentCard";
import { fetchSentiment } from "./Api/index";
import { AiFillLike } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";
import { VscReactions } from "react-icons/vsc";

import { Spinner } from "@nextui-org/react";

export default function Page() {
  const [selectedComment, setSelectedText] = useState("");
  const [sentimentResult, setSentimentResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTextSelect = async (text) => {
    setSelectedText(text); // Establece el comentario seleccionado
    setLoading(true); // Activa el estado de carga

    try {
      const result = await fetchSentiment(text.text); // Llama a la API utilizando el texto
      console.log("Resultado del sentimiento:", result); // Muestra el resultado en la consola
      setSentimentResult(result); // Establece el resultado del sentimiento
      setError(null); // Restablece el estado de error
    } catch (error) {
      console.error("Error al obtener el sentimiento:", error);
      setError("Error al obtener el sentimiento."); // Establece un mensaje de error
    } finally {
      setLoading(false); // Desactiva el estado de carga
    }
  };

  return (
    <section className="w-full flex flex-col">
      <div className="flex-1 grid grid-cols-1 m-1 md:grid-cols-3 gap-8">
        <div className="h-full w-full">
          <ComentCard onTextSelect={handleTextSelect} />
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-[#E9E3F3] p-5 h-80 w-72 rounded-lg mb-5">
            <div className="flex justify-center">
              <h1 className="font-mono text-xl">Metrica Data</h1>
            </div>
            <div className="flex h-full w-full p-5">
              <DoughnutChart
                likes={parseInt(selectedComment.likes)}
                comments={parseInt(selectedComment.comments)}
                shares={parseInt(selectedComment.shares)}
                reactions_count={parseInt(selectedComment.reactions_count)}
              />
            </div>
          </div>

          <div className="flex bg-[#FDEDD4] p-5 w-full justify-center rounded-lg">
            {loading ? ( // Muestra un spinner o mensaje de carga mientras se obtiene el resultado
              <div className="flex justify-center items-center">
                <Spinner label="Loading..." color="warning" />
              </div>
            ) : (
              sentimentResult &&
              Array.isArray(sentimentResult) &&
              sentimentResult.length > 0 && (
                <BarChart
                  score1={sentimentResult[0][0].score}
                  score2={sentimentResult[0][1].score}
                  score3={sentimentResult[0][2].score}
                  label1={sentimentResult[0][0].label}
                  label2={sentimentResult[0][1].label}
                  label3={sentimentResult[0][2].label}
                />
              )
            )}
          </div>
        </div>

        <div className="flex flex-col justify-start">
          <div className="my-2">
            <LikeCard
              title="likes"
              account={selectedComment.likes}
              icon={<AiFillLike size={20} />}
            />
          </div>
          <div className="my-2">
            <LikeCard
              title="comments"
              account={selectedComment.comments}
              icon={<FaComments size={20} />}
            />
          </div>
          <div className="my-2">
            <LikeCard
              title="shares"
              account={selectedComment.shares}
              icon={<FaShareSquare size={20} />}
            />
          </div>
          <div className="my-2">
            <LikeCard
              title="reactions_count"
              account={selectedComment.reactions_count}
              icon={<VscReactions size={25} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
