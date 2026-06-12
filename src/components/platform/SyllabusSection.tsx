import type { Subject } from "@/data/platforms"

interface SyllabusSectionProps {
  subjects: Subject[]
}

function getTopicCount(topics: Subject["topics"]) {
  const visibleTopicCount = topics.filter((topic) => topic.count).length
  const moreTopic = topics.find((topic) => !topic.count)
  const moreCount = moreTopic ? Number.parseInt(moreTopic.name, 10) : 0
  const total = visibleTopicCount + (Number.isNaN(moreCount) ? 0 : moreCount)

  return `${total} Topics`
}

export default function SyllabusSection({ subjects }: SyllabusSectionProps) {
  return (
    <section className="bg-[#F9F8F5] py-20 font-body text-[#0E1117]">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="mb-2 text-center">
          <div className="mb-3 flex items-center justify-center gap-2.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#D93025] before:block before:h-0.5 before:w-7 before:bg-[#D93025]">
            Syllabus Coverage
          </div>
          <h2 className="font-display text-[clamp(32px,6vw,52px)] font-bold leading-[1.1] tracking-normal text-[#0E1117]">
            Complete coverage, <span className="text-[#1B2D8F]">zero gaps</span>
          </h2>
          <p className="mt-3 text-[15.5px] text-[#3D4A63]">
            Every topic, every chapter, every concept - mapped to the latest NTA syllabus.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {subjects.map((subject) => (
            <article
              className="overflow-hidden rounded-[14px] border border-[#E3E8F4] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(27,45,143,.07)]"
              key={subject.name}
            >
              <header className={`flex items-center gap-2.5 px-5 py-4 ${subject.colorClass}`}>
                <span className="text-[22px]" aria-hidden="true">
                  {subject.icon}
                </span>
                <h3 className="font-display text-xl font-bold leading-tight text-[#0E1117]">
                  {subject.name}
                </h3>
                <span className="ml-auto rounded-full bg-[rgba(255,255,255,.7)] px-2.5 py-1 text-xs font-semibold text-[#7A869A]">
                  {getTopicCount(subject.topics)}
                </span>
              </header>

              <div className="flex flex-col gap-2 px-5 py-4">
                {subject.topics.map((topic) =>
                  topic.count ? (
                    <div className="flex items-center justify-between text-[13px]" key={topic.name}>
                      <span className="font-medium text-[#3D4A63]">{topic.name}</span>
                      <span className="rounded-[4px] border border-[#E3E8F4] bg-[#F9F8F5] px-2 py-0.5 text-[11px] text-[#7A869A]">
                        {topic.count}
                      </span>
                    </div>
                  ) : (
                    <a
                      className={`pt-1 text-xs font-semibold ${subject.colorClass.split(" ")[0]}`}
                      href="#"
                      key={topic.name}
                    >
                      +{topic.name} →
                    </a>
                  )
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
