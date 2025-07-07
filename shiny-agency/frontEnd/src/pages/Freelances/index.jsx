import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import {useEffect, useState} from 'react';




const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function Freelances() {
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(null);
  const [freelancersList, setFreelancersList] = useState([]); // ← MÊME NOM QUE L'API

  useEffect(() => {
    async function fetchFreelances(){
      setDataLoading(true)
      setError(null)
      try{
        const response = await fetch(`http://localhost:8000/freelances`)
        if (!response.ok) {
          throw new Error(`HTTP error! status : ${response.status}`)
        }
        const data = await response.json()
        console.log('🔍 Réponse complète de l\'API:', data)
        
        // SIMPLE : Même nom que l'API, pas de renommage
        const { freelancersList } = data
        console.log('🔍 freelancersList:', freelancersList)
        console.log('🔍 Est-ce un tableau ?', Array.isArray(freelancersList))
        
        setFreelancersList(freelancersList)
      } catch(err) {
        console.error('Error fetching freelance : ', err)
        setError(err.message)
      } finally {
        setDataLoading(false)
      }
    }
    fetchFreelances() // ← CORRECTION : fonction mal appelée
  }, [])

   return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      
      {isDataLoading ? (
        <div>Chargement des freelances...</div>
      ) : error ? (
        <div>Erreur : {error}</div>
      ) : (
        <CardsContainer>
          {freelancersList && freelancersList.length > 0 ? (
            freelancersList.map((profile, index) => (
              <Card
                key={`${profile.name}-${index}`}
                label={profile.job}
                title={profile.name}
                picture={profile.picture}
              />
            ))
          ) : (
            <div>Aucun freelance trouvé</div>
          )}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelances