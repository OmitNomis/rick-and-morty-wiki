import { CharacterList } from "@/components/CharacterList";

export const Characters = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl sm:4xl font-bold">Characters</h1>
      </div>
      <div>
        <CharacterList />
      </div>
    </div>
  );
};
