import PageHeaderBoundary from "./PageHeaderBoundary"

interface Props {
  text: string
  children: React.ReactNode
}

export default function PageHeader({ text, children }: Props) {
  return (
    <>
      <div className="mb-6 flex items-center">
        {children}
        <h2 className="text-xl leading-8 sm:ml-2 md:mx-3 lg:text-2xl">
          {text}
        </h2>
      </div>
      <PageHeaderBoundary />
    </>
  )
}
