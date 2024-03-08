import {useState} from 'react'

import {AppContainer, Image, Description, Button} from './styledComponents'

const Unlock = () => {
  const [isClick, setButtonClick] = useState(false)

  const onClickBtn = () => {
    setButtonClick(prevState => !prevState)
  }

  const image = isClick
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const altText = isClick ? 'unlock' : 'lock'

  const descriptionText = isClick
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'

  const buttonText = isClick ? 'Lock' : 'Unlock'

  return (
    <AppContainer>
      <Image src={image} alt={altText} />
      <Description>{descriptionText}</Description>
      <Button type="button" onClick={onClickBtn}>
        {buttonText}
      </Button>
    </AppContainer>
  )
}
export default Unlock
