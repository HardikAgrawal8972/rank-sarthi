"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

type OptionId = "A" | "B" | "C" | "D"
type PaletteStatus = "answered" | "current" | "marked" | "unanswered"

interface TestOption {
  id: OptionId
  label: string
}

const options: TestOption[] = [
  { id: "A", label: "kq/a" },
  { id: "B", label: "Zero" },
  { id: "C", label: "2kq/a" },
  { id: "D", label: "-kq/a" },
]

const initialPalette: PaletteStatus[] = [
  "answered",
  "answered",
  "answered",
  "marked",
  "answered",
  "answered",
  "answered",
  "marked",
  "answered",
  "answered",
  "answered",
  "answered",
  "answered",
  "current",
  "unanswered",
  "unanswered",
  "unanswered",
  "unanswered",
]

function optionClass(isSelected: boolean) {
  return isSelected
    ? "border-[#1B2D8F] bg-[#EEF1FC] text-[#1B2D8F]"
    : "border-[#E3E8F4] bg-[#F9F8F5] text-[#3D4A63] hover:border-[#C9D2E8] hover:bg-[#FFFFFF]"
}

function optionLabelClass(isSelected: boolean) {
  return isSelected ? "bg-[#1B2D8F] text-[#FFFFFF]" : "bg-[#E3E8F4] text-[#7A869A]"
}

function paletteClass(status: PaletteStatus) {
  const classes: Record<PaletteStatus, string> = {
    answered: "bg-[#DCFCE7] text-[#15803D]",
    current: "bg-[#1B2D8F] text-[#FFFFFF]",
    marked: "bg-[#FFF8E8] text-[#B8860B]",
    unanswered: "bg-[#E3E8F4] text-[#7A869A]",
  }

  return classes[status]
}

export default function TestPreviewCard() {
  const [selectedOption, setSelectedOption] = useState<OptionId>("B")
  const [paletteState, setPaletteState] = useState<PaletteStatus[]>(initialPalette)
  const progressRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    progressRef.current?.classList.add("scale-x-[0.42]")
  }, [])

  function handleOptionClick(optionId: OptionId) {
    setSelectedOption(optionId)
    setPaletteState((current) =>
      current.map((status, index) => (index === 13 ? "answered" : status))
    )
  }

  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      className="overflow-hidden rounded-t-[16px] border-[1.5px] border-b-0 border-[#E3E8F4] bg-[#FFFFFF] font-body text-[#0E1117] shadow-[0_20px_60px_rgba(27,45,143,.16)]"
      initial={shouldReduceMotion ? false : { opacity: 0, x: 60 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { delay: 0.3, type: "spring", stiffness: 130, damping: 24 }
      }
    >
      <div className="flex items-center justify-between bg-[#1B2D8F] px-5 py-3">
        <span className="text-[13px] font-semibold text-[rgba(255,255,255,.85)]">
          JEE Advanced Full Mock - Paper I
        </span>
        <span className="rounded-[6px] bg-[#D93025] px-3 py-1 text-xs font-bold tracking-[0.04em] text-[#FFFFFF]">
          ⏱ 01:47:32
        </span>
      </div>

      <div className="h-[3px] overflow-hidden bg-[rgba(255,255,255,.15)]">
        <div
          className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#E6A817,#FF4438)] transition-transform duration-700 ease-out motion-reduce:transition-none"
          ref={progressRef}
        />
      </div>

      <div className="grid gap-4 p-5 md:grid-cols-[1fr_180px]">
        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="rounded-[5px] bg-[#EEF1FC] px-2.5 py-1 text-[11px] font-semibold text-[#1B2D8F]">
              Q. 14 / 54
            </span>
            <span className="rounded-[5px] border border-[#E3E8F4] bg-[#F9F8F5] px-2.5 py-1 text-[11px] font-semibold text-[#7A869A]">
              Physics · Electrostatics
            </span>
            <span className="rounded-[5px] bg-[#FFF8E8] px-2.5 py-1 text-[11px] font-semibold text-[#B8860B]">
              +3 / -1
            </span>
          </div>

          <p className="mb-3.5 text-[13.5px] font-medium leading-[1.65] text-[#0E1117]">
            Two point charges +q and -q are placed at the vertices of an equilateral
            triangle of side <em>a</em>. The electric potential at the third vertex is:
          </p>

          <div className="grid gap-[7px] sm:grid-cols-2">
            {options.map((option) => {
              const isSelected = selectedOption === option.id

              return (
                <button
                  className={`flex items-center gap-[7px] rounded-[7px] border-[1.5px] px-3 py-2 text-left text-[12.5px] transition ${optionClass(isSelected)}`}
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                  type="button"
                >
                  <span
                    className={`flex size-5 shrink-0 items-center justify-center rounded-[4px] text-[10px] font-bold ${optionLabelClass(isSelected)}`}
                  >
                    {option.id}
                  </span>
                  <span>{option.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <aside className="hidden border-l border-[#E3E8F4] pl-4 md:flex md:flex-col">
          <div className="mb-2.5 text-[10.5px] font-bold uppercase tracking-[0.07em] text-[#7A869A]">
            Questions
          </div>
          <div className="mb-3.5 flex flex-wrap gap-[5px]">
            {paletteState.map((status, index) => (
              <button
                className={`flex size-6 items-center justify-center rounded-[5px] text-[10px] font-bold ${paletteClass(status)}`}
                key={`${status}-${index}`}
                onClick={() =>
                  setPaletteState((current) =>
                    current.map((item, itemIndex) =>
                      itemIndex === index ? "current" : itemIndex === 13 ? "answered" : item
                    )
                  )
                }
                type="button"
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="mb-3.5 flex flex-col gap-[5px]">
            <div className="flex items-center gap-1.5 text-[10.5px] text-[#7A869A]">
              <span className="size-2.5 rounded-[3px] bg-[#DCFCE7]" />
              Answered
            </div>
            <div className="flex items-center gap-1.5 text-[10.5px] text-[#7A869A]">
              <span className="size-2.5 rounded-[3px] bg-[#1B2D8F]" />
              Current
            </div>
            <div className="flex items-center gap-1.5 text-[10.5px] text-[#7A869A]">
              <span className="size-2.5 rounded-[3px] border border-[#F0D98A] bg-[#FFF8E8]" />
              Marked
            </div>
            <div className="flex items-center gap-1.5 text-[10.5px] text-[#7A869A]">
              <span className="size-2.5 rounded-[3px] bg-[#E3E8F4]" />
              Unattempted
            </div>
          </div>

          <button
            className="w-full rounded-[7px] border border-[#B8860B] bg-[#FFF8E8] p-2 text-[11px] font-semibold text-[#B8860B]"
            type="button"
          >
            Mark & Next
          </button>
        </aside>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-[#E3E8F4] bg-[#F9F8F5] px-5 py-3">
        <button
          className="rounded-[6px] bg-[#E3E8F4] px-4 py-2 text-xs font-semibold text-[#3D4A63]"
          type="button"
        >
          ← Prev
        </button>
        <span className="hidden text-[11px] text-[#7A869A] sm:inline">
          13 ans · 2 marked · 39 left
        </span>
        <button
          className="rounded-[6px] bg-[#1B2D8F] px-4 py-2 text-xs font-semibold text-[#FFFFFF]"
          type="button"
        >
          Save & Next →
        </button>
      </div>
    </motion.div>
  )
}
