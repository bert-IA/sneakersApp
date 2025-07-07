import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'

function Results() {
  const { answers } = useContext(SurveyContext)
  
  // Fonction pour convertir booléen en texte lisible
  const formatAnswer = (answer) => {
    if (typeof answer === 'boolean') {
      return answer ? 'Oui' : 'Non'
    }
    return answer // Pour d'autres types de réponses
  }
  
  return (
    <div>
      <h1>Vos réponses :</h1>
      <ul>
        {Object.entries(answers).map(([questionNumber, answer]) => (
          <li key={questionNumber}>
            Question {questionNumber} : {formatAnswer(answer)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Results
