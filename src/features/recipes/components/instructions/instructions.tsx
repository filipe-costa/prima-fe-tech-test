type InstructionsProps = {
  instructions: string[];
};

export const Instructions = ({ instructions }: InstructionsProps) => {
  return (
    <div>
      <h2>Instructions</h2>
      <ol>
        {instructions.map((instruction, id) => (
          <li key={`instruction-${id}`}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};
