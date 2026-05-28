import {
  useGetMonsterQuery,
  useGetMonstersQuery,
  useGetSpellsQuery,
  useLazyGetSpellsQuery,
  useLazyGetMonstersQuery
} from "services/api/DDApi/DDAPI";
import "./App.scss";
import { MonsterType } from "types/api/DD";

const App = () => {
  const [triggerGetSpells, {
    data: spellsData,
    isLoading: spellsLoading,
    isFetching: spellsFetching,
  }] = useLazyGetSpellsQuery({});

  const [triggerGetMonsters, {
    data: monstersData,
    isLoading: monstersLoading,
    isFetching: monstersFetching,
  }] = useLazyGetMonstersQuery({});

  /* const {
    data: monsterData,
    isLoading: monsterLoading,
    isFetching: monsterFetching,
  } = useGetMonsterQuery("a-mi-kuk"); */

  console.log(spellsData);

  const data = monstersData || spellsData;

  return (
    <div className="app">
      <div className="fetch-buttons">
        <button onClick={() => triggerGetMonsters({})}>Get Monsters</button>
        <button onClick={() => triggerGetSpells({})}>Get Spells</button>
      </div>
      {monstersLoading || monstersFetching ? (
        <div>...loading</div>
      ) : (
        <div className="monsters">
          {data?.results.map((monster: MonsterType) => {
            const isAlternativeEdition = monster.slug.includes("a5e");
            const monsterName = isAlternativeEdition
              ? `${monster.name} (a5e)`
              : monster.name;

            return <div key={monster.slug}>{monsterName}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
