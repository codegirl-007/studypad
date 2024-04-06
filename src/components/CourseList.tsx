import { Course } from '@/interfaces/course'
export default function CourseList(props: { items: any; }) {
  const items = props.items;
  const formattedList = items.map((item: Course) => {
    return (
      <li key="item.title">{item.title}</li>
    )
  })

  return (
    <ul>{formattedList}</ul>
  )
}