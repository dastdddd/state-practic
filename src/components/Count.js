import { useState, useEffect } from "react";

//hook:
//1 useState - состояние например let name = 'Asan'
//2 useEffect - эта обновление и отображение и изменение  страницу сразу
//3 useCallback - КЭШирование функции
//4 useMome - КЭШирование обьекта
//5 useReducer - state managment
//6 useContext - state managment

function Count() {
  //________________________useState - изменяет переменный после клика
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(1);
  const [name, setName] = useState("Asan");
  const handleClick = () => {
    setName("Uson");
  };

  //________________________useEffect - сразу выводит изменение переменной
  useEffect(() => {
    setName("useEffect");
  }, []);

  const increment = () => {
    setCount(count + 1);
  };
  const dectrement = () => {
    setCount((count) => (count === 1 ? 1 : count - 1));
    // Если count === 1 ?(то равно) 1 :(иначе) count - 1
  };

  const clearCount = () => {
    setCount(1);
  };

  let colors = [
    "rgb(148, 104, 104)",
    "rgb(146, 116, 116)",
    "rgb(156, 122, 122)",
    "rgb(134, 120, 120)",
  ];

  useEffect(() => {
    const setinterval = setInterval(() => {
      setCount((count) => (count >= 50 ? 1 : count + 1));
      setIndex((index) => (index === 3 ? 0 : index + 1));
    }, 1000);
    return () => clearInterval(setinterval);
    //clearInterva - очистка каждый секунд и обновление состояние setinterval
  }, [count, index]);

  document.body.style.backgroundColor = colors[index];

  return (
    <div >
      {/*<button onClick={() => setName('Uson')}>click</button>*/}
      <button onClick={handleClick}>click</button>
      <h1>{name}</h1>
      <hr />
      <button onClick={increment}>increment </button>
      <h1>{count}</h1>
      <button onClick={dectrement}>dectrement </button>
      <button onClick={clearCount}>clearCount</button>
    </div>
  );
}

export default Count;
