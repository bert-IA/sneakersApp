import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
  color: ${colors.primary};
  font-size: 30px;
  margin-bottom: 30px;
`

const QuestionContent = styled.span`
  margin: 30px;
  font-size: 24px;
  color: ${colors.primary};
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  margin-top: 30px;
  
  a {
    color: ${colors.primary};
    text-decoration: none;
    padding: 10px 20px;
    border: 2px solid ${colors.primary};
    border-radius: 5px;
    
    &:hover {
      background-color: ${colors.primary};
      color: white;
    }
  }
`

function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    const [surveyData, setSurveyData] = useState({})
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(null) 
 
    useEffect(() => {
        async function fetchSurvey() {
            setDataLoading(true)
            setError(null) // Reset error state
            try {
                // Retour à votre vraie API de survey
                const response = await fetch(`http://localhost:8000/survey`)
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                
                // DESTRUCTURATION DIRECTE : Plus concis et élégant
                const { surveyData } = await response.json()
                setSurveyData(surveyData)
                
            } catch(err) {
                console.error('Error fetching survey:', err)
                setError(err.message)
            } finally {
                setDataLoading(false)
            }
        }
        
        fetchSurvey()
    }, [])
    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            {isDataLoading ? (
                <div>Chargement...</div>
            ) : error ? (
                <div>Erreur : {error}</div>
            ) : (
                <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
            )}
            <LinkWrapper>
                <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                {surveyData[questionNumberInt + 1] ? (
                    <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>
        </SurveyContainer>
    )
}
 
export default Survey