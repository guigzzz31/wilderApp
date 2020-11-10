import React, { useEffect, useReducer } from "react";
import appReducer from "./reducers/appReducer";
import AppContext from "./context/AppContext";
import axios from "axios";
//methods
import useFetchWilders from "./hooks/useFetchWilders";
//components
import Wilder from "./Wilder";
import AddWilder from "./AddWilder";
//style
import "./App.css";
import { Success } from "./styles/form-elements";
import {
  CardRow,
  Container,
  Footer,
  Header,
  ShowButton,
} from "./styles/elements";
//icons
import { ReactComponent as PlusCircle } from "./icons/add-circle.svg";
import { ReactComponent as MinusCircle } from "./icons/minus-circle.svg";
import { colors } from "./styles/globals";
import useDeleteWilder from "./hooks/useDeleteWilder";

const initialState = {
  showAddForm: false,
  successMessage: "",
  wilders: [],
};

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { wilders, showAddForm, successMessage } = state;
  // const deleteWilder = async (id) => {
  //   try {
  //     let result = await axios.delete(`/api/wilders/${id}`, {
  //       id: id,
  //     });
  //     if (result.data.success) {
  //       console.log(result.data.result);
  //       dispatch({
  //         type: "WILDER_DELETED",
  //         deletedWilder: result.data.result,
  //         wilders: wilders.splice(
  //           wilders.findIndex((w) => (w._id = id)),
  //           1
  //         ),
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useFetchWilders(dispatch);
  return (
    <div>
      <Header>
        <Container>
          <h1>Wilders Book</h1>
        </Container>
      </Header>
      <Container>
        <AppContext.Provider value={dispatch}>
          <ShowButton
            onClick={() => dispatch({ type: "TOGGLE_SHOW_ADD_FORM" })}
          >
            {showAddForm ? <MinusCircle /> : <PlusCircle />}
          </ShowButton>
          {showAddForm ? (
            <AddWilder />
          ) : (
            successMessage !== "" && <Success>{successMessage}</Success>
          )}
        </AppContext.Provider>
      </Container>
      <Container>
        <h2>Wilders</h2>
        <CardRow>
          {wilders.map((wilder) => (
            <Wilder key={wilder._id} {...wilder} />
          ))}
        </CardRow>
      </Container>
      <Footer>
        <Container>
          <p>&copy; 2020 Wild Code School</p>
        </Container>
      </Footer>
    </div>
  );
}

export default App;
