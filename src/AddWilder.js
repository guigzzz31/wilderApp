import React from "react";
import { Button, Error, Form, Input, Label } from "./styles/form-elements";
import { ReactComponent as LoadingIcon } from "./icons/hourglass.svg";
import useCreateWilder from "./hooks/useCreateWilder";

function AddWilder({ onSuccess }) {
  const {
    inputCity,
    inputName,
    inputSkill,
    inputVote,
    formSubmission,
    loading,
    delayed,
    error,
  } = useCreateWilder(onSuccess);

  return (
    <Form onSubmit={formSubmission}>
      <Label htmlFor="name-input">Name :</Label>
      <Input
        id="name-input"
        type="text"
        placeholder="Type the name"
        {...inputName}
      />
      <Label htmlFor="city-input">City :</Label>
      <Input
        id="city-input"
        type="text"
        placeholder="Type the city"
        {...inputCity}
      />
      <Label htmlFor="city-input">Skill :</Label>
      <Input
        id="skill-input"
        type="text"
        placeholder="Type the skill"
        {...inputSkill}
      />
      <Label htmlFor="city-input">Vote :</Label>
      <Input
        id="vote-input"
        type="text"
        placeholder="Type the skill"
        {...inputVote}
      />
      {error !== "" && <Error>{error}</Error>}
      <Button disabled={loading} showLoading={loading && !delayed}>
        {loading && !delayed ? <LoadingIcon /> : "Add"}
      </Button>
    </Form>
  );
}

export default AddWilder;
