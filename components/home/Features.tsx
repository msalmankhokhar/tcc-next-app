import { BookOpen, Users, Video, MessageCircle } from 'lucide-react'

const features = [
  {
    name: 'Live Classes',
    description: 'Join interactive live classes with experienced teachers for MDCAT, ECAT, and CSS preparation.',
    icon: Video
  },
  {
    name: 'Expert Teachers',
    description: 'Learn from qualified teachers who have years of experience in competitive exam preparation.',
    icon: Users
  },
  {
    name: 'Study Material',
    description: 'Access comprehensive notes, past papers, and MCQs specifically designed for your exam.',
    icon: BookOpen
  },
  {
    name: 'Direct Communication',
    description: 'Chat directly with teachers and join study groups to clear your doubts instantly.',
    icon: MessageCircle
  },
]

export default function Features() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive preparation platform for competitive exams in Pakistan
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-white px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-primary p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-gray-900">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 