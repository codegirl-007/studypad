import { ReactElement } from 'react';
import CourseList from '@/components/CourseList';

async function getDashboard() {
  const res = {
    name: "Test User",
    inProgress: [{
      title: 'Learn NextJS 1',
      type: 'course',
      status: "in-progress"
    }],
    completed: [{
      title: 'Learn NextJS',
      type: 'course',
      status: 'completed'
    }]
  }

  return res;
}

export default async function Page() {
  const model = await getDashboard()

  return (
    <div>
      <h1>Hello!</h1>

      <p>In Progress</p>
      <CourseList items={model.inProgress} />

      <p>Completed</p>
      <CourseList items={model.completed} />
    </div>
  )
}