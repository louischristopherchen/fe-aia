import styles from './index.module.css';

const Input = ({
  onChange = () => { },
  page = 1,
  totalPage = 1,
}) => {
  const { input_container, main, total_page } = styles;
  return (<div className={main}>
    <input
      className={input_container}
      type='number'
      onChange={(event => onChange(event.target.value))}
      value={page}
      min={1}
      max={totalPage}
      onBlur={() => {
        if (page < 0) { onChange(1) }
        else if (page > totalPage) { onChange(totalPage) }
      }}
    />
    <div className={total_page}> <div>/</div><div>{totalPage}</div> </div>
  </div>

  )
}

export default Input;