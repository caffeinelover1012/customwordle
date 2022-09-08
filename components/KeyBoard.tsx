import { classNames } from '@/utils/helpers'
import { QWERTY } from '@/utils/constants'

interface KeyBoardProps {
  wordColors: any
  handleKeyBoardClick: any
}

export default function KeyBoard({
  wordColors,
  handleKeyBoardClick,
}: KeyBoardProps) {
  function resolveKeyBoardRow(arr: string[]) {
    return arr.map((letter: string) => {
      return (
        <button
          onClick={(e) => handleKeyBoardClick(e, letter)}
          key={letter}
          className={classNames(
            wordColors[letter] === 'G'
              ? 'bg-green-400'
              : wordColors[letter] === 'Y'
              ? 'bg-yellow-400'
              : wordColors[letter] === 'B'
              ? 'bg-black'
              : 'bg-slate-700',
            'm-1 rounded p-2 text-sm font-medium sm:px-3 sm:py-4 sm:text-base'
          )}
        >
          {letter}
        </button>
      )
    })
  }

  return (
    <div className="mx-auto mt-24 text-center">
      <div>{resolveKeyBoardRow(QWERTY[0])}</div>
      <div>{resolveKeyBoardRow(QWERTY[1])}</div>
      <div>{resolveKeyBoardRow(QWERTY[2])}</div>
    </div>
  )
}
