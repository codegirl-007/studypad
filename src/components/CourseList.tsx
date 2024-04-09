import { Course } from '@/interfaces/course'
import CourseListItem from '@/components/CourseListItem'
export default function CourseList(props: { items: any; }) {
  const items = props.items;
  const formattedList = items.map((item: Course) => {
    return (
      <CourseListItem item={item} key={crypto.randomUUID()} />
    )
  })

  return (
    <ul>
      {formattedList}
    </ul>
  )
}