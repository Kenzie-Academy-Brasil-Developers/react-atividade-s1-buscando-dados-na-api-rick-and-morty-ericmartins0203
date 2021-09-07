import "./styles.css";

function CharCard({ results }) {
  return (
    <>
      {results.map((element) => (
        <section className={element.status} key={element.id}>
          <p>{element.name}</p>
          <img
            src={element.image}
            alt={element.name}
            width="120px"
            heigth="120px"
          ></img>
          <p>{element.species}</p>
        </section>
      ))}
    </>
  );
}

export default CharCard;
