import Select from 'react-select';

export default function CustomSelect({ options, onChange, instanceID }) {
  return (
    <>
      <Select
        options={options}
        isSearchable={false}
        styles={customStyles}
        onChange={onChange}
        placeholder="Select ..."
        instanceId={instanceID}
      />
    </>
  );
}

// select custom styles
const customStyles = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  container: (provided, state) => ({
    ...provided,
    minWidth: '150px',
  }),
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused && '1px solid #cbd5e1',
    boxShadow: state.isFocused && 'none',
    '&:hover': {
      border: '1px solid #cbd5e1',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected && '#64748b',
    '&:hover': {
      backgroundColor: '#cbd5e1c4',
      cursor: 'pointer',
    },
  }),
};
