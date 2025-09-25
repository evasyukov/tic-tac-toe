import "./Field.css"

function FieldLayout({ field, playerStep }) {
  return (
    <>
      <div className="field">
        <ul className="field_list">
          {field.map((item, index) => (
            <li key={index} onClick={() => playerStep(index)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default FieldLayout
