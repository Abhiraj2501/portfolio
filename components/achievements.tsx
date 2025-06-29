"use client"
import React from "react"

const categories = [
  {
    title: "Achievements",
    icon: "🏆",
    items: [
      "Finalist – National Innovation Contest (Real-time EV Tracking System)",
      "Participated and excelled at various national level sports championships",
      "Built iOS apps using SwiftUI + Xcode",
      "Certified in Agile PM and Git Essentials",
    ],
  },
  {
    title: "Hobbies & Interests",
    icon: "🎯",
    items: [
      "Professional Athlete | Badminton",
      "Love music",
      "Gaming – Strategy & FPS 🎮",
      "Curious to apply new tech stack",
      "Travel & heritage exploration ",
      "Fitness freak ",
    ],
  },
]

export default function HobbiesAchievements() {
  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-center mb-10">
        <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
          Hobbies & Achievements
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="rounded-2xl bg-card text-card-foreground p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-border hover:scale-[1.02] transform transition-transform"
          >
            <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
              <span>{category.icon}</span> {category.title}
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              {category.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
