import styled from "styled-components";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
  options: SelectOption[];
};

function Select({ value, onChange, options }: SelectProps) {
  return (
    <SelectContainer>
      <span className="value">Value</span>
      <button className="clear-btn">&times;</button>
      <div className="divider"></div>
      <div className="caret"></div>
      <ul className="options">
        {options.map((option) => (
          <li key={option.value} className="option">
            {option.label}
          </li>
        ))}
      </ul>
    </SelectContainer>
  );
}

export default Select;

const SelectContainer = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`;
