import { useEffect, useState } from 'react';
import SearchGuest from './SearchGuest';
import Welcome from './Welcome';
import SearchResults from './SearchResults';

const Home = () => {
  const [invitadosData, setInvitadosData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Check if the query is empty
    if (query.trim() === '') {
      setSearchResults([]);
    } else {
      // Perform the search
      const results = invitadosData.mesas.filter((mesa) => {
        return mesa.invitados.some(
          (invitado) =>
            invitado.nombre.toLowerCase().includes(query.toLowerCase()) ||
            invitado.alias.toLowerCase().includes(query.toLowerCase())
        );
      });

      setSearchResults(results);
    }
  };

  useEffect(() => {
    async function fetchInvitados() {
      try {
        const response = await fetch('/api/invitados.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setInvitadosData(data);
      } catch (error) {
        console.error('Error fetching invitados.json:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchInvitados();
  }, []);

  const homeStyle = {
    padding: '32px 16px',
    textAlign: 'center',
    color: '#555',
  };

  return (
    <div style={homeStyle}>
      <Welcome />
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <SearchGuest value={searchQuery} onChange={handleSearchChange}  />
          <SearchResults searchResults={searchResults} searchQuery={searchQuery} />
        </>
      )}
    </div>
  );
};

export default Home;
