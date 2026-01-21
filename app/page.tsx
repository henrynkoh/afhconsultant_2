import Link from "next/link";
import { BookOpen, Shield, Pill, UtensilsCrossed, AlertTriangle, FileText } from "lucide-react";

export default function Home() {
  const modules = [
    {
      id: "setting-up-home",
      title: "Setting Up Your Home",
      description: "Physical plant requirements, safety systems, and administrative records",
      icon: Shield,
      wac: "WAC 388-76-10525, 10585, 10584, 10885, 10890, 10320, 10325, 10355",
      color: "bg-blue-500",
    },
    {
      id: "emergency-planning",
      title: "Emergency Planning",
      description: "Disaster preparedness, evacuation procedures, and 72-hour survival logistics",
      icon: AlertTriangle,
      wac: "WAC 388-76-10830 through 10855",
      color: "bg-red-500",
    },
    {
      id: "medication-systems",
      title: "Medication Systems & Documentation",
      description: "Medication management, storage, administration, and disposal protocols",
      icon: Pill,
      wac: "WAC 388-76-10430 through 10490",
      color: "bg-purple-500",
    },
    {
      id: "mar-documentation",
      title: "MAR Documentation",
      description: "How to read and fill out Medication Administration Records",
      icon: FileText,
      wac: "WAC 388-76-10430 through 10490",
      color: "bg-indigo-500",
    },
    {
      id: "nutrition-activities",
      title: "Nutrition & Activities",
      description: "Food services, meal planning, and recreational activity requirements",
      icon: UtensilsCrossed,
      wac: "WAC 388-112A, WAC 388-76-10415",
      color: "bg-green-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          The AFH Compliance Architect
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A comprehensive curriculum designed to transform prospective consultants into expert advisors 
          for Adult Family Home (AFH) providers. Master the logic of Washington Administrative Code (WAC) 
          to guide providers from a "house" to a "licensed home."
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Link
              key={module.id}
              href={`/modules/${module.id}`}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 hover:border-primary-500"
            >
              <div className={`${module.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {module.title}
              </h2>
              <p className="text-gray-600 mb-4">{module.description}</p>
              <p className="text-sm text-gray-500 font-mono">{module.wac}</p>
            </Link>
          );
        })}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <div className="flex items-center gap-4 mb-6">
          <BookOpen className="w-8 h-8 text-primary-600" />
          <h2 className="text-3xl font-bold text-gray-900">Course Objective</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          To provide practical, logic-based consulting on physical plant requirements, emergency planning, 
          medication systems, and administrative record-keeping to ensure a 100% "deficiency-free" initial inspection.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-blue-900">The R.A.R. Method</h3>
            <ul className="space-y-2 text-blue-800">
              <li><strong>Regulation (WAC):</strong> What does the code literally say?</li>
              <li><strong>Assessment (Risk):</strong> What is the danger to a vulnerable adult?</li>
              <li><strong>Remedy (Physical):</strong> What exact tool or measurement fixes it?</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-green-900">Consultant's Mindset</h3>
            <p className="text-green-800">
              Most providers fail initial inspections because they see a "house," while DSHS sees "risk." 
              Our mission is to provide a detailed, logical walkthrough that translates legal jargon (WAC) 
              into physical measurements and administrative systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

