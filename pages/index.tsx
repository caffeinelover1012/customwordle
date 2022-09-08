import { useRouter } from 'next/router'
import { useState, FormEvent } from 'react'
import { caesarShift } from '@/utils/helpers'
import { RANDOM_WORDS } from '@/words/index'

const ALPHABET = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

export default function Home() {
  const [word, setWord] = useState('')
  const router = useRouter()

  function handleGenerate(e: FormEvent<HTMLElement>): void {
    e.preventDefault()
    for (const letter of word.split('')) {
      if (!ALPHABET.includes(letter.toUpperCase())) {
        alert('Please only enter letters.')
        return
      }
    }
    const shifted = caesarShift(word, 7)
    router.push(`/play?word=${shifted}`)
  }

  function handleRandom() {
    const randomIdx = Math.round(Math.random() * (RANDOM_WORDS.length - 1))
    const randomWord = RANDOM_WORDS[randomIdx]
    const shifted = caesarShift(randomWord, 7)
    router.push(`/play?word=${shifted}`)
  }

  return (
    <div className="
    bg-slate-800 text-white
    grid  w-screen h-screen place-items-center
    items-center">

      <main className="flex w-full flex-1 flex-col items-center justify-start px-4 text-center">
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">
          Welcome to{' '}
          <a className="inline-block text-blue-600" href="/">
            Custom Wordle!
          </a>
        </h1>

        <p className="sm:text;lg mt-3 text-base text-slate-100">
          Use your own word to create a wordle!
        </p>

        <div className="mt-12">
          <form onSubmit={handleGenerate} className="">
            <div className="flex">

              <input
                type="text"
                minLength={5}
                maxLength={5}
                required
                className="w-48 ml-10 rounded-lg border text-black border-black bg-blue-50 h-10 px-4 py-1 placeholder-blue-400 sm:w-64"
                placeholder="Your 5 letter word"
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
            </div>
            <div className="mt-12 items-center">
              <button
                type="submit"
                className="mr-4 rounded-lg bg-blue-600 px-3 py-2 font-medium text-white hover:bg-blue-700"
              >
                Custom Play
              </button>
              <button
                onClick={handleRandom}
                className="rounded-lg border border-blue-600 px-3 py-2 font-medium text-blue-600 hover:text-blue-700"
              >
                Random Play
              </button>
            </div>
          </form>
        </div>
      </main>
      <footer className="
      
      absolute bottom-0 h-15 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://www.instagram.com/caffeinetocode"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by
          Shubh Khandelwal
        </a>
      </footer>
    </div>
  )
}
