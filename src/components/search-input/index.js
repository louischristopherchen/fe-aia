import styles from './index.module.css';

const SearchInput = ({ onChange = () => { }, onClick = () => { }, value = '' }) => {
  const { input_container, main, button_container } = styles;
  return (<div className={main}>
    <input type='text'
      className={input_container}
      value={value}
      onChange={(event) => { onChange(event.target.value) }}
    />
    <button className={button_container} onClick={() => onClick(value)}>
      Go!
    </button>

  </div>
  )
}

export default SearchInput;