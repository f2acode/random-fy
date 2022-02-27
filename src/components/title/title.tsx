import { PropsWithChildren } from 'react'

type TitleProps = Record<string, unknown>

export const Title = ({ children }: PropsWithChildren<TitleProps>) => {
  return (
    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-200 relative inline-block">
      <h1 className="relative text-5xl sm:text-7xl text-gray-800 font-semibold">
        {children}
      </h1>
    </span>
  )
}
