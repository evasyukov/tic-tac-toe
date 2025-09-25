import "./Field.css"

function FieldLayout({ field }) {
  return (
    <>
      <div className="field">
        <ul className="field_list">
          {field.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default FieldLayout
