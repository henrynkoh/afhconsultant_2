"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2, XCircle } from "lucide-react";

interface Question {
  id: number;
  question: string;
  answer: string;
  wac?: string;
  category: string;
}

interface Phase {
  title: string;
  wac?: string;
  content: string[];
  subsections?: { title: string; content: string[] }[];
}

interface Module {
  id: string;
  title: string;
  description: string;
  wac: string;
  phases: Phase[];
  questions: Question[];
}

export default function ModuleContent({ module }: { module: Module }) {
  const [expandedPhases, setExpandedPhases] = useState<Set<number>>(new Set([0]));
  const [showAnswers, setShowAnswers] = useState<Record<number, boolean>>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const togglePhase = (index: number) => {
    const newExpanded = new Set(expandedPhases);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedPhases(newExpanded);
  };

  const toggleAnswer = (questionId: number) => {
    setShowAnswers((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const categories = Array.from(new Set(module.questions.map((q) => q.category)));
  const filteredQuestions = selectedCategory === "all" 
    ? module.questions 
    : module.questions.filter((q) => q.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{module.title}</h1>
        <p className="text-lg text-gray-600 mb-2">{module.description}</p>
        <p className="text-sm text-gray-500 font-mono">{module.wac}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Curriculum Phases</h2>
            <div className="space-y-4">
              {module.phases.map((phase, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => togglePhase(index)}
                    className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between text-left transition-colors"
                  >
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{phase.title}</h3>
                      {phase.wac && (
                        <p className="text-sm text-gray-500 font-mono mt-1">{phase.wac}</p>
                      )}
                    </div>
                    {expandedPhases.has(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {expandedPhases.has(index) && (
                    <div className="p-6 bg-white">
                      <ul className="space-y-3">
                        {phase.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      {phase.subsections && (
                        <div className="mt-6 space-y-4">
                          {phase.subsections.map((subsection, subIndex) => (
                            <div key={subIndex} className="pl-6 border-l-2 border-primary-200">
                              <h4 className="font-semibold text-gray-900 mb-2">{subsection.title}</h4>
                              <ul className="space-y-2">
                                {subsection.content.map((item, itemIndex) => (
                                  <li key={itemIndex} className="text-gray-700 text-sm">
                                    • {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
            <h3 className="font-bold text-lg mb-4">Quick Navigation</h3>
            <nav className="space-y-2">
              {module.phases.map((phase, index) => (
                <a
                  key={index}
                  href={`#phase-${index}`}
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded"
                >
                  {phase.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Top 100 Preparation Questions
          </h2>
          <div className="flex items-center gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-6">
          {filteredQuestions.map((question) => (
            <div
              key={question.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      Q{question.id}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {question.category}
                    </span>
                    {question.wac && (
                      <span className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded">
                        {question.wac}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-900 font-medium">{question.question}</p>
                </div>
                <button
                  onClick={() => toggleAnswer(question.id)}
                  className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {showAnswers[question.id] ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>
              {showAnswers[question.id] && (
                <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-green-900 mb-1">Answer:</p>
                      <p className="text-green-800">{question.answer}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

