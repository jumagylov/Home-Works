let stop = 1
function Date(props){
  let month = props.date.toLocaleString('en-US', {month:'long'})
  let day = props.date.toLocaleString('en-Us', {day:'2-digit'})
  let year= props.date.getFullYear();

  return (
    <div>
     {month} {day} {year}
    </div>
  )
}
export default Date