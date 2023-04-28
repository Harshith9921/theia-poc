export default function Timezone(props) {
  return (
    <>
      <div className="timezone">
        <div>
          <text>{props.country} </text>
          <text>{props.time}</text>
        </div>
      </div>
    </>
  )
}
