import CharCard from "../CharCard/index";

function Characters({ characterList }) {
  return (
    <div className="flex">
      <CharCard results={characterList} />
    </div>
  );
}

export default Characters;
