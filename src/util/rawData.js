// LazyLoad Data starts

export const lazyImagedata = [
  {
    id: 1,
    url: "https://source.unsplash.com/featured?animal",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 2,
    url: "https://source.unsplash.com/featured?nature",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 3,
    url: "https://source.unsplash.com/featured?ocean",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 4,
    url: "https://source.unsplash.com/featured?mountains",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 5,
    url: "https://source.unsplash.com/featured?hills",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 6,
    url: "https://source.unsplash.com/featured?river",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 7,
    url: "https://source.unsplash.com/featured?snow",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 8,
    url: "https://source.unsplash.com/featured?people",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 9,
    url: "https://source.unsplash.com/featured?cats",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 10,
    url: "https://source.unsplash.com/featured?buildings",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 11,
    url: "https://source.unsplash.com/featured?fish",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
];

// LazyLoad Data ends

// Calculator Data starts

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  DELETE_DIGIT: "del-digit",
  CHOOSE_OP: "operation",
  CLEAR: "clear",
  EVALUATE: "evaluate",
};

export let btnArr = [
  // {
  //   style: { gridArea: "open", backgroundColor: "#dadce0" },
  //   symbol: "(",
  //   type: ACTIONS.CHOOSE_OP,
  // },
  // {
  //   style: { gridArea: "close", backgroundColor: "#dadce0" },
  //   symbol: ")",
  //   type: ACTIONS.CHOOSE_OP,
  // },
  {
    style: { gridArea: "mod", backgroundColor: "#dadce0" },
    symbol: "%",
    type: ACTIONS.CHOOSE_OP,
  },
  {
    style: { gridArea: "reset", backgroundColor: "#dadce0" },
    symbol: "AC",
    type: ACTIONS.CLEAR,
  },
  {
    style: { gridArea: "mul", backgroundColor: "#dadce0" },
    symbol: "*",
    type: ACTIONS.CHOOSE_OP,
  },
  {
    style: { gridArea: "sub", backgroundColor: "#dadce0" },
    symbol: "-",
    type: ACTIONS.CHOOSE_OP,
  },
  {
    style: { gridArea: "add", backgroundColor: "#dadce0" },
    symbol: "+",
    type: ACTIONS.CHOOSE_OP,
  },
  {
    style: { gridArea: "div", backgroundColor: "#dadce0" },
    symbol: "/",
    type: ACTIONS.CHOOSE_OP,
  },
  {
    style: { gridArea: "equal", backgroundColor: "#4284f4", color: "#ffffff" },
    symbol: "=",
    type: ACTIONS.EVALUATE,
  },
  {
    style: { gridArea: "decimal", backgroundColor: "#f1f3f4" },
    symbol: ".",
    type: ACTIONS.ADD_DIGIT,
  },
];

const numMap = new Map();

numMap.set(0, "zero");
numMap.set(1, "one");
numMap.set(2, "two");
numMap.set(3, "three");
numMap.set(4, "four");
numMap.set(5, "five");
numMap.set(6, "six");
numMap.set(7, "seven");
numMap.set(8, "eight");
numMap.set(9, "nine");

btnArr = [
  ...btnArr,
  ...Array.from({ length: 10 }).map((_, i) => ({
    style: { gridArea: `${numMap.get(i)}`, backgroundColor: "#f1f3f4" },
    symbol: `${i}`,
    type: ACTIONS.ADD_DIGIT,
  })),
];

// Calculator Data ends
