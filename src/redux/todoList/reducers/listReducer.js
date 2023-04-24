// import { SHOW_POP_UP, HIDE_POP_UP } from "../../constants";

const initialState = {
  list:[
    {
      name: "Start making a presentation",
      time: "2023-04-18 7:08 pm",
      color: "yellow",
    },
    { name: "Pay for rent", time: "2023-04-18 7:14 pm", color: "yellow" },
    { name: "Buy a milk", time: "2023-04-20 8:20 pm", color: "green" },
    {
      name: "Don't forget to pick up Mickeal from school",
      time: "2023-04-18 8:20 pm",
      color: "yellow",
    },
    {
      name: "Buy a chocolate for Charlotte",
      time: "2023-04-18 8:20 pm",
      color: "yellow",
    },
  ] 
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
};
// return default
}

export default listReducer;
