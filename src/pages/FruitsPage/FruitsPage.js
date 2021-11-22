//importando useSelector do react-redux
import { useSelector } from "react-redux";
import { Container } from "./style";

const FruitsPage = () => {
  //acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
    <Container>
      {fruits.map((fruit) => (
        <div>
          <p key={fruit}> {fruit} </p>
        </div>
      ))}
    </Container>
  );
};

export default FruitsPage;
