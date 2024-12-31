import Image from 'next/image'
import { PrimaryButton } from '../ui/buttons/PrimaryButton'

const courses = [
  {
    id: 1,
    title: 'MDCAT Complete Preparation',
    description: 'Comprehensive course covering all MDCAT subjects with live classes and practice tests',
    image: '/images/courses/mdcat.jpg',
    category: 'Medical',
  },
  {
    id: 2,
    title: 'ECAT Mathematics',
    description: 'Master engineering mathematics with concept-based learning and problem solving',
    image: '/images/courses/ecat.jpg',
    category: 'Engineering',
  },
  {
    id: 3,
    title: 'CSS Complete Guide',
    description: 'Complete preparation for CSS exam including all subjects and essay writing',
    image: '/images/courses/css.jpg',
    category: 'Civil Services',
  },
]

export default function PopularCourses() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Popular Courses
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose from our wide range of exam preparation courses
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={200}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">{course.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">{course.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{course.description}</p>
                </div>
                <div className="mt-6">
                  <PrimaryButton className="w-full">Enroll Now</PrimaryButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 