
type TMainTitleProps = {
  title: string,
  description: React.ReactNode,
}

export default function MainTitle({title, description}: TMainTitleProps) {
  return (
    <div className="main-title text-center">
      <span className="text-primary dark:text-gray-100 mb-3 text-3xl font-caveat">{title}</span>
      <h2 className="text-3xl md:text-[40px] text-text dark:text-gray-300 font-medium">{description}</h2>
    </div>
  )
}
