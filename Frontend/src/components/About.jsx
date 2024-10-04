import React from 'react'

function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid gap-4 px-4 md:grid-cols-2 md:gap-16 lg:px-6">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Unlock Your Potential with Our Question Bank
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our comprehensive question bank is designed to help you excel in your exams and achieve your academic
                  goals. Explore a vast collection of high-quality questions with detailed explanations.
                </p>
                <a className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" href="#" rel="ugc">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how our question bank can help you achieve your academic goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
                    <ellipse cx={12} cy={5} rx={9} ry={3} />
                    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                    <path d="M3 12A9 3 0 0 0 21 12" />
                  </svg>
                  <h3 className="text-xl font-bold">Large Question Bank</h3>
                </div>
                <p className="text-muted-foreground">
                  Access a vast collection of high-quality questions covering a wide range of topics and difficulty
                  levels.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
                    <circle cx={12} cy={12} r={10} />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  <h3 className="text-xl font-bold">Detailed Explanations</h3>
                </div>
                <p className="text-muted-foreground">
                  Understand the concepts behind each question with comprehensive explanations, helping you learn and
                  improve.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
                    <path d="M12 2v10" />
                    <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
                  </svg>
                  <h3 className="text-xl font-bold">Performance Tracking</h3>
                </div>
                <p className="text-muted-foreground">
                  Monitor your progress and identify areas for improvement with our detailed performance tracking
                  features.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our dedicated team of experts is committed to providing you with the best learning experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <img className="aspect-square h-full w-full" src="/placeholder-user.jpg" />
                </span>
                <div className="text-center">
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-muted-foreground">Co-founder, CEO</p>
                  <p className="text-sm text-muted-foreground">
                    John is a seasoned educator with over 15 years of experience in developing innovative learning
                    solutions.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <img className="aspect-square h-full w-full" src="/placeholder-user.jpg" />
                </span>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Jane Smith</h3>
                  <p className="text-muted-foreground">Co-founder, CTO</p>
                  <p className="text-sm text-muted-foreground">
                    Jane is a tech-savvy entrepreneur with a passion for creating user-friendly educational platforms.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <img className="aspect-square h-full w-full" src="/placeholder-user.jpg" />
                </span>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Michael Johnson</h3>
                  <p className="text-muted-foreground">Lead Educator</p>
                  <p className="text-sm text-muted-foreground">
                    Michael is an experienced educator with a deep understanding of exam preparation strategies and
                    learning methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  
  
  )
}

export default About