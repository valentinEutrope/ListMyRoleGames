import {
  useGetMonsterQuery,
  useGetMonstersQuery,
} from "services/api/DDApi/DDAPI";
import "./App.scss";
import { MonsterType } from "types/api/DD";

const App = () => {
  const {
    data: monstersData,
    isLoading: monstersLoading,
    isFetching: monstersFetching,
  } = useGetMonstersQuery({});

  const {
    data: monsterData,
    isLoading: monsterLoading,
    isFetching: monsterFetching,
  } = useGetMonsterQuery("a-mi-kuk");

  console.log(monstersData, monsterData);

  return (
    <div className="app">
      {monstersLoading || monstersFetching ? (
        <div>...loading</div>
      ) : (
        <div className="monsters">
          {monstersData.results.map((monster: MonsterType) => {
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
