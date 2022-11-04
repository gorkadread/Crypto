// Example of composition component
export default function Organisation(props) {
  return (
    <div className="Organisation">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      {props.children}
    </div>
  );
}
// Usage
/*

{data?.map((holiday, index) => {
          return <Organisation key={index} title={holiday.name} description={holiday.date}>{`This is a ${holiday.type} holiday`}</Organisation>
        })}

*/