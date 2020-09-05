import { CSSProperties } from 'react'

type CartType = 'horizontal' | 'vertical'

type TextPosition = 'start' | 'center' | 'end'

type Text = {
  content: string
  size: '12' | '14' | '16' | '18' | '20' | '22'
  weight: '200' | '300' | '400' | '600' | '700' | '800'
}

interface IBannerCardProps {
  type: CartType
  backgroundColor: string
  imageStyle?: CSSProperties
  title: Text
  subtitle?: Text
  textPosition: TextPosition
}

const BannerCard: React.FC<IBannerCardProps> = (props) => {
  const {
    type,
    backgroundColor,
    imageStyle,
    title,
    subtitle,
    textPosition,
  } = props
  return (
    <div
      className={`category-${type}-card position-relative mb-2`}
      style={{
        backgroundColor,
      }}
    >
      <div
        className={`d-flex flex-column justify-content-center align-items-${textPosition} w-100 m-2`}
      >
        {title && (
          <p
            className={`font-size-${title.size} font-weight-${title.weight} m-0`}
          >
            {title.content}
          </p>
        )}
        {subtitle && (
          <p
            className={`font-size-${subtitle.size} font-weight-${subtitle.weight} m-0`}
          >
            {subtitle.content}
          </p>
        )}
        <div style={imageStyle} className="position-absolute" />
      </div>
    </div>
  )
}

export default BannerCard
