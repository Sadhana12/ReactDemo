import StyledButton from './stylebutton.js';

const CustomButton = (props) => {

  return (
    <div>

      <StyledButton onClick={props.onClick} type="button">
        {props.text}
      </StyledButton>

    </div>
  )
}

export default CustomButton;