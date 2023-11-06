export function Character(character) {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={character.image} alt={character.name} className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{character.name}</h2>
          <p>{`Origin: ${character.origin && character.origin.name}`}</p>
        </div>
      </div>
    </>
  );
}
export default Character;
