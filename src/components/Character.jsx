export function Character(character) {
  console.log(character)
  return (

    
    <>
      <div className="card w-96 bg-primary text-primary-content">
      
        <div className="card-body">
          <h2 className="card-title">{character.name}</h2>
          <p>{`Origin: ${character.origin && character.origin.name}`}</p>
        </div>
      </div>
    </>
  );
}
export default Character;
