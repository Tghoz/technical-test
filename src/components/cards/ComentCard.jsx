import {
  Card,
  CardBody,
  ScrollShadow,
  Button,
  Spinner,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function ComentCards({ onTextSelect }) {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const commentsPerPage = 5;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const storedComments = localStorage.getItem("JsonFile");

    if (storedComments) {
      try {
        const parsedComments = JSON.parse(storedComments);
        setTimeout(() => {
          setComments(parsedComments);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error al parsear datos JSON:", error);
        setIsLoading(false);
        setError("No se pudo cargar los comentarios."); // Setea el mensaje de error
      }
    } else {
      setIsLoading(false);
      setError("No hay comentarios disponibles."); // Mensaje si no hay comentarios
    }
  }, []);

  const handleCardClick = (data) => {
    console.log("Tarjeta clickeada:", data);
    onTextSelect(data);
  };

  const startIndex = currentPage * commentsPerPage;
  const endIndex = startIndex + commentsPerPage;
  const paginatedComments = comments.slice(startIndex, endIndex);

  return (
    <>
      <ScrollShadow
        hideScrollBar
        offset={100}
        orientation="horizontal"
        className="w-[400px] sm:w-full h-[555px]">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Spinner size="lg" />
          </div>
        ) : error ? ( // Mensaje de error
          <div className="flex justify-center items-center h-full">
            <p className="text-red-500">{error}</p>
          </div>
        ) : paginatedComments.length > 0 ? (
          paginatedComments.map((comment, index) => (
            <div key={index} onClick={() => handleCardClick(comment)}>
              <Card
                className="my-2 bg-[#FFD8F5] hover:bg-[#e38dcd] hover:scale-95 transition-all duration-200 focus:bg-[#e38dcd] focus:scale-95 "
                style={{ cursor: "pointer" }}>
                <CardBody>
                  <p>{comment.text}</p>
                </CardBody>
              </Card>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center h-full">
            <p>No hay comentarios disponibles.</p>
          </div>
        )}
      </ScrollShadow>

      {endIndex < comments.length &&
        !isLoading &&
        !error && ( // Condición adicional para el error
          <Button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            style={{ marginTop: "20px" }}>
            Cargar más comentarios
          </Button>
        )}
    </>
  );
}
