"use client"
import React, { useState } from "react"

const certifications = [
  {
    title: "Data Structures and Algorithms",
    platform: "Udemy (by Abdul Bari)",
    date: "2024",
    image: "/certificates/-.png",
    link: "https://www.udemy.com/certificate/UC-DSA-123456"
  },
  {
    title: "iOS Development with SwiftUI",
    platform: "Udemy (by Angela Yu)",
    date: "2025",
    image: "/certificates/ios.jpg",
    link: "https://www.udemy.com/certificate/UC-IOS-789012"
  },
  {
    title: "Git and Github essentials",
    platform: "Udemy",
    date: "2025",
    image: "/certificates/certificate_git.png"
  },
  {
    title: "AI for Beginners",
    platform: "HP LIFE",
    date: "2025",
    image: "/certificates/certificate_ai.png"
  },
  {
    title: "Agile Project Management Practitioner",
    platform: "HP LIFE Global",
    date: "2025",
    image: "/certificates/agile.png",
    link: "https://www.life-global.org/certificate/3899eb80-966d-4343-8eba-ab8e6ac9df1c"
  },
  {
    title: "The Java Language",
    platform: "Coursera",
    date: "2025",
    image: "/java.png",
    link: ""  
  }
]

export default function Certifications() {
  const [previewCert, setPreviewCert] = useState<null | typeof certifications[0]>(null)

  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-center mb-10">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Certifications
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => {
          const shouldPreview = ["Git and Github essentials", "AI for Beginners"].includes(cert.title)

          return shouldPreview ? (
            <div
              key={index}
              onClick={() => setPreviewCert(cert)}
              className="cursor-pointer rounded-2xl bg-card text-card-foreground p-4 shadow-md hover:shadow-xl transition-shadow duration-300 border border-border overflow-hidden hover:scale-[1.02] transform transition-transform"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-semibold text-primary mb-1">{cert.title}</h3>
              <p className="text-muted-foreground">{cert.platform}</p>
              <p className="text-sm mt-2 text-muted-foreground">{cert.date}</p>
            </div>
          ) : (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-card text-card-foreground p-4 shadow-md hover:shadow-xl transition-shadow duration-300 border border-border overflow-hidden hover:scale-[1.02] transform transition-transform"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-semibold text-primary mb-1">{cert.title}</h3>
              <p className="text-muted-foreground">{cert.platform}</p>
              <p className="text-sm mt-2 text-muted-foreground">{cert.date}</p>
            </a>
          )
        })}
      </div>

      {/* Modal for selected preview cert */}
      {previewCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setPreviewCert(null)}
        >
          <div
            className="bg-card p-4 rounded-xl max-w-3xl w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewCert(null)}
              className="absolute top-2 right-2 text-2xl text-muted-foreground hover:text-primary"
            >
              ×
            </button>
            <img
              src={previewCert.image}
              alt={previewCert.title}
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />
            {previewCert.link && (
              <div className="mt-3 text-center">
                <a
                  href={previewCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm"
                >
                  View Certificate
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
