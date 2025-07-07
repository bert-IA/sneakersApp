import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import DefaultPicture from '../../assets/profile.png';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

const CardLabel = styled.span`
  color: ${colors.primary};
  font-size: 14px;
  font-weight: normal;
  align-self: center;
  margin-bottom: 10px;
`;

const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  align-self: center;
  margin-bottom: 10px;
`;

const CardTitle = styled.span`
  color: ${colors.primary};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  margin-bottom: 5px;
`;

function Card(props) {
  const { label, title, picture } = props;

  return (
    <CardContainer>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture || DefaultPicture} alt="freelance" />
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

Card.defaultProps = {
  picture: DefaultPicture,
};

export default Card;
