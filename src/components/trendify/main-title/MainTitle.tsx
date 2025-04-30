
type TMainTitleProps = {
  title: string,
  description: React.ReactNode,
}

export default function MainTitle({title, description}: TMainTitleProps) {
  return (
    <div className="main-title text-center">
      <span className="text-primary mb-3 text-3xl font-caveat">{title}</span>
      <h2 className="text-3xl md:text-[40px] text-text font-medium">{description}</h2>
    </div>
  )
}
