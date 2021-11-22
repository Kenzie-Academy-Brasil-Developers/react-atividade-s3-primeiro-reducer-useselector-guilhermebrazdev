import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFruit } from "../../store/modules/fruits/actions";
import { Container } from "./style";

const FruitsPage = () => {
  const fruits = useSelector((state) => state.fruits);
  const dispatch = useDispatch();
  const [fruit, setFruit] = useState("");

  const handleAddFruit = () => {
    dispatch(addFruit(fruit));
    setFruit("");
  };

  return (
    <Container>
      <input
        placeholder="Fruta"
        value={fruit}
        onChange={(evt) => setFruit(evt.target.value)}
      />
      <button onClick={handleAddFruit}>Adicionar Fruta</button>

      <section>
        {fruits.map((fruit) => (
          <div>
            <p key={fruit}> {fruit} </p>
          </div>
        ))}
      </section>
    </Container>
  );
};

export default FruitsPage;
