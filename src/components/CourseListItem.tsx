export default function CourseListItem(props: { item: any; }) {
  let item = props.item;
  return (
    <li>
      <p>{item.title}</p>
      <p>{item.type}</p>
    </li>
  )
}