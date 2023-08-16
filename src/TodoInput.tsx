import React from "react";

interface FormProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const TodoInput = ({ handleChange, value }: FormProps) => {
  return <input onChange={handleChange} value={value} type="text" />;
};

export default TodoInput;
